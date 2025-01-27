import siteData from "./data/siteData.js";

const model = {
    data : null,
    init : async function () {
        let data = null;
         try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
             });

             if (response.ok) {
                data = await response.json();
                console.log("response is ok");
                this.data = data;
                console.log("this.data:", this.data);
                this.mergeData();
             }
             else {
                throw newError("Error in fetch response")
             }
         }
         catch (error) {
            console.log(error.name);
            console.log(error.message);
         }
    },
    mergeData() {
        if (this.data && siteData) {
                console.log("We have data.");
                let newData = Object.assign({}, siteData, this.data);
                this.data = newData;
                console.log("data merged.");
                console.log(this.data);
        } else {
            this.data = siteData;
            console.log("siteData set.");
        }
    },
    getLinkNames () {
        const linkNames = this.data.linkNames;
        console.log("linkNames:", linkNames);
        return linkNames;
    }


};

export default model;   