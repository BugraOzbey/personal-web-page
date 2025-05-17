document.addEventListener('DOMContentLoaded', function () {
    let currentLanguage = 'tr';

    function changeLanguage(language) {
        currentLanguage = language;

        document.querySelectorAll('.language-icon').forEach(icon => {
            icon.classList.remove('active');
        });
        document.getElementById(`${language}-lang`).classList.add('active');

        const t = translations[language];
        document.getElementById('title').textContent = t.title;
        document.getElementById('profession').textContent = t.profession;
        document.getElementById('linkedin-text').textContent = t.linkedin;
        document.getElementById('github-text').textContent = t.github;
        document.getElementById('email-text').textContent = t.email;
        document.getElementById('blog-title').textContent = t.blogTitle;
        document.getElementById('blog-content-1').textContent = t.blogContent1;
        document.getElementById('blog-content-2').textContent = t.blogContent2;
        document.getElementById('download-cv').textContent = t.downloadCV;
        document.getElementById('download-cv').setAttribute('href', `/documents/cv_${language}.pdf`);
        document.documentElement.lang = language;
    }

    changeLanguage(currentLanguage);

    document.getElementById('tr-lang').addEventListener('click', () => changeLanguage('tr'));
    document.getElementById('en-lang').addEventListener('click', () => changeLanguage('en'));
    document.getElementById('de-lang').addEventListener('click', () => changeLanguage('de'));
});
