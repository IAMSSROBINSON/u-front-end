import siteData from "./data/siteData.js";
const CURRENT_VERSION = 9;

const model = {
  data: null,
  init: function () {
    const localData = localStorage.getItem("blogSite");
    const data = localData ? JSON.parse(localData) : null;

    if (!data?.version || data?.version < CURRENT_VERSION) {
      this.data = siteData;
      this.data.version = CURRENT_VERSION;
      localStorage.setItem("blogSite", JSON.stringify(this.data));
      console.log("New Data Source Set To Local Storage:", this.data);
    } else {
      this.data = data;
    }
  },
  getData() {
    return this.data;
  },
  getPosts() {
    const posts = this.data.posts;
    if (posts) {
      return posts;
    }
  },
  setCurrentPostElementId(postElement) {
    if (postElement) {
      this.data.currentlySelectedPostId = postElement?.id;
      localStorage.setItem("blogSite", JSON.stringify(this.data));
    }
  },
  getCurrentlySelectedPostElementData() {
    return (
      this.data.posts.find(
        (obj) => obj.id === this.data?.currentlySelectedPostId
      ) || null
    );
  },
  getLinks() {
    const links = this.data?.links;
    if (links.length !== 0) {
      return links;
    }
  },
  getSubjects() {
    const subjects = this.data?.subjects;
    if (subjects.length !== 0) {
      return subjects;
    }
  },
  filterSubjects(subjectText) {
    return this.data.posts.filter((posts) =>
      posts.subjects.includes(subjectText)
    );
  },
};
export default model;
