function toDownloadScreen() {
    window.location.href = "download.html";
}

// Attach event listener
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadButton");
    const toDownloadButton = document.getElementById("toDownloadButton");

    var modal = document.getElementById("myModal");
    var closeModalButton = document.getElementById("close");

    if (modal) {
        function showModal() {
            modal.style.display = "block";
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
        toDownloadButton.addEventListener("click", toDownloadScreen);
    }
});
