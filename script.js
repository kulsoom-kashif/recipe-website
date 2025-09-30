// Recipe search functionality
window.addEventListener('DOMContentLoaded', function() {
    var searchBar = document.getElementById('search-bar');
    if (!searchBar) return;

    searchBar.addEventListener('input', function() {
        var filter = searchBar.value.toLowerCase();
        // Try icon-link (category/recipe icons)
        var icons = document.querySelectorAll('.icon-link');
        icons.forEach(function(icon) {
            var label = icon.textContent || icon.innerText;
            if (label.toLowerCase().indexOf(filter) > -1) {
                icon.style.display = '';
            } else {
                icon.style.display = 'none';
            }
        });
        // Optionally, also filter recipe cards if present
        var cards = document.querySelectorAll('.recipe-card');
        cards.forEach(function(card) {
            var text = card.textContent || card.innerText;
            if (text.toLowerCase().indexOf(filter) > -1) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
