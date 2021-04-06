Webcam.set({

    height:250,

    width:250,

    image_format:'png',

    png_quality:90

});
var camera=document.getElementById("camera");

Webcam.attach(camera);

function Check(){

    var img=document.getElementById("caputredimg");

    classifier.classify(img,gotResult);

}
function takesnapshot(){

    Webcam.snap(function(data_uri){

    document.getElementById("imgd").innerHTML = "<img id='caputredimg' src="+data_uri+">";
 
    });

console.log("ml5 ver is="+ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CzotMvaCV/model.json",modelloded);

function modelloded(){

    console.log(" model is loded");}

}
function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_object_name").innerHTML = results[0].label;
      document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
  }
  