<img src="https://cdn.earthdata.nasa.gov/eui/latest/docs/assets/ed-logos/meatball_hover_2x.png"/>

# NASAWorldWind.github.io

This repository is home to the NASA World Wind website which is hosted on GitHub Pages [https://nasaworldwind.github.io/](https://nasaworldwind.github.io/) and at [https://worldwind.arc.nasa.gov/](https://worldwind.arc.nasa.gov). The site should provide helpful information for users interested in World Wind's different projects.

The site itself is generated with [Hugo](https://gohugo.io/) from the markdown and html templates found within the repository. Hugo transforms the markdown formatting to plain html and injects the content into the templates to form the final html files. Producing content in markdown provides a similar experience to creating and commenting on issues in GitHub, as well as being easy to understand and still provide enough formatting to facilitate communication of a topic.

Those interested in adding to the site should get familiar with [Hugo's Documentation](https://gohugo.io/overview/introduction/). Details of the site structure and how to add content are provided in the next section.

## Hugo Overview

Hugo projects include two main directories at the root: `content` and `layouts`. Markdown files go into the `content` directory while html templates go into the `layouts` directory. The file structure of the `content` directory determines the structure of the site. The `layouts` directory does not match the structure of the `content` directory. Hugo uses a [set of rules](http://gohugo.io/templates/content/) to lookup which template to use. In certain cases, the automatic lookup may be overriden by explicitly specifying the desired template in the front matter of the html.

Front matter is key/value pairs defined in YAML, TOML, or JSON at the top of a markdown file. Hugo has some required key/value pairs and the NASA site uses others for providing additional metadata to the template. More information about front matter is detailed in the **Adding Content** section.

This site uses three templates for all content rendering. The `single.html`, `list.html`, and `project.html` templates in the `layouts/_defaults` directory provide content injection points for the markdown in the `contents` directory. If a directory in `contents` contains more than one markdown file, this directory will be rendered as a list when its path is accessed as the path in the URL.

This site is configured to use permalinks. A markdown file will be converted to an identically named directory with an `index.html` file inside. For example, the markdown file `/project/download.md` will have a url of `/project/download/` rather than `/project/download.html`.

Hugo is a single executable and quite portable. Download and install Hugo using the precompiled binaries from the [GitHub releases page](https://github.com/gohugoio/hugo/releases) or install using brew: `$ brew install hugo`.

To generate the site, simply execute `$ hugo` from the root project directory. Hugo will create a `public` folder containing the generated site. You may also use Hugo to serve the content. It will automatically reload pages when a change is made in the project. Execute `$ hugo serve` and navigate your browser to `http://localhost:1313`. 

## Site Structure

The primary goal of the website is to communicate how to use each of the World Wind projects. The projects share a common structure detailed below:
```
/ (main page)
|---about
|---contact
|---<project> (overview)
    |---get-started
        |---download
        |---setup
    |---developer-guide
        |---concepts
        |---common-problems
        |---<project specific topics>
    |---tutorials
        |---tutorial 1
        |---tutorial ...
        |---tutorial n
    |---examples
    |---docs
```

Hugo generates the site as defined by the file structure of the markdown content. Directories containing more than one file or children directories will utilize the `list.html` template instead of the `single.html` template. In the structure detailed above, the `/<project>/tutorials` path would utilize the `list.html` template, which is appropriate for an index of the tutorials for the project. By inserting an `_index.md` file in the `tutorial` directory alongside the other tutorial markdown, additional content and metadata is provided to the `list.html` template. This allows for a description or note to be inserted before the indexing of the tutorials by the list template.

In some cases, listing of child files is not the expected display pattern to the website visitor. Take the <project> directory for example. The <project> directory contains multiple files and directories. As Hugo is generating the site, the <project> path utilizes the `list.hml` template due to the existence of multiple markdown files. The expected behavior from a website visitor would be overview content with links to the other topics (get-started, developer-guide, etc.). The default `list.html` template currently accounts for the type content before generating html. The type of content is communicated through the directories corresponding `_index.md` front matter.

The following table details the keys and values of `_index.md` front matter for generating the `list.html` template in different ways.

Key Value | List Template Style
--- | --- 
`mainpage = true` | _index.md content in the main body
`projectpage = true` | _index.md content in the main body and project header
*neither* | _index.md content above an enumeration of child content

Incorporating the content conditionals into the `_default/list.html` template allows the utilization of a single template. The flexibility in the templating language allows the multiple content types to be appropriately handled. Custom formating of the content is still provided by the flexibility of markdown.

## Adding Content

Too add content, place a markdown file in the `content` directory. Markdown files require [front matter](http://gohugo.io/content/front-matter/) and as detailed in the *Site Structure* section, specific keys are required for the World Wind website to generate properly.

Hugo uses [archetypes](http://gohugo.io/content/archetypes/) to facilitate the orderly creation of content. Archetypes are optional, there is no restriction on manually generating a markdown file in the directory structure; however, by using archetypes, the front matter, including additional key and values, will be automatically generated.

To use an archetype to create content, simply execute the following:
```
hugo new <path to location of new content>/<markdown file name>.md
```
To generate the "get-started.md" file/page in the World Wind Android project using the project structure detailed in the *Site Structure* section would look like this:
```
hugo new android/get-started.md
```
Notice the `content` directory is implied and not required for the `hugo new` command.

## License

    NASA WORLD WIND

    Copyright (C) 2001 United States Government
    as represented by the Administrator of the
    National Aeronautics and Space Administration.
    All Rights Reserved.

    NASA OPEN SOURCE AGREEMENT VERSION 1.3

    This open source agreement ("agreement") defines the rights of use, reproduction,
    distribution, modification and redistribution of certain computer software originally
    released by the United States Government as represented by the Government Agency
    listed below ("Government Agency"). The United States Government, as represented by
    Government Agency, is an intended third-party beneficiary of all subsequent
    distributions or redistributions of the subject software. Anyone who uses, reproduces,
    distributes, modifies or redistributes the subject software, as defined herein, or any
    part thereof, is, by that action, accepting in full the responsibilities and obligations
    contained in this agreement.

    Government Agency: National Aeronautics and Space Administration (NASA)
    Government Agency Original Software Designation: ARC-15166-1
    Government Agency Original Software Title: NASA World Wind
    User Registration Requested. Please send email with your contact information to Patrick.Hogan@nasa.gov
    Government Agency Point of Contact for Original Software: Patrick.Hogan@nasa.gov

    You may obtain a full copy of the license at:

        https://worldwind.arc.nasa.gov/LICENSE.html

