/*
 * Copyright (c) 2017 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

var https = require('https'),
    fs = require('fs'),
    request = require('request'),
    extract = require('extract-zip'),
    rimraf = require('rimraf');

// The root dynamic asset path
var assetsPath = process.cwd() + '/dynamicAssets';

// Check if the root dynamic assets path exists, and delete
if (fs.existsSync(assetsPath)) {
    rimraf.sync(assetsPath);
}

// Create the dynamic assets directory
fs.mkdirSync(assetsPath, 0o755);

// The Android dynamic asset path
var androidAssetsPath = assetsPath + '/android';

// Create the Android assets directory
fs.mkdirSync(androidAssetsPath, 0o755);

// Update the Android Bintray version information if the version available from Bintray is different than the assets currently available
var androidBintray = 'https://api.bintray.com/packages/nasaworldwind/maven/WorldWindAndroid/versions/_latest';
request(androidBintray, function(err, response, body) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    // Only update if the return is in the expected format AND there is a version difference from the stored version
    var bintrayLatestVersion = JSON.parse(body);
    if (bintrayLatestVersion.name) {
        fs.writeFile(androidAssetsPath + '/latestBintrayVersion.json', body, function(err) {
            if (err) {
                console.error(err);
                process.exit(1);
            } else {
                console.log('WWA - Updated the latestBintrayVersion.json file');
                // Attempt to retrieve the javadoc.jar, unzip, and replace the current directory contents
                let javadocUrl = 'https://jcenter.bintray.com/gov/nasa/worldwind/android/worldwind/' + bintrayLatestVersion.name
                    + '/worldwind-' + bintrayLatestVersion.name + '-javadoc.jar';
                // If at any point this operation fails, it will exit the nodejs build in order to prevent erroneous pages deployment
                updateJavadocs(androidAssetsPath, javadocUrl);
            }
        });
    } else {
        console.log('WWA - Error in Bintray response: ' + body + '\n No website update...');
        process.exit(1);
    }
});

// Update the Android OJO version information
var androidOjo = 'https://oss.jfrog.org/artifactory/api/search/versions?g=gov.nasa.worldwind.android&a=worldwind&repos=oss-snapshot-local';
request(androidOjo, function(err, response, body) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    var ojoLatestVersion = JSON.parse(body);
    // Check that the returned format is as expected
    if (ojoLatestVersion.results && ojoLatestVersion.results.length > 0 && ojoLatestVersion.results[0].version) {
        fs.writeFile(androidAssetsPath + '/latestOjoVersion.json', body, function(err) {
            if (err) {
                console.error(err);
                process.exit(1);
            } else {
                console.log('WWA - Updated the Android latestOjoVersion.json file');
            }
        });
    } else {
        console.error('WWA - Unexpected OJO API response: ' + body);
        process.exit(1);
    }
});

// Function to update the documentation, called by the initial Bintray API request if the version is different than the stored version.
// This function will remove any existing files in the provided path before unzipping the updated docs.
function updateJavadocs(assetsPath, javadocUrl) {
    // remove existing documentation from the directory
    rimraf(assetsPath + '/latest/javadoc', function(error) {
        if (error) {
            console.log('rimraf error')
            console.error(error);
            // Interupt the website build, we don't want to push an incomplete website
            process.exit(1);
        }
        // Retrieve latest docs
        request({url: javadocUrl, encoding: null}, function (err, resp, body) {
            fs.writeFile(assetsPath + '/javadoc.zip', body, function(err) {
                if (err) {
                    console.error(err);
                    // Interupt the website build, we don't want to push an incomplete website
                    process.exit(1);
                }
                extract(assetsPath + '/javadoc.zip', {dir: assetsPath + '/latest/javadoc/'}, function(err) {
                    if (err) {
                        console.error(err);
                        // Interupt the website build, we don't want to push an incomplete website
                        process.exit(1);
                    } else {
                        console.log('Javadocs directory: ' + assetsPath + '/latest/javadoc' + ' updated successfully');
                        // delete the javadoc zip file
                        fs.unlink(assetsPath + '/javadoc.zip', function(err) {
                            if (err) {
                                // Don't need to exit here, it'll just add the zip file to the website
                                console.error(err);
                            }
                        });
                    }
                });
            });
        });
    });
};