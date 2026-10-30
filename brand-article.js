(() => {
  const slug = document.body.dataset.brand;
  const data = window.BRAND_REVIEWS && window.BRAND_REVIEWS[slug];
  const root = document.querySelector("[data-brand-article]");
  if (!data || !root) return;

  const clean = value => String(value)
    .replaceAll("机场库", "公开对比数据")
    .replaceAll("梯子查", "公开评测数据")
    .replaceAll("机场眼", "公开速度数据")
    .replaceAll("第三方", "公开")
    .replaceAll("三个资料站", "多组公开数据")
    .replaceAll("三方资料", "公开资料")
    .replaceAll("三方", "公开资料")
    .replaceAll("资料站", "公开数据");
  const list = items => items.map(item => `<li>${item}</li>`).join("");
  const sourceRows = `
    <tr><td>稳定性</td><td>${data.stability} 综合公开参考值</td></tr>
    <tr><td>最低价格</td><td>${data.price}，价格冲突时采用已收集数据中的最低值</td></tr>
    <tr><td>速度快照</td><td>${data.speed} 晚高峰公开参考值，待本站统一环境复测</td></tr>
    <tr><td>线路场景</td><td>${clean(data.line)} · ${clean(data.fit)}</td></tr>
    ${data.promo ? `<tr><td>专属优惠码</td><td><code style="color:var(--cyan);font-weight:700;font-size:1.05rem;">${data.promo}</code>（结算输入立享立减）</td></tr>` : ""}`;

  document.title = `${data.name}机场怎么样？2026评测、线路与价格参考｜机场蓝图`;
  root.innerHTML = `
    <section class="hero article-hero" data-index="${data.mark}">
      <div class="container hero-grid">
        <div><span class="eyebrow">BRAND REVIEW / 机场评测</span><h1>${data.name}机场评测</h1><p class="article-deck">${clean(data.tagline)}</p><div class="hero-actions"><a class="button primary" href="${data.affiliate}" target="_blank" rel="nofollow sponsored noreferrer">访问 ${data.name} →</a><a class="button ghost" href="#conclusion">先看结论 ↓</a></div><div class="article-update">数据整理：2026-10-12 · 公开数据快照 · 待本站统一环境复测</div></div>
        <div class="blueprint article-score-panel reveal"><div class="blueprint-label">REVIEW SCORE / ${data.name}</div><div class="blueprint-line"></div><div class="article-score-big">${data.score}<small>${data.score === "—" ? " 未收录" : " / 10"}</small></div><div class="article-score-caption">公开评测综合分（如有）</div><div class="blueprint-bars"><span></span><span></span><span></span></div><div class="coordinates">STABILITY REF: ${data.stability}<br>PRICE ENTRY: ${data.price}</div></div>
      </div>
    </section>
    <section class="section compact"><div class="container"><div class="metric-grid reveal"><div class="metric"><strong>${data.stability}</strong><span>综合稳定性参考</span></div><div class="metric"><strong>${data.price}</strong><span>最低公开价格</span></div><div class="metric"><strong>${data.speed}</strong><span>晚高峰速度快照</span></div><div class="metric"><strong>${data.client}</strong><span>客户端覆盖参考</span></div></div></div></section>
    <section class="section"><div class="container article-layout"><article class="article-main">
      <section id="conclusion"><span class="kicker">01 / 编辑结论</span><h2>${data.name}怎么样？</h2><div class="verdict-box"><p>${clean(data.verdict)}</p></div><div class="pros-cons"><div class="pros"><h3>更值得关注</h3><ul>${list(data.pros.map(clean))}</ul></div><div class="cons"><h3>购买前注意</h3><ul>${list(data.cons.map(clean))}</ul></div></div></section>
      <section id="data"><span class="kicker">02 / 数据快照</span><h2>当前公开数据摘要</h2><div class="table-wrap"><table class="data-table source-table"><thead><tr><th>项目</th><th>当前参考数据</th></tr></thead><tbody>${sourceRows}</tbody></table></div><p class="source-note">价格存在差异时，本页统一展示已收集数据中的最低价格。速度、稳定性、线路和节点均为公开信息快照，尚未在本站统一设备、网络和时间段下完成控制变量复测。</p></section>
      <section id="line"><span class="kicker">03 / 线路与性能</span><h2>${clean(data.line)}</h2><p>${clean(data.performance)}</p><h3>公开节点与入口信息</h3><p>${clean(data.nodes)}。节点总数只能说明选择空间，不能替代晚高峰的延迟、抖动、丢包和持续下载测试。</p><h3>更适合的使用场景</h3><p>${clean(data.fit)}。第一次使用建议在相同设备、相同网络、相同时间段对比两个候选品牌，连续测试至少两到三天。</p></section>
      <section id="risk"><span class="kicker">04 / 风险与购买建议</span><h2>哪些信息需要再次确认</h2><p>${clean(data.risk)}</p><ul class="article-list"><li>首次购买优先月付或最短周期，不用多年预付换取表面低价。</li><li>付款前确认套餐流量、倍率、在线设备数、退款条件和续费价格。</li><li>保存官网、防失联入口和工单渠道；订阅链接属于账号凭证，不要公开分享。</li><li>AI 和流媒体解锁会随 IP、地区与平台策略变化，只能以购买后的实际测试为准。</li></ul></section>
      <section id="faq"><span class="kicker">05 / 常见问题</span><h2>${data.name}购买前 FAQ</h2><div class="faq-list"><details><summary>${data.name}适合长期使用吗？</summary><p>当前公开数据表明它适合${clean(data.fit)}，但是否适合长期使用只能由你的运营商、地区和晚高峰测试决定。建议至少完成一个月付周期后再决定是否延长。</p></details><details><summary>${data.name}的参考速度能在我这里达到吗？</summary><p>不能保证。${data.speed} 是公开环境下的速度快照，设备性能、本地带宽、入口运营商、测速线程和时间段都会影响结果。</p></details><details><summary>应该选哪个套餐？</summary><p>先按每月真实流量选择最低够用档，再核对节点倍率。轻度用户不应为了更大的标称流量直接购买长期高档套餐。</p></details></div></section>
      <section><div class="affiliate-box"><h2>先短周期测试 ${data.name}</h2><p>以下按钮使用你提供的推广注册链接。推广关系不代表速度、稳定性或解锁承诺，付款前请核对最终域名与结算信息。</p>${data.promo ? `<p style="margin: 12px 0 16px; font-size: 0.95rem; color: var(--ink);">专属优惠码：<strong style="color:var(--cyan);font-size:1.1rem;background:rgba(0,0,0,0.06);padding:3px 8px;border-radius:4px;user-select:all;">${data.promo}</strong>（结账时输入自动享受立减）</p>` : ""}<a class="button primary" href="${data.affiliate}" target="_blank" rel="nofollow sponsored noreferrer">打开注册链接 →</a><p class="disclosure">推广披露：该链接包含邀请码或推广参数，站点可能因此获得佣金。</p></div></section>
      <!-- 站内互联导航 -->
      <section class="article-interlinks" style="margin-top: 36px; padding-top: 24px; border-top: 1px solid var(--line);">
        <h3 style="font-size: 1.15rem; margin-bottom: 14px; color: var(--ink);">相关评测与参考导航</h3>
        <div class="grid cols-3" style="gap: 12px;">
          <a class="card" href="recommendations.html" style="min-height: auto; padding: 16px; text-decoration: none;">
            <strong style="color: var(--cyan); font-size: 0.9rem;">场景推荐指南 →</strong>
            <p style="font-size: 0.8rem; color: var(--muted); margin: 6px 0 0;">与同类 ${clean(data.fit)} 机场横向对比</p>
          </a>
          <a class="card" href="ranking.html" style="min-height: auto; padding: 16px; text-decoration: none;">
            <strong style="color: var(--cyan); font-size: 0.9rem;">综合实力天梯 →</strong>
            <p style="font-size: 0.8rem; color: var(--muted); margin: 6px 0 0;">查看 ${data.name} 在 6 维模型中的排名</p>
          </a>
          <a class="card" href="pricing.html" style="min-height: auto; padding: 16px; text-decoration: none;">
            <strong style="color: var(--cyan); font-size: 0.9rem;">价格套餐横评 →</strong>
            <p style="font-size: 0.8rem; color: var(--muted); margin: 6px 0 0;">对比单 G 费用、倍率与月付门槛</p>
          </a>
        </div>
        <div style="margin-top: 12px; display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="clients.html" style="font-size: 0.85rem; color: var(--muted); text-decoration: underline;">客户端配置指引</a>
          <span style="color: var(--line);">|</span>
          <a href="alerts.html" style="font-size: 0.85rem; color: var(--orange); text-decoration: underline;">跑路预警与避坑黑名单</a>
          <span style="color: var(--line);">|</span>
          <a href="help.html" style="font-size: 0.85rem; color: var(--muted); text-decoration: underline;">问题中心 100 问</a>
        </div>
      </section>
    </article><aside class="article-sidebar"><div class="sidebar-panel"><h3>QUICK PROFILE</h3><ul class="sidebar-list"><li>品牌：${data.name}</li><li>线路：${clean(data.line)}</li><li>场景：${clean(data.fit)}</li><li>客户端：${data.client}</li></ul></div><div class="sidebar-panel"><h3>SITE INTERLINKS</h3><ul class="sidebar-list"><li><a href="recommendations.html" style="color:var(--cyan);">精选推荐分类</a></li><li><a href="ranking.html" style="color:var(--cyan);">全网综合排行榜</a></li><li><a href="pricing.html" style="color:var(--cyan);">16家价格套餐横评</a></li><li><a href="alerts.html" style="color:var(--orange);">失联与跑路预警雷达</a></li><li><a href="about.html" style="color:var(--muted);">数据采集与编辑原则</a></li></ul></div><div class="sidebar-panel"><h3>TEST POLICY</h3><p>数据日期：2026-10-12</p><p>页面仅展示整理后的公开快照，不展示外部资料站名称。本站尚未完成统一环境复测，因此不会把公开数据标记为本站实测结果。</p></div><a class="button ghost" href="reviews.html">← 返回全部评测</a></aside></div></section>`;
})();
