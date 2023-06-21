////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //GLOBAL VARIABLES
 var i; //rep number
 var ins;
 var exs;
 var hld;//custome breath inputs
 var kvalue;//radio box value
 var mine;
 var mine1;
 var mine2;//main functions stored Variable
 var radiobtninput;
 //ANOTHER GLOBAL VARIABLE FOR BGM IS DOWN THERE
 window.onload = function aAnime() {
    document.getElementById("aym").className="glowing"
    document.getElementById("aym1").className="glowing"
    
}
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// MENU BAR HIDE FUNCTIONS  ////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 function showMenuBar(){
    ele = document.getElementById("menuBar");
    ele.style.left="20px";
    ele.style.opacity="1";
    document.getElementById("closeMenuIcon").style.display="block";  
    document.getElementById("showMenuIcon").style.display="none";      
    
}

function hideMenuBar(){
    ele = document.getElementById("menuBar");
    ele.style.left="-510px";
    ele.style.opacity="0";
    document.getElementById("closeMenuIcon").style.display="none";  
    document.getElementById("showMenuIcon").style.display="block";      
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// IF CUSTOME IS CHECKED  ////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 setInterval(check_if_custom_selected,1000); //FUNCTION THAT RUNS AUTOMATICALLY TO CHECK CUSTOM IS SELECTED
    function check_if_custom_selected(){
     var radiobtnchecked = document.getElementsByName('meth');            
     if(radiobtnchecked[3].checked){
         showhiddenbar();        
     }
     else
     {
         document.getElementById("hiddenbar").style.display = "none";
     }
    }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// INPUT VALUE THROUGH RADIO BUTTON  ////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function startradiobutton(){
                var radiobtnchecked = document.getElementsByName('meth');
                for(e=0;e<radiobtnchecked.length;e++){
                    if(radiobtnchecked[e].checked){
                        radiobtninput = radiobtnchecked[e].value;
                    }
                }                
    }
        
    function methods(){               
                if(radiobtninput==1)
                {
                    ins=4;
                    exs=7;
                    hld=8;                    
                    document.getElementById("demo1").innerHTML=" you selected 4-7-8. this will take "+ +((i*19)/60).toFixed(2) +" minutes";                        
                    universe=document.getElementById("demo1").innerHTML;
                }
                if(radiobtninput==2)
                {
                    ins=2;
                    exs=7;
                    hld=8;
                    document.getElementById("demo1").innerHTML=" you selected 2-7-8. this will take "+ +((i*17)/60).toFixed(2) +" minutes";                        
                    universe=document.getElementById("demo1").innerHTML;

                }
                if(radiobtninput==3)
                {
                    ins=5;
                    exs=5;
                    hld=5;
                    document.getElementById("demo1").innerHTML=" you selected 5-5-5. this will take "+ +((i*15)/60).toFixed(2)  +" minutes";                        
                    universe=document.getElementById("demo1").innerHTML;

                }
                if(radiobtninput==4)
                {
                    console.log('custom triggered');
                    document.getElementById("demo1").innerHTML=" you selected 4-16-8. this will take "+ +((i*30)/60).toFixed(2) +" minutes";                        
                    universe=document.getElementById("demo1").innerHTML;
                    showhiddenbar();                                
                }

    }

    function showhiddenbar(){
                document.getElementById("hiddenbar").style.display = "block"; // MAKES THE CUSTOM VISIBLE
                custom();
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// IMAGE CHANGE FUNCTIONS////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     function inhale(){
         document.getElementById('pic').src='images/inhale.jpg';
     }

     function exhale(){
         document.getElementById('pic').src='images/exhale.jpg';
     }

     function hold(){
         document.getElementById('pic').src='images/hold.jfif';
     }           
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// STOP BUTTON FUNCTION////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     function stopFunction(){
         clearTimeout(myStart);  
         clearTimeout(mine);
         clearTimeout(mine1);
         clearTimeout(mine2);
         console.log('timer stopped');         
         document.getElementById('titlename').style.color="white" ;  
         document.getElementById("titlename").innerHTML='Congrats on the session';
         playcongrats();
         stopbgm();
         stopmation1();
         stopmation2();
         stopmation3();
     }        

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// CUSTOM BOX INPUT VALUES ARE GIVEN HERE  ////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var universe;
     function submit(){
         i = document.getElementById("showrep").value;
         
     } // rep value gets stored in here

     function custom(){
         ins = document.getElementById("in").value;
         exs = document.getElementById("ex").value;
         hld = document.getElementById("hd").value;                
     }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// THE MAJOR 3 LOOP FUNCTION HERE////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
     function myFunction1() {
         if(i>0){        
             i--;
             document.getElementById('titlename').style.color="green";   
             document.getElementById("titlename").innerHTML='INHALE';
             runmation1();
             console.log('inhale');
             playbreathe();
             mine = setTimeout(myFunction2,ins*1000);
            //  inhale();
         }
         else
         stopFunction();
     }

     function myFunction2(){
         
         document.getElementById('titlename').style.color="yellow";   
         document.getElementById("titlename").innerHTML='HOLD';
         runmation2();
         console.log('hold');
         playhold();
         mine1 = setTimeout(myFunction3,hld*1000);
        //  hold();

     }

     function myFunction3(){
        
         document.getElementById('titlename').style.color="red";   
         document.getElementById("titlename").innerHTML='EXHALE';
         runmation3();
         console.log('exhale');
         playrelease();
         mine2= setTimeout(myFunction1,exs*1000);
         
         if(i>1){
             document.getElementById("showrep").value= i+" more reps";
         }
         if(i==1){
             document.getElementById("showrep").value="Final rep";
         }
         if(i==0)
         {
             document.getElementById("showrep").value="Finished";
         }
        //  exhale();

         
     }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// THREE SOUNDS FUNCTIONS ////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    

     function playbreathe(){
     var music = new Audio('souds/aibreathe.mp3');
     music.play();
     }

     function playhold(){
     var music = new Audio('souds/aihold.mp3');
     music.play();
     }

     function playrelease(){
     var music = new Audio('souds/airelease.mp3');
     music.play();
     }

     function playcongrats(){
     var music = new Audio('souds/aicongrats.mp3');
     music.play();
     }
     

     
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// BGM SOUND CONTROLS PLAY & PAUSE  ////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//BGM SOUND RAIN FOREST; NEW CAN BE ADDED IN HERE

    // var bgm = new Audio('souds/bgmforest.mp3');
    // var bgm = new Audio('souds/om.mp3');
    // var bgm = new Audio('souds/devaram.mp3');

    
    var hail;

    function check()
    {
        hail = document.getElementById("omvalue").value;                   
    }
    
    function playbgm(){
    check();
     console.log("bgm playing");
     if(hail == 1)
    {
        bgm = new Audio('souds/om.mp3');
        
    } 
    else if(hail == 2)
    {
        bgm = new Audio('souds/devaram.mp3');
        
    }
    else if(hail == 3)
    {
        bgm = new Audio('souds/bgmforest.mp3');
        
    }
     bgm.play();
     document.getElementById("bgmstopbtn").style.display="block";
     document.getElementById("bgmstartbtn").style.display="none";
     }


     function stopbgm(){
         console.log("bgm stopped");
         document.getElementById("bgmstopbtn").style.display="none";
         document.getElementById("bgmstartbtn").style.display="block";
         bgm.pause();
     }


