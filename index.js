function Pichere(){
    document.getElementById('tite').style.display = "Block";
    document.getElementById('tite1').style.display = "Block";
    document.getElementById('tite2').style.display = "Block";
    document.getElementById('pick').style.display = "none";
    document.getElementById('pickk').style.display = "block";
}

function Picheree(){
    document.getElementById('tite').style.display = "none";
    document.getElementById('tite1').style.display = "none";
    document.getElementById('tite2').style.display = "none";
    document.getElementById('pick').style.display = "block";
    document.getElementById('pickk').style.display = "none";
}

const tite = document.querySelectorAll('.ed');
window.addEventListener('click', penis);

function penis(){
    const triggerBottom = window.innerHeight / 2 * 1.5;

    tite.forEach(pen => {
        const penTop = pen.getBoundingClientRect().top;
        if(penTop < triggerBottom){
            pen.classList.add('titeng')
        }
        else{
            pen.classList.remove('titeng')
        }
    })
}

const titee = document.querySelectorAll('.pat');
window.addEventListener('click', patpat);

function patpat(){
    const triggerBottom = window.innerHeight / 2 * 1.5;

    titee.forEach(pat => {
        const patTop = pat.getBoundingClientRect().top;

        if(patTop < triggerBottom){
            pat.classList.add('titengg')
        }
        else{
            pat.classList.remove('titengg')
        }
    })
}

const titeee = document.querySelectorAll('.jay');
window.addEventListener('click', jay);

function jay(){
    const triggerBottom = window.innerHeight / 2 * 1.5;

    titeee.forEach(jayy => {
        const jayyTop = jayy.getBoundingClientRect().top;

        if(jayyTop < triggerBottom){
            jayy.classList.add('titenggg')
        }
        else{
            jayy.classList.remove('titenggg')
        }
    })
}