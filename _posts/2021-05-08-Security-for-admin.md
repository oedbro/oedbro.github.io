---
layout: post
title: Security for Any Administrator Team
date:   2021-05-08
categories: ["Awareness"]
tags: ["Security", "SSDLC", "Awareness"]
author: ["Oskar Edbro"]
---
Previously I've written a post about [security for devolvement teams]({% post_url 2021-02-13-technology-independent-security-testing %}), and now it's time for the continuation. Just as for developer there are great benefits in performing security tests for administrators. However, the methodology when testing the infrastructure is not the same as when testing an application. 

In this post I'm going to introduce categories of testing for administrators in much the same way as I did for developers, allowing any team to begin thinking about security and performing basic security testing. The categories proposed can also be adapted to be used as requirements, more so than the ones used for developers. This is since they are easier to apply regardless of what solution is tested. 

## Exposure Vulnerabilities
The first category of vulnerabilities are related to exposure. To minimise the risk, it is important to not expose functionality that is not required. This could for example be blocking access to the database so that only the application can connect to it. There is no reason that it should reachable by everyone. 

By limiting the exposure the impact of other vulnerabilities are limited. The possibility to attack a vulnerable administrative interface gets limited if only users on the administrative network are allowed to connect to it. However, it is important to remember that separation is not the silver bullet that protects against everything, but rather one layer of the defence. 

## Application Configuration Vulnerabilities
All solutions have a function that needs to be exposed to it's users. This functionality cannot be blocked and therefor has to be protected by other means. Here most providers of applications do (or should) provide best practices for how to configure their application in a secure manner. Exactly how this should be configured are dependant on the application used, but the main goal is to minimise the risk of the application being exploited. 

There are multiple examples of configuration that can be configured in applications. Some examples are:
1. Enabling security functions
2. Disabling unused functionality
3. Change default credentials

A common example of vulnerable configuration on the web is regarding encryption and HTTPS. To be secure it is important to both enable TLS by allowing connecting in HTTPS, and disable vulnerable versions of TLS, such as TLSv1.0. To know exactly what is secure and what is not is difficult, and therefore the best practices provides guidance.

## Vulnerabilities in Outdated Components
Last, but not least it is important to keep the environment up to date by applying the patches provided by the supplier. Patching is not only applicable for the main application, but for all software running on the system. To once again use the web as an example an up to date webserver might be exploited by using an outdated version of openssl (that provides TLS). 

To keep a system up to date might be more work than expected since you have to keep up to date with what patches are provided, verify their functionality and then update. To help with the keeping up to date part many suppliers provide newsletters and advisories that informs their subscribers when a new update is available. 

## Summary
When it comes to security for administrators it's important to have a defence in depth strategy. It is not enough to protect against any single one of these categories of vulnerabilities. To protect efficiently all layers of security needs to be applied. 

This methodology does not protect against exploits in the application, since each application might be vulnerable. It assumes that the suppliers have their own way of ensuring that their product is secure. If the application is vulnerable np configuration will protect, and testing for these categories of vulnerabilities will not help. Instead it is recommended to read the post [security for devolvement teams]({% post_url 2021-02-13-technology-independent-security-testing %}).
