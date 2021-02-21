---
layout: post
title: Security for Any Development Team
date:   2021-03-05
categories: ["Awareness"]
tags: ["Security", "SSDLC", "Awareness"]
author: ["Oskar Edbro"]
---
There are very few, if any, development teams that introduces vulnerabilities into their software out of malicious intent. Instead it is mistakes that are introduced due to lack of time, awareness, or something alike. There are lots of materials out there that are either super detailed for a specific technology stack, or on such a high level it is hard to apply in the real world. 

With this post I will try to do the impossible, to describe how you work with security in a practical manner, regardless of what technology you use. I will highlight three categories of vulnerabilities, and describe them in a technology independent way. My hope with this is to allow any development team to have a think about security, and apply them to their specific technologies. 

Throughout the article I will use the word component to describe a piece of software. This can be as small as a function, or as big as a financial system. The main thing is that the software takes some kind of input, and based on that input performs some actions which leads to a result. This could be sending a request to a web API which returns user information, or pushing a button resulting in raising the target temperature of a room. However small or big the component is, the concepts explained will be applicable. This input is used both for legitimate usage, and for potential attacks, and therefore is it important to understand the risks. 

I will in this post propose that there are three different kinds of vulnerabilities that can be found in any type of software. This will allow us to have a common ground for discussing security between different domains, and adapt it to where you have your expertise. 

## Context Dependent Vulnerabilities
Lots of technical vulnerabilities is due to a change of context from where data is inserted into a component, and where it is used. If the context of the data is changed, but the data is not adapted correctly the risk for a possible exploit increases. The goal of an attacker when attacking the contexts is to break out off the assigned field of the data and in doing so gaining access to data or functionality that it is not intended to have. 

One of the most well known example of context dependent vulnerabilities are an SQL injection. In an SQL injection the attacker breaks out of the data context of the database query to create one specified by the attacker. In doing so the attacker can fetch any data in the database, or even modify the data. 

To test or mitigate these issues the development team should think about the context of the input and output data. The data input might need to be decoded before logic is performed on it. To decode the input correctly the development team needs to understand the input context, and any encodings used in the context. Next up the same considerations needs to made on the output context. If data is output into an HTML context, the relevant characters needs to be HTML encoded. 

## Business Logic Vulnerabilities
The second kind of vulnerabilities are vulnerabilities that directly affect the business logic. These are often the easiest to understand and explain, since they directly has a business impact. A simple example would be in a web shop. The intended function is for the price to pay equals the sum of all the products. But what would happened if you tried to order a negative number of products? The reasoning does not make sense in a business perspective, but if there are no protections the web shop will give a negative total. 

A common way to work with business logic vulnerabilities is through abuser-stories or abuse-cases. These are tightly related to their respective user-stories or use-cases, but helps to show what an attacker want. In doing so it highlights the risks, and adds them to the requirements (how to work with abuse-cases and abuser-stories will however have to be another post in the future). This way they are both tracked and tested along the functional requirements, removing some of the fog around security. 

## Abusing the Technology stack
The last kind of security is the hardest to describe broadly, since it is connected to the technology stack used in the project. Any technology has its own risks and vulnerabilities, therefor you need to read up on what is applicable in your area. This could be vulnerabilities specific to your programming language (buffer overflow in c), to the tools you are using (XML External Entity attack when using XML or clickjacking on the web), or specific to your dependencies (known vulnerabilities in the used versions). When becoming an expert on the technology stack I would argue that it is required to also have an insight into the vulnerabilities that are specific to that stack. However this cannot be done once, just as the technology evolve so does the potential attacks. You have to keep up to date.

Even though this requires actively seeking some knowledge in the area, it is an important expertise to have in the teams. A third party tester does rarely get the same insight into the technologies used as the team has, and therefore they might miss some important finding. By combining the tester outside the team with the one inside, the risk of vulnerabilities being missed are minimised.

## Summary
The work of security professionals are often seen as obscure and mystic. They come in and points to errors, just to leave and not return until the next release. However their goal align with the goal of the team, the delivery of high quality software. By breaking down security vulnerabilities into three groups I aim to bridge some of that gap between security professionals and the teams. Anything the team can find and fix is a plus. By thinking of the three areas of security vulnerabilities (Context Dependent, Business Logic, and Abusing the Technology stack) I hope that development teams gain the introduction needed to begin working with security. It is no magic, it is just another part of the toolbox that all development teams need to produce great software.
