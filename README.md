<div align="center">

# 🦅 蓝鹰AI网关 | BlueEagle AI Gateway

### 🚀 全球大模型，一站直达 — One Gateway to All AI Models
### 🔥 0.09x 极致倍率 | 1:1 充值 | 100% 官方原生号池

[![GitHub stars](https://img.shields.io/github/stars/BlueEagle-AI-Gateway/BlueEagle-AI-Gateway?style=social)](https://github.com/BlueEagle-AI-Gateway/BlueEagle-AI-Gateway/stargazers)
[![0.09x Cost](https://img.shields.io/badge/Cost-0.09x-FF6B35?style=flat-square&logo=fire&logoColor=white)](https://ahg.codes)
[![1:1 Recharge](https://img.shields.io/badge/Recharge-1%3A1-4CAF50?style=flat-square)](https://ahg.codes)
[![Official Pool](https://img.shields.io/badge/API_Pool-100%25_Official-2196F3?style=flat-square)](https://ahg.codes)
[![Free Trial](https://img.shields.io/badge/Trial-Free-brightgreen?style=flat-square)](https://ahg.codes)
[![OpenAI Compatible](https://img.shields.io/badge/API-OpenAI_Compatible-000000?style=flat-square&logo=openai)](https://ahg.codes)

**🌐 官方网站：[https://ahg.codes](https://ahg.codes)**

---

<img src="https://img.shields.io/badge/中文-README-blue" alt="中文"/>

</div>

---

## 📖 项目简介 | About

蓝鹰AI网关（BlueEagle AI Gateway）是一个**全球顶尖大模型统一API网关**，为开发者提供一站式接入所有主流AI模型的服务。

> 💡 **为什么选择蓝鹰？**
> - 充值比例 **1:1** — 充1元人民币 = 1美元官方额度
> - 消耗倍率仅 **0.09x** — 仅为官方定价的 **9%**
> - 100% 原生官方号池 — 无掺假、无共享、无二次中转

BlueEagle AI Gateway is a **unified API gateway for the world's leading AI models**, providing developers with one-stop access to all mainstream AI models.

> 💡 **Why BlueEagle?**
> - **1:1 Recharge Ratio** — 1 CNY = 1 USD official credit
> - **Only 0.09x cost multiplier** — Just **9% of official pricing**
> - **100% official API pool** — No mixing, no sharing, no relay

---

## ✨ 核心优势 | Core Advantages

| 优势 Advantage | 详情 Details |
|---|---|
| 💰 **0.09x 极致倍率** | 仅为官方价格的9%，100倍率计费模式下GPT-4o约$0.9/百万token |
| 💳 **1:1 充值比例** | 1元人民币 = 1美元官方额度，无汇率加价 |
| 🔒 **100% 官方原生号池** | 所有请求直连官方API，无掺假、无共享、无二次中转 |
| 🎁 **免费测试** | 注册即送测试额度，零成本体验全部功能 |
| ⚖️ **智能负载均衡** | 多账号智能调度，毫秒级自动故障切换 |
| 🔌 **零代码迁移** | 完全兼容 OpenAI 接口规范，改一个 URL 即可接入 |
| ♾️ **额度永久有效** | 按量计费，用多少付多少，余额永不清零 |

---

## 📋 支持模型 | Supported Models

| 提供商 Provider | 模型 Models | 状态 Status |
|---|---|---|
| 🤖 **OpenAI** | GPT-4o, GPT-4o-mini, GPT-4-Turbo, GPT-4, GPT-3.5-Turbo, o1, o1-mini, o3-mini | ✅ 已支持 Available |
| 🧠 **Anthropic** | Claude 4 Opus, Claude 4 Sonnet, Claude 3.5 Sonnet, Claude 3.5 Haiku, Claude 3 Opus | ✅ 已支持 Available |
| 💎 **Google** | Gemini 2.5 Pro, Gemini 2.5 Flash, Gemini 2.0 Flash, Gemini 1.5 Pro | ✅ 已支持 Available |
| 🌀 **Antigravity** | Antigravity Series | ✅ 已支持 Available |
| 🔮 **DeepSeek** | DeepSeek V3, DeepSeek R1 | 🔄 即将支持 Coming Soon |
| ☁️ **通义千问** | Qwen-Max, Qwen-Plus, Qwen-Turbo | 🔄 即将支持 Coming Soon |
| 🦙 **Meta Llama** | Llama 3, Llama 3.1, Llama 3.2 | 🔄 即将支持 Coming Soon |

> 💡 模型持续更新中，访问 [https://ahg.codes](https://ahg.codes) 获取最新模型列表

---

## 🚀 快速开始 | Quick Start

### 方式一：curl 调用 | Using curl

```bash
curl https://ahg.codes/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "user", "content": "Hello from BlueEagle!"}
    ]
  }'
```

### 方式二：Python 调用 | Using Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://ahg.codes/v1"
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "user", "content": "Hello from BlueEagle!"}
    ]
)

print(response.choices[0].message.content)
```

### 方式三：Node.js 调用 | Using Node.js

```javascript
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://ahg.codes/v1'
});

const response = await client.chat.completions.create({
  model: 'gpt-4o',
  messages: [
    { role: 'user', content: 'Hello from BlueEagle!' }
  ]
});

console.log(response.choices[0].message.content);
```

> 📌 **只需将你原有的 OpenAI API `base_url` 替换为 `https://ahg.codes/v1`，其他代码无需任何改动！**

---

## 💰 充值与计费 | Pricing & Billing

### 充值比例 | Recharge Ratio

| 充值金额 Recharge | 获得额度 Credits | 实际费率 Effective Rate |
|---|---|---|
| ¥10 CNY | $10 USD | 官方价 × 0.09 |
| ¥50 CNY | $50 USD | 官方价 × 0.09 |
| ¥100 CNY | $100 USD | 官方价 × 0.09 |

### 计费示例 | Cost Example

以 **GPT-4o** 为例（官方定价 $5/百万输入token）：

| 使用量 Usage | 官方费用 Official Cost | 蓝鹰费用 BlueEagle Cost | 节省 Savings |
|---|---|---|---|
| 1M 输入 tokens | $5.00 | **$0.45** | 91% |
| 10M 输入 tokens | $50.00 | **$4.50** | 91% |
| 100M 输入 tokens | $500.00 | **$45.00** | 91% |

> 💡 按量计费，用多少付多少，**额度永久有效、永不清零**
>
> ⚡ 充值与计费详情请访问：[https://ahg.codes](https://ahg.codes)

---

## ⚔️ 竞品对比 | Comparison

| 特性 Feature | 🦅 蓝鹰AI网关 BlueEagle | 其他中转站 Others | 官方直连 Official |
|---|:---:|:---:|:---:|
| 消耗倍率 Cost Multiplier | **0.09x** | 0.5x ~ 1.5x | 1.0x |
| 充值比例 Recharge Ratio | **1:1** | 1:5 ~ 1:15 | 按美元 |
| API号池质量 Pool Quality | **100% 官方原生** | 混合/不确定 | 官方原生 |
| 故障切换 Failover | ✅ 毫秒级自动切换 | ❌ 多数不支持 | ❌ 无冗余 |
| 负载均衡 Load Balancing | ✅ 多账号智能调度 | ❌ 多数不支持 | ❌ 单账号 |
| 免费测试 Free Trial | ✅ 注册即送 | 部分支持 | ❌ 需绑卡 |
| 接口兼容性 Compatibility | ✅ 100% OpenAI兼容 | 部分兼容 | ✅ 原生 |
| 额度有效期 Credit Expiry | **永久有效** | 30天~1年 | 无过期 |

---

## 📁 项目结构 | Project Structure

```
BlueEagle-AI-Gateway/
├── README.md               # 项目说明（本文件）
├── examples/                # 调用示例代码
│   ├── python_example.py    # Python 示例
│   ├── node_example.js      # Node.js 示例
│   └── curl_example.sh      # cURL 示例
├── LICENSE                  # MIT 许可证
└── .github/
    └── FUNDING.yml          # 赞助配置
```

---

## 📞 联系与支持 | Contact & Support

| 渠道 Channel | 链接 Link |
|---|---|
| 🌐 官方网站 Website | [https://ahg.codes](https://ahg.codes) |
| 📧 联系邮箱 Email | support@ahg.codes |
| 💬 在线客服 Live Support | 访问官网右下角在线客服 |

---

## ⚠️ 免责声明 | Disclaimer

本项目（GitHub仓库）仅作为**蓝鹰AI网关**的使用说明和宣传展示用途。蓝鹰AI网关提供的所有AI模型接口服务均基于与各AI模型提供商的合法授权或合规使用。

用户在使用本服务时应遵守所在地区的法律法规，不得将服务用于任何违法违规用途。对于因用户不当使用产生的任何后果，本服务不承担任何责任。

This repository serves only as **documentation and promotional material** for BlueEagle AI Gateway. All AI model API services provided by BlueEagle AI Gateway are based on legal authorization or compliant use with respective AI model providers.

Users must comply with local laws and regulations. BlueEagle AI Gateway bears no responsibility for any consequences arising from improper use of the service.

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给一个 Star！**

**If this project helps you, please give it a Star! ⭐**

[🌐 访问蓝鹰AI网关 | Visit BlueEagle](https://ahg.codes)

</div>
