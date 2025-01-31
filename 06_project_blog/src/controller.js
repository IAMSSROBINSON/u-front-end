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
        view.initPhaseFour("blog");
        view.initPhaseFive(["all", "philosophy", "programming", "art", "design", "technology", "fitness", "nutrition"]);
        view.initPhaseSix([
            {
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias!",
                article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, tempore exercitationem autem culpa aliquam placeat voluptates temporibus molestiae vero libero eveniet voluptatem blanditiis eius ut dolore inventore. Maiores porro obcaecati repellat iure dolores fuga labore, voluptatem quas quo aspernatur expedita.",
                subjects: ["philosophy"],
                dateStamp: "01.01.2025",
                images: [
                    {
                        path: null,
                        altText: null,
                        caption: null
                    }
                ],
            },
            {
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias!",
                article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, tempore exercitationem autem culpa aliquam placeat voluptates temporibus molestiae vero libero eveniet voluptatem blanditiis eius ut dolore inventore. Maiores porro obcaecati repellat iure dolores fuga labore, voluptatem quas quo aspernatur expedita.",
                subjects: ["programming"],
                dateStamp: "01.01.2025",
                images: [
                    {
                        path: null,
                        altText: null,
                        caption: null
                    }
                ],
            },
            {
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias!",
                article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, tempore exercitationem autem culpa aliquam placeat voluptates temporibus molestiae vero libero eveniet voluptatem blanditiis eius ut dolore inventore. Maiores porro obcaecati repellat iure dolores fuga labore, voluptatem quas quo aspernatur expedita.",
                subjects: ["philosophy"],
                dateStamp: "01.01.2025",
                images: [
                    {
                        path: null,
                        altText: null,
                        caption: null
                    }
                ],
            },
            {
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias!",
                article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, tempore exercitationem autem culpa aliquam placeat voluptates temporibus molestiae vero libero eveniet voluptatem blanditiis eius ut dolore inventore. Maiores porro obcaecati repellat iure dolores fuga labore, voluptatem quas quo aspernatur expedita.",
                subjects: ["philosophy"],
                dateStamp: "01.01.2025",
                images: [
                    {
                        path: null,
                        altText: null,
                        caption: null
                    }
                ],
            },
            {
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias!",
                article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, tempore exercitationem autem culpa aliquam placeat voluptates temporibus molestiae vero libero eveniet voluptatem blanditiis eius ut dolore inventore. Maiores porro obcaecati repellat iure dolores fuga labore, voluptatem quas quo aspernatur expedita.",
                subjects: ["philosophy"],
                dateStamp: "01.01.2025",
                images: [
                    {
                        path: null,
                        altText: null,
                        caption: null
                    }
                ],
            },
            {
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias!",
                article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, tempore exercitationem autem culpa aliquam placeat voluptates temporibus molestiae vero libero eveniet voluptatem blanditiis eius ut dolore inventore. Maiores porro obcaecati repellat iure dolores fuga labore, voluptatem quas quo aspernatur expedita.",
                subjects: ["philosophy"],
                dateStamp: "01.01.2025",
                images: [
                    {
                        path: null,
                        altText: null,
                        caption: null
                    }
                ],
            },
            {
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias!",
                article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, tempore exercitationem autem culpa aliquam placeat voluptates temporibus molestiae vero libero eveniet voluptatem blanditiis eius ut dolore inventore. Maiores porro obcaecati repellat iure dolores fuga labore, voluptatem quas quo aspernatur expedita.",
                subjects: ["philosophy"],
                dateStamp: "01.01.2025",
                images: [
                    {
                        path: null,
                        altText: null,
                        caption: null
                    }
                ],
            },
        ]);
        
    }
}
controller.init();
export default controller;