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
            this.data = Object.assign({}, siteData, {currentlySelectedPageLink: null, currentlySelectedPostElement: null, currentlySelectedPostId: null,  currentURL: null, isSubscribed: false, currentlySelectedPageLink: null});
            
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
    setCurrentPostElementId (postElement) {

        if (postElement) {
            this.data.currentlySelectedPostId = postElement?.id;
            console.log("currentlySelectedPostId: ", this.data.currentlySelectedPostId);
            localStorage.setItem("blogSite", JSON.stringify(this.data));
            }
    },
    getCurrentlySelectedPostElementData () {
        const id = this.data.currentlySelectedPostId;
        if (id) {
            return this.data.posts.find(obj => obj.id === id);
        }
    },
    getLinks() {
        const links = this.data?.links;
        console.log("links:", links);
        if (links.length !== 0) {
            return links;
        }
    },
    getSubjects () {
        const subjects = this.data?.subjects;
        if (subjects.length !== 0) {
            return subjects;
        }
    },  
 
}
export default model;