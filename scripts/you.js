document.addEventListener('click', musicPlay);

function musicPlay() {
    var audio = document.getElementById('youare-audio');
    var micon = document.getElementById('youare-micon');

    micon.addEventListener('click', musicPlay);

    if (audio.duration > 0 && audio.paused) {
        audio.play();
        micon.src = "images/speaker.png";
    } else {
        audio.pause();
        audio.currentTime = 0;
        micon.src = "images/speakerm.png";
    }

    document.removeEventListener('click', musicPlay);
}

var faudio = new Audio('youare.mp3');

faudio.addEventListener('timeupdate', function () {
    console.log('TimeUpdate invoked.');

    if (this.currentTime > this.duration - 0.45) {
        this.currentTime = 0;
        this.play();
    }
});

function bookmark() {
    if (navigator.appName === "Microsoft Internet Explorer" && parseInt(navigator.appVersion) >= 4) {
        var url = "lol.html";
        var title = "Idiot!";
        window.external.AddFavorite(url, title);
    }
}

function playBall() {
    var xOff = 5;
    var yOff = 5;
    var xPos = 400;
    var yPos = -100;

    function newXlt() {
        xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
        window.focus();
    }

    function newXrt() {
        xOff = Math.ceil(7 * Math.random()) * 5 - 10;
        window.focus();
    }

    function newYup() {
        yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
        window.focus();
    }

    function newYdn() {
        yOff = Math.ceil(7 * Math.random()) * 5 - 10;
        window.focus();
    }

    function fOff() {
        flagRun = 0;
    }

    function moveBall() {
        xPos += xOff;
        yPos += yOff;

        if (xPos > screen.width - 357) newXlt();
        if (xPos < 0) newXrt();
        if (yPos > screen.height - 330) newYup();
      
