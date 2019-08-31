chrome.runtime.onInstalled.addListener(() => {
    console.log('onInstalled...');
    // create alarm after extension is installed / upgraded
    chrome.alarms.create('refresh', { periodInMinutes: 1});
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    console.log(alarm.name); // refresh
    helloWorld();
  });

  
  function helloWorld() {
    chrome.tabs.query({"active":true,"lastFocusedWindow":true},function(tabs){
        tabURL = tabs[0].url;
        console.log("urls",tabURL);
    })
  }
