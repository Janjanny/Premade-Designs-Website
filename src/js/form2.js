export default function form2() {

    let designName = document.querySelector('.designName');
    let popUpForm = document.querySelector('.pop-up');

    let name = document.getElementById('title2').textContent;

    document.getElementById('button2').addEventListener('click', () => {
        popUpForm.showModal();
        designName.setAttribute('value', name);

    })

    document.getElementById('close-form').addEventListener('click', () =>{
        popUpForm.close();
    })
    
}