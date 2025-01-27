import view from './view.js';
import model from './model.js';

const controller = {
    init : function () {
        view.init();
    }
}

controller.init();
model.init();

export default controller;