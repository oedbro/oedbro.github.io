---
layout: post
title: Cloudflare, a Couple Months Later
date:   2021-07-11
categories: ["Projects"]
tags: ["Projects", "Tools", "Privacy"]
author: ["Oskar Edbro"]
---

In a previous [post]({% post_url 2021/2021-04-17-migrating-to-cloudflare %}) I shared my experience with moving my page from Github pages to Cloudflare. It is now time to follow up that post and comment on my experiences after approximately a quarter. 

The experience of publishing new posts is about the same as when hosting on Github, you just push an update to the specified branch and then a build is triggered that will be published upon completion. The main difference is that the build process is somewhat slower in Cloudflare than on Github. This means that a build can take about 5 minutes, instead of the previous 1. This is most likely due to the fact that Cloudflare pulls everything and builds locally, instead of using Jekyll remote themes. 

When the post is published, there are no major difference for the user, however the statistics for the creator is much deeper. The pure web analytics (provided by JavaScript) could be implemented wherever the site was hosted, but there is more. The web analytics is the most detailed analytics, since it provides what posts were visited, referrers, user agents and more. The Cloudflare proxy analytics on the other hand does not require JavaScript, and can therefore not be blocked. The amount of information provided is not as detailed, but it gives a broader picture of the visitors. This data contains unique visitors and their origin country, but not much more. This could be seen in the web statistics as well, but that tracking is easily blocked. 

Even though I have a quite negative stance on tracking, I think that information that is collected in the server anyway can be shown to the content creator without infringing the readers privacy. By being able to track number of readers it's possible to gain insight in the trends depending on the type of content published. For this blog for example I can from the statistics note that the most interesting content is in the divide between technical security and policies. For example my [Spotify GDPR Analysis]({% post_url 2021/2021-01-08-Spotify-GDPR %}) is one of the most read articles on the blog, and it was written before I added analysis, and posts are often read the most directly at launch.

Getting back to the topic at hand, the experience of using Cloudflare, it gives the possibility to handle everything at a single location. This includes managing the domain as an registrar, hosting the application, manging TLS certificates and much more. The only thing I've found that is a bit tricky is that I've not found a way to register a new domain, only to transfer an existing one. With that said, I've been very happy with my switch to Cloudflare, it gives me the tools I need for my blog, and just works. 
