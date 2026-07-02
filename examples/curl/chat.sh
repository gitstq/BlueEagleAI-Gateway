#!/bin/bash
# ============================================
# 蓝鹰AI网关 - cURL 调用示例
# BlueEagle AI Gateway - cURL Example
# ============================================
# 官方网站: https://ahg.codes
# API端点:  https://ahg.codes/v1
# ============================================

# 配置区 - 请替换为你的实际 API Key
API_KEY="YOUR_API_KEY"
BASE_URL="https://ahg.codes/v1"

echo "========================================="
echo "  🦅 蓝鹰AI网关 - cURL 调用示例"
echo "========================================="
echo ""

# 示例1: 标准聊天补全
echo "📡 [示例1] 标准聊天补全 (gpt-4o)"
echo "-----------------------------------------"
curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "你是一个有用的AI助手。"},
      {"role": "user", "content": "用简短的话介绍一下蓝鹰AI网关"}
    ],
    "temperature": 0.7,
    "max_tokens": 512
  }' | python3 -m json.tool
echo ""

# 示例2: 流式聊天补全
echo "📡 [示例2] 流式聊天补全 (gpt-4o-mini)"
echo "-----------------------------------------"
curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [
      {"role": "user", "content": "用10个字形容蓝鹰AI网关"}
    ],
    "stream": true,
    "temperature": 0.7
  }' 2>&1 | while IFS= read -r line; do
    # 解析 SSE 格式的流式响应
    if [[ "$line" == data:* ]]; then
      content="${line#data: }"
      if [[ "$content" != "[DONE]" ]]; then
        echo "$content" | python3 -c "import sys,json; d=json.loads(sys.stdin.read()); print(d['choices'][0]['delta'].get('content',''), end='', flush=True)" 2>/dev/null
      fi
    fi
  done
echo ""
echo ""

echo "========================================="
echo "  ✅ 演示完成！"
echo "  🔗 了解更多: https://ahg.codes"
echo "========================================="