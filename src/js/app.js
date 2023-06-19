import hamburger from "./modules/hamburger";
import scrolling from "./modules/scrolling";
import moreInformation from "./modules/moreInformation";
import changePrice from "./modules/changePrice";

window.addEventListener('DOMContentLoaded', () =>{
    hamburger('.navbar__open', '.navbar__close', '.menu-list');
    scrolling();
    moreInformation();
    changePrice();
})