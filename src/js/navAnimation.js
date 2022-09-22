// export default function navAnimate() {
//     var lastScrollTop = 0;
//     let navbar = document.querySelector(".nav-bar");

//     window.addEventListener("scroll", () => {
//         var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//         if (scrollTop > lastScrollTop) {
//             navbar.style.top = '-4rem';
//         }
//         else if (window.pageYOffset === 0) {
//             navbar.style.top = '-4rem';
//         }
//         else {
//             navbar.style.top = '0';
//         }

//         lastScrollTop = scrollTop;
//     })
// }

export default function navAnimate() {
    let lastScrollTop = 0;
    let navbar = document.querySelector(".nav-bar");


    window.addEventListener("scroll", () => {
        if (window.pageYOffset > lastScrollTop) {
            navbar.style.top = '0';
        }
        else {
            navbar.style.top = '-4rem';
        }
    })
}