document.querySelectorAll(".faq-item button").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;

    document.querySelectorAll(".faq-item").forEach(faq => {
      if (faq !== item) faq.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});
