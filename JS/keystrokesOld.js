

var pad1Sample = document.getElementById('pad1');
var pad2Sample = document.getElementById('pad2');
var pad3Sample = document.getElementById('pad3');
var pad4Sample = document.getElementById('pad4');
var pad5Sample = document.getElementById('pad5');
            var pad6Sample = document.getElementById('pad6');
            var pad7Sample = document.getElementById('pad7');
            var pad8Sample = document.getElementById('pad8');
            var pad9Sample = document.getElementById('pad9');
            var pad10Sample = document.getElementById('pad10');
            var pad11Sample = document.getElementById('pad11');
            var pad12Sample = document.getElementById('pad12');
            var pad13Sample = document.getElementById('pad13');
            var pad14Sample = document.getElementById('pad14');
            var pad15Sample = document.getElementById('pad15');
            var pad16Sample = document.getElementById('pad16');
            
            var sounds = {
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
            
            document.getElementById('pad1').onplay = function(){
                document.getElementById("pa1").style.background = "red";
            }
            document.getElementById('pad1').onended = function(){
                document.getElementById("pa1").style.background = "black";
            }
                
            document.getElementById('pad2').onplay = function(){
                document.getElementById("pa2").style.background = "red";
            }
            document.getElementById('pad2').onended = function(){
                document.getElementById("pa2").style.background = "black";
            }
            
            document.getElementById('pad3').onplay = function(){
                document.getElementById("pa3").style.background = "red";
            }
            document.getElementById('pad3').onended = function(){
                document.getElementById("pa3").style.background = "black";
            }
                
            document.getElementById('pad4').onplay = function(){
                document.getElementById("pa4").style.background = "red";
            }
            document.getElementById('pad4').onended = function(){
                document.getElementById("pa4").style.background = "black";
            }
            
            document.getElementById('pad5').onplay = function(){
                document.getElementById("pa5").style.background = "blue";
            }
            document.getElementById('pad5').onended = function(){
                document.getElementById("pa5").style.background = "black";
            }
                
            document.getElementById('pad6').onplay = function(){
                document.getElementById("pa6").style.background = "blue";
            }
            document.getElementById('pad6').onended = function(){
                document.getElementById("pa6").style.background = "black";
            }
            
            document.getElementById('pad7').onplay = function(){
                document.getElementById("pa7").style.background = "blue";
            }
            document.getElementById('pad7').onended = function(){
                document.getElementById("pa7").style.background = "black";
            }
                
            document.getElementById('pad8').onplay = function(){
                document.getElementById("pa8").style.background = "blue";
            }
            document.getElementById('pad8').onended = function(){
                document.getElementById("pa8").style.background = "black";
            }
            
            document.getElementById('pad9').onplay = function(){
                document.getElementById("pa9").style.background = "green";
            }
            document.getElementById('pad9').onended = function(){
                document.getElementById("pa9").style.background = "black";
            }
                
            document.getElementById('pad10').onplay = function(){
                document.getElementById("pa10").style.background = "green";
            }
            document.getElementById('pad10').onended = function(){
                document.getElementById("pa10").style.background = "black";
            }
            
            document.getElementById('pad11').onplay = function(){
                document.getElementById("pa11").style.background = "green";
            }
            document.getElementById('pad11').onended = function(){
                document.getElementById("pa11").style.background = "black";
            }
                
            document.getElementById('pad12').onplay = function(){
                document.getElementById("pa12").style.background = "green";
            }
            document.getElementById('pad12').onended = function(){
                document.getElementById("pa12").style.background = "black";
            }
            
            document.getElementById('pad13').onplay = function(){
                document.getElementById("pa13").style.background = "yellow";
            }
            document.getElementById('pad13').onended = function(){
                document.getElementById("pa13").style.background = "black";
            }
                
            document.getElementById('pad14').onplay = function(){
                document.getElementById("pa14").style.background = "yellow";
            }
            document.getElementById('pad14').onended = function(){
                document.getElementById("pa14").style.background = "black";
            }
            
            document.getElementById('pad15').onplay = function(){
                document.getElementById("pa15").style.background = "yellow";
            }
            document.getElementById('pad15').onended = function(){
                document.getElementById("pa15").style.background = "black";
            }
                
            document.getElementById('pad16').onplay = function(){
                document.getElementById("pa16").style.background = "yellow";
            }
            document.getElementById('pad16').onended = function(){
                document.getElementById("pa16").style.background = "black";
            }
            
            document.onkeydown = function(e) {
            var soundId = sounds[e.keyCode];
            if (soundId)
            {
                
                document.getElementById("pa1").style.background = "black";
                document.getElementById("pa2").style.background = "black";
                document.getElementById("pa3").style.background = "black";
                document.getElementById("pa4").style.background = "black";
                document.getElementById("pa5").style.background = "black";
                document.getElementById("pa6").style.background = "black";
                document.getElementById("pa7").style.background = "black";
                document.getElementById("pa8").style.background = "black";
                document.getElementById("pa9").style.background = "black";
                document.getElementById("pa10").style.background = "black";
                document.getElementById("pa11").style.background = "black";
                document.getElementById("pa12").style.background = "black";
                document.getElementById("pa13").style.background = "black";
                document.getElementById("pa14").style.background = "black";
                document.getElementById("pa15").style.background = "black";
                document.getElementById("pa16").style.background = "black";

                
                pad1Sample.pause();
                pad1Sample.currentTime = 0;
                pad2Sample.pause();
                pad2Sample.currentTime = 0;
                pad3Sample.pause();
                pad3Sample.currentTime = 0;
                pad4Sample.pause();
                pad4Sample.currentTime = 0;
                pad5Sample.pause();
                pad5Sample.currentTime = 0;
                pad6Sample.pause();
                pad6Sample.currentTime = 0;
                pad7Sample.pause();
                pad7Sample.currentTime = 0;
                pad8Sample.pause();
                pad8Sample.currentTime = 0;                
                pad9Sample.pause();
                pad9Sample.currentTime = 0;
                pad10Sample.pause();
                pad10Sample.currentTime = 0;
                pad11Sample.pause();
                pad11Sample.currentTime = 0;
                pad12Sample.pause();
                pad12Sample.currentTime = 0;
                pad13Sample.pause();
                pad13Sample.currentTime = 0;
                pad14Sample.pause();
                pad14Sample.currentTime = 0;
                pad15Sample.pause();
                pad15Sample.currentTime = 0;
                pad16Sample.pause();
                pad16Sample.currentTime = 0;

                document.getElementById(soundId).play();
            }
            else console.log("key not mapped : code is", e.keyCode);
        }
