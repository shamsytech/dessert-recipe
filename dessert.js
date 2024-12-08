function toggleLanguage() {
    // Get the current language of the page
    let currentLang = document.documentElement.lang;

    if (currentLang === "en") {
        // Switch to Arabic
        document.documentElement.lang = "ar";
        document.getElementById('english').style.display = 'none';
        document.getElementById('arabic').style.display = 'block';
        document.getElementById('toggleLanguage').textContent = "English";
    } else {
        // Switch to English
        document.documentElement.lang = "en";
        document.getElementById('english').style.display = 'block';
        document.getElementById('arabic').style.display = 'none';
        document.getElementById('toggleLanguage').textContent = "العربية";
    }
}

function previousWebsite() {
    location.replace("#");
}

function nextWebsite() {
    location.replace("#");
}
