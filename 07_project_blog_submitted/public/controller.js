import model from "./model.js";
import view from "./view.js";

const controller = {
  init: function () {
    model.init();
    if (window.location.href.includes("index.html")) {
      view.cacheInitialDOMelements();
      view.renderHeaderElements();
      view.renderHeaderNav(model.getLinks());
      view.renderMain();
      view.renderSubjectsList(model.getSubjects());
      view.renderPageHeading("blog");
      view.renderBlogPosts(model.getPosts());
      view.renderFooter();
    }
    if (window.location.href.includes("blogTemplate")) {
      view.cacheInitialDOMelements();
      view.renderHeaderElements();
      view.renderHeaderNav(model.getLinks());
      view.renderMain();
      view.renderFooter();

      const objTransfer = model.getCurrentlySelectedPostElementData();

      if (objTransfer) {
        view.renderBlogTemplateSubject(objTransfer.subjects[0]);
        view.renderBlogTemplateDateStamp(objTransfer.dateStamp);
        view.renderBlogTemplateTitle(objTransfer.title);
        view.renderBlogTemplateImage(objTransfer.images[0]);
        view.renderBlogTemplateArticle(objTransfer.article);
      }
    }
  },
  handlePostEvent(event) {
    event.preventDefault();
    const card = event.target.closest(".card-list-item");
    if (card) {
      const link = card.firstElementChild;
      const id = card?.id;
      model.setCurrentPostElementId(card);
      window.location.href = link.href;
    }
  },
  handleSubjects(event) {
    const target = event.target;
    const classList = [...target.classList];
    if (classList.includes("subject-list-item")) {
      const textContent = target.textContent;
      const filteredSubjects = model.filterSubjects(textContent);

      if (filteredSubjects.length === 0) {
        view.renderNoPosts();
      } else {
        view.renderFilteredSubjects(filteredSubjects);
        view.renderSelectSubject(textContent);
      }
    }
  },
};
controller.init();
export default controller;
