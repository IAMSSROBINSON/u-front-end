import model from './model.js';
import view from './view.js';

const controller = {
    init : function () {
        model.init();
        if (window.location.href.includes("index.html")) {
            view.initPhaseOne();
            view.initPhaseTwo();
            view.initPhaseThree(view.initPhaseThree(model.getLinks()));
            view.initPhaseFourA();
            view.initPhaseFour(model.getSubjects());
            view.initPhaseFive("blog");
            view.initPhaseSix(model.getPosts());
            view.initPhaseSeven();
        }
        if (window.location.href.includes("blogTemplate")) {
            console.log("window.location.href.includes('blogTemplate'):", window.location.href.includes("blogTemplate"));
            console.log("getData:", model.getData());
            view.initPhaseOne();
            view.initPhaseTwo();
            view.initPhaseThree(model.getLinks());
            view.initPhaseFourA();
            view.initPhaseSeven();

            // phaseFour?
            console.log("after getCurrentlySelectedPostElementData:", model.getCurrentlySelectedPostElementData());
            const objTransfer =  model.getCurrentlySelectedPostElementData();
            console.log("objTransfer title:", objTransfer);

            if (objTransfer) {
                view.renderClickedCard(model.getCurrentlySelectedPostElementData());
               
                view.renderBlogTemplateSubject(objTransfer.subjects[0]);
                view.renderBlogTemplateDateStamp(objTransfer.dateStamp);
                view.renderBlogTemplateTitle(objTransfer.title);
                view.renderBlogTemplateImage(objTransfer.images[0]);
                view.renderBlogTemplateArticle(objTransfer.article);
                // view.renderBlogTemplateBack();
         
            }
            
            
        }
    },
    handlePostEvent (event) {
        event.preventDefault();
        console.log("controller.handlePostEvent(event):", event);
        const card = event.target.closest(".card-list-item");
        console.log("card:", card);
        
        if (card) {
            const link = card.firstElementChild;
            console.log("link:", link);
            const id = card?.id;
            model.setCurrentPostElementId(card); // gets set here
            console.log("controller obj before:", model.getCurrentlySelectedPostElementData());
            window.location.href = link.href; // data does not persist due to here, get from storage
    
        }
        
    },
    handleSubjects (event) {
        console.log("Handle Subjects", event);
        console.log("Handle Subjects target", event.target);

        const target = event.target;
        const classList = [...target.classList]
        console.log("subject classList:", classList);
        console.log("subject classList includes subject-list-item:", classList.includes("subject-list-item"));
        if (classList.includes("subject-list-item")) {
            const filteredSubjects = model. filterSubjects(event.target.textContent);

            if (filteredSubjects.length === 0) {
                view.renderNoPosts();
            } else {
                view.renderFilteredSubjects(filteredSubjects);
            }
        }
       
    }
  
}
controller.init();
export default controller;