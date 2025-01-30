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
    }
}
controller.init();
export default controller;