function Subject (subjectValue) {
    const li = document.createElement("li");
    li.classList.add("subject-list-item");
    li.textContent = subjectValue;
    return li;
}
export default Subject;