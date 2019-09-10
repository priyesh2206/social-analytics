chrome.runtime.onInstalled.addListener(() => {
    console.log('onInstalled extension ...');
    // create alarm after extension is installed / upgraded
    chrome.alarms.create('refreshing',{periodInMinutes: 1});
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    console.log(alarm.name);
    url_Scraper();
    urls=['facebook','whatsapp','instagram','twitter','reddit','flickr','wechat','hike','snapchat','telegram'];
    for( var i=0 ; i<10 ; i++){
    if(!tabURL.includes(urls[i])){
      console.log("url not match timer not start");
    }
    else{
        Timer();
    }
  }
  });

  //**scrapes the URl of active tab of user**//
  function url_Scraper() {
    chrome.tabs.query({"active":true,"lastFocusedWindow":true},function(tabs){
       var tabURL = tabs[0].url;
        console.log("urls",tabURL);
    })
  }
  //**TIMER for user **//
  function Timer(){
    urls=['facebook','whatsapp','instagram','twitter','reddit','flickr','wechat','hike','snapchat','telegram'];
    for( var i=0 ; i<10 ; i++){
    if(tabURL.includes(urls[i]))
    {
     start_Timmer();
    }
    else{
      stop();
    }
  }
  

  }

  //*****/calcute the time/*****// Add need to improve
  function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;                           
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
   a.textContext=(hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
   Timer();
   console.log(a);
  }
  //*****/Statring time Fuction/*****//
 function start_Timmer(){
  var t = setTimeout(add,1000);
    console.log(t);
  }

//*****/Stop time Function/*****/
function stop() {
  clearTimeout(t);
  console.log("THE site is changed");
}