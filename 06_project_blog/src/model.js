import siteData from './data/siteData.js';

const model = {
    data: null,
    init : function () {
        const localData = localStorage.getItem("blogSite");
        if (localData) {
            console.log("You have local data!");
            this.data = JSON.parse(localData);
            console.log("localData:", this.data);
        } else {
            console.log("You had no local data.");
            this.data = siteData;
            localStorage.setItem("blogSite", JSON.stringify(this.data));
            console.log("blogSite now set locally!");
        }
    },
    getData () {
        console.log("model getData:", this.data);
        return this.data;
    },
    getPosts () {
        const posts = this.data.posts;
        if (posts) {
            console.log("model getPosts:", posts);
            return posts;
        }
    },
    setCurrentPostElement (postElement) {
        console.log("model event setCurrentPost:", event);
        
        if (postElement) {
            this.currentlySelectedPostElement = postElement;
            this.currentlySelectedPostId = postElement?.id;
            console.log("currentlySelectedPostElement:", this.currentlySelectedPostElement);
            console.log("currentlySelectedPostId: ", this.currentlySelectedPostId);
            }
    },
    getCurrentlySelectedPostElement () {
        return this.currentlySelectedPostElement;
    },
    currentlySelectedPageLink: null,
    currentlySelectedPostElement: null,
    currentlySelectedPostId: null,
    currentURL: null,
    isSubscribed: false,

}
export default model;