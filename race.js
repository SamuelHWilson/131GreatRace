//Setting up global vars
var contestantImages = ["img/chrome.png", "img/firefox.png", "img/exploder.png", "img/opera.png", "img/safari.png"];
var trackPadding = 5;
var contestants;

//Setting up global events
$(document).ready(function() {
    SetupRacers();
    SetupHover();

    window.setInterval(HoverAll, 200);
});

//Setup functions
function SetupRacers() {
    var track = $("#track");
    var cCount = contestantImages.length;
    var cHeight = (100 - (trackPadding * (cCount + 1))) / cCount;

    for (var cNum = 0; cNum < cCount; cNum++) {
        newContestant = $(document.createElement("img"));
        newContestant.attr("src", contestantImages[cNum]);
        newContestant.toggleClass("contestant");
        newContestant.css({"top": (cHeight * cNum + trackPadding * (cNum + 1)) + "%", "height": cHeight + "%"});
        track[0].appendChild(newContestant[0]);
    }
}
