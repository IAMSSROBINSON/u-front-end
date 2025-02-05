import controller from "./controller.js";
import Header from "./components/Header/index.js";
import Logo from "./components/Logo/index.js";
import Menu from "./components/Menu/index.js";
import Link from "./components/Link/index.js";
import Subject from "./components/Subject/index.js";
import Heading from "./components/Heading/index.js";
import Card from "./components/Card/index.js";
import Footer from "./components/Footer/index.js";
import Copyright from "./components/Copyright/index.js";
import SubscribeForm from "./components/SubscribeForm/index.js";
import Image from "./components/Image/index.js";

const view = {
  cacheInitialDOMelements() {
    this.body = document.body;
    this.header = Header();
    this.body.append(this.header);
  },
  renderHeaderElements() {
    this.logo = Logo();
    this.menu = Menu();
    this.headerNav = document.createElement("nav");
    this.headerNav.classList.add("header-nav");
    this.headerNav.appendChild(this.menu);
    this.header.appendChild(this.logo);
    this.header.appendChild(this.headerNav);
  },
  renderHeaderNav(arrObjs = []) {
    this.headerNavList = document.createElement("ul");
    this.headerNavList.classList.add("header-nav-list");

    const documentFragment = document.createDocumentFragment();
    arrObjs.forEach((obj) => {
      const li = document.createElement("li");
      li.classList.add("header-nav-list-item");

      const link = Link(obj.textValue, obj.hrefValue);
      li.append(link);

      documentFragment.appendChild(li);
    });
    this.headerNavList.appendChild(documentFragment);
    this.headerNav.appendChild(this.headerNavList);
  },
  renderMain() {
    this.main = document.createElement("main");
    this.main.classList.add("main");
    this.body.appendChild(this.main);
  },
  renderSubjectsList(subjectsArr) {
    // setup filter list
    this.subjectsList = document.createElement("ul");
    this.subjectsList.classList.add("subjects-list");
    this.subjectsList.addEventListener("click", (event) =>
      controller.handleSubjects(event)
    );

    const documentFragment = document.createDocumentFragment();
    subjectsArr.forEach((subjectText) => {
      const li = Subject(subjectText);
      documentFragment.appendChild(li);
    });
    
    this.subjectsList.appendChild(documentFragment);
    this.main.append(this.subjectsList);
    this.renderSelectSubject("all");
  },
  renderPageHeading(pageHeadingText) {
    this.headingContainer = document.createElement("div");
    this.headingContainer.classList.add("heading-container");
    const pageHeading = Heading(pageHeadingText);
    this.headingContainer.appendChild(pageHeading);
    this.main.appendChild(this.headingContainer);
  },
  renderBlogPosts(arrOfPosts) {
    this.cardsList = document.createElement("ul");
    this.cardsList.addEventListener("click", (event) =>
      controller.handlePostEvent(event)
    );

    this.cardsList.classList.add("cards-list");

    const documentFragment = document.createDocumentFragment();
    arrOfPosts.forEach((postObj) => {
      const liCard = Card(
        postObj.id,
        postObj.title,
        postObj.article,
        postObj.subjects[0],
        postObj.dateStamp
      );
      documentFragment.append(liCard);
    });
    this.cardsList.append(documentFragment);
    this.main.appendChild(this.cardsList);
  },
  renderFooter() {
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
  renderBlogTemplateSubject(value) {
    this.postInformationContainer = document.createElement("div");
    this.postInformationContainer.classList.add("post-information-container");

    const subject = document.createElement("p");
    subject.classList.add("card-subject");
    subject.textContent = value;

    this.postInformationContainer.appendChild(subject);
    this.main.append(this.postInformationContainer);
  },
  renderBlogTemplateDateStamp(value) {
    const dateStamp = document.createElement("p");
    dateStamp.classList.add("card-dateStamp");
    dateStamp.textContent = value;
    this.postInformationContainer.appendChild(dateStamp);
  },
  renderBlogTemplateTitle(value) {
    const postHeading = Heading(value);
    postHeading.classList.add("postHeading");
    this.main.appendChild(postHeading);
  },
  renderBlogTemplateImage(firstImageObj) {
    const img = Image(
      firstImageObj.picSrc,
      firstImageObj.imgSrc,
      firstImageObj.altText,
      firstImageObj.captionText
    );
    this.main.appendChild(img);
  },
  renderBlogTemplateArticle(value) {
    const article = document.createElement("p");
    article.textContent = value;
    article.classList.add("postArticle");
    this.main.appendChild(article);
  },
  renderFilteredSubjects(arrOfPosts) {
    this.cardsList.innerHTML = "";
    const documentFragment = document.createDocumentFragment();
    arrOfPosts.forEach((postObj) => {
      const liCard = Card(
        postObj.id,
        postObj.title,
        postObj.article,
        postObj.subjects[0],
        postObj.dateStamp
      );
      documentFragment.append(liCard);
    });
    this.cardsList.append(documentFragment);
  },
  renderNoPosts() {
    const message = document.createElement("p");
    message.classList.add("noPosts");
    message.textContent = "No posts on this subject yet.";

    this.cardsList.innerHTML = "";
    this.cardsList.appendChild(message);
  },
  renderSelectSubject(textContentValue) {
    const listItems = [...document.querySelectorAll(".subject-list-item")];
    listItems.forEach((item) => {
      if (item.textContent === textContentValue) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    });
  },
};
export default view;
