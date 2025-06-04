
function toggleCollapse(element) {
    console.log("Toggling collapse for element:", element);
    const content = element.querySelector('ul');
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
