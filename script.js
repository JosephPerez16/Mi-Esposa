function showLetter(){
    const letter=document.getElementById('loveLetter');
    letter.style.display='block';
    letter.style.opacity='0';
    letter.style.transform='translateY(40px)';

    setTimeout(()=>{
        letter.style.transition='all 1.5s ease';
        letter.style.opacity='1';
        letter.style.transform='translateY(0)';
    },100);

    window.scrollTo({top:letter.offsetTop,behavior:'smooth'});
}

function createHeart(){
    const heart=document.createElement('span');
    heart.innerHTML='❤';
    heart.style.left=Math.random()*100+'vw';
    heart.style.fontSize=(Math.random()*25+15)+'px';
    heart.style.animationDuration=(Math.random()*6+6)+'s';
    document.querySelector('.hearts').appendChild(heart);

    setTimeout(()=>{heart.remove();},12000);
}

setInterval(createHeart,500);

const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity='1';
            entry.target.style.transform='translateY(0)';
        }
    });
},{threshold:0.2});

document.querySelectorAll('.gallery-item, .love-intro, .quote-section, .final-message').forEach(el=>{
    el.style.opacity='0';
    el.style.transform='translateY(50px)';
    el.style.transition='all 1.2s ease';
    observer.observe(el);
});