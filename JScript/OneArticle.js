
function darkmode() {
    const a = document.getElementById("checkbox");
    if (a.checked) {
        document.getElementById("comments").style.backgroundColor = 'black';
        document.getElementById("sidebar").style.backgroundColor = 'black';
        document.getElementById("headah").style.backgroundColor = 'black';
        document.getElementById("body").style.backgroundImage = "url('PLbackgroundBW.png')";
        document.getElementById("body").style.backgroundUrl = "url('PLbackgroundBW.png')";
        document.getElementById("mid").style.backgroundImage = "none";
        document.getElementById("mid").style.backgroundUrl = "none";
        window.alert("s");
    }
    else
    {
        document.getElementById("comments").style.backgroundColor = 'purple';
        document.getElementById("sidebar").style.backgroundColor = 'purple';
        document.getElementById("headah").style.backgroundColor = 'purple';
        document.getElementById("body").style.backgroundImage = "url('PLbackground.png')";
        document.getElementById("body").style.backgroundUrl = "url('PLbackground.png')";
        document.getElementById("mid").style.backgroundImage = "url('COLUMNbackground.png')";
        document.getElementById("mid").style.backgroundUrl = "url('COLUMNbackground.png')";
    }
}

