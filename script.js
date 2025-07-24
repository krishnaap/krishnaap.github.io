document.addEventListener("DOMContentLoaded", () => {
  if (window.VANTA) {
    VANTA.CLOUDS({ el: "#vanta-bg" });
  }
  const buttons = document.querySelectorAll(".side-btn");
  const sections = document.querySelectorAll(".content-area section, .intro");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      sections.forEach(section => {
        section.classList.remove("visible");
      });
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("visible");
      }
    });
  });

  // Hover preview logic
  const previewBox = document.getElementById("preview-box");
  const previewImg = document.getElementById("preview-img");

  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("mouseover", (e) => {
      const url = new URL(link.href);
      const hostname = url.hostname.replace("www.", "");
      previewImg.src = `https://image.thum.io/get/width/600/crop/400/noanimate/${url.href}`;
      previewBox.style.display = "block";
      previewBox.style.left = `${e.pageX + 10}px`;
      previewBox.style.top = `${e.pageY + 10}px`;
    });

    link.addEventListener("mousemove", (e) => {
      previewBox.style.left = `${e.pageX + 10}px`;
      previewBox.style.top = `${e.pageY + 10}px`;
    });

    link.addEventListener("mouseout", () => {
      previewBox.style.display = "none";
      previewImg.src = "";
    });
  });
});

