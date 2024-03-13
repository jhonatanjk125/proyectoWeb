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