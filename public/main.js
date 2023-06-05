import './scss/main.scss';
import { mobileMenu } from './js/mobile-menu.js'
import { navMenu } from './js/nav-menu.js'
import { customCursor } from './js/custom-cursor.js'

document.addEventListener("DOMContentLoaded", function () {
	mobileMenu();
	navMenu();
	customCursor();
});