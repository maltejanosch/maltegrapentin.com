$( document ).ready(function() {

  slider();
  extraContent();

});






function slider(){

var home = true;
var slide1 = true;
var slide2 = true;
var slide3 = true;


  $('.home').click(function(){

    if(!home){
      $('.homepage').animate({'left' : '0%'}, {duration: 250}); 
      $('.slide1').animate({'left' : '5%'}, {duration: 250});
      $('.slide2').animate({'left' : '10%'}, {duration: 250});
      $('.slide3').animate({'left' : '15%'}, {duration: 250});
      home = true;
      slide1 = true;
      slide2 = true;
      slide3 = true;
    }
  })

  $('.slider1').click(function(){

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
      home = false;
    }

  })

  $('.slider2').click(function(){

    if (!slide2){
      $('.slide2').animate({'left' : '10%'}, {duration: 250});
      $('.slide3').animate({'left' : '15%'}, {duration: 250});
      slide2 = true;
      slide3 = true;
    }
    else{
      $('.homepage').animate({'left' : '-75%'}, {duration: 250});
      $('.slide1').animate({'left' : '-70%'}, {duration: 250});
      home = false;
      slide1 = false;
    }

  })

  $('.slider3').click(function(){

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

  })

  $('.back').click(function(){

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








function extraContent()
{
  var expanded = true;
  $('.cardButtonMore').click(function()
                      {
                        
                          if (!expanded)
                          {
                              
                              $('.conceptExtra').animate({'top':'250%'}, {duration: 250});                              
                              $('#pageContainer').animate({'top':'0%'}, {duration: 250});
                              expanded = true;
                              setTimeout(
                                function() 
                                {
                                  $('.conceptExtra').css('display', 'none');
                                }, 250);

                              
                          }
                          else
                          {
                            $('.conceptExtra').css('display', 'block');
                            $('.conceptExtra').animate({'top':'00%'}, {duration: 250});
                             $('#pageContainer').animate({'top':'-250%'}, {duration: 250});
                              expanded = false;
                               
                          }
                      });
 };































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