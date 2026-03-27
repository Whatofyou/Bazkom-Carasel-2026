
// Countdown logic (unchanged)
const eventDate = new Date().getTime() + 5000;
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("countdown-view").style.display = "none";
    const eventView = document.getElementById("event-view");
    eventView.style.display = "flex";
    setTimeout(() => {
      eventView.style.opacity = "1";
      eventView.style.transform = "translateY(0)";
    }, 10);
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }
}, 1000);

// View Event button
document.getElementById("enter-site-btn")?.addEventListener("click", () => {
  document.getElementById("event-view").style.display = "none";
  document.getElementById("dashboard-layout").style.display = "flex";
});

// Sidebar open/close logic
const btn = document.querySelector("#btn");
const sidebar = document.getElementById("sidebar");
const mainContent = document.querySelector('.main-content');
const openBtn = document.getElementById('sidebar-open-btn');

function showSidebarOpenBtn(show) {
  if (openBtn) openBtn.style.display = show ? 'block' : 'none';
}

// Show open button when sidebar is closed
showSidebarOpenBtn(true);

if (btn && sidebar) {
  btn.onclick = function(e) {
    sidebar.classList.remove("active");
    showSidebarOpenBtn(true);
    if(mainContent) mainContent.style.filter = "none";
    e.stopPropagation();
  };
}
if (openBtn && sidebar) {
  openBtn.onclick = function(e) {
    sidebar.classList.add("active");
    showSidebarOpenBtn(false);
    if(mainContent) mainContent.style.filter = "blur(2px)";
    e.stopPropagation();
  };
}
// Hide sidebar when clicking outside
document.addEventListener('click', function(e) {
  if (sidebar && sidebar.classList.contains('active')) {
    if (!sidebar.contains(e.target) && e.target !== openBtn) {
      sidebar.classList.remove('active');
      showSidebarOpenBtn(true);
      if(mainContent) mainContent.style.filter = "none";
    }
  }
});

// Page switching logic (keep for dashboard)
function switchPage(pageId) {
    document.querySelectorAll(".page-section").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
}