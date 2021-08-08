---
layout: post
title: Apple, Surveillance and CSAM
date:   2021-08-08
categories: ["Privacy"]
tags: ["Apple", "Surveillance", "Privacy"]
author: ["Oskar Edbro"]
---
Apple has recently released their plans for on device detection of Child Sexual Abuse Material (CSAM). For me as well as many others this has raised some flags, since it have the potential to greatly impact the privacy of Apple users. 

I will not comment on the overall security of the solution put forward by Apple, just summarize the description on how it works, as well as highlighting my concerns with the solution. Apple intends to roll out the detection in three stages. Firstly images shared through the messages app (AKA iMessage) will be screened for CSAM content. If it is detected (being either sent or received) the user and in applicable cases their parent will be warned about the detection. The second stage includes iCloud photos, where any photo will be matched against known CSAM (on device matching) before being uploaded. If there is a number of matches that meets a threshold Apple will be notified and after manual validation it will be forward to the relevant (American) authorities. The last step is to improve Siri and search, adding better support for reporting CSAM, or where to get support if you, or you think someone else is subject to sexual abuse.

But how does the matching work? First of all a set of hashes for known CSAM will be stored on every device. Every photo will then be matched to this hash. To not only match the exact photo a hash algorithm named Private Set Intersection is used. This algorithm matches images that are alike to the same hash, meaning if the image is cropped or a filter is applied the image will still match. 

![Diagram of how Apple detects CSAM]({{site.url}}/assets/2021/Apple-CSAM/20210807-Apple-CSAM-Detection.png)

The result of the match is then saved in a token together with the actual image and uploaded together with the image. This token can however not be read by Apple until a set number of images has been matched by a single user. This is achieved by using Threshold Secret Sharing, which does not allow decryption until a set amount of tokens has been shared. However Apple have to date not shared what the threshold is set to. After the threshold has been reached, Apple will manually review the report and if applicable forward it to the relevant authorities.

![Diagram of how Apple reports CSAM]({{site.url}}/assets/2021/Apple-CSAM/20210807-Apple-CSAM-Reporting.png)

I will **NOT** comment on the technical security of this solution, but i see the risk that this step will allow governments to use Apple devices for surveillance of their citizens. By introducing a solution that allows them to monitor their users in search for forbidden material, in this case CSAM, they open the door for searching for other materials. Whom is to decide what is illegal and should be reported? 

It is already known that Apple have given in to demands by the Chinese government in regards to censorship of devices sold there. An example from the [NY Times](https://www.nytimes.com/2021/05/17/technology/apple-china-censorship-data.html) is the emoji for the Taiwanese flag, which is not found on devices sold in China. There are also a separate solution for iCloud in China, where Apple outsource the hosting of the iCloud infrastructure to a Chinese company with ties to the government. 

Taking into account how Apple has complied with demands from China it is not unrealistic to assume that they will also comply with demands on what data to match for, and with the technical implementation already in place the roll out for mass surveillance will not be difficult.

Child sexual abuse is a terrible thing, but we still has to look out for the privacy of individuals around the world. As usual the reason stated for surveillance is fighting crime and terror, or national security. This is another big step by multinational companies that infringes the privacy of their users, that can be abused by governments to monitor their citizens. We do not wish to see a state with the same surveillance as East Germany, since it would be much worse thanks to today's technology. 

It is widely accepted that the government is  required to get a warrant before searching an individuals home etc. I would argue that in this day and age the devices a person uses contains the same kind of private information as the home, and therefore the privacy requirements should be the same. Why should governments require a search warrant for my home, but not my devices? How would everyone feel if there were required surveillance cameras in each home? They would not send any images if they do not automatically detects a crime, but they are always watching. This could have even better detection for CSA, but it would not be accepted due to privacy concerns. Scanning every photo on device is the same. The privacy implications is enormous! Let's call out what is happening, especially when it is framed with privacy. This is a form of mass surveillance, and that does not ensure the privacy of the individual!

## References.
- [Apple Expanded Protections for Children](https://www.apple.com/child-safety/pdf/Expanded_Protections_for_Children_Technology_Summary.pdf)
- [Apple on Child Safety](https://www.apple.com/child-safety/)

The images are from [Apples Expanded Protections for Children](https://www.apple.com/child-safety/pdf/Expanded_Protections_for_Children_Technology_Summary.pdf) summary.