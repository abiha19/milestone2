document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills');
    if (!toggleSkillsButton || !skillsSection) {
        console.error('Toggle button or skills section not found!');
        return;
    }
    if (skillsSection.style.display === '') {
        skillsSection.style.display = 'block'; // Ensure the default display is set to block if no inline style is applied
    }
    toggleSkillsButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
});
