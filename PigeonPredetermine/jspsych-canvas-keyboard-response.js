jsPsych.plugins["canvas-keyboard-response"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('canvas-keyboard-response', 'stimulus', 'image');

  plugin.info = {
    name: 'canvas-keyboard-response',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The image to be displayed'
      },
      stimulus_height: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image height',
        default: null,
        description: 'Set the image height in pixels'
      },
      stimulus_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image width',
        default: null,
        description: 'Set the image width in pixels'
      },
      maintain_aspect_ratio: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Maintain aspect ratio',
        default: true,
        description: 'Maintain the aspect ratio after setting width or height'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the stimulus.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when subject makes a response.'
      },
    }
  }



  plugin.trial = function(display_element, trial) {
    // display stimulus
	  var html = '<canvas id="jspsych-canvas-keyboard-response-stimulus" width="1600" height="800" style="border:1px solid;">' + trial.stimulus + '</canvas>';
	  html += '<canvas id="second-canvas" width="1600" height="200" style="border:1px solid;"></canvas>'
	  //html += script_picker + '<br>'
	  //html += mean_picker + '<br>'
	  //html += '<br>Frames Left:' + (40-rw)
	  //html +=`<div class="container" style="height:100px;width:800px;display:flex;flex-direction:column;justify-content:right;align-items:right;text-align:right;font-weight:normal;font-family:Arial;font-size:20px"> Point Bonus ${PointBonus}  <div>`
	  switch(pre_trials){
	  case 'start':
	  
	 html += '<button onclick="myFunctionWiden()">Accuracy</button> '
	  html += '<button onclick="myFunctionNarrow()">Speed</button> '
	  html += '<button onclick="myFunctionBegin()">Begin Trial</button>'
	  html += `${timeleft}`
		  break;
	  }
	  console.log(pre_trials === 'start')
	  	  

    // add prompt
    if (trial.prompt !== null){
      html += trial.prompt;
    }

    // render
    display_element.innerHTML = html;

      
      
      
    // store response
    var response = {
      rt: null,
      key: null
    };
      
var ctx = document.getElementById('jspsych-canvas-keyboard-response-stimulus')
var canvas = new fabric.Canvas('jspsych-canvas-keyboard-response-stimulus');
var canvas2 = new fabric.Canvas('second-canvas');  
var imgElement = document.getElementById('my-image');
var imgInstance = new fabric.Image(imgElement, {
  left: 0,
  top: 310,
  angle: 0,
	opacity: 1
});
//canvas.add(imgInstance);  
      
// THIS IS WHERE THE LINES ARE DRAW- XSTART,YSTART,XEND,YEND

/*
------Flipped base-------
Start: [350. 350.]
End: [450. 350.]
*/


/*
-----Unflipped vertical-------
Start: [400. 350.]
End: [400. 250.]
*/
vertical_top = new fabric.Line([0,400,1600,400],{
    strokeWidth: 2,
    fill: 'black',
    stroke: 'black',
    originX : 'center',
    originY : 'center'
  });


  
mid_line =  new fabric.Line([750,350,750,450],{
    strokeWidth: 2,
    fill: 'black',
    stroke: 'black',
    originX : 'center',
    originY : 'center'
  }); 
  
  UpperChoiceBox = new fabric.Rect({ width: 1600, height: 5, fill: 'red', top: UpperChoiceThreshold, left: 0 });
  LowerChoiceBox = new fabric.Rect({ width: 1600, height: 5, fill: 'red', top: LowerChoiceThreshold, left: 0 });
  
  
var ball_size = 8

height_con = 75
  
Circle1 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.1,top: trial.data[rw - 19], left: height_con * 1 })
Circle2 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.1,top: trial.data[rw - 18], left: height_con * 2 })
Circle3 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.2,top: trial.data[rw - 17], left: height_con * 3 })
Circle4 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.2,top: trial.data[rw - 16], left: height_con * 4 })
Circle5 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.3,top: trial.data[rw - 15], left: height_con * 5 })
Circle6 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.3,top: trial.data[rw - 14], left: height_con * 6 })
Circle7 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.4,top: trial.data[rw - 13], left: height_con * 7 })
Circle8 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.4,top: trial.data[rw - 12], left: height_con * 8 })
Circle9 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity:  0.5,top: trial.data[rw - 11], left: height_con * 9 })
Circle10 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.5,top: trial.data[rw - 10], left: height_con * 10 })
Circle11 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.6,top: trial.data[rw - 9], left: height_con * 11 })
Circle12 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.6,top: trial.data[rw - 8], left: height_con * 12 })
Circle13 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.7,top: trial.data[rw - 7], left: height_con * 13 })
Circle14 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.7,top: trial.data[rw - 6], left: height_con * 14 })
Circle15 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.8,top: trial.data[rw - 5], left: height_con * 15 })
Circle16 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.8,top: trial.data[rw - 4], left: height_con * 16 })
Circle17 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.9,top: trial.data[rw - 3], left: height_con * 17 })
Circle18 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 0.9, top: trial.data[rw - 2], left: height_con * 18 })
Circle19 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 1.0, top: trial.data[rw - 1], left: height_con * 19 })
Circle20 = new fabric.Circle({radius: ball_size, fill: '#f55', opacity: 1.0, strokeWidth: 2, stroke: "green", top: trial.data[ rw ], left: height_con * 20 })

