const footerLabel = document.createElement('label');
footerLabel.for = "imgSelect";
footerLabel.textContent = "Choose your background";
document.querySelector('footer').insertBefore(footerLabel, document.querySelector('#imgSelect'));
document.querySelector('body').style.backgroundColor = "rgba(47, 116, 73, 0.7)";

document.querySelector('#imgSelect').addEventListener('change', changeImg);
const metaTag = document.createElement('meta');
metaTag.name = 'theme-color';
metaTag.content = "rgb(47, 116, 73)";
document.head.appendChild(metaTag);

function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}

function changeImg() {
    let value = document.querySelector('#imgSelect').value;

    if(value === 'home')
    {
        document.querySelector('footer').insertBefore(footerLabel, document.querySelector('#imgSelect'));
        document.querySelector('body').style.backgroundImage = "none";
        document.querySelector('body').style.backgroundColor = "rgb(47, 116, 73)";
        document.querySelector('footer').style.backgroundColor = "rgba(1, 1, 1, 0.224)";
        metaTag.content = "rgb(47, 116, 73)";
    }
    else if(value === 'garden')
    {
        let gardenImg = isMobile() 
            ? "url('https://cdn.glitch.global/be6fec13-836a-4245-8a5b-09d9d06303cf/pondBack.jpeg?v=1740538294647')"
            : "url('https://cdn.glitch.global/2d994763-2e9a-4920-a122-f628295bb048/Japanese_Garden_-1.jpg?v=1741725577596')";
        document.querySelector('body').style.backgroundImage = gardenImg;
        
        document.querySelector('footer').style.backgroundColor = "rgba(18, 57, 33, 0.7)";
        
        metaTag.content = "rgb(18, 57, 33)";
        document.querySelector('footer').removeChild(footerLabel);
    }
    else if(value === 'winter')
    {
      let winterImg = isMobile() 
            ? "url('https://cdn.glitch.global/be6fec13-836a-4245-8a5b-09d9d06303cf/winterBackImg.jpeg?v=1740538997653')"
            : "url('https://cdn.glitch.global/2d994763-2e9a-4920-a122-f628295bb048/winter_forest_snow_snowfall.jpg?v=1741726101537')";
        document.querySelector('body').style.backgroundImage = winterImg;
        document.querySelector('footer').style.backgroundColor = "rgba(39, 61, 126, 0.7)";
      
        metaTag.content = "rgb(39, 61, 126)";
        document.querySelector('footer').removeChild(footerLabel);
    }
    else if(value === 'beach')
    {
        let beachImg = isMobile() 
            ? "url('https://cdn.glitch.global/be6fec13-836a-4245-8a5b-09d9d06303cf/beachBackImg.jpg?v=1740538774966')"
            : "url('https://cdn.glitch.global/2d994763-2e9a-4920-a122-f628295bb048/beachdesktop?v=1741725801549')";
  
        document.querySelector('body').style.backgroundImage = beachImg;
        document.querySelector('footer').style.backgroundColor = "rgba(184, 130, 70, 0.63)";
        
        metaTag.content = "rgb(184, 130, 70)";
        document.querySelector('footer').removeChild(footerLabel);
    }
}


const medAudio = document.createElement('audio');
medAudio.className = 'audioControls';
medAudio.controls = true;

document.getElementsByClassName('audioButton')[0].addEventListener('click', () => chooseAudio('morning'));
document.getElementsByClassName('audioButton')[1].addEventListener('click', () => chooseAudio('body'));
document.getElementsByClassName('audioButton')[2].addEventListener('click', () => chooseAudio('atla'));

function chooseAudio(meditation) {
    if(meditation === 'morning')
    {
        medAudio.src = "https://cdn.glitch.global/2d994763-2e9a-4920-a122-f628295bb048/morningaudio?v=1740553246924";
    }
    else if(meditation === 'body')
    {
        medAudio.src = "https://cdn.glitch.global/2d994763-2e9a-4920-a122-f628295bb048/bodyscanaudio?v=1740551456504";
    }
    else if(meditation === 'atla')
    {
        medAudio.src = "https://cdn.glitch.me/2d994763-2e9a-4920-a122-f628295bb048/atlamedaudio.mp3?v=1740554346761";
    }

    if(!document.querySelector('footer').appendChild(medAudio)) {
        document.querySelector('footer').appendChild(medAudio);
    }
    medAudio.play();
}
