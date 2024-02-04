const drawerMenuButtonList = document.querySelectorAll('.sidebar-nav .drawer-menu-button')

function toggleDrawerMenu() {
  // drawerMenuButton를 감싸고 있는 부모태그 drawer-menu한테 is-open 추가
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
}

Array.from(drawerMenuButtonList).map((button) => {
  button.addEventListener('click', toggleDrawerMenu)
})