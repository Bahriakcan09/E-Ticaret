const links = document.querySelectorAll('.list-group li a');

links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        const listItems = document.querySelectorAll('.list-group li');
        listItems.forEach(function(item) {
            item.classList.remove('active');
        });
        const listItem = this.parentElement;
        listItem.classList.add('active');
        event.preventDefault();
    });
});