import siteData from './data/siteData.js';
const CURRENT_VERSION = 2;

const model = {
    data: null,
    init : function () {

        const localData = localStorage.getItem("blogSite");
        const data = localData ? JSON.parse(localData) : null;
        // console.log("init localData:", localData);
     
        if (!data?.version || data?.version < CURRENT_VERSION) {

            this.data = siteData;
            this.data.version = CURRENT_VERSION;
            localStorage.setItem("blogSite", JSON.stringify(this.data));
            console.log("New Data Source Set To Local Storage:", this.data);
        } else {
            this.data = data;
            console.log("Data Source Loaded", this.data);
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
        return this.data.posts.find(obj => obj.id === this.data?.currentlySelectedPostId) || null;
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
    filterSubjects (subjectText) {
        console.log("filterSubjects:", this.data.posts);
        return this.data.posts.filter(posts => posts.subjects.includes(subjectText));
    }
}
export default model;