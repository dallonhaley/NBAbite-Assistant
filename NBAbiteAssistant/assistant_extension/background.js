chrome.commands.onCommand.addListener(async (command) => {
    console.log(`Command "${command}" triggered`);
    
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['stream.js'],
    });
});

// //Listens for requests to the js file that generates ads and redirects them to empty js file
// chrome.webRequest.onBeforeRequest.addListener(
//   function(details) {
//       if( details.url == "https://www.cdn4ads.com/intercom.min.js" )
//           return {redirectUrl: "/intercom.min.js" };
//   },
//   {urls: ["*://www.cdn4ads.com/*.js"]},
//   ["blocking"]);