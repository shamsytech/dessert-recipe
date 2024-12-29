// Ensure the default language is correctly initialized and set the toggle button event
window.onload = function() {
    let currentLang = getLanguage(); // Get the stored or detected language
    setLanguage(currentLang); // Apply the language when the page loads

    // Ensure the toggle button is clickable after the page is fully loaded
    document.getElementById('toggleLanguage').addEventListener('click', toggleLanguage);
};

// Function to set the language
function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang); // Store language preference
    toggleLanguageDisplay();
}

// Function to get the stored language from localStorage or default to browser language
function getLanguage() {
    let lang = localStorage.getItem('lang') || navigator.language || 'en';
    return lang.startsWith('ar') ? 'ar' : 'en'; // Return Arabic if detected or default to English
}

// Function to update the page elements based on the selected language
function toggleLanguageDisplay() {
    let currentLang = document.documentElement.lang;

    if (currentLang === "ar") {
        // Apply Arabic settings
        document.getElementById('toggleLanguage').textContent = "English";

        // Show Arabic and hide English
        document.getElementById('headingEnglish').style.display = 'none';
        document.getElementById('headingArabic').style.display = 'block';
        document.getElementById('altArabic').style.display = 'block';
        document.getElementById('altEnglish').style.display = 'none';
        document.getElementById('nameArabic').style.display = 'block';
        document.getElementById('nameEnglish').style.display = 'none';
        document.getElementById('detailsEnglish').style.display = 'none';
        document.getElementById('detailsArabic').style.display = 'block';
        document.getElementById('spanEnglish').style.display = 'none';
        document.getElementById('spanArabic').style.display = 'block';
        document.getElementById('prepHeaderEnglish').style.display = 'none';
        document.getElementById('prepHeaderArabic').style.display = 'block';
        document.getElementById('prepTimeEnglish').style.display = 'none';
        document.getElementById('prepTimeArabic').style.display = 'block';
    } else {
        // Apply English settings
        document.getElementById('toggleLanguage').textContent = "العربية";

        // Show English and hide Arabic
        document.getElementById('headingEnglish').style.display = 'block';
        document.getElementById('headingArabic').style.display = 'none';
        document.getElementById('altArabic').style.display = 'none';
        document.getElementById('altEnglish').style.display = 'block';
        document.getElementById('nameArabic').style.display = 'none';
        document.getElementById('nameEnglish').style.display = 'block';
        document.getElementById('detailsEnglish').style.display = 'block';
        document.getElementById('detailsArabic').style.display = 'none';
        document.getElementById('spanEnglish').style.display = 'block';
        document.getElementById('spanArabic').style.display = 'none';
        document.getElementById('prepHeaderEnglish').style.display = 'block';
        document.getElementById('prepHeaderArabic').style.display = 'none';
        document.getElementById('prepTimeEnglish').style.display = 'block';
        document.getElementById('prepTimeArabic').style.display = 'none';
    }
}

// Toggle language function that is triggered on button click
function toggleLanguage() {
    let currentLang = document.documentElement.lang;
    let newLang = currentLang === "en" ? "ar" : "en";
    setLanguage(newLang); // Set the new language and update page
}


// previous and next website placeholders
function previousWebsite() {
    location.replace("#");
}

function nextWebsite() {
    location.replace("#");
}
