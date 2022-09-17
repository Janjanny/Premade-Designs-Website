export default function carousel() {
    const root = document.documentElement;
    const elementDisplay = 7;
    const content = document.querySelector(".carousel__list");

    for (let i = 0; i < elementDisplay; i++) {
    content.appendChild(content.children[i].cloneNode(true));
}
}