// Function to detect the user's browser
function detectBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('chrome') > -1) {
        return 'chrome';
    } else if (userAgent.indexOf('firefox') > -1) {
        return 'firefox';
    } else if (userAgent.indexOf('safari') > -1) {
        return 'safari';
    } else if (userAgent.indexOf('edge') > -1) {
        return 'edge';
    } else {
        return 'other';
    }
}

// Function to display browser-specific instructions in the modal
function showBrowserInstructions(browser) {
    const instructionsElement = document.getElementById('browserInstructions');
    switch (browser) {
        case 'chrome':
            instructionsElement.innerHTML = '<p>An down arrow should appear in the top right of Chrome. It will have a blue circle going round it.</p> <p>Once the download has finsished (circle gone), click on the down arrow to open a small menu.</p> <p>Then hover over 'TechAssist_Setup.exe' and click on the arrow on the right point to the topleft with a box round it.</p>';
            break;
        case 'firefox':
            instructionsElement.innerHTML = '<p>In Mozilla Firefox: After downloading, click the down arrow in the top right to open the downloaded file or go to the Downloads section in the menu.</p>';
            break;
        case 'edge':
            instructionsElement.innerHTML = '<p>In Microsoft Edge: After downloading, click the down arrow in the top right or go to your Downloads folder.</p>';
            break;
        default:
            instructionsElement.innerHTML = '<p>After downloading, locate the file in your Downloads folder and click to run it.</p>';
            break;
    }
}

// Function to handle the modal behavior
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadButton");
    const toDownloadButton = document.getElementById("toDownloadButton");

    var modal = document.getElementById("myModal");
    var closeModalButton = document.getElementById("close");

    if (modal) {
        function showModal() {
            modal.style.display = "block";
            // Detect the browser and show instructions
            const browser = detectBrowser();
            showBrowserInstructions(browser);
        }

        function closeModal() {
            modal.style.display = "none";
        }

        if (downloadBtn) {
            downloadBtn.addEventListener("click", showModal);
        }

        if (closeModalButton) {
            closeModalButton.addEventListener("click", closeModal);
        }
    }

    if (toDownloadButton) {
        toDownloadButton.addEventListener("click", function () {
            window.location.href = "download.html";
        });
    }
});
