
# NBAbite Streaming Assistant

## Description

NBAbite Assistant helps with streaming sports games on nbabite.com

The assistant can be used when you select your stream provider and are directed to link retrieval page. The page will say your link is loading, and three seconds later will display 'Your Link is Ready'. This is the time in which NBA Assistant can perform its functionality. 

![Link Page](/NBAbiteAssistant/assistant_extension/images/BullshitAdGenerator.png)

NBAbite Assistant will retrieve the actual stream link from this site and open a new tab with the stream. Without the assistant, you will have to go through many more pop up ads before getting what you came for. 

## Installation

There are two ways you can install NBAbite assistant: by Chrome extension, and by browser bookmarklet. 

#### Chrome Extension 

To use NBAbite Assistant as a Chrome extension, you will need the NBAbiteAssistant/assistant_extension folder in this repository. The folder itself is a Chrome extension which we can install to the Chrome browser locally. 

To install a local extension to chrome, visit chrome://extensions in your Chrome browser. Then toggle the 'Developer Mode' switch located at the top of the page. Finally, select 'Load unpacked' to upload the extension!

#### Browser Bookmarklet

To use NBAbite Assistant as a bookmarket in your browser, we will need the single line of javascript code located in NbabiteAssistant/assistant_bookmarket.min.js

This line of javascript will act as our bookmark and when the bookmark is opened, it will run on the current page. To add to your browser, add a new bookmark and change the url to the line of code provided. That's it, you now can run this code on any webpage by opening the new custom bookmark!

## How to Use

For both methods of use, it is important that you are no the 'Your Link is Ready' page on nbabite.com or affiliated sports streaming sites. You must have waited the 3 seconds required before running the extension or bookmark code or it will not work. 

#### Chrome Extension 

Once your Chrome extension is installed, there are two ways to open the stream link. 
* Open the extension and click the button which reads "Go To Stream"
* Use the command: ctrl+shift+space

#### Browser Bookmarklet

With your bookmark set up in your browser, all you need to do to open the streaming page is to open your bookmark. Remember this must be opened on the correct page for this to work, otherwise nothing will happen. 