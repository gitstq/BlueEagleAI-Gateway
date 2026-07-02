/**
 * 蓝鹰AI网关 (BlueEagle AI Gateway) - Node.js 调用示例
 * 官方文档：https://ahg.codes
 */

import OpenAI from 'openai';

// =============================================
// 配置蓝鹰AI网关
// =============================================
const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',           // 替换为你的蓝鹰API Key
  baseURL: 'https://ahg.codes/v1'  // 蓝鹰网关地址
});

// =============================================
// 示例1：基础对话 - GPT-4o
// =============================================
async function chatWithGPT4o() {
  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: '你是一个有用的助手。' },
      { role: 'user', content: '请介绍一下蓝鹰AI网关的核心优势。' }
    ],
    max_tokens: 1024,
    temperature: 0.7
  });

  console.log('GPT-4o 回复：');
  console.log(response.choices[0].message.content);
  console.log(`\n消耗 tokens: ${response.usage.total_tokens}`);
  return response;
}

// =============================================
// 示例2：流式输出 - Claude 3.5 Sonnet
// =============================================
async function streamClaude() {
  console.log('Claude 3.5 Sonnet 流式回复：');
  const stream = await client.chat.completions.create({
    model: 'claude-3-5-sonnet-20241022',
    messages: [
      { role: 'user', content: '用100字解释什么是大语言模型。' }
    ],
    stream: true
  });

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) {
      process.stdout.write(content);
    }
  }
  console.log();
}

// =============================================
// 示例3：多轮对话
// =============================================
async function multiTurnChat() {
  const messages = [
    { role: 'system', content: '你是一个JavaScript编程专家。' },
    { role: 'user', content: '写一个防抖函数。' },
    {
      role: 'assistant',
      content: '好的，以下是JavaScript防抖函数实现：\n```javascript\nfunction debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\n```'
    },
    { role: 'user', content: '能加上取消功能吗？' }
  ];

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages
  });

  console.log('多轮对话回复：');
  console.log(response.choices[0].message.content);
}

// =============================================
// 示例4：文本嵌入 (Embeddings)
// =============================================
async function getEmbeddings() {
  const response = await client.embeddings.create({
    model: 'text-embedding-3-small',
    input: '蓝鹰AI网关是全球顶尖大模型统一API网关'
  });

  console.log(`嵌入向量维度: ${response.data[0].embedding.length}`);
  console.log(`前5个维度: ${response.data[0].embedding.slice(0, 5)}`);
}

// =============================================
// 示例5：图像生成 (DALL-E 3)
// =============================================
async function generateImage() {
  const response = await client.images.generate({
    model: 'dall-e-3',
    prompt: '一只蓝色老鹰在云端飞翔，科技感十足，高清插画风格',
    size: '1024x1024',
    n: 1
  });

  console.log(`图片URL: ${response.data[0].url}`);
}

// =============================================
// 主函数
// =============================================
async function main() {
  console.log('='.repeat(50));
  console.log('🦅 蓝鹰AI网关 Node.js 示例');
  console.log('='.repeat(50));
  console.log();

  // 运行示例（取消注释以运行）
  // await chatWithGPT4o();
  // await streamClaude();
  // await multiTurnChat();
  // await getEmbeddings();
  // await generateImage();

  console.log('请取消注释上方代码以运行对应示例。');
  console.log('获取API Key请访问：https://ahg.codes');
}

main().catch(console.error);
