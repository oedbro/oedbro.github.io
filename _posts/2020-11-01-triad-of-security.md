---
layout: post
title: The Triad of Security
date:   2020-12-01
categories: ["Awareness"]
tags: ["Ransomware", "Security", "Awareness", "Risk"]
author: ["Oskar Edbro"]
---

In the news lately I've seen multiple news stories where security breaches have been discussed. Most of them have followed sensitive data being disclosed after a company has been hacked. In cybersecurity usually categorise a vulnerability or incident based on its impact, and to do so we use the CIA triad. 

**NO**, CIA in this case does not stand for *Central Intelligence Agency*. In this case CIA stands for the three kinds of impact a vulnerability can have, Confidentiality, Integrity and Availability.

Lets dig a bit deeper, what does each of these terms mean.

### Confidentiality
Confidentiality is about not exposing internal information to external parties. This could be anything from trade secrets to personal information. This is the area of security that I currently see discussed in the news. A recent example would be the Gunnebo hack [\[1\]](#references), where the attackers stole confidential information and leaked it online. 

### Integrity
Integrity is in regard to ensuring that data in the system have not been changed. The banking sector excels in this area. Since they handle money and transactions, they have to be certain that no one can add a zero to the content of their bank account. 

### Availability
The last part of the triad is availability. Here the goal is ensuring the uptime of the system, that an attacker cannot take it down or block it in an unusable state. An availability attack is often (incorrectly) called a DDoS, or Distributed Denial of Service. This is one of the most trivial way of impacting the availability, but not the only. It is achieved by overloading the system with requests.

## Media and CIA
In the years I've been following cybersecurity closely in media I've found that often the focus is on one part of the CIA triad at a time. In the last 5 years there have been a transition from availability to confidentiality. First the discussion was on cryptolockers (malware that encrypts the hard drive and requires a ransom for decryption). Since then the GDPR (General Data Protection Regulation [\[2\]](#references)) among others, the discussion have transitioned towards the privacy of users. This highlights the importance of confidentiality of personal data. 

This is where we are today, over the last few months there have been multiple instances where media have interviewed security professionals on information disclosed after a hack.

## Conclusion

Regardless of what is discussed in media at the moment, all the parts of the CIA triad is important. Even though a businesses might have a prioritised area, they cannot forget the other parts. Any of them can and will have some kind of business impact, costing the organisation in the long run. 



## References
1. <https://www.euronews.com/2020/10/27/thousands-of-sensitive-documents-stolen-in-swedish-data-hack>
2. <https://en.wikipedia.org/wiki/General_Data_Protection_Regulation>
