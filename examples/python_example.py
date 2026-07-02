"""
蓝鹰AI网关 (BlueEagle AI Gateway) - Python 调用示例
官方文档：https://ahg.codes
"""

from openai import OpenAI

# =============================================
# 配置蓝鹰AI网关
# =============================================
client = OpenAI(
    api_key="YOUR_API_KEY",           # 替换为你的蓝鹰API Key
    base_url="https://ahg.codes/v1"   # 蓝鹰网关地址
)

# =============================================
# 示例1：基础对话 - GPT-4o
# =============================================
def chat_with_gpt4o():
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "你是一个有用的助手。"},
            {"role": "user", "content": "请介绍一下蓝鹰AI网关的核心优势。"}
        ],
        max_tokens=1024,
        temperature=0.7
    )
    print("GPT-4o 回复：")
    print(response.choices[0].message.content)
    print(f"\n消耗 tokens: {response.usage.total_tokens}")
    return response

# =============================================
# 示例2：流式输出 - Claude 3.5 Sonnet
# =============================================
def stream_claude():
    print("Claude 3.5 Sonnet 流式回复：")
    stream = client.chat.completions.create(
        model="claude-3-5-sonnet-20241022",
        messages=[
            {"role": "user", "content": "用100字解释什么是大语言模型。"}
        ],
        stream=True
    )
    for chunk in stream:
        if chunk.choices[0].delta.content:
            print(chunk.choices[0].delta.content, end="", flush=True)
    print()

# =============================================
# 示例3：多轮对话
# =============================================
def multi_turn_chat():
    messages = [
        {"role": "system", "content": "你是一个Python编程专家。"},
        {"role": "user", "content": "写一个快速排序算法。"},
        {"role": "assistant", "content": "好的，以下是Python快速排序实现：\n```python\ndef quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)\n```"},
        {"role": "user", "content": "能优化一下空间复杂度吗？"}
    ]
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=messages
    )
    print("多轮对话回复：")
    print(response.choices[0].message.content)

# =============================================
# 示例4：文本嵌入 (Embeddings)
# =============================================
def get_embeddings():
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input="蓝鹰AI网关是全球顶尖大模型统一API网关"
    )
    print(f"嵌入向量维度: {len(response.data[0].embedding)}")
    print(f"前5个维度: {response.data[0].embedding[:5]}")

# =============================================
# 示例5：图像生成 (DALL-E 3)
# =============================================
def generate_image():
    response = client.images.generate(
        model="dall-e-3",
        prompt="一只蓝色老鹰在云端飞翔，科技感十足，高清插画风格",
        size="1024x1024",
        n=1
    )
    print(f"图片URL: {response.data[0].url}")

# =============================================
# 主函数
# =============================================
if __name__ == "__main__":
    print("=" * 50)
    print("🦅 蓝鹰AI网关 Python 示例")
    print("=" * 50)
    print()

    # 运行示例（取消注释以运行）
    # chat_with_gpt4o()
    # stream_claude()
    # multi_turn_chat()
    # get_embeddings()
    # generate_image()

    print("请取消注释上方代码以运行对应示例。")
    print("获取API Key请访问：https://ahg.codes")
