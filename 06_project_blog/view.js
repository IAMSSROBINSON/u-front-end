import Header from './components/Header/index.js';
import Logo from './components/Logo/index.js';
import SubscribeForm from './components/SubscribeForm/index.js';
import Menu from './components/Menu/index.js';
import Link from './components/Link/Link.js';

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

        this.headerNav = document.createElement("nav");
        this.headerNav.classList.add("header-nav");

        this.headerNavList = document.createElement("ul");
        this.headerNavList.classList.add("header-nav-list");

        this.headerNav.append(this.headerNavList);
        this.headerWrapper.appendChild(this.headerNav);




    },
    setLinks (linksArr) {
        console.log("views setLinks arr:", linksArr);
        // if the length of linksArr is not 0 
        // iterate over the arr and for each link generate a link component
        // use hrefValue and textValue in new Link(hrefValue, textValue)
        // see ./00_project_blog.md => component => Links
       
       

        
        

        let docFragment = document.createDocumentFragment();
        if (linksArr.length !== 0) {
            linksArr.forEach((linkObj) => {

                const li = document.createElement("li");
                li.classList.add("header-nav-list-item");

                const link = new Link(linkObj.hrefValue, linkObj.textValue);
                console.log(link);

                li.append(link);
                docFragment.appendChild(li);
            });

            this.headerNavList.appendChild(docFragment);
        }
        
    }
};





export default view;