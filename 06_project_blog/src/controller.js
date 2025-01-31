import model from './model.js';
import view from './view.js';

const controller = {
    init : function () {
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
    }
}
controller.init();
export default controller;