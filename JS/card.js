document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseleave', () => {
        const dropdown = card.querySelector('.dropdown-list');
        const content = card.querySelector('.content');
        if (dropdown) {
            dropdown.classList.add('d-none');
            content.style.display = 'block'; // نمایش مجدد محتوا
        }
    });
});
