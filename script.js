// Function to create a popup
function showPopup(message) {
    let popup = document.createElement("div");
    popup.id = "downloadPopup";
    popup.innerText = message;
    document.body.appendChild(popup);
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
    
    if (toDownloadButton) {
        toDownloadButton.addEventListener("click", toDownloadScreen);
    }
});
