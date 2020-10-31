---
layout: post
title:  "Building a Webpage"
date:   2020-08-19
categories: Projects
tags: Jekyll Projects 
author: "Oskar Edbro"
---
So here we go, I finaly got around to building a blog, and after looking around at different options i ended up using Jekyll and github pages. In addition to getting me this webpage, it allowed me to get some basic insight into ruby, making this a case of two birds one stone. 

Getting things to work have been quite a fiddle, so lets walk through how I got things up and running.

The first step was to get ruby and jekyll installed on my local machine for testing. After trying with wsl I lost my patience and to my suprice it was easier to install directly in windows. Jekyll has a great guide on how to install ruby, jekyll and all dependencies at <https://jekyllrb.com/docs/installation/windows/>.

The next step was to create my github repositort. To be able to host github pages you have to name the repository `<username>.github.io` where you replace `<username>` with your github username. After that I cloned my repository to my local machine and initiated jekyll by running `jekyll new .` in my repository. 

At this point I got a basic blog. By using `bundle exec jekyll serve` the webpage is built and hosted locally for testing. It works, but now it's time to pretty the page up a bit. After looking around on different themes for a while I ended up choosing <a href="https://github.com/ngzhio/jekyll-theme-hamilton">Hamilton</a>, it fits my needs nicely, and i realy enjoy the look. Installing it was as easy as following the guide in the documentation, you just have to remember to change the theme in `_config.yml`, to ensure that you use the new theme. That took far to long to realise, but finaly I made it. 