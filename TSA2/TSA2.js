function animateBox(day) {
    let box = document.createElement("div");
    box.className = "box";
    let boxContainer = document.querySelector('.box-container');
    boxContainer.innerHTML = '';
    boxContainer.appendChild(box);

    let button = document.querySelector(`.${day.toLowerCase()}`);
    let buttonRect = button.getBoundingClientRect();

    let color = getDayColor(day);
    box.style.left = "0";
    box.style.top = buttonRect.top + "px";
    box.style.borderColor = color;

    setTimeout(() => {
        box.style.transform = "translateY(100px)";
    }, 500);
}

function getDayColor(day) {
    switch (day) {
        case 'Monday':
            return '#3498db'; // Blue
        case 'Tuesday':
            return '#2ecc71'; // Green
        case 'Wednesday':
            return '#e74c3c'; // Red
        case 'Thursday':
            return '#f39c12'; // Yellow
        case 'Friday':
            return '#9b59b6'; // Purple
        case 'Saturday':
            return '#34495e'; // Dark Blue
        case 'Sunday':
            return '#e67e22'; // Orange
        default:
            return '#000000'; // Black (default color)
    }
}
