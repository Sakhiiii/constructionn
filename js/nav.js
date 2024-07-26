// Function to open sidebar
function openNav() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = "0px";
}

// Function to close sidebar
function closeNav() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = "-350px";
}

// Event listener to open sidebar when clicking menu icon
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    menuIcon.addEventListener('click', openNav);
    
    // Event listener to close sidebar when clicking close button
    const closeBtn = document.querySelector('.closebtn');
    closeBtn.addEventListener('click', closeNav);

    // Optional: Close sidebar when clicking outside of it
    document.addEventListener('click', function(event) {
        const sidebar = document.getElementById("sidebar");
        if (!event.target.closest('.navbar') && sidebar.style.left === '0px') {
            sidebar.style.left = '-350px';
        }
    });
});
