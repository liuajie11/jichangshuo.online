(() => {
  const root = document.querySelector("[data-review-index]");
  if (!root || !window.BRAND_REVIEWS) return;

  // 用户给出的顺序中“可信云”出现两次，这里按唯一品牌去重为 15 篇。
  const order = [
    ["sujie", "review-sujie.html", "大带宽 / 晚高峰"],
    ["kexinyun", "review-kexinyun.html", "稳定 / 办公"],
    ["bianyuan", "review-bianyuan.html", "边缘接入 / 多入口"],
    ["jilianyun", "review-jilianyun.html", "专线 / 多节点"],
    ["kuaili", "review-kuaili.html", "移动端 / 低门槛"],
    ["yuntu", "review-yuntu.html", "原生 IP / 解锁"],
    ["guangnianti", "review-guangnianti.html", "多端 / 不限时流量"],
    ["kunpeng", "review-kunpeng.html", "办公 / 低抖动"],
    ["shunyun", "review-shunyun.html", "无限设备 / 家庭"],
    ["yunjiexian", "review-yunjiexian.html", "轻量 / 备用"],
    ["dalaoyun", "review-dalaoyun.html", "高速 / 家庭共享"],
    ["huanqiuti", "review-huanqiuti.html", "新手 / 轻办公"],
    ["shandianshu", "review-shandianshu.html", "双入口 / 高速度"],
    ["liulianyun", "review-liulianyun.html", "影音 / 均衡"],
    ["shenxing", "review-shenxing.html", "移动 / 智能路由"]
  ];

  root.innerHTML = order.map(([slug, article, tag], index) => {
    const data = window.BRAND_REVIEWS[slug];
    const score = data.score === "—" ? "未收录" : `${data.score}<small> / 10</small>`;
    return `<article class="card review-index-card reveal is-visible">
      <span class="card-number">${String(index + 1).padStart(2, "0")} / REVIEW</span>
      <span class="card-tag">${tag}</span>
      <h3>${data.name}机场评测</h3>
      <p>${data.tagline}</p>
      <div class="review-meta"><span>${data.stability}</span><span>${data.price}</span><span>${data.speed}</span></div>
      <div class="review-score">${score}</div>
      <div class="review-card-actions">
        <a class="button small ghost" href="${article}">阅读全文 →</a>
        <a class="button small primary" href="${data.affiliate}" target="_blank" rel="nofollow sponsored noreferrer">访问机场 ↗</a>
      </div>
    </article>`;
  }).join("");
})();
