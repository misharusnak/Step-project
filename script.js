const loadMoreOpen = document.getElementById("loadBtn");
loadBtn.addEventListener("click", open);



function open() {
  const visible = document.getElementById("toolsTwo")
  visible.classList.add("tools2-visible")
  visible.classList.remove("tools2");
  const loadMoreclose = document.getElementById("loadBtn");
  loadBtn.addEventListener("click", close);
  loadBtn.textContent = "Hide"
}

function close() {
  const visible = document.getElementById("toolsTwo")
  visible.classList.remove("tools2-visible")
  visible.classList.add("tools2");
  loadBtn.removeEventListener("click", close);
  loadBtn.textContent = "Load more"
}



new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
  },
});