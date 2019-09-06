chrome.runtime.onInstalled.addListener(() => {
    console.log('onInstalled extension ...');
    // create alarm after extension is installed / upgraded
    chrome.alarms.create('refreshing', { periodInMinutes: 1});
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    console.log(alarm.name); // refresh
    url_Scraper();
  });

  //**scrapes the URl of active tab of user**//
  function url_Scraper() {
    chrome.tabs.query({"active":true,"lastFocusedWindow":true},function(tabs){
        tabURL = tabs[0].url;
        console.log("urls",tabURL);
    })
  }
