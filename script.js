let currentIndex = 0;
const images = document.querySelectorAll(".gallery-images img");
const totalImages = images.length;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

document.querySelector(".next").addEventListener("click", nextImage);
document.querySelector(".prev").addEventListener("click", prevImage);

setInterval(nextImage, 10000);

showImage(currentIndex);

function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imageSrc;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
