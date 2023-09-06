const circle = document.querySelector('.menu__right .to-lesson-text');
circle.innerHTML = circle.textContent.replace(/\S/g, "<span>$&</span>");
// console.log(circle);
let element = document.querySelectorAll('span');

const degrees = [
    -132.6, -123.88, -114.452, -104.574, -95,
    -86.103, -77.54, -69.331, -59.96, -50.7, -40.7,
    -27.63, -18.35, -5.143, 3.39, 12.095, 22.03,
    31.82, 41.12, 49.33, 58.04, 68.8, 80.68, 94.62,
    102.972, 112.422, 122.24,
];


for (let i = 0; i < element.length; i++) {
    element[i].style.transform = `rotate(${degrees[i]}deg)`;
}

