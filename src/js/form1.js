export default function form1() {

    let currentScreen = window.scrollY;
    let popUpForm = document.querySelector('.pop-up');

    document.getElementById('button1').addEventListener('click', () => {
        popUpForm.style.display = 'flex';
        popUpForm.style.marginTop = Math.round(currentScreen);
    })

    document.getElementById('close-form').addEventListener('click', () =>{
        popUpForm.style.display = 'none';
    })
    
}