
/* Global Variables for the opening and closing of the different parts of the Website */
var home = true;
var slide1 = true;
var slide2 = true;
var slide3 = true;
var back = true;
var url = "";



window.onload = function() {
  preLoadSlider();
}


/* Check the URL and load the correct site to load before the DOM has loaded */
function preLoadSlider(){
  url = window.location.hash;
  hash = window.location.href;

  if(hash.indexOf("Services") >= 0) {
      $(".homepage").animate({"left" : "-75%"}, {duration: 250});
      home = false;
       slide1 = true;
       slide2 = true;
       slide3 = true;

  }else if(hash.indexOf("Work") >= 0) {
      $(".homepage").animate({"left" : "-75%"}, {duration: 250});
      $(".slide1").animate({"left" : "-70%"}, {duration: 250});
      home = false;
      slide1 = false;
      slide2 = true;
      slide3 = true;
  }else if(hash.indexOf("AboutMe") >= 0) {
      $(".homepage").animate({"left" : "-75%"}, {duration: 250});
      $(".slide1").animate({"left" : "-70%"}, {duration: 250});
      $(".slide2").animate({"left" : "-65%"}, {duration: 250});
      home = false;
      slide1 = false;
      slide2 = false;
      slide3 = true;
  }else if(hash.indexOf("Contact") >= 0) {
    $(".homepage").animate({"left" : "-75%"}, {duration: 250});
    $(".slide1").animate({"left" : "-70%"}, {duration: 250});
    $(".slide2").animate({"left" : "-65%"}, {duration: 250});
    $(".slide3").animate({"left" : "-60%"}, {duration: 250});
    home = false;
    slide1 = false;
    slide2 = false;
    slide3 = false;
    back = true;
  }
}


$( document ).ready(function() {
    slider();
    extraContentNew();
});

/* If everything has loaded call the ability for the user to use the different sites as links */
function slider(){
  $(".home").click(function(){
    if(!home){
      $(".homepage").animate({"left" : "0%"}, {duration: 250});
      $(".slide1").animate({"left" : "5%"}, {duration: 250});
      $(".slide2").animate({"left" : "10%"}, {duration: 250});
      $(".slide3").animate({"left" : "15%"}, {duration: 250});
      window.location.hash="";
      window.location.href.split("#")[0];
      stateObj = { foo: "bar" };
      history.pushState(stateObj, "page 1", "#home");
      home = true;
      slide1 = true;
      slide2 = true;
      slide3 = true;
    }else{
      $(".homepage").animate({"left" : "0%"}, {duration: 250});
      $(".slide1").animate({"left" : "5%"}, {duration: 250});
      $(".slide2").animate({"left" : "10%"}, {duration: 250});
      $(".slide3").animate({"left" : "15%"}, {duration: 250});
      home = true;
    }
  });
  $(".slider1").click(function(){
      window.location.hash="";
      window.location.href.split("#")[0];
      stateObj = { foo: "bar" };
      history.pushState(stateObj, "page 1", "#Services");
    if (!slide1){
      $(".slide1").animate({"left" : "5%"}, {duration: 250});
      $(".slide2").animate({"left" : "10%"}, {duration: 250});
      $(".slide3").animate({"left" : "15%"}, {duration: 250});
      slide1 = true;
      slide2 = true;
      slide3 = true;
    }
    else{
      $(".homepage").animate({"left" : "-75%"}, {duration: 250});
      $(".slide1").animate({"left" : "5%"}, {duration: 250});
      $(".slide2").animate({"left" : "10%"}, {duration: 250});
      $(".slide3").animate({"left" : "15%"}, {duration: 250});
      home = false;
    }
  });
  $(".slider2").click(function(){
      window.location.hash="";
      window.location.href.split("#")[0];
      stateObj = { foo: "bar" };
      history.pushState(stateObj, "page 1", "#Work");
    if (!slide2){
      $(".slide2").animate({"left" : "10%"}, {duration: 250});
      $(".slide3").animate({"left" : "15%"}, {duration: 250});
      slide2 = true;
      slide3 = true;
    }
    else{
      $(".homepage").animate({"left" : "-75%"}, {duration: 250});
      $(".slide1").animate({"left" : "-70%"}, {duration: 250});
      $(".slide2").animate({"left" : "10%"}, {duration: 250});
      $(".slide3").animate({"left" : "15%"}, {duration: 250});
      home = false;
      slide1 = false;
    }
  });
  $(".slider3").click(function(){
    window.location.hash="";
    window.location.href.split("#")[0];
    stateObj = { foo: "bar" };
    history.pushState(stateObj, "page 1", "#AboutMe");

    if (!slide3){
      $(".slide3").animate({"left" : "15%"}, {duration: 250});
      slide3 = true;
    }else{
      $(".homepage").animate({"left" : "-75%"}, {duration: 250});
      $(".slide1").animate({"left" : "-70%"}, {duration: 250});
      $(".slide2").animate({"left" : "-65%"}, {duration: 250});
      $(".slide3").animate({"left" : "15%"}, {duration: 250});
      home = false;
      slide1 = false;
      slide2 = false;
    }

  });

  $(".back").click( function()
  {
    window.location.hash="";
    window.location.href.split("#")[0];
    stateObj = { foo: "bar" };
    history.pushState(stateObj, "page 1", "#Contact");
    $(".homepage").animate({"left" : "-75%"}, {duration: 250});
    $(".slide1").animate({"left" : "-70%"}, {duration: 250});
    $(".slide2").animate({"left" : "-65%"}, {duration: 250});
    $(".slide3").animate({"left" : "-60%"}, {duration: 250});
    home = false;
    slide1 = false;
    slide2 = false;
    slide3 = false;
  });
}


function extraContentNew(){
  $(".backButton").click(function(){
  $("#pageContainer").animate({"top":"0%"}, {duration: 250});
    setTimeout(
      function()
      {
        $(".extraPage").addClass("hidden");
      }, 270);
  });
  $(".SinnerSchrader").click(function(){
    $("#pageContainer").animate({"top":"-100%"}, {duration: 250});
    $(".SinnerSchraderExtra").removeClass("hidden");
  });
  $(".Squal").click(function(){
    $("#pageContainer").animate({"top":"-100%"}, {duration: 250});
    $(".SqualExtra").removeClass("hidden");
  });
  $(".ejh").click(function(){
    $("#pageContainer").animate({"top":"-100%"}, {duration: 250});
    $(".ejhExtra").removeClass("hidden");
  });
  $(".giz").click(function(){
    $("#pageContainer").animate({"top":"-100%"}, {duration: 250});
    $(".gizExtra").removeClass("hidden");
  });
  $(".stanislaus").click(function(){
    $("#pageContainer").animate({"top":"-100%"}, {duration: 250});
    $(".stanislausExtra").removeClass("hidden");
  });
  $(".portcenter").click(function(){
    $("#pageContainer").animate({"top":"-100%"}, {duration: 250});
    $(".portcenterExtra").removeClass("hidden");
  });
  $(".digitalherald").click(function(){
    $("#pageContainer").animate({"top":"-100%"}, {duration: 250});
    $(".digitalheraldExtra").removeClass("hidden");
  });
  $(".fheels").click(function(){
    $("#pageContainer").animate({"top":"-100%"}, {duration: 250});
    $(".fheelsExtra").removeClass("hidden");
  });
}




