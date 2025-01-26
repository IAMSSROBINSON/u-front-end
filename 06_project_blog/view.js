import Header from './components/Header/index.js';

const view = {
    init : function () {
        this.body = document.body;
        this.bodyContainer = document.querySelector(".body-container");
        this.header = Header();
        

        // add elements to wrapper inside the body .body-container
        this.bodyContainer.append(this.header);
    }
};





export default view;