function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/iSXBCEjvm/model.json", modelready);

}

function modelready() {
    classifier.classify(getresult);
}