# Airport Blueprint / 机场蓝图

一个无构建依赖的多页面静态站点框架。

## 页面

- `index.html` — 首页
- `recommendations.html` — 机场推荐
- `ranking.html` — 机场排行
- `reviews.html` — 品牌评测
- `pricing.html` — 价格套餐
- `ai-tools.html` — AI 工具
- `clients.html` — 客户端
- `help.html` — 问题中心
- `alerts.html` — 机场预警
- `about.html` — 关于

## 本地预览

直接打开 `index.html`，或在此目录运行：

```powershell
python -m http.server 8080
```

然后访问 `http://localhost:8080/`。

当前品牌、评分、价格和预警内容均为版式占位，正式上线前需要替换为真实并可验证的数据。

## 品牌评测文章

`reviews.html` 已加入 15 个品牌入口，并分别生成 `review-*.html` 独立页面。文章数据为 2026-10-12 整理的公开快照；前台不展示外部资料站名称。测速、稳定性和线路尚未由本站在统一环境复测，不代表服务承诺。价格出现多个口径时，页面展示已收集数据中的最低值。

推广按钮已使用用户指定链接，并加入 `nofollow sponsored noreferrer` 属性和推广披露。云界线、神行加速原始链接未提供协议，页面按 `https://` 补全。
