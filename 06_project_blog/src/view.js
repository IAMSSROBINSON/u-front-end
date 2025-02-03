import handlePostEvent from './controller.js';
import Header from './components/Header/index.js';
import Logo from './components/Logo/index.js';
import Menu from './components/Menu/index.js';
import Link from './components/Link/index.js';
import Subject from './components/Subject/index.js';
import Heading from './components/Heading/index.js';
import Card from './components/Card/index.js';
import Footer from './components/Footer/index.js';
import Copyright from './components/Copyright/index.js';
import SubscribeForm from './components/SubscribeForm/index.js';
import controller from './controller.js';


const view = {
    initPhaseOne () {
        // cache the DOM
        this.body = document.body;
        this.header = Header();
        this.body.append(this.header);
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
        this.main = document.createElement("main");
        this.main.classList.add("main");
        this.body.append(this.main);
        
        this.subjectsList = document.createElement("ul");
        this.subjectsList.classList.add("subjects-list");

        console.log("initPhaseFour subjectsArr:", subjectsArr);
        const documentFragment = document.createDocumentFragment();

        subjectsArr.forEach((subjectText) => {
            const li = Subject(subjectText);
            documentFragment.appendChild(li);
        });
        this.subjectsList.appendChild(documentFragment);    
        this.main.appendChild(this.subjectsList);
    },
    initPhaseFive (pageHeadingText) {
        this.headingContainer = Heading(pageHeadingText);
        this.main.appendChild(this.headingContainer);
    },
    initPhaseSix (arrOfPosts) {
        this.cardsList = document.createElement("ul");
        this.cardsList.addEventListener("click", (event) => controller.handlePostEvent(event));

        this.cardsList.classList.add("cards-list");

        const documentFragment = document.createDocumentFragment();
        arrOfPosts.forEach((postObj) => {
            const liCard = Card(postObj.id, postObj.title, postObj.article, postObj.subjects[0], postObj.dateStamp);
            documentFragment.append(liCard);
        });
       this.cardsList.append(documentFragment);
       this.main.appendChild(this.cardsList);
    },
    initPhaseSeven () {
        this.footer = Footer();
        this.copyright = Copyright("© iamssrobinson 2025");
        this.subscribeForm = SubscribeForm();
        const container = document.createElement("div");
        container.classList.add("copyright-and-form-container");
        container.append(this.subscribeForm);
        container.append(this.copyright);
        this.footer.appendChild(container);
        this.body.appendChild(this.footer);
    }, 
    renderClickedCard (cardDetailsObj) {
        console.log("view renderClickedCard cardDetailsObj:", cardDetailsObj);
    },
    renderBlogTemplateSubject (subject) {
        // render the subject in the place of the subjects
    }
}
export default view;
