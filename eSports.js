// Menu lateral
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const close = document.getElementById('close-sidebar');

    toggle.addEventListener('click', () => sidebar.classList.add('active'));
    close.addEventListener('click', () => sidebar.classList.remove('active'));
