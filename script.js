let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

function onLoadFunction()
{
    let rand = Math.floor(Math.random() * 4);
    if(rand == 0)
    {
        document.body.style.backgroundColor = "#F74843";
        changeFavicon('img/icono.png');
    }
    else if(rand ==1)
    {
        document.body.style.backgroundColor = "#6A2E35";
        changeFavicon('img/iconp.png');
    }
    else if(rand ==2)
    {
        document.body.style.backgroundColor = "#869D7A";
        changeFavicon('img/icong.png');
    }
    else if(rand ==3)
    {
        document.body.style.backgroundColor = "#8E9DCC";
        changeFavicon('img/iconb.png');
    }

}

function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}
