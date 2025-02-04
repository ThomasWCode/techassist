// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

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

// Function to create a popup
function showPopup(message) {
    let popup = document.createElement("div");
    popup.id = "downloadPopup";
    popup.innerText = message;
    document.body.appendChild(popup);

    // Remove popup after 3 seconds
    setTimeout(() => {
        popup.remove();
    }, 3000);
}

// Function to fetch the download link
function getDownloadLink() {
    showPopup("Starting the download... Please wait");
  
    const downloadRef = ref(database, "LatestVersion/DownloadLink");

    get(downloadRef)
        .then(snapshot => {
            if (snapshot.exists()) {
                window.location.href = snapshot.val();
            } else {
                alert("Failed to begin download. Please try again.");
                console.error("No download link found in database.");
            }
        })
        .catch(error => {
            console.error("Error fetching download link:", error);
            alert("Failed to begin download. Please try again.");
        });
}

function toDownloadScreen() {
    window.location.href = "download.html";
}

// Attach event listener
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadButton");
    const toDownloadButton = document.getElementById("toDownloadButton");

    var modal = document.getElementById("myModal");

    if (modal) {
        function showModal() {
            modal.style.display = "block";
        }

        if (downloadBtn) {
            downloadBtn.addEventListener("click", showModal);
        }
    }

    if (downloadBtn) {
        downloadBtn.addEventListener("click", getDownloadLink);
    }
    
    if (toDownloadButton) {
        toDownloadButton.addEventListener("click", toDownloadScreen);
    }
});