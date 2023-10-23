const wipePage = function() {
    const pageContent = document.querySelector('.pageContent');
    while (pageContent.firstChild) {
        pageContent.removeChild(pageContent.firstChild);
    }
};

export default wipePage;