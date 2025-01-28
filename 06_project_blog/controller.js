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
            const posts = model.getPosts();
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
            if (posts) {
                if (posts.length > 0) {
                    view.setCards(posts);
                    const constructPosts = [];
                    posts.forEach((postObj) => {
                        const contructingObj = {};
                        contructingObj.id = Math.random().toString(32).substring(2);
                        contructingObj.title = postObj.title;
                        contructingObj.article = postObj.body;
                        contructingObj.subject = model.getRandomSubject();
                        contructingObj.dateStamp = this.createRandomDateStamp();
                        console.log("contructingObj:", contructingObj);
                    })
                    // send an array of posts to the view
                    // the array should be an array of objects/posts
                    // each object should have:
                        // title
                        // article
                        // subject
                        // dateStamp
                    // construct each data point from here using functions to get the values
                    // 
                }
            } else {
                throw new Error("No Posts");
            }

        })
        .catch((error) => {
            console.log(error);
        })
        view.init();
    },
    createRandomDateStamp () {
        //  Date Format: YYYY-MM-DD
        //  return Format: DD.MM.YYYY

        const date = new Date(); // Current date

        const year = date.getFullYear();
        console.log("year:", year);

        const month = date.getMonth() + 1;
        const returnMonth = month.toString().padStart(2, 0);
        console.log("month:", month);
        console.log("returnMonth:", returnMonth);

        const day = date.getDate();
        const randomDay = Math.floor(Math.random() * day) + 1;
        const returnRandomDay = randomDay.toString().padStart(2, 0);
        console.log("day:", day);
        console.log("randomDay:", randomDay);
        console.log("returnRandomDay:", returnRandomDay);

        const dateStamp = `${returnRandomDay}.${returnMonth}.${year}`;
        console.log("dateStamp:", dateStamp);


        return dateStamp ?? "01.01.2025";
    }
}
controller.init();

export default controller;