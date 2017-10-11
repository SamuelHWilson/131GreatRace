//Setting up global vars
var contestantImages = ["img/chrome.png", "img/firefox.png", "img/exploder.png", "img/opera.png"];
var contestants;

//Setup
function Setup() {

}

//Setup functions
function SetupRacers() {
    var track = $("#track");
    for (var image = 0; image < contestantImages.length; image++) {
        newContestant = document.createElement("img");
        newContestant.src = contestantImages[image];
        newContestant.classList.add("contestant");
        track.add(newContestant);
    }
}
