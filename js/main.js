function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    const logo = document.querySelector('#logo');
    var mediaQuery = window.matchMedia("(max-width: 900px)");
    if (mediaQuery.matches) {
      menuToggle.classList.toggle('active')
      navigation.classList.toggle('active')
      logo.classList.toggle('active')
    }
    else {
      return
    }

  }

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});