
# NBAbite Streaming Assistant

## Description

NBAbite Assistant helps with streaming sports games on nbabite.com

The assistant can be used when you select your stream provider and are directed to link retrieval page. The page will say your link is loading, and three seconds later will display 'Your Link is Ready'. This is the time in which NBA Assistant can perform its functionality. 

![Link Page](/NBAbiteAssistant/assistant_extension/images/BullshitAdGenerator.png)

NBAbite Assistant will block requests from the ad generating site and then retrieve the actual stream link from this site and open a new tab with the stream. Without the assistant, you will have to go through many more pop up ads before getting what you came for. 

## Installation

The extension is currently not on the chrome extension store so you will need to either clone this repository, or install the specified files from it to your local computer. 

#### Chrome Extension 

To use NBAbite Assistant as a Chrome extension, you will need the NBAbiteAssistant/assistant_extension folder in this repository. The folder itself is a Chrome extension which we can install to the Chrome browser locally. 

To install a local extension to chrome, visit chrome://extensions in your Chrome browser. Then toggle the 'Developer Mode' switch located at the top of the page. Finally, select 'Load unpacked' to upload the extension!

## How to Use

It is important that you are on the 'Your Link is Ready' page on nbabite.com or affiliated sports streaming sites. You must have waited the 3 seconds required before running the extension or bookmark code or it will not work. 

#### Chrome Extension 

Once your Chrome extension is installed, there are two ways to open the stream link. 
* Open the extension and click the button which reads "Go To Stream"
* Use the command: ctrl+shift+space
