var home = true;
var slide1 = true;
var slide2 = true;
var slide3 = true;
var back = true;



window.onload = function() {
  preLoadSlider();
}

function preLoadSlider(){
  var url = window.location.hash;
  var hash = window.location.href;
  //var hashList = new Array ("Services", "Work", "AboutMe", "Contact");

  //console.log("The hash is " + url);
  //console.log("The url is " + hash);
  //console.log(hashList);

  if(hash.indexOf("Services") >= 0) {
      $('.homepage').animate({'left' : '-75%'}, {duration: 250});
      var home = false;
      var slide1 = true;
      var slide2 = true;
      var slide3 = true;

  }else if(hash.indexOf("Work") >= 0) {
      $('.homepage').animate({'left' : '-75%'}, {duration: 250});
      $('.slide1').animate({'left' : '-70%'}, {duration: 250});
      var home = false;
      var slide1 = false;
      var slide2 = true;
      var slide3 = true;
  }else if(hash.indexOf("AboutMe") >= 0) {
      $('.homepage').animate({'left' : '-75%'}, {duration: 250});
      $('.slide1').animate({'left' : '-70%'}, {duration: 250});
      $('.slide2').animate({'left' : '-65%'}, {duration: 250});
      var home = false;
      var slide1 = false;
      var slide2 = false;
      var slide3 = true;
      console.log("home = " + home + " slide1 = " + slide1 + " slide2 = " + slide2 + " slide3 = " + slide3 );
  }else if(hash.indexOf("Contact") >= 0) {
    $('.homepage').animate({'left' : '-75%'}, {duration: 250});
    $('.slide1').animate({'left' : '-70%'}, {duration: 250});
    $('.slide2').animate({'left' : '-65%'}, {duration: 250});
    $('.slide3').animate({'left' : '-60%'}, {duration: 250});
    var home = false;
    var slide1 = false;
    var slide2 = false;
    var slide3 = false;   
    var back = true; 
    console.log("home is" +  home + slide1 + slide2 + slide3 + back);
  }

}


$( document ).ready(function() {
    slider();
  extraContent();
});



