(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    header: document.querySelector(".page-header"), 
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

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

const refs = {
  burgerMenu: document.querySelector('.js-menu'),
  navList: document.querySelector('.js-nav'),
};

refs.navList.addEventListener('click', onListClick);

function onListClick(ev) {
  refs.burgerMenu.classList.remove('is-open');
  refs.header.classList.remove("menu-open");
  }
