# YLAND 招聘介绍站

这是 YLAND 面向程序员的公开介绍网站。首页说明 YLAND 的定位与可信经营理念，并将当前需求整理为四个可进入的建设方向：

- YStore 商城与创作生态
- YLand Ledger 经营数据与公开验证
- YDA 数字价值与结算
- 交易系统与项目资产

网站内容以白皮书第一章 v1.1 和 `Requirements/YLand_v0.91.docx` 为依据，仅发布适合公开的摘要。

## 本地运行

```bash
npm install
npm run dev
```

开发地址默认为 `http://localhost:3000/`。

## 检查与构建

```bash
npm run lint
GITHUB_PAGES=true npm run build
```

GitHub Pages 静态产物位于 `dist/client/`。构建后脚本会生成深层页面目录并保留 `.nojekyll`，以适配项目站点路径 `/YLand/`。

## 发布

推送到 `main` 后，`.github/workflows/deploy-pages.yml` 会构建并发布网站。GitHub 仓库的 Pages Source 需要设置为 **GitHub Actions**。

默认公开地址：

`https://yueliangxi.github.io/YLand/`

## 内容更新原则

- 当前与后续阶段必须分别标注。
- YLand Ledger 不等同于区块链；链上存证属于后续验证能力。
- 不公开评级算法、内部汇率、手续费、风控阈值、认证材料和用户资产数据。
- 涉及 YDA、股份、交易和客户资产的内容必须保留法律与合规边界。