function slider(){

  $('.home').click(function(){
    console.log("home was clicked");
    if(!home){
      $('.homepage').animate({'left' : '0%'}, {duration: 250}); 
      $('.slide1').animate({'left' : '5%'}, {duration: 250});
      $('.slide2').animate({'left' : '10%'}, {duration: 250});
      $('.slide3').animate({'left' : '15%'}, {duration: 250});
      window.location.hash=""
      window.location.href.split('#')[0]
      var stateObj = { foo: "bar" };
      history.pushState(stateObj, "page 1", "#home"); 
      home = true;
      slide1 = true;
      slide2 = true;
      slide3 = true;
      console.log("home = " + home + " slide1 = " + slide1 + " slide2 = " + slide2 + " slide3 = " + slide3 );
    }else{
      $('.homepage').animate({'left' : '0%'}, {duration: 250}); 
      home = true;
    }
  })

  $('.slider1').click(function(){
      console.log("slide1 was clicked");
      window.location.hash=""
      window.location.href.split('#')[0]

      var stateObj = { foo: "bar" };
      history.pushState(stateObj, "page 1", "#Services"); 

    if (!slide1){
      $('.slide1').animate({'left' : '5%'}, {duration: 250});
      $('.slide2').animate({'left' : '10%'}, {duration: 250});
      $('.slide3').animate({'left' : '15%'}, {duration: 250});    
      slide1 = true;
      slide2 = true;
      slide3 = true;
      
    }
    else{
      $('.homepage').animate({'left' : '-75%'}, {duration: 250});
      $('.slide1').animate({'left' : '5%'}, {duration: 250});
      home = false;
      
    }

  })

  $('.slider2').click(function(){
    console.log("slider2 clicked");

      window.location.hash=""
      window.location.href.split('#')[0]
      
      var stateObj = { foo: "bar" };
      history.pushState(stateObj, "page 1", "#Work"); 

    if (!slide2){
      $('.slide2').animate({'left' : '10%'}, {duration: 250});
      $('.slide3').animate({'left' : '15%'}, {duration: 250});
      slide2 = true;
      slide3 = true;
      
    }
    else{
      $('.homepage').animate({'left' : '-75%'}, {duration: 250});
      $('.slide1').animate({'left' : '-70%'}, {duration: 250});
      $('.slide2').animate({'left' : '10%'}, {duration: 250});  
      home = false;
      slide1 = false;
    }

  })

  $('.slider3').click(function(){
    console.log("slide3 was clicked");

    window.location.hash=""
    window.location.href.split('#')[0]
      
    var stateObj = { foo: "bar" };
    history.pushState(stateObj, "page 1", "#AboutMe"); 

    if (!slide3){
      $('.slide3').animate({'left' : '15%'}, {duration: 250});
      slide3 = true;
    }
    else{
      $('.homepage').animate({'left' : '-75%'}, {duration: 250});
      $('.slide1').animate({'left' : '-70%'}, {duration: 250});
      $('.slide2').animate({'left' : '-65%'}, {duration: 250});
      $('.slide3').animate({'left' : '15%'}, {duration: 250});    
      home = false;
      slide1 = false;
      slide2 = false;
      
    }

  })

  $('.back').click(function(){
    console.log("back was clicked");
    console.log("states" + home + slide1 + slide2 + slide3);
    window.location.hash=""
      window.location.href.split('#')[0]
      
      var stateObj = { foo: "bar" };
      history.pushState(stateObj, "page 1", "#Contact"); 




    $('.homepage').animate({'left' : '-75%'}, {duration: 250});
    $('.slide1').animate({'left' : '-70%'}, {duration: 250});
    $('.slide2').animate({'left' : '-65%'}, {duration: 250});
    $('.slide3').animate({'left' : '-60%'}, {duration: 250});


    home = false;
    slide1 = false;
    slide2 = false;
    slide3 = false;
    

  })

};

// function checkHash(){

// if(window.location.hash) {
//     console.log('exists');
// } else {
//   console.log('doesnt exists');
// }
// }

