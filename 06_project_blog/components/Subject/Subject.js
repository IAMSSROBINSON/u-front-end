function Subject (subjectName = undefined) {
    const li = document.createElement("li");
   
   if (subjectName.length > 0) {
    li.classList.add(subjectName, "subject-list-item", "subject");
    li.textContent = subjectName;
    return li;
   }
}

export default Subject;