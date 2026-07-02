#!/bin/bash
# =============================================
# 蓝鹰AI网关 (BlueEagle AI Gateway) - cURL 调用示例
# 官方文档：https://ahg.codes
# =============================================

# 配置（替换为你的API Key）
API_KEY="YOUR_API_KEY"
BASE_URL="https://ahg.codes/v1"

echo "=================================================="
echo "🦅 蓝鹰AI网关 cURL 示例"
echo "=================================================="
echo ""

# =============================================
# 示例1：基础对话 - GPT-4o
# =============================================
echo ">>> 示例1: GPT-4o 基础对话"
curl -s "${BASE_URL}/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "user", "content": "Hello from BlueEagle!"}
    ]
  }' | python3 -m json.tool 2>/dev/null || echo "需要安装 jq 或 python3 来格式化JSON输出"

echo ""
echo ""

# =============================================
# 示例2：Claude 3.5 Sonnet 对话
# =============================================
echo ">>> 示例2: Claude 3.5 Sonnet 对话"
curl -s "${BASE_URL}/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -d '{
    "model": "claude-3-5-sonnet-20241022",
    "messages": [
      {"role": "system", "content": "你是一个技术专家。"},
      {"role": "user", "content": "请用50字介绍量子计算的基本原理。"}
    ],
    "max_tokens": 200
  }' | python3 -m json.tool 2>/dev/null

echo ""
echo ""

# =============================================
# 示例3：流式输出 (SSE)
# =============================================
echo ">>> 示例3: GPT-4o 流式输出"
curl -N "${BASE_URL}/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "user", "content": "Say hello in 3 languages."}
    ],
    "stream": true
  }'

echo ""
echo ""

# =============================================
# 示例4：文本嵌入 (Embeddings)
# =============================================
echo ">>> 示例4: Text Embeddings"
curl -s "${BASE_URL}/embeddings" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -d '{
    "model": "text-embedding-3-small",
    "input": "BlueEagle AI Gateway - The best API gateway"
  }' | python3 -c "import sys,json; d=json.load(sys.stdin); print(f'向量维度: {len(d[\"data\"][0][\"embedding\"])}')" 2>/dev/null

echo ""
echo ""

# =============================================
# 示例5：模型列表查询
# =============================================
echo ">>> 示例5: 查询可用模型列表"
curl -s "${BASE_URL}/models" \
  -H "Authorization: Bearer ${API_KEY}" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    models = [m['id'] for m in data.get('data', [])]
    for m in sorted(models)[:20]:
        print(f'  - {m}')
    if len(models) > 20:
        print(f'  ... and {len(models) - 20} more')
except:
    print('  请求失败，请检查API Key是否正确')
" 2>/dev/null

echo ""
echo "=================================================="
echo "获取API Key请访问: https://ahg.codes"
echo "=================================================="
