


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



function extraContent()
{

  
  var SinnerSchrader = false;
  var stanislaus = false;
  var portcenter =  false;
  var squal = false;
  var ejh = false;
  var giz = false;
  var fheels = false;
  var digitalherald = false;
  var expanded = false;
  
console.log("CHECK FLASE TRUE SHIT" + fheels + SinnerSchrader + digitalherald + portcenter + ejh + giz + stanislaus)
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
                $('.SinnerSchraderExtra').css('display', 'none');
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
                $('.SqualExtra').css('display', 'none');
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
                $('.ejhExtra').css('display', 'none');
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
                $('.gizExtra').css('display', 'none');
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
                $('.stanislausExtra').css('display', 'none');
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
                $('.portcenterExtra').css('display', 'none');
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
            console.log(" AM I BEING CALLED?? FALSE");
            setTimeout(
              function() 
              {
                $('.digitalheraldExtra').css('display', 'none');
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
            console.log(" AM I BEING CALLED?? ELSE");
                                   
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
                $('.fheelsExtra').css('display', 'none');
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







 //  <!-- <div id="siteContainer" class="conceptExtra hidden extraPage">
 //    <div class="contentContainerExtra">
 //      <div class="pure-g conceptCards">     
 //        <div class="pure-u-1-1">
 //          <div class="card-1-1">
 //            <div class="cardHeaderSinglePage black">
 //              <h1>Fheels.de</h1>
 //            </div>
 //            <div class="cardContent">
 //              <div class="cardImageFull">
 //                <img src="img/fheels.png">
 //              </div>
 //              <div class="pure-g">      
 //                <div class="pure-u-1-2">
 //                  <p>Lorem ipsum dolore architecto itaque quaerat saepe dolore necessitatibus quibusdam commodi voluptatibus, illo! </p>
 //                </div>
 //                <div class="pure-u-1-2">
 //                  <p><a href="http://www.fheels.de">FHEELS .DE</a>Lorem ipsue architecto itaque quaerat saepe dolore necessitatibus quibusdam commodi voluptatibus, illo! </p>
 //                </div>
 //                <div class="cardButtonMore">
 //                  <img src="img/more.png">
 //                </div>
 //              </div>
 //            </div>
 //          </div>
      
 //        </div>
 //      </div>
 //    </div>
 //  </div>
 // -->