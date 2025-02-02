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
    currentlySelectedLink: null,
    currentlySelectedPost: null,
    currentURL: null,
}
export default model;