canvas.add(Circle1)	  
canvas.add(Circle2)
canvas.add(Circle3)
canvas.add(Circle4)
canvas.add(Circle5)
canvas.add(Circle6)
canvas.add(Circle7)
canvas.add(Circle8)
canvas.add(Circle9)
canvas.add(Circle10)
canvas.add(Circle11)	  
canvas.add(Circle12)
canvas.add(Circle13)
canvas.add(Circle14)
canvas.add(Circle15)
canvas.add(Circle16)
canvas.add(Circle17)
canvas.add(Circle18)
canvas.add(Circle19)
canvas.add(Circle20)
  canvas2.remove(responsefb)
  


ShowWall =  new fabric.Rect({ width: 1600, height: 800, fill: 'white', top: 0, left: 0 })

  canvas.add(vertical_top)
//canvas.add(mid_line)
  switch(pre_trials) {
	  case 'start': canvas.add(UpperChoiceBox);
  					canvas.add(LowerChoiceBox);
					break;
				}
  /*if (AbsoluteFrames <= 0){
     canvas.add(ShowWall)
  }
  */
  
var line_bottom = new fabric.Path('M 382 495 Q 400, 405, 418, 495', { fill: '', stroke: 'black', objectCaching: false, strokeWidth: 5 });
line_bottom.selectable = false;

       
var responseheader = new fabric.Text('Response:', { left: 100, top: 50, shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',   fontFamily: 'Hoefler Text' });
var responsefb = new fabric.Text(`${ChoiceDirection}`, { left: 300, top: 50,});
responsefb.set({fill: `${CDcolor}`})

var seedheader = new fabric.Text('Seeds:', { left: 500, top: 50, shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',   fontFamily: 'Hoefler Text' });
var seedfb = new fabric.Text(`${PointTotal}`, { left: 625, top: 50 });

var stepsheader = new fabric.Text('Steps Remaining:', { left: 900, top: 50, shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',   fontFamily: 'Hoefler Text'});
var stepsfbD = new fabric.Text(`${AbsoluteFrames}`, {left: 1200, top: 50})


canvas2.add(responseheader)


canvas2.add(seedheader)
canvas2.add(seedfb)

canvas2.add(stepsheader)
canvas2.add(stepsfbD)

if (BallVisible == false){
canvas.remove(Circle1)
canvas.remove(Circle2)
canvas.remove(Circle3)
canvas.remove(Circle4)
canvas.remove(Circle5)
canvas.remove(Circle6)
canvas.remove(Circle7)
canvas.remove(Circle8)
canvas.remove(Circle9)
canvas.remove(Circle10)
canvas.remove(Circle11)
canvas.remove(Circle12)
canvas.remove(Circle13)
canvas.remove(Circle14)
canvas.remove(Circle15)
canvas.remove(Circle16)
canvas.remove(Circle17)
canvas.remove(Circle18)
canvas.remove(Circle19)
canvas.remove(Circle20)
canvas2.add(responsefb)

  }      
	  
    // function to end trial when it is time
    var end_trial = function() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "key_press": response.key,
      };
	  
      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      display_element.querySelector('#jspsych-canvas-keyboard-response-stimulus').className += ' responded';

      // only record the first response
      if (response.key == null) {
        response = info;
      }

      if (trial.response_ends_trial) {
        end_trial();
      }
    };

    // start the response listener
    if (trial.choices != jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });
    }

    // hide stimulus if stimulus_duration is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-canvas-keyboard-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
})();
