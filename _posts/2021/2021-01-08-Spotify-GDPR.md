---
layout: post
title: An Analysis of the Spotify GDPR Data Export
date:   2021-02-07
categories: ["GDPR"]
tags: ["Security", "GDPR", "Privacy"]
author: ["Oskar Edbro"]
---

I've gotten a bit curious about what data different companies are collecting about me. This have led to a couple of GDPR requests to companies to provide the data so I can analyse it. In this post I will share my thoughts about the content of the report I got from [Spotify](https://www.spotify.com/), and the process of fetching the data.

## The Download Process
The process to get access to your data is quite straight forward. There are clear descriptions on how to download your data under [privacy settings](https://www.spotify.com/account/privacy/), where you can request a download. The collection process takes a while and an email is sent when your data is ready to be downloaded. In the email there are a link that allows you to download a zip archive containing your information.

## Analysis of the Data
After extracting the data we find the following files:
````
$ ls -lah
total 1.4M
drwxr-xr-x 1 edbro 197121    0 Jan  6 11:06 .
drwxr-xr-x 1 edbro 197121    0 Jan  8 11:45 ..
-rw-r--r-- 1 edbro 197121   62 Jan  6 11:06 DuoNewFamily.json
-rw-r--r-- 1 edbro 197121  222 Jan  6 11:06 Follow.json
-rw-r--r-- 1 edbro 197121 1.1K Jan  6 11:06 Inferences.json
-rw-r--r-- 1 edbro 197121  105 Jan  6 11:06 Payments.json
-rw-r--r-- 1 edbro 197121 170K Jan  6 11:06 Playlist1.json
-rw-r--r-- 1 edbro 197121 183K Jan  6 11:06 Read_Me_First.pdf
-rw-r--r-- 1 edbro 197121  12K Jan  6 11:06 SearchQueries.json
-rw-r--r-- 1 edbro 197121 952K Jan  6 11:06 StreamingHistory0.json
-rw-r--r-- 1 edbro 197121  308 Jan  6 11:06 Userdata.json
-rw-r--r-- 1 edbro 197121 7.6K Jan  6 11:06 YourLibrary.json
````

The *read me first* PDF file contains some information about what's not included and how to get access to it. For example it links to <https://support.spotify.com/uk/article/gdpr-article-15-information/> about the legal grounds for the processing of data. It also links to an article about how to understand the information in these files. It explains what the files contain on a high level (<https://support.spotify.com/uk/article/understanding-my-data/>). If you have some experience I feel like you would get the same from reading the json files, but it is nice that they include it. After reading the PDF, let's dig into the actual user data. 

The first analysis is to get an overview of the size of the files and if they are interesting. This gave some basic information about the files, as listed below:

* **DuoNewFamily.json** Only contains the address of the family account (yes I use Spotify duo).
* **Follow.json** Small file containing information about my followers as well as users and artists i follow. Note however that only the artists I follow are listed, the other parts are just in numbers.
* **Inferences.json** Contains a list of categories which Spotify have classified me into. Gives an insight into what Spotify knows about me, but does not need any further investigation. Example categories are: "1P_Custom_Samsung_Galaxy_S10_Users" and "1P_Podcast Listeners_True Crime".
* **Payments.json** Contains information about when my account was created, and how I pay for the service. 
* **Playlist1.json** Fully lists the playlists I've created. The file is large and will be inspected more deeply.
* **SearchQueries.json** Lists the searches performed, and on what device it was performed, as well as the timestamp for the search. 
* **StreamingHistory0.json** Contains all the songs listened to, for how long, and when.
* **Userdata.json** About what you expect, information about your user. Nothing more and nothing less.
* **YourLibrary.json** A big file containing things you like, everything from podcasts or artists to songs. In addition it shows songs you've disliked and that are hidden from your account. 

Let's dig a bit deeper into some of these files and look what they are hiding.


### Playlist1.json
Each playlist are listed with the following information:
````json
    {
      "name": "TEST",
      "lastModifiedDate": "2020-10-20",
      "items": [
        {
          "track": {
            "trackName": "Party In The U.S.A.",
            "artistName": "Miley Cyrus",
            "albumName": "The Time Of Our Lives"
          },
          "episode": null,
          "localTrack": null
        },
        {
          "track": {
            "trackName": "Year of the Young",
            "artistName": "Smith & Thell",
            "albumName": "Year of the Young"
          },
          "episode": null,
          "localTrack": null
        }
      ],
      "description": null,
      "numberOfFollowers": 0
    }
````
The information is exactly what's expected, containing information about your playlists and their contents, but nothing more. Noteworthy is however that there are no information about the lists that you follow, only the ones you have created.

### SearchQueries.json

After looking at the file, the contents only show the searches for the last three months. This indicates that Spotify does regularly clean up their data to avoid collecting to much of it, a big plus from me!

each query has the following information:
````json
  {
    "platform" : "ANDROID_ARM",
    "searchTime" : "2020-10-09T10:36:07.879Z[UTC]",
    "searchQuery" : "lofi ",
    "searchInteractionURIs" : [
      "spotify:playlist:0pGdGpMm84h2Jl6Q1KmTMn"
    ]
  }
````
Here are some more data, but not so much as to raise any flags. The platform might not be necessary in this context, but I'm not that surprised to se it.

### StreamingHistory0.json
This file logs all the songs you have listened to within the timespan of the log. For me this is a bit more than 12 months, but I cannot specify that exactly with this data. The log contains about what you expect, such as time, how long the song was listened to, and what song.
````json
  {
    "endTime" : "2020-12-17 14:28",
    "artistName" : "RadioClub",
    "trackName" : "Never Gonna Give You Up",
    "msPlayed" : 161297
  },
````

### Userdata.json
The user-data collected about the user. Note, here I've changed my information to XXX. If there is a NULL, Spotify has not populated the data.
````json
{
  "username": "XXX",
  "email": "XXX",
  "country": "SE",
  "createdFromFacebook": false,
  "facebookUid": null,
  "birthdate": "XXX",
  "gender": "male",
  "postalCode": "XXX",
  "mobileNumber": null,
  "mobileOperator": null,
  "mobileBrand": null,
  "creationTime": "XXX"
}
````
I find it interesting that Spotify collects information about the mobile brand and operator. I cannot tell why this is not populated for my account, but might be something to watch out for.

## Missing Information
After investigating the full data export from Spotify I feel that there are some data missing. I cannot find any references to playlists that I follow. When reaching out to Spotify about this they recommended that I look for it in the second level of data. The support representative triggered the collection, and after that the data was downloaded the same way as the level 1 data. 

## Analysis of the Level 2 Data
The second level of data contains a lot more than the first. As shown below there are **111** files in the second level. 
````
ls -lah
total 27M
drwxr-xr-x 1 edbro 197121    0 Jan 13 18:16 .
drwxr-xr-x 1 edbro 197121    0 Jan 13 18:16 ..
-rw-r--r-- 1 edbro 197121  42K Jan 13 18:28 A11yFeatureUsage.json
-rw-r--r-- 1 edbro 197121 1.9K Jan 13 18:28 AccountMutated.json
-rw-r--r-- 1 edbro 197121  768 Jan 13 18:28 ActionLog.json
-rw-r--r-- 1 edbro 197121  44K Jan 13 18:29 AdRequestEvent.json
-rw-r--r-- 1 edbro 197121 5.8K Jan 13 18:29 AddToPlaylist.json
-rw-r--r-- 1 edbro 197121  393 Jan 13 18:28 AddedToCollection.json
-rw-r--r-- 1 edbro 197121 2.9K Jan 13 18:28 AddedToPlaylist.json
-rw-r--r-- 1 edbro 197121  247 Jan 13 18:28 AddedToRootlist.json
-rw-r--r-- 1 edbro 197121 138K Jan 13 18:29 AndroidDeviceReport.json
-rw-r--r-- 1 edbro 197121 267K Jan 13 18:32 ApAuthenticationSuccess.json
-rw-r--r-- 1 edbro 197121 231K Jan 13 18:29 Ap_AdEvent.json
-rw-r--r-- 1 edbro 197121 2.6K Jan 13 18:29 Ap_AddToPlaylist.json
-rw-r--r-- 1 edbro 197121 4.1K Jan 13 18:30 Ap_BrowseLink.json
-rw-r--r-- 1 edbro 197121 450K Jan 13 18:30 Ap_Download.json
-rw-r--r-- 1 edbro 197121 2.1M Jan 13 18:30 Ap_EndSong.json
-rw-r--r-- 1 edbro 197121 1.4M Jan 13 18:30 Ap_ExternalAccessory.json
-rw-r--r-- 1 edbro 197121  56K Jan 13 18:31 Ap_Interaction.json
-rw-r--r-- 1 edbro 197121 296K Jan 13 18:31 Ap_LogIn.json
-rw-r--r-- 1 edbro 197121 913K Jan 13 18:31 Ap_PageView.json
-rw-r--r-- 1 edbro 197121  59K Jan 13 18:31 Ap_Share.json
-rw-r--r-- 1 edbro 197121 421K Jan 13 18:32 Ap_UIInteraction.json
-rw-r--r-- 1 edbro 197121 552K Jan 13 18:35 AppFocusState.json
-rw-r--r-- 1 edbro 197121 187K Jan 13 18:35 AudioDriverInfo.json
-rw-r--r-- 1 edbro 197121 298K Jan 13 18:37 AudioFileSelection.json
-rw-r--r-- 1 edbro 197121  32K Jan 13 18:37 AudioOffliningSettingsReport.json
-rw-r--r-- 1 edbro 197121 742K Jan 13 18:37 AudioRouteSegmentEnd.json
-rw-r--r-- 1 edbro 197121 230K Jan 13 18:37 AudioSessionEvent.json
-rw-r--r-- 1 edbro 197121 175K Jan 13 18:37 AudioSettingsReport.json
-rw-r--r-- 1 edbro 197121  33K Jan 13 18:38 AudioStreamingSettingsReport.json
-rw-r--r-- 1 edbro 197121  44K Jan 13 18:38 AuthHTTPReqWebapi.json
-rw-r--r-- 1 edbro 197121  595 Jan 13 18:38 AuthorizationCodeExchangeSuccess.json
-rw-r--r-- 1 edbro 197121 227K Jan 13 18:38 BrokenObject.json
-rw-r--r-- 1 edbro 197121 4.3K Jan 13 18:38 CacheError.json
-rw-r--r-- 1 edbro 197121  83K Jan 13 18:38 CachePruningReport.json
-rw-r--r-- 1 edbro 197121 178K Jan 13 18:39 CacheRealmPruningReport.json
-rw-r--r-- 1 edbro 197121 1.4M Jan 13 18:39 CacheRealmReport.json
-rw-r--r-- 1 edbro 197121 351K Jan 13 18:39 CacheReport.json
-rw-r--r-- 1 edbro 197121 9.0K Jan 13 18:39 ClientLocale.json
-rw-r--r-- 1 edbro 197121  47K Jan 13 18:39 ClientRespondedToConnectStateCommand.json
-rw-r--r-- 1 edbro 197121 1.1K Jan 13 18:39 ClientSentConnectStateCommandSourceIP.json
-rw-r--r-- 1 edbro 197121  34K Jan 13 18:39 ClientSentConnectStateCommandTargetIP.json
-rw-r--r-- 1 edbro 197121  48K Jan 13 18:40 ColdStartupSequence.json
-rw-r--r-- 1 edbro 197121 537K Jan 13 18:40 ConfigurationApplied.json
-rw-r--r-- 1 edbro 197121  33K Jan 13 18:40 ConnectDeviceDiscovered.json
-rw-r--r-- 1 edbro 197121 1.2K Jan 13 18:42 ConnectTransferResult.json
-rw-r--r-- 1 edbro 197121 393K Jan 13 18:41 ConnectionError.json
-rw-r--r-- 1 edbro 197121  58K Jan 13 18:42 DailyMixContents.json
-rw-r--r-- 1 edbro 197121  84K Jan 13 18:42 DailyXContents.json
-rw-r--r-- 1 edbro 197121 2.5K Jan 13 18:42 DeeplinkOpen.json
-rw-r--r-- 1 edbro 197121 3.6K Jan 13 18:42 DefaultConfigurationApplied.json
-rw-r--r-- 1 edbro 197121 9.6K Jan 13 18:43 DesktopGPUAccelerationInfo.json
-rw-r--r-- 1 edbro 197121 1.8K Jan 13 18:43 DesktopUpdateDownloadComplete.json
-rw-r--r-- 1 edbro 197121 2.5K Jan 13 18:43 DesktopUpdateMessageAction.json
-rw-r--r-- 1 edbro 197121 3.1K Jan 13 18:43 DesktopUpdateMessageProcessed.json
-rw-r--r-- 1 edbro 197121  23K Jan 13 18:43 DesktopUpdateResponse.json
-rw-r--r-- 1 edbro 197121 128K Jan 13 18:43 DeviceIdentifier.json
-rw-r--r-- 1 edbro 197121 298K Jan 13 18:43 DeviceQuery.json
-rw-r--r-- 1 edbro 197121 6.9M Jan 13 18:44 Download.json
-rw-r--r-- 1 edbro 197121 230K Jan 13 18:44 DrmRequestFailure.json
-rw-r--r-- 1 edbro 197121 129K Jan 13 18:44 ExternalAccessoryRemoteInteraction.json
-rw-r--r-- 1 edbro 197121 1.5K Jan 13 18:44 ExternalDeviceInfo.json
-rw-r--r-- 1 edbro 197121 295K Jan 13 18:44 HeadFileDownload.json
-rw-r--r-- 1 edbro 197121 1.4K Jan 13 18:44 InAppMessageDiscardedEvent.json
-rw-r--r-- 1 edbro 197121 2.2K Jan 13 18:44 InAppMessageImpressionEvent.json
-rw-r--r-- 1 edbro 197121  542 Jan 13 18:44 InAppMessageInteractionEvent.json
-rw-r--r-- 1 edbro 197121 2.1K Jan 13 18:45 InAppMessagePresentationPerformanceEvent.json
-rw-r--r-- 1 edbro 197121 2.1K Jan 13 18:45 KmInteraction.json
-rw-r--r-- 1 edbro 197121 1.8K Jan 13 18:45 KmPageView.json
-rw-r--r-- 1 edbro 197121  13K Jan 13 18:45 LanguageSelection.json
-rw-r--r-- 1 edbro 197121 103K Jan 13 18:45 LocalFilesReport.json
-rw-r--r-- 1 edbro 197121  371 Jan 13 18:45 NewLoginNotificationSent.json
-rw-r--r-- 1 edbro 197121  581 Jan 13 18:45 OAuthAuthorizeGrant.json
-rw-r--r-- 1 edbro 197121  28K Jan 13 18:45 OfflineError.json
-rw-r--r-- 1 edbro 197121 9.6K Jan 13 18:45 OfflineEvent.json
-rw-r--r-- 1 edbro 197121 193K Jan 13 18:45 OfflineReport.json
-rw-r--r-- 1 edbro 197121  38K Jan 13 18:45 ParadoxCampaignOptimizerEvent.json
-rw-r--r-- 1 edbro 197121  234 Jan 13 18:46 PlacedOrderClosed.json
-rw-r--r-- 1 edbro 197121  184 Jan 13 18:46 PlacedOrderCreated.json
-rw-r--r-- 1 edbro 197121 1.7K Jan 13 18:46 PlaybackError.json
-rw-r--r-- 1 edbro 197121 8.5K Jan 13 18:46 PlaybackInitiatedOnDevice.json
-rw-r--r-- 1 edbro 197121 1.3K Jan 13 18:46 PlaybackRetry.json
-rw-r--r-- 1 edbro 197121 1.1M Jan 13 18:46 PlaybackSegments.json
-rw-r--r-- 1 edbro 197121  82K Jan 13 18:46 PlayerStateRestore.json
-rw-r--r-- 1 edbro 197121 907K Jan 13 18:46 Prefetch.json
-rw-r--r-- 1 edbro 197121  54K Jan 13 18:46 PushAndroidDeviceSettingsV1.json
-rw-r--r-- 1 edbro 197121  55K Jan 13 18:46 PushNotificationAndroidOSChannels.json
-rw-r--r-- 1 edbro 197121 1.1K Jan 13 18:46 PushTokenRegistrationErrorV1.json
-rw-r--r-- 1 edbro 197121 4.8K Jan 13 18:46 PushTokenRegistrationV1.json
-rw-r--r-- 1 edbro 197121  12K Jan 13 18:46 PushkaPushEventV1.json
-rw-r--r-- 1 edbro 197121 179K Jan 13 18:16 Read_Me_First.pdf
-rw-r--r-- 1 edbro 197121  198 Jan 13 18:47 RemovedFromCollection.json
-rw-r--r-- 1 edbro 197121  17K Jan 13 18:47 RequestFailure.json
-rw-r--r-- 1 edbro 197121 8.8K Jan 13 18:47 ResolveConfigurationError.json
-rw-r--r-- 1 edbro 197121 396K Jan 13 18:47 SearchViewResponse.json
-rw-r--r-- 1 edbro 197121  43K Jan 13 18:47 SemanticMetricClient.json
-rw-r--r-- 1 edbro 197121 4.2K Jan 13 18:47 Share.json
-rw-r--r-- 1 edbro 197121  397 Jan 13 18:47 SocialConnectSessionCreated.json
-rw-r--r-- 1 edbro 197121  428 Jan 13 18:47 SocialConnectSessionJoined.json
-rw-r--r-- 1 edbro 197121 4.2K Jan 13 18:47 SocialConnectUserActiveDeviceChanged.json
-rw-r--r-- 1 edbro 197121  948 Jan 13 18:47 SongCreditsRequest.json
-rw-r--r-- 1 edbro 197121 1.8M Jan 13 18:47 SportyFormatlistRequest.json
-rw-r--r-- 1 edbro 197121 109K Jan 13 18:48 StartContext.json
-rw-r--r-- 1 edbro 197121 7.2K Jan 13 18:48 Stutter.json
-rw-r--r-- 1 edbro 197121 158K Jan 13 18:48 TrackNotPlayed.json
-rw-r--r-- 1 edbro 197121 4.4K Jan 13 18:48 TrackStuck.json
-rw-r--r-- 1 edbro 197121  381 Jan 13 18:48 TransactionalEmailerEmailEvent.json
-rw-r--r-- 1 edbro 197121 2.1K Jan 13 18:48 UserAuthenticationFailure.json
-rw-r--r-- 1 edbro 197121 141K Jan 13 18:48 UserAuthenticationSuccess.json
-rw-r--r-- 1 edbro 197121 329K Jan 13 18:48 ViewLoadSequence.json
-rw-r--r-- 1 edbro 197121 214K Jan 13 18:48 VoiceAdLog.json
-rw-r--r-- 1 edbro 197121 8.4K Jan 13 18:48 WindowSize.json
````

Due to the sheer amount of data, my analysis of the second level will not describe it in the same depth as the first level. However, I wish to provide some of the highlights from my analysis.

### Device Information
Multiple of the files contain detailed information about the devices used to listen to Spotify. One of the most detailed ones are *AndroidDeviceReport.json* and *DesktopUpdateResponse.json*. The first of these, *AndroidDeviceReport.json* contains detailed information about any android device. As shown below it contains both hardware and software versions used by the device.

````json
{
    "timestamp_utc": "2020-10-29T06:08:27.652Z",
    "context_application_version": "8.5.XX.XXX",
    "context_conn_country": "SE",
    "context_device_manufacturer": "OnePlus",
    "context_device_model": "ONEPLUS A5010",
    "context_os_name": "android",
    "context_os_version": "9",
    "context_receiver_service_timestamp": 1603951738251,
    "context_time": 1603951707652,
    "message_cpu_family": 4,
    "message_cpu_features": 127,
    "message_fb_yearclass": 2016,
    "message_firmware": "ONEPLUS A5010_43_XXXXX",
    "message_manufacturer": "OnePlus",
    "message_max_freq": 2457600,
    "message_memory": 5991428096,
    "message_num_processors": 8,
    "message_screen_height": 2160,
    "message_screen_size": 6.021566867828369,
    "message_screen_width": 1080
  }
````

**Note:** I have anonymized some of the information with XXX. 

*DesktopUpdateResponse.json* contains similar information about windows devices. Not as detailed, but almost. It contains information such as OS version, and if it can find it the device make and model. 

````json
{
    "message_is_employee": "\u0000",
    "timestamp_utc": "2020-11-30T13:45:32.882Z",
    "context_application_version": "1.1.46.916",
    "context_conn_country": "SE",
    "context_device_manufacturer": null,
    "context_device_model": null,
    "context_os_name": "windows",
    "context_os_version": "10.0.18363",
    "context_receiver_service_timestamp": 1606743933381,
    "context_time": 1606743932882,
    "message_error_message": null,
    "message_payload_size": 3,
    "message_request_time_ms": 349,
    "message_status_code": 200
  },
````

The windows data is quite limited in time, and does only seem to be saved for logging and deleted after about 1 - 2 months. The android data on the other hand is saved much longer, my estimate would be about half a year. From a personal perspective I wish that this would have been a bit shorter, but it is not long enough for me to raise any concerns.

### Usage Information
As expected the level 2 data contains much more detailed information about any action taken in the software. For example if we look at *Ap_EndSong.json* it contains information about whenever a song is stopped.

````json
{
    "identData_ip_addr": "XXX.XXX.XXX.x",
    "identData_username": null,
    "message_referer": "home",
    "timestamp_utc": "2020-08-16T13:49:51Z",
    "message_incognito_mode": false,
    "message_ms_played": 110066,
    "message_offline": false,
    "message_offline_timestamp": 1597585679267,
    "message_reason_end": "trackdone",
    "message_reason_start": "trackdone",
    "message_shuffle": true,
    "message_source_end": "playlist",
    "message_source_start": "playlist",
    "message_transition": "crossfade"
  },
````

This contains two timestamps, both one of the server, and one of the local playback device. It tracks how it was played, and why it was ended. Lastly it contains the class C IP address from where the song was played. Note however that I have anonymized the three first octets of the address. The last was not provided by Spotify.

### ApAuthenticationSuccess.json
Lets look at a file that warrents a section on its own. *ApAuthenticationSuccess.json* contains the unique device ID of any device used to sign in. For windows this is a SID, generated when windows was installed. In addition it contains the full IP address, not the masked as used in other files.

````json
{
    "message_brand": "",
    "message_device_id": "S-1-5-21-3176720717-XXXXXXXXXX-XXXXXXXXXX",
    "message_ip_address": "XXX.XXX.XXX.XXX",
    "timestamp_utc": "2020-12-14T12:31:46.001Z",
    "context_time": 1607949106001,
    "message_client_id": "65b708073fc0480ea92a077233ca87bd",
    "message_language": "en",
    "message_platform": "win32-x86",
    "message_platform_version": "11470XXXX",
    "message_system_info": "Windows 10 (10.0.XXXXX; x64)"
  },
  {
    "message_brand": "",
    "message_device_id": "a404dc240fc3c868",
    "message_ip_address": "XXX.XXX.XXX.XXX",
    "timestamp_utc": "2020-10-21T07:45:31.889Z",
    "context_time": 1603266331889,
    "message_client_id": "9a8d2f0ce77a4e248bb71fefcb557637",
    "message_language": "en_GB",
    "message_platform": "android-arm",
    "message_platform_version": "85800XXXX",
    "message_system_info": "Android OS 9 API XX (OnePlus, ONEPLUS A5010)"
  },
````

Once more I've anonymized the data with *XXX*. Wherever there is an X in this data I have deleted the information about me and my devices. 

The data in this file dates back approximately 3 months from the date when it was extracted. From this I am curious what they use the device ID for. If they need to link a device to an action they could generate a device ID, but to use the one generated by the system will allow them not only to track the movement of the device I use, but also to connect it to any other user that shares that device. 


## Conclusion
The information I've found in my level 1 data export give me a good feeling about what Spotify saves about me. Even though some concerns was raised after the examination of the level 2 data it is over all quite good. When receiving the data, the sheer amount of it was quite daunting, but after analysing it, there was not as many worries as expected.

I do not agree with the extent to which they collect data about my devices, but that is one of very few concerns. After looking through the data, my conclusion is that for the service they provide, the data they collect is acceptable. As always, there are things I wish was better, but the concerns are not critical. 
