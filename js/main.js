function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    const logo = document.querySelector('#logo');
    const header = document.querySelector('header');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    logo.classList.toggle('active')
    header.classList.toggle('active')
  }