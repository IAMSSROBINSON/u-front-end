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
            const subjects = model.getSubjects();
            if (links) {
                view.setLinks(links);
            } else {
                throw new Error("No links");
            }
            if (subjects) {
                view.setSubjects(subjects);
            } else {
                throw new Error("No Subjects");
            }
        })
        .catch((error) => {
            console.log(error);
        })
        view.init();
       
        
    }
}
controller.init();

export default controller;