export function navMenu() {
  let block = document.querySelector('header.header');

  if (block) {
    const menuItems = block.querySelectorAll('.menu-item');
    const decor = block.querySelector('.hover-decor');
    const menuContainerRect = block.querySelector('nav ul').getBoundingClientRect();

    menuItems.forEach((menuItem) => {

        const menuItemRect = menuItem.getBoundingClientRect();
        const menuItemWidth = menuItemRect.width;
        const menuItemLeft = menuItemRect.left;

        menuItem.addEventListener('click', () => {

            menuItems.forEach((item) => {
                item.classList.remove('active');
            });

            menuItem.classList.add('active');

            if (menuItem.classList.contains('active')) {
                decor.style.width = menuItemWidth + 'px';
                decor.style.transform = `translateX(${menuItemLeft - menuContainerRect.left}px)`;
            }
        });

        if (menuItem.classList.contains('active')) {
            decor.style.width = menuItemWidth + 'px';
        }
    });

    
  }

}