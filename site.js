const navItems = [
  ["home", "首页", "index.html"],
  ["recommend", "机场推荐", "recommendations.html"],
  ["ranking", "机场排行", "ranking.html"],
  ["reviews", "品牌评测", "reviews.html"],
  ["pricing", "价格套餐", "pricing.html"],
  ["ai", "AI工具", "ai-tools.html"],
  ["clients", "客户端", "clients.html"],
  ["help", "问题中心", "help.html"],
  ["alerts", "机场预警", "alerts.html"],
  ["about", "关于", "about.html"]
];

const currentPage = document.body.dataset.page || "home";
const nav = document.querySelector("[data-nav]");
if (nav) {
  nav.innerHTML = navItems.map(([id, label, href]) =>
    `<li><a href="${href}"${id === currentPage ? ' aria-current="page"' : ""}>${label}</a></li>`
  ).join("");
}

const toggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector(".site-nav");
if (toggle && siteNav) {
  toggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "×" : "☰";
  });
}

document.querySelectorAll("[data-filter-group]").forEach(group => {
  const buttons = group.querySelectorAll("[data-filter]");
  const targetSelector = group.dataset.target;
  const items = document.querySelectorAll(targetSelector);
  buttons.forEach(button => button.addEventListener("click", () => {
    buttons.forEach(item => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const filter = button.dataset.filter;
    items.forEach(item => {
      item.hidden = filter !== "all" && item.dataset.category !== filter;
    });
  }));
});

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: .08 })
  : null;

document.querySelectorAll(".reveal").forEach(item => {
  if (observer) observer.observe(item);
  else item.classList.add("is-visible");
});

document.querySelectorAll("[data-year]").forEach(node => node.textContent = new Date().getFullYear());
