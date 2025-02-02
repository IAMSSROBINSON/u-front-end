import model from './model.js';
import view from './view.js';

const controller = {
    init : function () {
        model.init();
        if (window.location.href.includes("index.html")) {
            view.initPhaseOne();
            view.initPhaseTwo();
            view.initPhaseThree([
                { 
                    textValue: "blog",
                    hrefValue: "index.html"
                },
                { 
                    textValue: "about",
                    hrefValue: "about.html"
                },
            ]);
            view.initPhaseFour(["all", "philosophy", "programming", "art", "design", "technology", "fitness", "nutrition"]);
            view.initPhaseFive("blog");
            view.initPhaseSix(model.getPosts());
            view.initPhaseSeven();
        }
        if (window.location.href.includes("blogTemplate")) {
            console.log("window.location.href.includes('blogTemplate'):", window.location.href.includes("blogTemplate"))
            view.initPhaseOne();
            view.initPhaseTwo();
        }
    },
    handlePostEvent (event) {
        event.preventDefault();
        console.log("controller.handlePostEvent(event):", event);
        const card = event.target.closest(".card-list-item");
        console.log("card:", card);
        if (card) {
            const id = card?.id;
            model.setCurrentPostElement(card);

            const currentBlogPost = model.getCurrentlySelectedPostElement();
            console.log("controller getCurrentlySelectedPostElement:", model.currentlySelectedPostElement);
        }

       
        
    },
  
}
controller.init();
export default controller;