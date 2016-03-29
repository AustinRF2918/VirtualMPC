
//DELETED bankOne, ..., was dead code.
var bankNames = ["bankDrum"]; //bank drum is only non numbered.

//(IMPLEMENTED)want to implement: expandable banks (as many as desired)

//refactored HTML with numerics instead of english (one vs 1.)
for (var i = 1; i < 17; i++)
   bankNames.push("bank" + String(i)); //pushes 16 possible banks onto bank stack.

var banks = {};
for(var i = 0; i < bankNames.length; i++){ //fill our dictionary object with bank names as keys.
    banks[bankNames[i]] = [];
}

for (var i = 1; i < 17; i++) {
    var pad = document.getElementById('pad' + i); //get pads (audio objects)
    pad.pa = document.getElementById("pa" + i); //associate pas (graphical objects)
    pad.pa.pad = pad;
    //removed pad.pa.pad: was reduntant!

    for(var j = 0; j < bankNames.length; j++){
        var bankName = bankNames[j];
        if(pad.className.match(bankName)){
            pad.bank = banks[bankName]; //reversed pad.bank and pushing, lost that info from deep copy later!
            banks[bankName].push(pad);
        }
    }

    pad.onplay = function() {
        this.pa.style.backgroundColor = "rgba(255, 0, 0, 0.2)"; //change to 20%
    };                                                          //red
    pad.onended = function() {
        this.pa.style.backgroundColor = "";                     //go back to normal
    };
    pad.onpause = function() {                                  //pause the pad.
        this.pa.style.backgroundColor = "";
    }
    pad.pa.ontouchstart = function() //say that a pad is touched(not clickable)
    {
    //pad.pa.target.removeEventListener(pad.pa.onmousedown); //stops from playing twice. deletes mouse functionality
    playPad(this.pad); //play the pad                      //must figure out how to stop both from playing (Flag var.)
    return false;
    }


    pad.pa.onmousedown = function() //touch events don't have click down ;)
    {
        playPad(this.pad); //play the pad
    }
}


var sounds = {
        49: 'pad1',
        50: 'pad2',
        51: 'pad3',
        52: 'pad4',
        81: 'pad5',
        87: 'pad6',
        69: 'pad7',
        82: 'pad8',
        65: 'pad9',
        83: 'pad10',
        68: 'pad11',
        70: 'pad12',
        90: 'pad13',
        88: 'pad14',
        67: 'pad15',
        86: 'pad16',
    } // key 'x'};



//pass HTML5 enum filter type (lowpass, highpass, etc) as string in type
//Frequency obvious
//bank set is bank to be filered.

function createFilterObject(bankSet, frequency, type, resonance, gain)
{
//Effects object and contexts for every pad: probably gonna implement on a
//per bank basis.
var browserAudioAPI = ( //check for browser functionaility
  window.AudioContext ||
  window.webkitAudioContext ||
  window.mozAudioContext ||
  window.oAudioContext ||
  window.msAudioContext
  );

if (browserAudioAPI)
  {
    console.log("EFX Object initialized.")
    var efxObject = new window.AudioContext(); //works on modern browsers.
  }
  else
  {
    console.log("Unsupported browser.");
    return "unsupportedBrowser";
  }

    var affectedBank = banks[bankSet]

    for (var i = 0; i < affectedBank.length; i++) {
        var testObject = efxObject.createMediaElementSource(affectedBank[i]); //for testing filter.
        var testFilter = efxObject.createBiquadFilter();
        testObject.connect(testFilter);
        testFilter.connect(efxObject.destination);
        testFilter.type = type;
        testFilter.frequency.value = frequency;
        if (resonance != 0)
         testFilter.Q.value = resonance;
        if (gain != 0)
         testFilter.gain.value = gain; //we should automatically calculate this in the future, pass outwards to modify
                                    //css element.
    }
}

function playPad(pad){
    if(banks["bankDrum"].indexOf(pad) == -1){
        // if not a drum
        var currentBank = pad.bank; //whatever bank our pad has,
        for(var i = 0; i<currentBank.length;i++){ //iterate through it.
            currentBank[i].pause();               //pause whatever is in that bank.
            currentBank[i].currentTime = 0;       //put it to zero as well.
        }
    }

    pad.currentTime = 0; //set pads time to zero.
    pad.play(); //no matter what, said pad will always play.
}

document.onkeydown = function(e) {
    var soundId = sounds[e.keyCode];
    if(!soundId){ //pad doesnt exist
        console.log("key not mapped : code is", e.keyCode);
        return false;
    }

    var pad = document.getElementById(soundId);
    playPad(pad);
};
