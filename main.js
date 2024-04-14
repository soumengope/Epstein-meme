const opening = document.querySelector('.opening')
const closing = document.querySelector('.closing')
const main_nav = document.querySelector('.main_nav')
const nav_contents = document.querySelector('.nav_contents')

opening.onclick=()=>{
    main_nav.style.position = 'fixed';
    main_nav.style.inset = '0 0 0 0';
    main_nav.style.backgroundColor = 'black';
    main_nav.style.transition = 'all 500ms ease-in-out';
    main_nav.style.zIndex = '100';
    document.body.style.overflow = 'hidden';
    closing.style.display='block';
    opening.style.display='none';
    nav_contents.style.display='block'
}
closing.onclick=()=>{
    main_nav.style.position = 'unset';
    main_nav.style.inset = 'unset';
    main_nav.style.backgroundColor = 'unset';
    main_nav.style.transition = 'all 100ms ease';
    document.body.style.overflow= 'block';
    closing.style.display='none';
    opening.style.display='block';
    nav_contents.style.display='none'
}

document.querySelectorAll('.nav_contents a').forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
        e.preventDefault();

        if(window.innerWidth < 900){
            main_nav.style.position = 'unset';
            main_nav.style.inset = 'unset';
            main_nav.style.backgroundColor = 'unset';
            main_nav.style.transition = 'all 100ms ease';
            document.body.style.overflow= 'auto';
            closing.style.display='none';
            opening.style.display='block';
            nav_contents.style.display='none';
        }

        const hrf = e.target.getAttribute('href');
        const div = document.querySelector(hrf);

        if(div){
            div.scrollIntoView({behavior:'smooth'});
        }
        
    })
})

const botToTop = document.querySelector('.to_top img');
botToTop.onclick = ()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}

const target = document.querySelectorAll('.obs')

const options = {
    root:null,
    threshold:0,
    rootMargin:"0px"
};

const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach((elem)=>{
        if(!elem.isIntersecting){
            elem.target.style.animation = 'unset';
            return
        }
        elem.target.style.animation = 'sec_logo 1000ms linear forwards';
    })
},options)

target.forEach((elem)=>{
    observer.observe(elem)
})

if(window.innerWidth >= 900){
    document.querySelector('.nav_contents').style.animation = 'nav_anim 500ms linear forwards';
}