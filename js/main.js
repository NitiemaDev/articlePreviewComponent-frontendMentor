const shareButton = document.getElementById('shareIcon');
const tooltip = document.getElementById('tooltip');

shareButton.addEventListener('click', (event) => {
  tooltip.classList.toggle("show");
  shareButton.classList.toggle("active");

});

document.addEventListener('click', (event) => {
    if (!shareButton.contains(event.target) && !tooltip.contains(event.target)) {
      tooltip.classList.remove("show");
      shareButton.classList.remove("active");
    }
  });
