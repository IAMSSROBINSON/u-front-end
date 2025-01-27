import Header from './components/Header/index.js';
import Logo from './components/Logo/index.js';
import SubscribeForm from './components/SubscribeForm/index.js';
import Menu from './components/Menu/index.js';

const view = {
    init : function () {
        this.body = document.body;
        this.bodyContainer = document.querySelector(".body-container");
        this.header = Header();
        this.bodyContainer.append(this.header);

        this.headerWrapper = document.querySelector(".header-wrapper");
        this.logo = Logo();
        this.menu = Menu();
        this.headerWrapper.appendChild(this.logo);
        this.headerWrapper.appendChild(this.menu);

    }
};





export default view;