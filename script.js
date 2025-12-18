const icon = document.querySelector('.icon');
        const iconX = document.querySelector('.fa-bars');
        const navUl = document.querySelector('.navbar ul');
        const searchBar = document.querySelector('.search-bar');
        const searchBtn = document.querySelector('.search-btn');
        icon.addEventListener('click', () => {
            navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
            if (iconX.classList.contains('fa-bars')) {
                iconX.classList.remove('fa-bars');
                iconX.classList.add('fa-xmark');
            } else {
                iconX.classList.remove('fa-xmark');
                iconX.classList.add('fa-bars');
            }
        });
        searchBtn.addEventListener('click', () => {
            searchBar.style.display = searchBar.style.display === 'flex' ? 'none' : 'flex';
        });