//***********//BACKGROUND PAGE OF CHRONME EXTESION//*****************//
chrome.runtime.onInstalled.addListener(() => {
  console.log('onInstalled extension ...');
  //*****/create alarm after extension is installed / upgrade/*****//
  chrome.alarms.create('refreshing',{periodInMinutes: 1});
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log(alarm.name);
  userFlag=localStorage.getItem('isLoggedIn');
  login_Checker();
});
//*****/Login Checker/*****//
login_Checker=()=>{
  console.log("Flag",userFlag);
  if(userFlag == "true"){
    url_Scraper();//scraping th url
    getAge();//Fetch the age
  }
  else{
        console.log("plz login");
      }
}

//*****/scrapes the URl of active tab of user/*****//
function url_Scraper() {
  chrome.tabs.query({"active":true,"lastFocusedWindow":true},function(tabs){
      tabURL = tabs[0].url;
      console.log("urls",tabURL);
    })
}
//*****/TIMER for user/*****//
function Timer(){
  console.log("taburl=",tabURL);
  for( var i=0 ; i<10 ; i++){
  urls=['facebook','whatsapp','instagram','twitter','reddit','flickr','wechat','hike','snapchat','telegram'];
      if(tabURL.includes(urls[i]))
           {
              start_Timmer();
              break;
            }
           else{
             console.log("THE site is changes");
           } 
    }
}
//*****/calcute the time/*****//
var hours,minutes;
hours=0;
minutes=0;
function time_Cal() {
        minutes++;                           
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
  console.log("Hours:",hours);
  console.log("Minutes:",minutes);
}

//*****/Statring time Fuction/*****//
function start_Timmer(){
   t = setTimeout(time_Cal,1000);
 }

 function stop_timmer(){
    clearTimeout(t);
 }

 const getAge=()=>{
  console.log("UserName",localStorage.getItem('userName'))
  if(localStorage.getItem('userName')!=null)
  fetch(`http://localhost:4000/api/users/age/${localStorage.getItem('userName')}`).then(res=>res.json()).then(data=>ageTimer(data.Age));
}

const ageTimer=(age)=>{
  if(age >=25 || age <=36){
    console.log("I am Between 11-16");
    Timer();
    if(hours>=2){
      stop_timmer()
    }

  }
}