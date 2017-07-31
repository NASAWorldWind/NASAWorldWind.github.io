![NASA Meatball](static/img/nasa-logo.svg)

# NASAWorldWind.github.io

This repository is home to the NASA WorldWind website which is hosted on GitHub Pages [https://nasaworldwind.github.io/](https://nasaworldwind.github.io/) and at [https://worldwind.arc.nasa.gov/](https://worldwind.arc.nasa.gov). The site should provide helpful information for users interested in WorldWind's different projects.

The site itself is generated with [Hugo](https://gohugo.io/) from the markdown and html templates found within the repository. Hugo transforms the markdown formatting to plain html and injects the content into the templates to form the final html files. Producing content in markdown provides a similar experience to creating and commenting on issues in GitHub while still providing enough formatting to facilitate communication of a topic.

Those interested in adding to the site should get familiar with [Hugo's Documentation](https://gohugo.io/overview/introduction/). Details of the site structure and how to add content are provided in the next section.

## Hugo Overview

Hugo projects include two main directories at the root: `content` and `layouts`. Markdown files go into the `content` directory while html templates go into the `layouts` directory. The file structure of the `content` directory determines the structure of the site. The `layouts` directory does not match the structure of the `content` directory. Hugo uses a [set of rules](http://gohugo.io/templates/content/) to lookup which template to use. In certain cases, the automatic lookup may be overriden by explicitly specifying the desired template in the front matter of the html.

Front matter is key/value pairs defined in YAML, TOML, or JSON at the top of a markdown file. Hugo has some required key/value pairs and the NASA site uses others for providing additional metadata to the template. More information about front matter is detailed in the **Adding Content** section.

The first directory level inside the `content` directory is called a Section in Hugo. The html template lookup process will first look for a similarly named Section (directory) inside the `layout` directory for a template. If a matching Section (directory) is not found, then Hugo will use the templates defined in the `_default` directory. This site defines each project as a Section, allowing customization of the templates from project to project. The templates are named similarly, `single.html` and `list.html`. A `single.html` template will be used to display single pages (e.g. About, Get Started) and the `list.html` template is designed to display an index of the files contained within a directory (e.g. Tutorials).

This site is configured to use permalinks. A markdown file will be converted to an identically named directory with an `index.html` file inside. For example, the markdown file `/project/download.md` will have a url of `/project/download/` rather than `/project/download.html`.

Hugo is a single executable and quite portable. Download and install Hugo using the precompiled binaries from the [GitHub releases page](https://github.com/gohugoio/hugo/releases) or install using brew: `$ brew install hugo`.

To generate the site, simply execute `$ hugo` from the root project directory. Hugo will create a `public` folder containing the generated site. You may also use Hugo to serve the content. It will automatically reload pages when a change is made in the project. Execute `$ hugo serve` and navigate your browser to `http://localhost:1313`. 

## Site Structure

The primary goal of the website is to communicate how to use each of the WorldWind projects. The projects share a common structure detailed below:
```
/ (main page)
|---about
|---contact
|---<project> ('android','java','web','server')
    |---<the content of the projects varies>
    |---get-started
    |---tutorials
        |---concepts
        |---common-problems
        |---tutorial 1
        |---tutorial ...
        |---tutorial n
    |---examples
    |---docs
```

Hugo generates the site as defined by the file structure of the markdown content. Directories containing more than one file will use the `list.html` template instead of the `single.html` template. In the structure detailed above, the `/<project>/tutorials` path would utilize the `list.html` template, which is appropriate for an index of the tutorials for the project. By inserting an `_index.md` file in the `tutorial` directory alongside the other tutorial markdown, additional content and metadata is provided to the `list.html` template. This allows for a description or note to be inserted before the indexing of the tutorials by the list template.

In some cases, listing of child files is not the expected display pattern to the website visitor. Take the `<project>` directory for example. The `<project>` directory contains multiple files and directories. As Hugo is generating the site, the `<project>` path utilizes the `list.hml` template due to the existence of multiple markdown files. The expected behavior from a website visitor would be overview content with links to the other topics (get-started, tutorials, etc.). The WorldWind site uses a specific front matter variable `uselisttemplate` to determine if the `_index.md` file should use the list template. The default is to not use a list template. The `uselisttemplate` front matter variable is only required in `_index.md` files at the root of directories. Each list item is not required to have the `uselisttemplate` variable defined.

The key/value described above is only one of the NASA site required front matter. The additional key/value front matter pairs are described below:

Key | Required? | Purpose | Example Value
--- | --- | --- | ---
`listdescription` | if the file will be part of a list | provides a short description in the indexed or list view | `Details how to...`
`listimage` | if the file will be part of a list and an image is desired to be displayed in the indexed view | provide a small graphic used in the indexed or list view | `/img/java/marker.png`

To provide an example of how to use front matter when authoring content, see the example front matter portions of select markdown files in the Android project:

Java Home page (standard Hugo front matter):

```yaml
title: "WorldWind Java"
date: 2017-07-10T23:14:25-04:00
draft: false
```

Android WMS Layer Tutorial Page:
```yaml
title: "WMS Layer"
date: 2017-07-06T23:21:29-04:00
draft: false
listdescription: "Demonstrates how to construct a WmsLayer with the LayerFactory."
listimage: "/img/ww-android-wms-layer.png"
```

## Adding Content

To add content, place a markdown file in the desired location of the `content` directory. Markdown files require [front matter](http://gohugo.io/content/front-matter/) and as detailed in the *Site Structure* section, specific keys are available for customizing website generation.

Hugo uses [archetypes](http://gohugo.io/content/archetypes/) to facilitate the orderly creation of content. Archetypes are optional, there is no restriction on manually generating a markdown file in the directory structure; however, by using archetypes, the front matter, including additional key and values, will be automatically generated.

To use an archetype to create content, simply execute the following:
```
hugo new <path to location of new content>/<markdown file name>.md
```
To generate the "get-started.md" file/page in the WorldWind Android project using the project structure detailed in the *Site Structure* section would look like this:
```
hugo new android/get-started.md
```
Notice the `content` directory is implied and not required for the `hugo new` command.

## Shortcodes

Hugo [Shortcodes](https://gohugo.io/content-management/shortcodes/) allow customizable html/javascript code snippets to be integrated into your markdown content. In the NASA website, Shortcodes can be divided into three primary functions: remote API data retrieval and formatting, utilization of Bootstrap specific templates, and javascript code injection (note: Hugo Shortcodes are not limited to these categories). Shortcodes can be found in `layouts/shortcodes` directory and are referenced in markdown as follows:

```
# Markdown heading

---

Content description

{{< shortcodeName variables="variable value passed to the shortcodeName shortcode" >}}

```

Further examples and documentation are available on the Hugo site.

## License

    NASA WorldWind

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
    Government Agency Original Software Title: NASA WorldWind
    User Registration Requested. Please send email with your contact information to Patrick.Hogan@nasa.gov
    Government Agency Point of Contact for Original Software: Patrick.Hogan@nasa.gov

    You may obtain a full copy of the license at:

        https://worldwind.arc.nasa.gov/LICENSE.html

