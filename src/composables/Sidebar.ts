export function sidebarToggle() {
  document.querySelector(".flex-sidebar").classList.add("hidden");
}

export function sidebarUpdate(index) {
  sidebarToggle();
  const sidebarOptions = document.querySelectorAll(".selbtn");
  [...sidebarOptions].forEach(function (ele, ind) {
    if (ind == index) {
      if (!ele.classList.contains("bg-indigo-600")) {
        ele.classList.add("bg-indigo-600");
      }
      if (!ele.classList.contains("text-white")) {
        ele.classList.add("text-white");
      }
    } else {
      ele.classList.remove("bg-indigo-600");
      ele.classList.remove("text-white");
    }
  });
}
