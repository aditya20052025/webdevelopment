const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".close");
const prevBtn = lightbox.querySelector(".prev");
const nextBtn = lightbox.querySelector(".next");
const filterBtns = document.querySelectorAll(".filter-btns button");

let currentIndex = 0;

// Open lightbox
galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = "flex";
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Prev/Next navigation
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  showImage();
});
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showImage();
});

function showImage() {
  const img = galleryItems[currentIndex].querySelector("img");
  lightboxImg.src = img.src;
}

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Filter functionality
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.filter;
    galleryItems.forEach(item => {
      item.style.display = (category === "all" || item.dataset.category === category) ? "block" : "none";
    });
  });
});