// ALL ANIMATION STUFFS IN HERE/////////////////////////////////////////////////////////////////////////
     function runmation1(){
        document.getElementById("img").className="watch-face1";
        document.getElementById("circle1").className="circle1";
        document.getElementById("circle2").className="circle1";
        document.getElementById("circle3").className="circle1";
        document.getElementById("circle4").className="circle1";
        document.getElementById("circle5").className="circle1";
        document.getElementById("circle6").className="circle1";
        
        setTimeout(stopmation1,4000);
                   
    }
    function runmation2(){
        document.getElementById("img").className="watch-face";
        document.getElementById("circle1").className="circle";
        document.getElementById("circle2").className="circle";
        document.getElementById("circle3").className="circle";
        document.getElementById("circle4").className="circle";
        document.getElementById("circle5").className="circle";
        document.getElementById("circle6").className="circle";
        setTimeout(stopmation2,16000);     
               

    }
    function runmation3(){
        document.getElementById("img").className="watch-face3";
        document.getElementById("circle1").className="circle3";
        document.getElementById("circle2").className="circle3";
        document.getElementById("circle3").className="circle3";
        document.getElementById("circle4").className="circle3";
        document.getElementById("circle5").className="circle3";
        document.getElementById("circle6").className="circle3";    
        setTimeout(stopmation3,8000)
          
                      
    }
    function stopmation1(){
        document.getElementById("img").className="d";
        document.getElementById("circle1").className="crcle";
        document.getElementById("circle2").className="cicle";
        document.getElementById("circle3").className="ircle";
        document.getElementById("circle4").className="crcle";
        document.getElementById("circle5").className="cicle";
        document.getElementById("circle6").className="cirle"; 
    }
    function stopmation2(){
        document.getElementById("img").className="d";
        document.getElementById("circle1").className="crcle";
        document.getElementById("circle2").className="cicle";
        document.getElementById("circle3").className="ircle";
        document.getElementById("circle4").className="crcle";
        document.getElementById("circle5").className="cicle";
        document.getElementById("circle6").className="cirle"; 
    }
    function stopmation3(){
        document.getElementById("img").className="d";
        document.getElementById("circle1").className="crcle";
        document.getElementById("circle2").className="cicle";
        document.getElementById("circle3").className="ircle";
        document.getElementById("circle4").className="crcle";
        document.getElementById("circle5").className="cicle";
        document.getElementById("circle6").className="cirle"; 
    }

    

    function stopAnim(){
        document.getElementById("aym").className="asdf";
        document.getElementById("aym1").className="asdf";
    }

    
    