document.addEventListener('DOMContentLoaded', function() {
    // List of all category sections and their corresponding file lists
    const categories = [
        { sectionId: 'html-section', listId: 'html-list' },
        { sectionId: 'css-section', listId: 'css-list' },
        { sectionId: 'js-section', listId: 'js-list' },
        { sectionId: 'python-section', listId: 'python-list' },
        { sectionId: 'java-section', listId: 'java-list' },
        { sectionId: 'txt-section', listId: 'txt-list' }
    ];

    categories.forEach(category => {
        const section = document.getElementById(category.sectionId);
        const list = document.getElementById(category.listId);

        if (section && list) {
            // Check if the file list has any list items (<li> elements)
            // The .children property gives a live HTMLCollection of the child elements.
            if (list.children.length === 0) {
                // If the list is empty, hide the entire category section (header + list)
                section.style.display = 'none';
            } else {
                // If it has files, ensure it is shown (good for consistency)
                section.style.display = 'block';
            }
        }
    });

    // Optional: Add entry animations after the hiding is complete
    const allFileItems = document.querySelectorAll('.file-list li');
    allFileItems.forEach((item, index) => {
        item.style.opacity = 0; // Hide them initially
        item.style.animation = `slideInItem 0.5s ease-out forwards ${index * 0.1}s`;
    });
});