function extraContent()
{

  
  var SinnerSchrader = true;
  var stanislaus = true;
  var portcenter =  true;
  var squal = true;
  var ejh = true;
  var giz = true;
  var fheels = true;
  var digitalherald = true;
  var expanded = true;
  

  $('.SinnerSchrader').click(function()
    {                        
        if (!SinnerSchrader)
        {    
            $('.SinnerSchraderExtra').animate({'top':'-250%'}, {duration: 250});                              
            $('#pageContainer').animate({'top':'0%'}, {duration: 250});            
            SinnerSchrader = true;            
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#Work"); 
            setTimeout(
              function() 
              {
                $('.conceptExtra').css('display', 'none');
              }, 250);    
        }
        else
        {
          $('.SinnerSchraderExtra').css('display', 'block');
          $('.SinnerSchraderExtra').animate({'top':'0%'}, {duration: 250});
           $('#pageContainer').animate({'top':'-250%'}, {duration: 250});
            SinnerSchrader = false;
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#SinnerSchrader"); 
                                   
        }
    });
 
 $('.Squal').click(function()
    {                        
        if (!squal)
        {    
            $('.SqualExtra').animate({'top':'-250%'}, {duration: 250});                              
            $('#pageContainer').animate({'top':'0%'}, {duration: 250});            
            squal = true;            
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#Work"); 
            setTimeout(
              function() 
              {
                $('.conceptExtra').css('display', 'none');
              }, 250);    
        }
        else
        {
          $('.SqualExtra').css('display', 'block');
          $('.SqualExtra').animate({'top':'0%'}, {duration: 250});
           $('#pageContainer').animate({'top':'-250%'}, {duration: 250});
            squal = false;
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#Squal"); 
                                   
        }
    });
 


$('.ejh').click(function()
    {                        
        if (!ejh)
        {    
            $('.ejhExtra').animate({'top':'-250%'}, {duration: 250});                              
            $('#pageContainer').animate({'top':'0%'}, {duration: 250});            
            ejh = true;            
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#Work"); 
            setTimeout(
              function() 
              {
                $('.conceptExtra').css('display', 'none');
              }, 250);    
        }
        else
        {
          $('.ejhExtra').css('display', 'block');
          $('.ejhExtra').animate({'top':'0%'}, {duration: 250});
           $('#pageContainer').animate({'top':'-250%'}, {duration: 250});
            ejh = false;
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#ejh"); 
                                   
        }
    });

$('.giz').click(function()
    {                        
        if (!giz)
        {    
            $('.gizExtra').animate({'top':'-250%'}, {duration: 250});                              
            $('#pageContainer').animate({'top':'0%'}, {duration: 250});            
            giz = true;            
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#Work"); 
            setTimeout(
              function() 
              {
                $('.conceptExtra').css('display', 'none');
              }, 250);    
        }
        else
        {
          $('.gizExtra').css('display', 'block');
          $('.gizExtra').animate({'top':'0%'}, {duration: 250});
           $('#pageContainer').animate({'top':'-250%'}, {duration: 250});
            giz = false;
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#giz"); 
                                   
        }
    });


$('.stanislaus').click(function()
    {                        
        if (!stanislaus)
        {    
            $('.stanislausExtra').animate({'top':'-250%'}, {duration: 250});                              
            $('#pageContainer').animate({'top':'0%'}, {duration: 250});            
            stanislaus = true;            
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#Work"); 
            setTimeout(
              function() 
              {
                $('.conceptExtra').css('display', 'none');
              }, 250);    
        }
        else
        {
          $('.stanislausExtra').css('display', 'block');
          $('.stanislausExtra').animate({'top':'0%'}, {duration: 250});
           $('#pageContainer').animate({'top':'-250%'}, {duration: 250});
            stanislaus = false;
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#stanislaus"); 
                                   
        }
    });

$('.portcenter').click(function()
    {                        
        if (!portcenter)
        {    
            $('.portcenterExtra').animate({'top':'-250%'}, {duration: 250});                              
            $('#pageContainer').animate({'top':'0%'}, {duration: 250});            
            portcenter = true;            
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#Work"); 
            setTimeout(
              function() 
              {
                $('.conceptExtra').css('display', 'none');
              }, 250);    
        }
        else
        {
          $('.portcenterExtra').css('display', 'block');
          $('.portcenterExtra').animate({'top':'0%'}, {duration: 250});
           $('#pageContainer').animate({'top':'-250%'}, {duration: 250});
            portcenter = false;
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#portcenter"); 
                                   
        }
    });

$('.digitalherald').click(function()
    {                        
        if (!digitalherald)
        {    
            $('.digitalheraldExtra').animate({'top':'-250%'}, {duration: 250});                              
            $('#pageContainer').animate({'top':'0%'}, {duration: 250});            
            digitalherald = true;            
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#Work"); 
            setTimeout(
              function() 
              {
                $('.conceptExtra').css('display', 'none');
              }, 250);    
        }
        else
        {
          $('.digitalheraldExtra').css('display', 'block');
          $('.digitalheraldExtra').animate({'top':'0%'}, {duration: 250});
           $('#pageContainer').animate({'top':'-250%'}, {duration: 250});
            digitalherald = false;
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#digitalherald"); 
                                   
        }
    });

$('.fheels').click(function()
    {                        
        if (!fheels)
        {    
            $('.fheelsExtra').animate({'top':'-250%'}, {duration: 250});                              
            $('#pageContainer').animate({'top':'0%'}, {duration: 250});            
            fheels = true;            
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#Work"); 
            setTimeout(
              function() 
              {
                $('.conceptExtra').css('display', 'none');
              }, 250);    
        }
        else
        {
          $('.fheelsExtra').css('display', 'block');
          $('.fheelsExtra').animate({'top':'0%'}, {duration: 250});
           $('#pageContainer').animate({'top':'-250%'}, {duration: 250});
            fheels = false;
            window.location.hash=""
            window.location.href.split('#')[0]
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 1", "#fheels"); 
                                   
        }
    });



 };




