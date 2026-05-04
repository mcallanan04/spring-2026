function showPage(pageId) {
  let pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

function changeText(card) {
  card.innerHTML = `
    <p>You changed everything</p>
    <p>without even trying</p>
  `;
}

function togglePulse() {
  let pulses = document.querySelectorAll(".pulse");

  pulses.forEach(function(item) {
    item.classList.toggle("animate");
  });
}