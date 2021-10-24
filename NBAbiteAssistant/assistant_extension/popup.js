document.addEventListener('DOMContentLoaded', function() {
  let streamButton = document.getElementById("streamButton");

  streamButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['stream.js'],
    });
  });
});

