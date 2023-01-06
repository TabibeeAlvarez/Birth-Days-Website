function learn(){
    document.getElementById('learn-more').style.display = 'block';
    document.querySelector('.box1').style.display = 'block';
    document.querySelector('#learn1').style.display = 'none';
    document.getElementById('patricia').style.display = 'none';
    document.getElementById('exitt').style.display = 'none';
    document.getElementById('a').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('trivia').style.display = 'none';
    window.addEventListener('click', () => {
        document.getElementById('audio').play();
    })
    document.getElementById('audio').style.display = 'none';
}

function exit(){
    document.getElementById('learn-more').style.display = 'none';
    document.querySelector('.box1').style.display = 'none';
    document.querySelector('#learn1').style.display = 'block';
    document.getElementById('patricia').style.display = 'block';
    document.getElementById('exitt').style.display = 'block';
    document.getElementById('a').style.display = 'block';
    document.getElementById('about').style.display = 'block';
    document.getElementById('trivia').style.display = 'block';
    window.addEventListener('click', () => {
        document.getElementById('audio').pause();
    })
}

function exitt(){
    window.addEventListener('click', () =>{
        window.location.href = 'index.html'
    })
}

const boxes = document.querySelectorAll('.hidden');
window.addEventListener('scroll', checkBoxes);

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box .getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}

const picture = document.querySelectorAll('.tago');
window.addEventListener('scroll', litaWin);

function litaWin(){
    const triggerBottom = window.innerHeight / 2 * 1;

    picture.forEach(pic => {
        const picTop = pic.getBoundingClientRect().top;

        if(picTop < triggerBottom){
            pic.classList.add('litaw')
        }
        else{
            pic.classList.remove('litaw')
        }
    })
}

const letter = document.querySelectorAll('.text');
window.addEventListener('scroll', sulat);

function sulat(){
    const triggerBottom = window.innerHeight / 5 * 4;

    letter.forEach(let => {
        const letTop = let.getBoundingClientRect().top;

        if(letTop < triggerBottom){
            let.classList.add('write')
        }   
        else{
            let.classList.remove('write')
        }
    })
}

const paper = document.querySelectorAll('.paper');
window.addEventListener('scroll', papel);

function papel(){
    const triggerBottom = window.innerHeight / 3 * 2;

    paper.forEach(pap => {
        const papTop = pap.getBoundingClientRect().top;

        if(papTop < triggerBottom){
            pap.classList.add('sulatol')
        }   
        else{
            pap.classList.remove('sulatol')
        }
    })
}

const face = document.querySelectorAll('.fb');
window.addEventListener('scroll', muka);

function muka(){
    const triggerBottom = window.innerHeight / 3 * 2;

    face.forEach(book => {
        const bookTop = book.getBoundingClientRect().top;

        if(bookTop < triggerBottom){
            book.classList.add('fa-brandss')
        }
        else{
            book.classList.remove('fa-brandss')
        }
    })
}

const rocket = document.querySelectorAll('.rocket');
window.addEventListener('scroll', ship);

function ship(){
    const triggerBottom = window.innerHeight / 5 * 4;

    rocket.forEach(ship => {
        const shipTop = ship.getBoundingClientRect().top;

        if(shipTop < triggerBottom){
            ship.classList.add('shipp')
        }
        else{
            ship.classList.remove('shipp')
        }
    })
}

function trivia(){
    window.addEventListener('mouseover', () => {
        document.getElementById('tugtog').lay();
    })
}

function stopp(){
    window.addEventListener('mouseover', () => {
        document.getElementById('tugtog').pause();
    })
}

const sunset0 = document.querySelectorAll('.sets');
window.addEventListener('scroll', sunset);

function sunset(){
    const triggerBottom = window.innerHeight /  2 * 1.5;

    sunset0.forEach(sun => {
        const sunTop = sun.getBoundingClientRect().top;

        if(sunTop < triggerBottom){
            sun.classList.add('tes')
        }
        else{
            sun.classList.remove('tes')
        }
    })
}

const sunset1 = document.querySelectorAll('.sets1');
window.addEventListener('scroll', sunsett);

function sunsett(){
    const triggerBottom = window.innerHeight / 2 * 1.5;

    sunset1.forEach(sunn => {
        const sunnTop = sunn.getBoundingClientRect().top;

        if(sunnTop < triggerBottom){
            sunn.classList.add('tess')
        }
        else{
            sunn.classList.remove('tess')
        }
    })
}

const sunset2 = document.querySelectorAll('.sets2');
window.addEventListener('scroll', sunsettt);

function sunsettt(){
    const triggerBottom = window.innerHeight / 2 * 1.5;

    sunset2.forEach(sunnn => {
        const sunnnTop = sunnn.getBoundingClientRect().top;

        if(sunnnTop < triggerBottom){
            sunnn.classList.add('tesss')
        }
        else{
            sunnn.classList.remove('tesss')
        }
    })
}

const sunset3 = document.querySelectorAll('.sets3');
window.addEventListener('scroll', sunsetttt);

function sunsetttt(){
    const triggerBottom = window.innerHeight / 2 * 1.5;

    sunset3.forEach(sunnnn => {
        const sunnnnTop = sunnnn.getBoundingClientRect().top;

        if(sunnnnTop < triggerBottom){
            sunnnn.classList.add('tessss')
        }
        else{
            sunnnn.classList.remove('tessss')
        }
    })

}

const sunset4 = document.querySelectorAll('.sets4');
window.addEventListener('scroll', sunsettttt);

function sunsettttt(){
    const triggerBottom = window.innerHeight / 2 * 1.5;

    sunset4.forEach(sunnnnn => {
        const sunnnnnTop = sunnnnn.getBoundingClientRect().top;

        if(sunnnnnTop < triggerBottom){
            sunnnnn.classList.add('tesssss')
        }
        else{
            sunnnnn.classList.remove('tesssss')
        }

    })
}

const letter1 = document.querySelectorAll('.letter1');
window.addEventListener('scroll', letter11);

function letter11(){
    const triggerBottom = window.innerHeight / 2 * 1.5;

    letter1.forEach(let => {
        const letTop = let.getBoundingClientRect().top;

        if(letTop < triggerBottom){
            let.classList.add('sulat')
        }
        else{
            let.classList.remove('sulat')
        }
    })
}