//main-src.js
var sSession=1500;
var sBreak=300;
var pomodoRun=false;
var baseTimeArr=[0,25,00];
var tempTimeArr=[];
var globalTimer=0;
var isBreak=false;
$(document).ready(function(){
  buildInterface();
  $(".display-num:eq(0)").text(converCuttedTTRO(sBreak));
  $(".display-num:eq(1)").text(converCuttedTTRO(sSession));
  $(".display-block").click(function(){
    pomodoToggleRun();
  });

  $("ul:eq(0)>li:eq(0)").click(function(){
    parseInt(sBreak);
    if(sBreak>0)sBreak=sBreak-60;
    $(".display-num:eq(0)").text('');
    $(".display-num:eq(0)").text(converCuttedTTRO(sBreak));
    $("h3").text("break");
    $("h4").text(converTTRO(sBreak));
    $("h5").text(converTTRO(sBreak));
  });
  $("ul:eq(0)>li:eq(2)").click(function(){
    parseInt(sBreak);
    sBreak=sBreak+60;
    $(".display-num:eq(0)").text('');
    $(".display-num:eq(0)").text(converCuttedTTRO(sBreak));
    $("h3").text("break");
    $("h4").text(converTTRO(sBreak));
    $("h5").text(converTTRO(sBreak));
  });
  $("ul:eq(1)>li:eq(0)").click(function(){
    parseInt(sSession);
    if(sSession>0)sSession=sSession-60;
    $(".display-num:eq(1)").text('');
      $(".display-num:eq(1)").text(converCuttedTTRO(sSession));
      $("h3").text("session");
      $("h4").text(converTTRO(sSession));
      $("h5").text(converTTRO(sSession));
  });
  $("ul:eq(1)>li:eq(2)").click(function(){
    parseInt(sSession);
    sSession=sSession+60;
    $(".display-num:eq(1)").text('');
      $(".display-num:eq(1)").text(converCuttedTTRO(sSession));
      $("h3").text("session");
      $("h4").text(converTTRO(sSession));
      $("h5").text(converTTRO(sSession));

  });

});
function qTimer(){
  $("h3").text("running");
  if(isBreak==false){
    baseTimeArr=converTTRO(sSession,"array");
  }else{
    baseTimeArr=converTTRO(sBreak,"array");
  }
}
function baseTimeDiff(arrNow,arrFut){
  var hours=arrNow[0]-arrFut[0];
  var minutes=arrNow[1]-arrFut[1];
  var seconds=arrNow[2]-arrFut[2];
  console.log(hours+" "+minutes+" "+seconds);
  return hours,minutes,seconds;
}
function getCurrentTime(){

  // var minutes = 1000 * 60;
  // var hours = minutes * 60;
  // var days = hours * 24;
  // var years = days * 365;
  var d = new Date();
  var currentHours = d.getHours();
  var currentMinutes = d.getMinutes();
  var currentSeconds = d.getSeconds();
  var timeArr=[];
  timeArr.push(currentHours);
  timeArr.push(currentMinutes);
  timeArr.push(currentSeconds);
  //console.log(currentHours+" "+currentMinutes+" "+currentSeconds);
return timeArr;
}
function buildInterface(){
  $("ul:eq(0)>li:eq(0)").addClass("minus-button");
  $("ul:eq(1)>li:eq(0)").addClass("minus-button");
  $("ul:eq(0)>li:eq(2)").addClass("plus-button");
  $("ul:eq(1)>li:eq(2)").addClass("plus-button");
  $("ul:eq(0)>li:eq(1)").addClass("display-num");
  $("ul:eq(1)>li:eq(1)").addClass("display-num");
}
//------conversion untested functions-------
//var baseTimeArr=[1,30,30];
//var baseSeconds=0;
function converTTS(time) {
  //var dd=typeof(time);
  //console.log(dd);
  var totalSeconds=0;
    totalSeconds+=time[0]*3600;
    totalSeconds+=time[1]*60;
    totalSeconds+=time[2];
    console.log(totalSeconds+"totalSeconds");
    return totalSeconds;
}

function converTTRO(time,param) {
  //var dd=typeof(time);
  //console.log(dd);
  var tempSec=0;
  var tempMin=0;
  var tempHrs=0;
  var tempArrSec=0;
  var tempArrMin=0;
  var tempArrHrs=0;

  tempHrs=Math.floor(time/3600);
  tempArrHrs=tempHrs;
  time=Math.floor(time%3600);
  if(tempHrs<10)tempHrs="0"+tempHrs;

  tempMin=Math.floor(time/60);
  tempArrMin=tempMin;
  if(tempMin<10)tempMin="0"+tempMin;

  time=Math.floor(time%60);
  tempSec=tempArrSec=time;
  if(tempSec<10)tempSec="0"+tempSec;

  console.log(tempHrs);
  console.log(tempMin);
  console.log(tempSec);
  //console.log(remain);
  // totalReadableObject[0]=time%120;
  // totalReadableObject[0]=time%120;
    //console.log(totalReadableObject);
    if(param=="array"){
      return [tempArrHrs,tempArrMin,tempArrSec];
    }else{
      if(tempHrs<=0){
        return tempMin+":"+tempSec;
      }else{
        return [tempHrs+":"+tempMin+":"+tempSec];
      }
    }
}
function converCuttedTTRO(time) {
  //var dd=typeof(time);
  //console.log(dd);
  var tempSec;
  var tempMin;
  var tempHrs;

  tempHrs=Math.floor(time/3600);
  time=Math.floor(time%3600);
  if(tempHrs<10)tempHrs="0"+tempHrs;

  tempMin=Math.floor(time/60);
  if(tempMin<10)tempMin="0"+tempMin;

  time=Math.floor(time%60);
  tempSec=time;
  if(tempSec<10)tempSec="0"+tempSec;

  console.log(tempHrs);
  console.log(tempMin);
  console.log(tempSec);
  //console.log(remain);


  // totalReadableObject[0]=time%120;
  // totalReadableObject[0]=time%120;
    //console.log(totalReadableObject);
    if(tempHrs<=0){
      return tempMin;
    }else{
      return "99";
    }

}
//baseSeconds=converTTS(baseTimeArr);
//converTTRO(baseSeconds);
//------conversion untested functions joke-------

function pomodoToggleRun(){
  //initTimer();

  if(pomodoRun===false){
    pomodoRun=true;
    qTimer();
    tempTimeArr=getCurrentTime();
    tempTimeArr[0]=tempTimeArr[0]+baseTimeArr[0];
    tempTimeArr[1]=tempTimeArr[1]+baseTimeArr[1];
    tempTimeArr[2]=tempTimeArr[2]+baseTimeArr[2];

    globalTimer=setInterval(function(){

      //var difference= baseTimeDiff(getCurrentTime(),tempTimeArr);
      var a=converTTS(tempTimeArr);//convert now+25min time to seconds
      //var b=converTTS(baseTimeArr);//convert 25 min to seconds
      var c=converTTS(getCurrentTime());//conv current time
      var difference=a-c;
      ///var answer=converTTRO(difference);
      $("h4").text(converTTRO(difference));
      $("h5").text(converTTRO(difference));
      if(difference==0){
        clearInterval(globalTimer);
        if(isBreak==false){
          isBreak=true;
        }else{
          isBreak=false;
        }
        $("h3").text("click to run");
        pomodoRun=false;
      }
      console.log(difference);


    }, 400);

    //vasyaRunFunc();
  }else{
    clearInterval(globalTimer);
    //globalTimer=0;
    pomodoRun=false;
    //begiLolaBegi();
  }
}
function smallAlert(){

}
