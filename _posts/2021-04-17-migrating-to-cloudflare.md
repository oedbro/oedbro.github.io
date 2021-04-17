---
layout: post
title:  "Migrating to Cloudflare"
date:   2021-04-17
categories: Projects
tags: ["Jekyll", "Projects", "Tools"]
author: "Oskar Edbro"
---

I've been looking around on how to get some statistics from my blog, especially regarding the number of visitors. Sadly the current solution (GitHub pages) does not seem to natively support this kind of statistics without adding third party tracking. After looking around for different solutions Cloudflare caught my attention. I know that among others, [Troy Hunt](https://www.troyhunt.com/) writes about and uses Cloudflare, so I decided to give it a try. 

Migrating from GitHub pages to Cloudflare pages was as easy as configuring what GitHub repo to use in Cloudflare, picking Jekyll and then it just worked. Right after the page was built you see some basic statistics, such as the amount of request grouped by country. Below the first hours of traffic is shown in a map, as presented by Cloudflare.

![]({{site.url}}/assets/Cloudflare-map.png)

In addition to providing basic statistics, using Cloudflare gives a lot of additional benefits. This includes the use of their Content Delivery Network, protection from Denial of Service, and easy HTTPS. I have not dug deep into which is best in these regards, but i find it difficult to believe that I have made a significant downgrade. 

So in conclusion to gain some basic statistics of the usage of my blog, I've migrated it to Cloudflare. The solution will not track any personal data, only basic statistics to gain some insight in how many readers are  using/enjoying my blog.
