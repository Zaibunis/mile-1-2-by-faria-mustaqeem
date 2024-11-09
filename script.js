var _a;
// This function will toggle the visibility of the skills section and change the button text
(_a = document.getElementById("toggle-skills")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var skillsSection = document.getElementById("skills-list");
    var toggleButton = document.getElementById("toggle-skills");
    if (skillsSection) {
        if (skillsSection.style.display === "none") {
            // Show skills
            skillsSection.style.display = "block";
            // Change button text to "Hide Skills"
            if (toggleButton) {
                toggleButton.textContent = "Hide Skills";
            }
        }
        else {
            // Hide skills
            skillsSection.style.display = "none";
            // Change button text to "Show Skills"
            if (toggleButton) {
                toggleButton.textContent = "Show Skills";
            }
        }
    }
});
