//main-src.js

var sSession;
var sBreak;
var pomodoRun=false;
var baseTimeArr=[0,25,0];
var tempTimeArr=[];

$(document).ready(function(){
  buildInterface();
  $(".display-block").click(function(){
    pomodoToggleRun();
  });

});
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
function pomodoToggleRun(){

  if(pomodoRun===false){
    pomodoRun=true;
    tempTimeArr=getCurrentTime();
    tempTimeArr[0]=tempTimeArr[0]+baseTimeArr[0];
    tempTimeArr[1]=tempTimeArr[1]+baseTimeArr[1];
    tempTimeArr[2]=tempTimeArr[2]+baseTimeArr[2];
    //vasyaRunFunc();
  }else{
    pomodoRun=false;
    console.log(tempTimeArr+"PAssed");
    var x= baseTimeDiff(tempTimeArr,getCurrentTime());
    console.log(x+"x");
    //begiLolaBegi();
  }
}
