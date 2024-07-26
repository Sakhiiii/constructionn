document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.specialization-item').forEach(item => {
        item.querySelector('.icon').addEventListener('click', () => {
            const icon = item.querySelector('.icon');
            const description = item.querySelector('p');
            
            icon.classList.toggle('open');
            item.classList.toggle('expanded');
        });
    });
});