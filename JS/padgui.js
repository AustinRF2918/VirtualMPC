 var bankOne = [];
var bankTwo = [];
var bankThree = [];
var bankDrum = [];

 var sounds = { //keycodes.
                49 : 'pad1',
                50 : 'pad2',
                51 : 'pad3',
                52 : 'pad4',
                81 : 'pad5',
                87 : 'pad6',
                69 : 'pad7',
                82 : 'pad8',
                65 : 'pad9',
                83 : 'pad10',
                68 : 'pad11',
                70 : 'pad12',
                90 : 'pad13',
                88 : 'pad14',
                67 : 'pad15',
                86 : 'pad16',
            } // key 'x'};

// hasClass, takes two params: element and classname
function hasClass(el, cls) {
  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}


for (var i = 1 ; i< 17; i++) //fills vectors
{
    
if(hasClass(document.getElementById('pad' + i), "bankOne"))
    bankOne.push(document.getElementById('pad' + i))
else if(hasClass(document.getElementById('pad' + i), "bankTwo"))
    bankTwo.push(document.getElementById('pad' + i))
else if(hasClass(document.getElementById('pad' + i), "bankThree"))
    bankThree.push(document.getElementById('pad' + i))
else if(hasClass(document.getElementById('pad' + i), "bankDrum"))
    bankDrum.push(document.getElementById('pad' + i))
    
}

           
            
for (var i = 1 ; i< 17; i++) //fills vectors
{
    
if(hasClass(document.getElementById('pad' + i), "bankOne"))
    bankOne.push(document.getElementById('pad' + i))
else if(hasClass(document.getElementById('pad' + i), "bankTwo"))
    bankTwo.push(document.getElementById('pad' + i))
else if(hasClass(document.getElementById('pad' + i), "bankThree"))
    bankThree.push(document.getElementById('pad' + i))
else if(hasClass(document.getElementById('pad' + i), "bankDrum"))
    bankDrum.push(document.getElementById('pad' + i))
    
}
 
