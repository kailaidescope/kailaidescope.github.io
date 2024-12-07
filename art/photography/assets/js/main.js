// Select all images in the gallery
const galleryImages = document.querySelectorAll(".gallery img");

// Create modal container dynamically
const modal = document.createElement("div");
modal.id = "image-modal";
modal.style.display = "none";
modal.innerHTML = `
  <div class="modal-content">
    <img src="" alt="Focused Image" />
  </div>
`;

// Append modal to the body
document.body.appendChild(modal);

// Select modal elements
const modalImage = modal.querySelector("img");

// Function to open the modal with the clicked image
galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    modalImage.src = img.src; // Set the modal image source to the clicked image source
    modal.style.display = "flex"; // Show the modal
    document.body.style.overflow = "hidden"; // Disable scrolling on the main page
  });
});

// Function to close the modal when clicking anywhere
modal.addEventListener("click", () => {
  closeModal();
});

// Function to close the modal when pressing "Escape"
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Function to close the modal
function closeModal() {
  modal.style.display = "none"; // Hide the modal
  modalImage.src = ""; // Clear the modal image source
  document.body.style.overflow = ""; // Re-enable scrolling on the main page
}
