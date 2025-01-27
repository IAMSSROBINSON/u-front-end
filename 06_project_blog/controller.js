import view from './view.js';
import model from './model.js';

const controller = {
    init : function () {
        const response = new Promise((res, rej) => {
            res(model.init());
        })
        response.then((data) => {
            console.log("response data:", data);
            const links = model.getLinks();
            if (links) {
                view.setLinks(links);
            } else {
                console.log("No links");
            }
        });
        view.init();
       
        
    }
}
controller.init();

export default controller;