$(function(){
  // Bind the swipeHandler callback function to the swipe event on div.box
  $( "slider1" ).on( "swipe", swipeHandler );
 
  // Callback function references the event target and adds the 'swipe' class to it
  function swipeHandler( event ){
    if (!slide3){
      $('.slide3').animate({'left' : '15%'}, {duration: 250});
      slide3 = true;
    }
    else{
      $('.homepage').animate({'left' : '-75%'}, {duration: 250});
      $('.slide1').animate({'left' : '-70%'}, {duration: 250});
      $('.slide2').animate({'left' : '-65%'}, {duration: 250});
      home = false;
      slide1 = false;
      slide2 = false;
    }
  }
});



























/*


//$('.conceptExtra').css('display: none');

$( document ).ready(function() {

  slider();

});


// SLIDE Home Page
function slider()
{

  var expandedHome = true;
  var expanded1 = true;
  var expanded2 = true;
  var expanded3 = true;

  // HOMEPAGE

  $('.homepage').click(function()
    {
      if (!expandedHome)
        { 
          $(this).animate({'left' : '0px'}, {duration : 250});                
          expandedHome = true;   
          console.log(expandedHome + "HOMEPAGE");
        }
        else
        {          
          $(this).animate({'left' : '0%'}, {duration : 250});
          expandedHome = false;
          console.log(expandedHome + "HOMEPAGE");
          // $('.slide1').animate({'left' : '5%'}, {duration: 250});
          // $('.slide2').animate({'left' : '15%'}, {duration: 250});
          // $('.slide3').animate({'left' : '10%'}, {duration: 250});  
        }
    });

  // SLIDE 1

   $('.slide1').click(function()
                      {
                        
                          if (!expanded2)
                          {
                              $(this).animate({'left' : '5%'}, {duration : 250});
                              $('.frontEnd').animate({'left' : '10%'}, {duration: 250});
                              $('.design').animate({'left' : '15%'}, {duration: 250});
                              expanded2 = true;
                              expandedHome = true;
                              console.log(expandedHome + "HOMEPAGE");
                              
                          }
                          else
                          {
                             $(this).animate({'left' : '5%'}, {duration: 250});
                             $('.homepage').animate({'left' : '-75%'}, {duration: 250});
                              expanded2 = false;
                              expandedHome = false;  
                              console.log(expandedHome + "HOMEPAGE");
                              
                          }
                      });

 };


/*
$(function()
{
  
  $('.listConcept').click(function()

    {
      if (expanded2)
        {     
          //$(this).animate({'left' : '5%'}, {duration: 250});
          $('.homepage').animate({'left' : '-75%'}, {duration: 250});
          expanded2 = false;
          expandedHome = false;
          console.log("HomePage" + expandedHome);
          console.log("Page2" + expanded2);
            
        }
        else
        {        
          $(this).animate({'left' : '5%'}, {duration : 250});
          $('.frontEnd').animate({'left' : '10%'}, {duration: 250});
          $('.design').animate({'left' : '15%'}, {duration: 250});
          expanded2 = true;
          console.log(expandedHome);  
          console.log(expanded2);
        }
    });
 });


// END SLIDE 1



// SLIDE 2


$(function()
{
  var expanded = true;
  $('.listFrontEnd').click(function()
                      {
                        
                          if (!expanded)
                          {
                              $(this).animate({'left' : '5%'}, {duration : 250});
                              $('.frontEnd').animate({'left' : '10%'}, {duration: 250});
                              $('.design').animate({'left' : '15%'}, {duration: 250});
                              expanded = true;
                          }
                          else
                          {
                             $(this).animate({'left' : '5%'}, {duration: 250});
                             $('.homepage').animate({'left' : '-75%'}, {duration: 250});
                             $('.concept').animate({'left' : '-70%'}, {duration: 250});
                              expanded = false;
                          }
                      });
 });
$(function()
{
  var expanded = true;
  $('.listDesign').click(function()
                      {
                        
                          if (!expanded)
                          {
                              $(this).animate({'left' : '5%'}, {duration : 250});
                              $('.frontEnd').animate({'left' : '10%'}, {duration: 250});
                              $('.design').animate({'left' : '15%'}, {duration: 250});
                              expanded = true;
                          }
                          else
                          {
                             $(this).animate({'left' : '5%'}, {duration: 250});
                             $('.homepage').animate({'left' : '-75%'}, {duration: 250});
                             $('.concept').animate({'left' : '-70%'}, {duration: 250});                             
                             $('.frontEnd').animate({'left' : '-65%'}, {duration: 250});
                              expanded = false;
                          }
                      });
 });
$(function()
{
  var expanded = true;
  $('.listAbout').click(function()
                      {
                        
                          if (!expanded)
                          {
                              $(this).animate({'left' : '5%'}, {duration : 250});
                              $('.frontEnd').animate({'left' : '10%'}, {duration: 250});
                              $('.design').animate({'left' : '15%'}, {duration: 250});
                              expanded = true;
                          }
                          else
                          {
                             $(this).animate({'left' : '5%'}, {duration: 250});
                              $('.homepage').animate({'left' : '-75%'}, {duration: 250});
                             $('.concept').animate({'left' : '-70%'}, {duration: 250});
                             $('.design').animate({'left' : '-60%'}, {duration: 250});
                             $('.frontEnd').animate({'left' : '-65%'}, {duration: 250});
                              expanded = false;
                          }
                      });
 });


$(function()
{
  var expanded = true;
  $('.concept').click(function()
                      {
                      	
                          if (!expanded)
                          {
                              $(this).animate({'left' : '5%'}, {duration : 250});
                              $('.frontEnd').animate({'left' : '10%'}, {duration: 250});
                              $('.design').animate({'left' : '15%'}, {duration: 250});
                              expanded = true;
                          }
                          else
                          {
                             $(this).animate({'left' : '5%'}, {duration: 250});
                             $('.homepage').animate({'left' : '-75%'}, {duration: 250});
                              expanded = false;
                          }
                      });
 });
$(function()
{
  var expanded = true;
  $('.frontEnd').click(function()
                      {
                      	
                          if (!expanded)
                          {
                              $(this).animate({'left' : '10%'}, {duration : 250});
                              $('.design').animate({'left' : '15%'}, {duration: 250});
                              expanded = true;
                          }
                          else
                          {
                             $(this).animate({'left' : '10%'}, {duration: 250});
                             $('.concept').animate({'left' : '-70%'}, {duration: 250});
                             $('.homepage').animate({'left' : '-75%'}, {duration: 250});
                              expanded = false;
                          }
                      });
 });

$(function()
{
  var expanded = true;
  $('.design').click(function()
                      {
                      	
                          if (!expanded)
                          {
                              $(this).animate({'left' : '15%'}, {duration : 250});
                              expanded = true;
                              
                          }
                          else
                          {
                             $(this).animate({'left' : '15%'}, {duration: 250});
                             $('.frontEnd').animate({'left' : '-65%'}, {duration: 250});
                             $('.concept').animate({'left' : '-70%'}, {duration: 250});
                             $('.homepage').animate({'left' : '-75%'}, {duration: 250});
                              expanded = false;
                          }
                      });
 });


$(function()
{
  var expanded = true;
  $('.about').click(function()
                      {
                      	
                          if (!expanded)
                          {
                              
                              expanded = true;
                          }
                          else
                          {
                             $(this).animate({'left' : '20%'}, {duration: 250});
                             $('.design').animate({'left' : '-60%'}, {duration: 250});
                             $('.frontEnd').animate({'left' : '-65%'}, {duration: 250});
                             $('.concept').animate({'left' : '-70%'}, {duration: 250});
                             $('.homepage').animate({'left' : '-75%'}, {duration: 250});
                              expanded = false;
                          }
                      });
 });
*/