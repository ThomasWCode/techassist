import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKSRHBsb1-EWH4jhDinK9xmuJvw6SsSVU",
    authDomain: "techassist-50e7d.firebaseapp.com",
    databaseURL: "https://techassist-50e7d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "techassist-50e7d",
    storageBucket: "techassist-50e7d.firebasestorage.app",
    messagingSenderId: "462373877165",
    appId: "1:462373877165:web:54d8626a578c5cdd1a9d24",
    measurementId: "G-5GFJ2VMHFK"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

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

function submitContactRequest() {
    var nameInput = document.getElementById("name");
    var messageInput = document.getElementById("message");
    var emailInput = document.getElementById("email");

    var name = nameInput.value.trim();
    var message = messageInput.value.trim();
    var email = emailInput.value.trim();

    if (!name || !message || !email) {
        alert("Please fill out all fields.");
        return;
    }

    var timestamp = Date.now();
    var contactRef = ref(database, `ContactRequests/${timestamp}`);

    set(contactRef, {
        name: name,
        email: email,
        message: message
    }).then(() => {
        // Clear inputs
        nameInput.value = "";
        messageInput.value = "";
        emailInput.value = "";

        // Show success popup
        document.getElementById("successPopup").style.display = "block";
    }).catch((error) => {
        console.error("Error submitting contact request: ", error);
        alert("Failed to submit contact request. Please try again.");
    });
}


function closeSuccessPopup() {
    document.getElementById("successPopup").style.display = "none";
}

document.getElementById("closeSuccessPopup").addEventListener("click", closeSuccessPopup);
    
// Function to handle the modal behavior
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadButton");

    var modal = document.getElementById("myModal");
    var closeModalButton = document.getElementById("close");

    var submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", submitContactRequest);
    
    if (modal) {
        function showModal() {
            modal.style.display = "block";
            
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
