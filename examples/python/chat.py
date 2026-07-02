"""
蓝鹰AI网关 - Python 调用示例
BlueEagle AI Gateway - Python Example
========================================
官方网站: https://ahg.codes
API端点:  https://ahg.codes/v1

安装依赖:
  pip install openai

使用方法:
  python chat.py
"""

from openai import OpenAI

# ============================================
# 配置区 - 请替换为你的实际 API Key
# ============================================
API_KEY = "YOUR_API_KEY"
BASE_URL = "https://ahg.codes/v1"  # 🦅 蓝鹰AI网关端点

client = OpenAI(
    api_key=API_KEY,
    base_url=BASE_URL
)


def chat_completion(model: str = "gpt-4o", user_message: str = "你好！"):
    """发送聊天补全请求"""
    print(f"\n{'='*60}")
    print(f"📡 模型: {model}")
    print(f"🔗 端点: {BASE_URL}")
    print(f"{'='*60}\n")

    response = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": "你是一个有用的AI助手。"},
            {"role": "user", "content": user_message}
        ],
        temperature=0.7,
        max_tokens=1024
    )

    content = response.choices[0].message.content
    usage = response.usage

    print(f"🤖 回复:\n{content}\n")
    print(f"📊 Token 使用: {usage.total_tokens} (输入: {usage.prompt_tokens}, 输出: {usage.completion_tokens})")
    print(f"💰 费用估算: 约 ${usage.total_tokens * 0.00000045:.6f} (0.09x倍率)")

    return content


def stream_chat(model: str = "gpt-4o", user_message: str = "用一句话介绍自己"):
    """流式聊天补全示例"""
    print(f"\n{'='*60}")
    print(f"📡 [流式] 模型: {model}")
    print(f"{'='*60}\n")

    stream = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "user", "content": user_message}
        ],
        stream=True,
        temperature=0.7
    )

    print("🤖 回复: ", end="", flush=True)
    for chunk in stream:
        if chunk.choices[0].delta.content:
            print(chunk.choices[0].delta.content, end="", flush=True)
    print("\n")


if __name__ == "__main__":
    print("🦅 蓝鹰AI网关 - Python 调用示例")
    print("=" * 60)

    # 示例1: 标准聊天
    chat_completion(
        model="gpt-4o",
        user_message="用简短的话介绍一下蓝鹰AI网关"
    )

    # 示例2: 流式聊天
    stream_chat(
        model="gpt-4o",
        user_message="用10个字形容蓝鹰AI网关"
    )

    print("\n✅ 演示完成！")
    print("🔗 了解更多: https://ahg.codes")