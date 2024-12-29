window.onload = function() {
    // Ensure the default language is English when the page loads
    let currentLang = document.documentElement.lang || 'en';  // Default to 'en' if not set

    if (currentLang === "ar") {
        // If the language is set to Arabic, apply Arabic settings
        document.documentElement.lang = "ar";
        document.getElementById('toggleLanguage').textContent = "English";
        
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

        // Hide English prep time and header, show Arabic
        document.getElementById('prepHeaderEnglish').style.display = 'none';
        document.getElementById('prepHeaderArabic').style.display = 'block';
        document.getElementById('prepTimeEnglish').style.display = 'none';
        document.getElementById('prepTimeArabic').style.display = 'block';
    } else {
        // If the language is English or not set, apply English settings
        document.documentElement.lang = "en";
        document.getElementById('toggleLanguage').textContent = "العربية";
        
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

        // Show English prep time and header, hide Arabic
        document.getElementById('prepHeaderEnglish').style.display = 'block';
        document.getElementById('prepHeaderArabic').style.display = 'none';
        document.getElementById('prepTimeEnglish').style.display = 'block';
        document.getElementById('prepTimeArabic').style.display = 'none';
    }
};

// Toggle language function
function toggleLanguage() {
    let currentLang = document.documentElement.lang;

    if (currentLang === "en") {
        // Switch to Arabic
        document.documentElement.lang = "ar";
        document.getElementById('toggleLanguage').textContent = "English";

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

        // Hide English prep time and header, show Arabic
        document.getElementById('prepHeaderEnglish').style.display = 'none';
        document.getElementById('prepHeaderArabic').style.display = 'block';
        document.getElementById('prepTimeEnglish').style.display = 'none';
        document.getElementById('prepTimeArabic').style.display = 'block';

    } else {
        // Switch to English
        document.documentElement.lang = "en";
        document.getElementById('toggleLanguage').textContent = "العربية";

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

        // Show English prep time and header, hide Arabic
        document.getElementById('prepHeaderEnglish').style.display = 'block';
        document.getElementById('prepHeaderArabic').style.display = 'none';
        document.getElementById('prepTimeEnglish').style.display = 'block';
        document.getElementById('prepTimeArabic').style.display = 'none';
    }
}


// previous and next website placeholders
function previousWebsite() {
    location.replace("#");
}

function nextWebsite() {
    location.replace("#");
}