function playID(e) { //function for playing sound
            var soundId = sounds[e];
            if (soundId)
            {
   

                
                if (bankDrum.indexOf(document.getElementById(soundId)) == -1){
                if (bankOne.indexOf(document.getElementById(soundId)) >= 0){
                for (var i = 0; i < bankOne.length; i++)
                {
                      bankOne[i].pause();
                      bankOne[i].currentTime = 0;
                     }
                         
                     }
                     
                }
                
                if (bankDrum.indexOf(document.getElementById(soundId)) == -1){
                if (bankTwo.indexOf(document.getElementById(soundId)) >= 0){
                for (var i = 0; i < bankTwo.length; i++)
                {
                      bankTwo[i].pause();
                      bankTwo[i].currentTime = 0;
                     }
                         
                     }
                     
                }
                if (bankDrum.indexOf(document.getElementById(soundId)) == -1){
                if (bankThree.indexOf(document.getElementById(soundId)) >= 0){
                 for (var i = 0; i < bankThree.length; i++)
                {
                    bankThree[i].pause();
                    bankThree[i].currentTime = 0;
                }
                }
                }
                
                for (var i = 0; i < bankDrum.length; i++)
                {
                   if (document.getElementById(soundId) == bankDrum[i])
                   {

                       bankDrum[i].pause();
                       bankDrum[i].currentTime = 0;
                   }
                }
                        
                document.getElementById(soundId).play();
            }
            else console.log("key not mapped : code is", e.keyCode);
        }

 function playID(e) {
            var soundId = sounds[e];
            if (soundId)
            {
   

                
                if (bankDrum.indexOf(document.getElementById(soundId)) == -1){
                if (bankOne.indexOf(document.getElementById(soundId)) >= 0){
                for (var i = 0; i < bankOne.length; i++)
                {
                      bankOne[i].pause();
                      bankOne[i].currentTime = 0;
                     }
                         
                     }
                     
                }
                
                if (bankDrum.indexOf(document.getElementById(soundId)) == -1){
                if (bankTwo.indexOf(document.getElementById(soundId)) >= 0){
                for (var i = 0; i < bankTwo.length; i++)
                {
                      bankTwo[i].pause();
                      bankTwo[i].currentTime = 0;
                     }
                         
                     }
                     
                }
                if (bankDrum.indexOf(document.getElementById(soundId)) == -1){
                if (bankThree.indexOf(document.getElementById(soundId)) >= 0){
                 for (var i = 0; i < bankThree.length; i++)
                {
                    bankThree[i].pause();
                    bankThree[i].currentTime = 0;
                }
                }
                }
                
                for (var i = 0; i < bankDrum.length; i++)
                {
                   if (document.getElementById(soundId) == bankDrum[i])
                   {

                       bankDrum[i].pause();
                       bankDrum[i].currentTime = 0;
                   }
                }
                        
                document.getElementById(soundId).play();
            }
            else console.log("key not mapped : code is", e.keyCode);
        }



                document.getElementById('pad' + 1).onplay = function(){
                document.getElementById("pa" + 1).style.background = "#514AFF";
            }
            document.getElementById('pad' + 1).onended = function(){
                document.getElementById("pa" + 1).style.background = "rgba(255,255,255,0.5)";
            }
            document.getElementById('pad' + 1).onpause = function(){
                document.getElementById("pa" + 1).style.background = "rgba(255,255,255,0.5)";
            }
            
            document.getElementById("pa" + 1).ontouchstart = function()
            {
                playID(49);
            }
            
       
             document.getElementById('pad' + 2).onplay = function(){
                document.getElementById("pa" + 2).style.background = "#514AFF";
            }
            document.getElementById('pad' + 2).onended = function(){
                document.getElementById("pa" + 2).style.background = "rgba(255,255,255,0.5)";
            }
            document.getElementById('pad' + 2).onpause = function(){
                document.getElementById("pa" + 2).style.background = "rgba(255,255,255,0.5)";
            }
             document.getElementById("pa" + 2).ontouchstart = function()
            {
                playID(50);
            }
       
            
            document.getElementById('pad3').onplay = function(){
                document.getElementById("pa3").style.background = "#514AFF";
            }
            document.getElementById('pad3').onended = function(){
                document.getElementById("pa3").style.background = "rgba(255,255,255,0.5)";
            }
                document.getElementById('pad3').onpause = function(){
                document.getElementById("pa3").style.background = "rgba(255,255,255,0.5)";
            }
             document.getElementById("pa" + 3).ontouchstart = function()
            {
                playID(51);
            }
            
                
            document.getElementById('pad4').onplay = function(){
                document.getElementById("pa4").style.background = "#514AFF";
            }
            document.getElementById('pad4').onended = function(){
                document.getElementById("pa4").style.background = "rgba(255,255,255,0.5)";
            }
                document.getElementById('pad4').onpause = function(){
                document.getElementById("pa4").style.background = "rgba(255,255,255,0.5)";
            }            
             document.getElementById("pa" + 4).ontouchstart = function()
            {
                playID(52);
            }
            
            document.getElementById('pad5').onplay = function(){
                document.getElementById("pa5").style.background = "#9A96FF";
            }
            document.getElementById('pad5').onended = function(){
                document.getElementById("pa5").style.background = "rgba(255,255,255,0.5)";
            }
                document.getElementById('pad5').onpause = function(){
                document.getElementById("pa5").style.background = "rgba(255,255,255,0.5)";
            }             
            
             document.getElementById("pa" + 5).ontouchstart = function()
            {
                playID(81);
            }
            
            document.getElementById('pad6').onplay = function(){
                document.getElementById("pa6").style.background = "#9A96FF";
            }
            document.getElementById('pad6').onended = function(){
                document.getElementById("pa6").style.background = "rgba(255,255,255,0.5)";
            }
                document.getElementById('pad6').onpause = function(){
                document.getElementById("pa6").style.background = "rgba(255,255,255,0.5)";
            }            
            
             document.getElementById("pa" + 6).ontouchstart = function()
            {
                playID(87);
            }
            
            document.getElementById('pad7').onplay = function(){
                document.getElementById("pa7").style.background = "#9A96FF";
            }
            document.getElementById('pad7').onended = function(){
                document.getElementById("pa7").style.background = "rgba(255,255,255,0.5)";
            }
                document.getElementById('pad7').onpause = function(){
                document.getElementById("pa7").style.background = "rgba(255,255,255,0.5)";
            }              
            
             document.getElementById("pa" + 7).ontouchstart = function()
            {
                playID(69);
            }
            
            
            document.getElementById('pad8').onplay = function(){
                document.getElementById("pa8").style.background = "#9A96FF";
            }
            document.getElementById('pad8').onended = function(){
                document.getElementById("pa8").style.background = "rgba(255,255,255,0.5)";
            }
                document.getElementById('pad8').onpause = function(){
                document.getElementById("pa8").style.background = "rgba(255,255,255,0.5)";
            }            
            
             document.getElementById("pa" + 8).ontouchstart = function()
            {
                playID(82);
            }
            
            document.getElementById('pad9').onplay = function(){
                document.getElementById("pa9").style.background = "#4D4B7F";
            }
            document.getElementById('pad9').onended = function(){
                document.getElementById("pa9").style.background = "rgba(255,255,255,0.5)";
            }
                document.getElementById('pad9').onpause = function(){
                document.getElementById("pa9").style.background = "rgba(255,255,255,0.5)";
            }                
            document.getElementById("pa" + 9).ontouchstart = function()
            {
                playID(65);
            }
            
            document.getElementById('pad10').onplay = function(){
                document.getElementById("pa10").style.background = "#4D4B7F";
            }
            document.getElementById('pad10').onended = function(){
                document.getElementById("pa10").style.background = "rgba(255,255,255,0.5)";
            }
                document.getElementById('pad10').onpause = function(){
                document.getElementById("pa10").style.background = "rgba(255,255,255,0.5)";
            }            
            
            document.getElementById("pa" + 10).ontouchstart = function()
            {
                playID(83);
            }
            document.getElementById('pad11').onplay = function(){
                document.getElementById("pa11").style.background = "#4D4B7F";
            }
            document.getElementById('pad11').onended = function(){
                document.getElementById("pa11").style.background = "rgba(255,255,255,0.5)";

                }
                document.getElementById('pad11').onpause = function(){
                document.getElementById("pa11").style.background = "rgba(255,255,255,0.5)";
            }              
            
            document.getElementById("pa" + 11).ontouchstart = function()
            {
                playID(68);
            }
            document.getElementById('pad12').onplay = function(){
                document.getElementById("pa12").style.background = "#4D4B7F";
                
            }
            document.getElementById('pad12').onended = function(){
                document.getElementById("pa12").style.background = "rgba(255,255,255,0.5)";
            }
                document.getElementById('pad12').onpause = function(){
                document.getElementById("pa12").style.background = "rgba(255,255,255,0.5)";
            }
            document.getElementById("pa" + 12).ontouchstart = function()
            {
                playID(70);
            }
            
            document.getElementById('pad13').onplay = function(){
                document.getElementById("pa13").style.background = "#413BCC";
            }
            document.getElementById('pad13').onended = function(){
                document.getElementById("pa13").style.background = "rgba(255,255,255,0.5)";
            }
                document.getElementById('pad13').onpause = function(){
                document.getElementById("pa13").style.background = "rgba(255,255,255,0.5)";
            }                
            
            document.getElementById("pa" + 13).ontouchstart = function()
            {
                playID(90);
            }
            
            document.getElementById('pad14').onplay = function(){
                document.getElementById("pa14").style.background = "#413BCC";
            }
            document.getElementById('pad14').onended = function(){
                document.getElementById("pa14").style.background = "rgba(255,255,255,0.5)";
            }
                document.getElementById('pad14').onpause = function(){
                document.getElementById("pa14").style.background = "rgba(255,255,255,0.5)";
            }            
            
            document.getElementById("pa" + 14).ontouchstart = function()
            {
                playID(88);
            }
            document.getElementById('pad15').onplay = function(){
                document.getElementById("pa15").style.background = "#413BCC";
            }
            document.getElementById('pad15').onended = function(){
                document.getElementById("pa15").style.background = "rgba(255,255,255,0.5)";
            }
                document.getElementById('pad15').onpause = function(){
                document.getElementById("pa15").style.background = "rgba(255,255,255,0.5)";
            }                
            document.getElementById("pa" + 15).ontouchstart = function()
            {
                playID(67);
            }
            
            document.getElementById('pad16').onplay = function(){
                document.getElementById("pa16").style.background = "#413BCC";
            }
            document.getElementById('pad16').onended = function(){
                document.getElementById("pa16").style.background = "rgba(255,255,255,0.5)";
            }
                document.getElementById('pad16').onpause = function(){
                document.getElementById("pa16").style.background = "rgba(255,255,255,0.5)";
            }         
            document.getElementById("pa" + 16).ontouchstart = function()
            {
                playID(86);
            }