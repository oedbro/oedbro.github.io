---
layout: post
title: Privacy in Browsers
date: 2021-05-29
categories: ["Awareness"]
tags: ["Awareness", "Privacy", "Tools"]
author: ["Oskar Edbro"]
---

This investigation should not be taken as a full review of the browsers, but wishes to highlight the differences that different browsers have in how they handle user privacy. The test aims to give an overview, not describe in detail what each browser does or does not do.

**Contents**
* TOC
{:toc}
## Methodology

To perform this test I created a new virtual machine based on Windows [MSEdge win10](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) VM. In this VM I installed the browsers intended to be tested, using the default configuration. After that I configured BurpSuite as a proxy for the VM, so that all traffic is routed through it. This way it will document all the traffic that the browser in the VM is sending.

There are three steps of testing for each browser. First just opening the browser, secondly entering the address example.com and lastly navigating by pressing learn more.

No investigations will be performed in against the in private browsing for the browsers. This is left for further investigation further down the line.

## Microsoft Edge
When opening edge you are greeted by the bing feed, and that shows when looking at the traffic as well.

![[Edge Startpage.png]]

After just starting the browser there are traffic to 9 different domains:
- **assets.msn.com** contains data in a JSON format that tells the browser what to show on the homepage. This includes news, where images are stored, weather and more.
- **browser.events.data.msn.com** collects data from the browser. It seems to be analytics for the homepage, containing information about what is shown. This URL will be interesting to investigate further when navigating.
- **config.edge.skype.com** sends some identifiers to the server, and in return get a set of settings.
- **edge.microsoft.com** seems to be regarding updates for the browser. It asks about blocked extensions, updates for the browser etc.
- **img-s-msn-com.akamaized.net** Contains the images described on assets.msn.com.
- **nav.smartscreen.microsoft.com** sends data about the client and the device. This is another one to keep an eye on.
- **ntp.msn.com** contains the structure of the homepage, this includes the HTML and the scripts that initiate the loading of the homepage.
- **www.bing.com** the search engine, the traffic contains information about search history and sign in status.

