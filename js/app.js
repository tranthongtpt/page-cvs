const header = document.querySelector('.header.container');
const menu_item=document.querySelector('.header .nav-list .site-nav-items ul li a')
const active_navbar=document.querySelector('.header .nav-list .site-nav-items ul li a')

document.addEventListener('scroll', ()=>{
    var scroll_position=window.scrollY
    if(scroll_position>250){
        header.style.backgroundColor='#29323c' ,
            header.style.opacity='0.9'     
    } else{
        header.style.backgroundColor='transparent'
    }
});





    // --------------------------
    const scrollElements = document.querySelectorAll(".js-scroll");

        const elementInView = (el, dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;

            return (
                elementTop <=
                (window.innerHeight || document.documentElement.clientHeight) / dividend
            );
        };
       
        const elementOutofView = (el) => {
            const elementTop = el.getBoundingClientRect().top;

            return (
                elementTop > (window.innerHeight || document.documentElement.clientHeight)
            );
        };

        const displayScrollElement = (element) => {
            element.classList.add("scrolled");
        };

        const hideScrollElement = (element) => {
            element.classList.remove("scrolled");
        };

        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                } else if (elementOutofView(el)) {
                    hideScrollElement(el)
                }
            })
        }

        window.addEventListener("scroll", () => {
            handleScrollAnimation();
        });