// https://teachablemachine.withgoogle.com/models/MEq7OYx1k/
Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:100
})

camera=document.getElementById("camera")
Webcam.attach("#camera")

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image'src='"+data_uri+"'/>"
    })
}

console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier(" https://teachablemachine.withgoogle.com/models/MEq7OYx1k/model.json",modelLoaded)

function modelLoaded(){
    console.log("model is loaded")
    
}

function check(){
    classifier.classify(gotResult)
}

function gotResult(error,result){
    if(error){
        console.log(error)
        
    }
    else{
        console.log(result)
    }
}
