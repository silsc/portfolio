const menuIcon = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');
    const body = document.body;
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('change');
      // if (navbar.classList.contains('change')) {
      //   body.classList.add('hidden');
      // } else {
      //   body.classList.add('show');
      // }
    })
