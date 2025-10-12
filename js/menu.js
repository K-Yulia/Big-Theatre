 (() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    header: document.querySelector(".page-header"), 
    navList: document.querySelector('.js-nav'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.navList.addEventListener('click', onListClick);
  
  function toggleModal() {
    nav = refs.menu.classList.toggle('is-open');
    if (nav) {
      document.body.style.overflow = 'hidden'; 
      refs.header.classList.add("menu-open");
    } else { document.body.style.overflow = 'scroll'; 
      refs.header.classList.remove('menu-open');
    } 
  }
}
)();

function onListClick(ev) {
  refs.burgerMenu.classList.remove('is-open');
  refs.header.classList.remove("menu-open");
}

window.addEventListener("scroll", function () {
  const header = document.querySelector(".page-header");
  if (window.scrollY > 70) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}
);
  


