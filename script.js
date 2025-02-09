// Function to detect the user's browser
function detectBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Edge detection (new Edge based on Chromium)
    if (userAgent.indexOf('edg') > -1) {
        return 'edge';
    } else if (userAgent.indexOf('chrome') > -1) {
        return 'chrome';
    } else if (userAgent.indexOf('firefox') > -1) {
        return 'firefox';
    } else if (userAgent.indexOf('safari') > -1) {
        return 'safari';
    } else {
        return 'other';
    }
}

// Function to display browser-specific instructions in the modal
function showBrowserInstructions(browser) {
    const instructionsElement = document.getElementById('browserInstructions');

    switch (browser) {
        case 'chrome':
            instructionsElement.innerHTML = "<p>There should be a down arrow in the top right of Chrome. It will have a circle going round it.</p> <p>Once the download has finished (circle completed), click on the down arrow to open a small menu.</p> <p>Then hover over 'TechAssist_Setup.exe' and click on the arrow on the right pointing to the top-left with a box around it.</p> <br> <p>Chrome may say that TechAssist is a 'suspicious file'. This is because we are not yet a widely recognised software. Please ignore this warning by clicking on the arrow on the right of the warning and then 'Download Suspicious File'.";
            break;
        case 'firefox':
            instructionsElement.innerHTML = "<p>There should be a down arrow in the top right of Firefox. It will have a circle going round it.</p> <p>Once the download has finished (circle completed), click on the down arrow to open a small menu, if not already open.</p> <p>Then hover over 'TechAssist_Setup.exe' and click on 'Open File' under the name.</p>";
            break;
        case 'edge':
            instructionsElement.innerHTML = "<p>There should be a down arrow in the top right of Firefox. It will have a circle going round it.</p> <p>Once the download has finished (circle completed), click on the down arrow to open a small menu, if not already open.</p> <p>Then hover over 'TechAssist_Setup.exe' and click on 'Open File' under the name.</p>";
            break;
        default:
            instructionsElement.innerHTML = "<p>There should be a down arrow in the top right of your browser. It will have a circle going round it.</p> <p>Once the download has finished (circle completed), click on the down arrow to open a small menu, if not already open.</p> <p>Then hover over 'TechAssist_Setup.exe' and click on 'Open File' under the name. If there is no 'Open File', then look for an arrow on the right pointing to the top-left with a box around it.</p>";
            break;
    }
}

// Function to handle the modal behavior
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadButton");

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
});
