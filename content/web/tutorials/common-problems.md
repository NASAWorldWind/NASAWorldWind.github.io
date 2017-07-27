---
title: "Common Problems"
date: 2017-07-26T14:36:34-05:00
draft: false
listdescription: "Some of the common issues users face and ways to resolve them."
---

## Common Problems

This page describes problems users or developers frequently encounter and gives solutions to those problems.

### No globe is shown
Be sure you’re connected to the internet. Also, your browser may not support WebGL. To test that, visit http://get.webgl.org. If that site shows that WebGL is not supported, then follow the link there to your browser’s support page to see how you might enable it.

### No ‘Access-Control-Allow-Origin’ header is present on the requested resource
This message occurs when the server holding an image or other resource does not implement CORS (Cross-Origin Resource Sharing). The solution is for the server owner to enable CORS on that server. For Apache servers, the article at http://enable-cors.org/server_apache.html explains how to enable CORS.