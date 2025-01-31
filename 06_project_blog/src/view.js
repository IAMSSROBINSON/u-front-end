import Logo from './components/Logo/index.js';
import Menu from './components/Menu/index.js';
import Link from './components/Link/index.js';
import Subject from './components/Subject/index.js';
import Heading from './components/Heading/index.js';

const view = {
    initPhaseOne () {
        // cache the DOM
        this.body = document.body;
        this.header = document.querySelector(".header");
        this.mainHeading = document.querySelector(".main-heading");
        this.subjectsList = document.querySelector(".subjects-list");
        this.main = document.querySelector(".main");
        this.footer = document.querySelector(".footer");
    },
    initPhaseTwo () {
        // setup header
        this.logo = Logo();
        this.menu = Menu();
        this.headerNav = document.createElement('nav');
        this.headerNav.classList.add('header-nav');
        this.headerNav.appendChild(this.menu);
        this.header.appendChild(this.logo);
        this.header.appendChild(this.headerNav);
    },
    initPhaseThree (arrObjs = []) {
        this.headerNavList = document.createElement("ul");
        this.headerNavList.classList.add("header-nav-list");

        const documentFragment = document.createDocumentFragment();
        arrObjs.forEach((obj) => {
            const li = document.createElement("li");
            li.classList.add("header-nav-list-item");

            const link = Link(obj.textValue, obj.hrefValue);

            li.append(link);

            documentFragment.appendChild(li);
        })
        this.headerNavList.appendChild(documentFragment);
        this.headerNav.appendChild(this.headerNavList);
    },
    initPhaseFour (subjectsArr) {
        console.log("initPhaseFour subjectsArr:", subjectsArr);
        const documentFragment = document.createDocumentFragment();

        subjectsArr.forEach((subjectText) => {
            const li = Subject(subjectText);
            documentFragment.appendChild(li);
        });
        this.subjectsList.appendChild(documentFragment);    
    },
    initPhaseFive (pageHeadingText) {
        const h1 = Heading(pageHeadingText);
        this.mainHeading.append(h1);
    }
}
export default view;
