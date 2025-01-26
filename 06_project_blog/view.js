import Header from './components/Header/index.js';
import Logo from './components/Logo/index.js';
import SubscribeForm from './components/SubscribeForm/index.js';

const view = {
    init : function () {
        this.body = document.body;
        this.bodyContainer = document.querySelector(".body-container");
        this.header = Header();
        this.subscribeForm = SubscribeForm();
        this.bodyContainer.append(this.header);

        this.headerWrapper = document.querySelector(".header-wrapper");
        this.logo = Logo();
        this.headerWrapper.append(this.logo);
        this.headerWrapper.append(this.subscribeForm);
    }
};





export default view;