const siteData = {
    logo: {
        logoType: "iamssrobinson",
        url: "index.html",
        logoMark: null,
    },
    author: {
        name: "iamssrobinson",
        copyright: "© iamssrobinson 2025",
    },
    links: [
        { 
            textValue: "blog",
            hrefValue: "index.html"
        },
        { 
            textValue: "about",
            hrefValue: "about.html"
        },
    ],
    subjects: ["all", "philosophy", "programming", "art", "design", "technology", "fitness", "nutrition"],
    posts: [
        {
            id : generateId(),
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias!",
            article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, tempore exercitationem autem culpa aliquam placeat voluptates temporibus molestiae vero libero eveniet voluptatem blanditiis eius ut dolore inventore. Maiores porro obcaecati repellat iure dolores fuga labore, voluptatem quas quo aspernatur expedita.",
            subjects: ["philosophy"],
            dateStamp: "01.01.2025",
            images: [
                {
                    path: "/public/assets/images/plato.jpg",
                    altText: "Article image.",
                    caption: "Plato contemplating thought itself"
                }
            ],
        },
        {
            id : generateId(),
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias!",
            article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, tempore exercitationem autem culpa aliquam placeat voluptates temporibus molestiae vero libero eveniet voluptatem blanditiis eius ut dolore inventore. Maiores porro obcaecati repellat iure dolores fuga labore, voluptatem quas quo aspernatur expedita.",
            subjects: ["programming"],
            dateStamp: "01.01.2025",
            images: [
                {
                    path: "/public/assets/images/plato.jpg",
                    altText: "Article image.",
                    caption: "Plato contemplating thought itself"
                }
            ],
        },
        {
            id : generateId(),
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias!",
            article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, tempore exercitationem autem culpa aliquam placeat voluptates temporibus molestiae vero libero eveniet voluptatem blanditiis eius ut dolore inventore. Maiores porro obcaecati repellat iure dolores fuga labore, voluptatem quas quo aspernatur expedita.",
            subjects: ["programming"],
            dateStamp: "01.01.2025",
            images: [
                {
                    path: "/public/assets/images/plato.jpg",
                    altText: "Article image.",
                    caption: "Plato contemplating thought itself"
                }
            ],
        },
        {
            id : generateId(),
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias!",
            article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, tempore exercitationem autem culpa aliquam placeat voluptates temporibus molestiae vero libero eveniet voluptatem blanditiis eius ut dolore inventore. Maiores porro obcaecati repellat iure dolores fuga labore, voluptatem quas quo aspernatur expedita.",
            subjects: ["programming"],
            dateStamp: "01.01.2025",
            images: [
                {
                    path: "/public/assets/images/plato.jpg",
                    altText: "Article image.",
                    caption: "Plato contemplating thought itself"
                }
            ],
        },
        {
            id : generateId(),
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias!",
            article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, tempore exercitationem autem culpa aliquam placeat voluptates temporibus molestiae vero libero eveniet voluptatem blanditiis eius ut dolore inventore. Maiores porro obcaecati repellat iure dolores fuga labore, voluptatem quas quo aspernatur expedita.",
            subjects: ["programming"],
            dateStamp: "01.01.2025",
            images: [
                {
                    path: "/public/assets/images/plato.jpg",
                    altText: "Article image.",
                    caption: "Plato contemplating thought itself"
                }
            ],
        },
        {
            id : generateId(),
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias!",
            article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, tempore exercitationem autem culpa aliquam placeat voluptates temporibus molestiae vero libero eveniet voluptatem blanditiis eius ut dolore inventore. Maiores porro obcaecati repellat iure dolores fuga labore, voluptatem quas quo aspernatur expedita.",
            subjects: ["programming"],
            dateStamp: "01.01.2025",
            images: [
                {
                    path: "/public/assets/images/plato.jpg",
                    altText: "Article image.",
                    caption: "Plato contemplating thought itself"
                }
            ],
        },
        {
            id : generateId(),
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias!",
            article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, tempore exercitationem autem culpa aliquam placeat voluptates temporibus molestiae vero libero eveniet voluptatem blanditiis eius ut dolore inventore. Maiores porro obcaecati repellat iure dolores fuga labore, voluptatem quas quo aspernatur expedita.",
            subjects: ["programming"],
            dateStamp: "01.01.2025",
            images: [
                {
                    path: "/public/assets/images/plato.jpg",
                    altText: "Article image.",
                    caption: "Plato contemplating thought itself"
                }
            ],
        },
    ]
};

function generateId () {
    return Math.random().toString(32).substring(2);
}
export default siteData;