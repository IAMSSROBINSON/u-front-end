import model from './model.js';
import view from './view.js';

const controller = {
    init : function () {
        model.init();
        if (window.location.href.includes("index.html")) {
            view.initPhaseOne();
            view.initPhaseTwo();
            view.initPhaseThree(view.initPhaseThree(model.getLinks()));
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

            // phaseFour?
            console.log("after getCurrentlySelectedPostElementData:", model.getCurrentlySelectedPostElementData());
            const objTransfer =  model.getCurrentlySelectedPostElementData();
            if (objTransfer) {
                view.renderClickedCard(model.getCurrentlySelectedPostElementData());
                const subject = objTransfer.subject;
                view.renderBlogTemplateSubject(subject);
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
  
}
controller.init();
export default controller;