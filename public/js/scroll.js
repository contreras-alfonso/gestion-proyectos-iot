document.addEventListener("DOMContentLoaded", () => {

    console.log('sdad')
    const miDiv = document.getElementById("miDiv");
  
    const verificarScroll = () => {
        console.log('ewqe')
      if (window.scrollY > 0) {
        miDiv.classList.add('fixed', 'right-5', 'left-5', 'top-1', 'z-30', 'shadow-lg');
      } else {
        miDiv.classList.remove('fixed', 'right-5', 'left-5', 'top-1', 'z-30', 'shadow-lg');
      }
    };
  
    window.addEventListener('scroll', verificarScroll);
  });