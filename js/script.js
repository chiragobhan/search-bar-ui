var searchBox = document.getElementById('search-box'),
    logoIcon = document.getElementById('logo-icon');

logoIcon.onclick = function () {
    searchBox.classList.toggle('active');
}