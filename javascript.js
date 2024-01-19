function changeColor() {
    const resumeContainer = document.getElementById('resume-container');
    
    if (resumeContainer.classList.contains('blue')) {
      resumeContainer.classList.remove('blue');
    } else {
      resumeContainer.classList.add('blue');
    }
  }
  
  const colorChangeBtn = document.getElementById('color-change-btn');
  colorChangeBtn.addEventListener('click', changeColor);