Moving on to investigating what happens when navigating to a page will be interesting. and it begins as expected. Since the address bar doubles as a search box, its expected for each character entered to result in a new request to bing. This means that while entering example.com, Edge will also send a get request for every character. The last one sent to bing is: [https://www.bing.com/qbox?query=example.com&language=en-US&pt=EdgBox&cvid=2c574712e0694ac3b9fce0aa5af8bb1f&ig=0a41dcb2e4f247abbb729fc313bf5e7f&oit=3&cp=11&pgcl=1](https://www.bing.com/qbox?query=example.com&language=en-US&pt=EdgBox&cvid=2c574712e0694ac3b9fce0aa5af8bb1f&ig=0a41dcb2e4f247abbb729fc313bf5e7f&oit=3&cp=11&pgcl=1), which contains the full URL. Following this there are some more statistics, however it is not more noteworthy than previously described.

Next one is a real problem however. The full URL is sent in a post request to [https://nav.smartscreen.microsoft.com/api/browser/edge/navigate/2/sync](https://nav.smartscreen.microsoft.com/api/browser/edge/navigate/2/sync). The dataset shown below is highly problematic, it should not send data about the users browsing habit to Microsoft. In addition to the URI, the IP field is highly worrying. If this is filled with internal IPs, it may leak information about the internal workings of networks. Note that this information is sent both when entering the URI manually, as well as when navigating the web by pressing links, and it contains both the path and URI parameters.

```json
{
    "config":
    {
        "device":
        {
            "appControl":
            {
                "level": "anywhere"
            },
            "appReputation":
            {
                "enforcedByPolicy": false,
                "level": "warn"
            },
            "pua": null
        },
        "user":
        {
            "uriReputation":
            {
                "enforcedByPolicy": false,
                "level": "warn"
            }
        }
    },
    "correlationId": "89CFA157-04D4-412A-98BB-709B71C615D3",
    "destination":
    {
        "ip": null,
        "uri": "[http://example.com/](http://example.com/)"
    },
    "forceServiceDetermination": false,
    "identity":
    {
        "caller":
        {
            "locale": "en-US",
            "name": "anaheim",
            "process": null,
            "version": "90.0.818.66 (Official build) "
        },
        "client":
        {
            "data":
            {
                "customSettings": "F95BA787499AB4FA9EFFF472CE383A14",
                "customSynchronousLookupUris": "0",
                "edgeSettings": "2.0-2f9188b68640dbf72295f9083a21d674a314721ef06f82db281cbcb052ff8ec1",
                "synchronousLookupUris": "637573832200302234",
                "topTraffic": "637558215533797649"
            },
            "version": "281479409434625"
        },
        "device":
        {
            "architecture": 9,
            "browser":
            {
                "internetExplorer": "9.11.17763.0"
            },
            "cloudSku": false,
            "customId": null,
            "enterprise": null,
            "family": 3,
            "id": null,
            "locale": "en-US",
            "netJoinStatus": 2,
            "onlineIdTicket": "t=GwAWAd9tBAAUCqvYdtHJRIwInP+r5YPm2nbkkcAOZgAAEJ/wJWzYvXJk2hg0pJqfC2bgAEIj8X67eJZgKm+QThVvKp4Pf8o2ZzOaAXSFVEgq9EalUkWdryzr8v31XssotVR3TTY4qVre++0pt/cdfd0BFmp51zVLf348JdKxQhYIowBw3CA44g5aEBxqprJm0rya6ydnDJaGbuxnumU8USS8KjKgyarnmEdamOuwQArEh2IdE0dBC/qghRR9YhCoBcoJWcUaQViqx4ZyWq+DyIEQuZRzf/T2UqHWvd5zzDPpUBcnqXV8hAfRISO36nnQMqYdFgx26hzL4T/Ye7M+LLbnfkpr7qblGQBMZOyemn3NJBMbHQE=&p=",
            "osVersion": "10.0.17763.1935.rs5_release"
        },
        "user":
        {
            "locale": "en-US"
        }
    },
    "referrer": null,
    "serverContext": null,
    "signals": null,
    "synchronous": true,
    "systemSettings":
    {
        "battery": null,
        "network": null
    },
    "type": "top",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36 Edg/90.0.818.66"
}
```

After this there are a couple of new URIs that has not been seen previously. These are:
- **x.urs.microsoft.com** seeming like further statistics.
- **smartscreen-prod.microsoft.com** sending a JSON via get request, returning binary data. It seems to be a certificate of some kind, but this investigation has not validated it.

In total Edge uses 10 different domains, and send quite a lot of privacy infringing information to Microsoft using their smartscreen function.

## Google Chrome
In Chrome the start page is a version of the classic Google search box, and a list of previously visited webpages. As with Edge, Chrome sends requests to a set of domains, but for Chrome it uses 9, 6 of which generates a response.
- **accounts.google.com** is used to list the accounts signed into the browser. Since the test was performed without signing in, this might contain more information if signed in.
- **clientservices.googleapis.com** sends information about the chrome version and OS, and gets binary contents in the response.
- **www.google.com** fetches information to be shown in the new tab.
- **update.googleapis.com** is used to check if there are updates available for Chrome.
- **clients2.googleusercontent.com** is used to download updates in a binary format. The URL was given in the response from *update.googleapis.com*.
- **Random strings** Three requests are made targeting URLS of randomised 12 character strings. There are no response to these requests. Further research is needed to gain insights into their use.
- **ssl.gstatic.com** fetches a binary file in regards to safebrowsing. This does (according to Google) allow the browser to block unwanted and malicious pages.

While then entering the URL for navigation, the browser tries to search google. This is once again due to the use of a combined search and address box. Once the navigation is completed however, there are only one more unexpected request. This request was to *translate.googleapis.com*, fetching what languages are available for translation. It did not however contain information about the webpage visited.

When navigating away by clicking a link Chrome did not send any further requests except the ones required by the webpage. This is a good result, especially when comparing it to Edge and its abysmal privacy concerns.

## Mozilla Firefox
When starting Firefox you are greeted by a start page that very much resembles the one of Chrome. It consists of a google search box and previously visited webpages. At this point there are requests sent to 5 different destinations:
- **detectportal.firefox.com** seems to be used to test the internet uplink, it is sent three times. Each time with different parameters and the same response, *Success*.
- **push.services.mozilla.com** initiates a websocket connection, where the browser subscribes to changes from Mozilla through push notifications.
- **snippets.cdn.mozilla.net** sends information about the current environment for the browser (Windows), and gets an empty response with the HTTP Status code *303 See Other*. However the location (on the same host) was never requested by the browser.
- **incoming.telemetry.mozilla.org** is sent telemetry in binary form. Mozilla describes what is sent at <[https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/](https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/)>, but further investigations are needed to validate the claims.
- **aus5.mozilla.org** is used to check for available updates.

When navigating manually to <[https://example.com](https://example.com)> Firefox performs searches against Google. However it does also send more binary telemetry. This continues when further navigating by clicking URLs on the webpage.
Firefox is a somewhat chatty browser, that sends traffic in-between usage. This includes the binary telemetry that has not been investigated in this report.

## Brave

Brave has the unique selling point to be a privacy focused browser. It has an inbuilt adblocker, and on the start page it boasts with how much time has been saved by the browser since it was installed.

![[Brave Startpage.png]]
During the install process it asks for what search engine to use, but for this test the standard (google) was used.
When opening the browser there are a couple of requests, as usual. However there are only 4 that resolves, and the thre randomised ones from chromium.
- **laptop-updates.brave.com** seems to fetch updates the list of ads that adhere to Braves standards. This could however not be validated.
- **variations.brave.com** checks if there are any updates for Brave.
- **go-updater.brave.com** checks for updates for extensions (or extension like components) in Brave.
- **componentupdater.brave.com** checks for updates in components for brave.
-**Random strings** Three requests are made targeting URLS of randomised 12 character strings. There are no response to these requests. Further research is needed to gain insights into their use.

When navigating the web as described by the methodology no further requests was found. However, after the test was finished another request was found, <safebrowsing.brave.com>, which seems to have the same function as safebrowsing in Chrome. There is one difference though, it uses a dummy token, limiting some of the data sent to the server.

## Summary

In conclusion this quick test showed that there are one browser that are worse than all the others, edge. The behaviour of Microsoft that collects all visited URLs is abysmal! As long as Edge is not used, this limited investigation has shown very limited differences between the browsers.

| Browser | Domains used | Data Sent |
| -|-|-|
| Microsoft Edge | 10 | IP addresses </br>Full URIs visited </br>Search data|
| Google Chrome | 10 | Search |
| Mozilla Firefox | 6 | Search </br>Binary Telemetry|
| Brave | 7 | Search |

This investigation should not be seen as a complete deep dive into the browsers, but rather a quick overview. To get the complete picture there are several further steps that are required.
1. Investigating traffic during prolonged use
2. Further investigating unclear traffic
3. Investigating in private browsing
4. Investigate the privacy settings of each browser
