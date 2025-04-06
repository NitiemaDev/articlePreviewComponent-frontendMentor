const shareButton = document.getElementById('shareIcon');
const tooltipDesktop = document.getElementById('tooltip');
const tooltipMobile = document.getElementById('tooltip__mobile');


// Handle share button

let browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (browserWidth > 768) {
  tooltipMobile.classList.remove("displayMobile");
  shareButton.addEventListener('click', () => {
    tooltip.classList.toggle("show");
    shareButton.classList.toggle("active");
  });
  
}

if (browserWidth <= 768) {
  tooltip.classList.remove("show");
  shareButton.addEventListener('click', () => {
    tooltipMobile.classList.toggle("displayMobile");
  });
}


document.addEventListener('click', (event) => {
    if (!shareButton.contains(event.target) && !tooltipDesktop.contains(event.target) && !tooltipMobile.contains(event.target)) {
      // Close tooltip if clicking outside of it
      tooltipMobile.classList.remove("displayMobile");
      tooltipDesktop.classList.remove("show");
      shareButton.classList.remove("active");
    }
});












