const buttons = document.querySelectorAll(".side-btn");
const contentArea = document.querySelector(".content-area");
const intro = document.querySelector(".intro");
const sections = document.querySelectorAll("section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const target = document.getElementById(targetId);

    intro.classList.remove("visible");
    sections.forEach(sec => sec.classList.remove("visible"));
    target.classList.add("visible");
  });
});

// Live thumbnail preview
const previewBox = document.getElementById("preview-box");
const previewImg = document.getElementById("preview-img");
const links = document.querySelectorAll("section a");

links.forEach(link => {
  link.addEventListener("mouseover", e => {
    const url = link.href;
    previewImg.src = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600`;
    previewBox.style.display = "block";
  });

  link.addEventListener("mousemove", e => {
    previewBox.style.top = (e.pageY + 20) + "px";
    previewBox.style.left = (e.pageX + 20) + "px";
  });

  link.addEventListener("mouseout", e => {
    previewBox.style.display = "none";
  });
});

