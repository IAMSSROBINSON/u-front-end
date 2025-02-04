import controller from './controller.js';
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
import Image from './components/Image/index.js';


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
    initPhaseFourA () {
        this.main = document.createElement("main");
        this.main.classList.add("main");
        this.body.appendChild(this.main);
    },
    initPhaseFour (subjectsArr) {
        this.subjectsList = document.createElement("ul");
        this.subjectsList.classList.add("subjects-list");
        this.subjectsList.addEventListener("click", (event) => controller.handleSubjects(event));

        console.log("initPhaseFour subjectsArr:", subjectsArr);
        const documentFragment = document.createDocumentFragment();

        subjectsArr.forEach((subjectText) => {
            const li = Subject(subjectText);
            documentFragment.appendChild(li);
        });
        this.subjectsList.appendChild(documentFragment);    
        this.main.append(this.subjectsList);
    },
    initPhaseFive (pageHeadingText) {
        this.headingContainer = document.createElement("div");
        this.headingContainer.classList.add("heading-container");
        const pageHeading = Heading(pageHeadingText);
        this.headingContainer.appendChild(pageHeading);
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
    renderBlogTemplateSubject (value) {
        console.log(value)

        this.postInformationContainer = document.createElement("div");
        this.postInformationContainer.classList.add("post-information-container");

        const subject = document.createElement("p");
        subject.classList.add("card-subject");
        subject.textContent = value;

        this.postInformationContainer.appendChild(subject);
        this.main.append(this.postInformationContainer);
    },
    renderBlogTemplateDateStamp (value) {
        const dateStamp = document.createElement("p");
        dateStamp.classList.add("card-dateStamp");
        dateStamp.textContent = value;
        console.log(value)

        this.postInformationContainer.appendChild(dateStamp);
    },
    renderBlogTemplateTitle (value) {
        console.log(value)
        const postHeading = Heading(value);
        postHeading.classList.add("postHeading");
        this.main.appendChild(postHeading);
    },
    renderBlogTemplateImage (firstImageObj) {
        // value.path
        // value.altText
        // value.caption
        const img = new Image(firstImageObj.picSrc, firstImageObj.imgSrc, firstImageObj.altText);
        console.log("image value", firstImageObj);
        this.main.appendChild(img);
    },
    renderBlogTemplateArticle (value) {
        console.log(value)
        const article = document.createElement("p");
        article.textContent = value;
        article.classList.add("postArticle");
        this.main.appendChild(article);
    },
    renderBlogTemplateBack (value) {
        console.log(value)
    },
    renderFilteredSubjects (arrOfPosts) {
        console.log("view renderFilteredSubjects:", arrOfPosts);

        this.cardsList.innerHTML = "";
        const documentFragment = document.createDocumentFragment();
        arrOfPosts.forEach((postObj) => {
            const liCard = Card(postObj.id, postObj.title, postObj.article, postObj.subjects[0], postObj.dateStamp);
            documentFragment.append(liCard);
        });
       this.cardsList.append(documentFragment);
    },
    renderNoPosts () {
        console.log("view No posts on this subject.");
        const message = document.createElement("p");
        message.classList.add("noPosts");
        message.textContent = "No posts on this subject yet.";

        this.cardsList.innerHTML = "";
        this.cardsList.appendChild(message);
    }
}
export default view;
