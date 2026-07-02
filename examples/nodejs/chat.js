/**
 * 蓝鹰AI网关 - Node.js 调用示例
 * BlueEagle AI Gateway - Node.js Example
 * ========================================
 * 官方网站: https://ahg.codes
 * API端点:  https://ahg.codes/v1
 *
 * 安装依赖:
 *   npm install openai
 *
 * 使用方法:
 *   node chat.js
 */

const OpenAI = require('openai');

// ============================================
// 配置区 - 请替换为你的实际 API Key
// ============================================
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://ahg.codes/v1'; // 🦅 蓝鹰AI网关端点

const client = new OpenAI({
  apiKey: API_KEY,
  baseURL: BASE_URL,
});

/**
 * 标准聊天补全示例
 */
async function chatCompletion() {
  console.log('\n' + '='.repeat(60));
  console.log('📡 模型: gpt-4o');
  console.log('🔗 端点:', BASE_URL);
  console.log('='.repeat(60) + '\n');

  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: '你是一个有用的AI助手。' },
      { role: 'user', content: '用简短的话介绍一下蓝鹰AI网关' },
    ],
    temperature: 0.7,
    max_tokens: 1024,
  });

  const content = response.choices[0].message.content;
  const usage = response.usage;

  console.log('🤖 回复:');
  console.log(content);
  console.log('\n📊 Token 使用:', usage.total_tokens, `(输入: ${usage.prompt_tokens}, 输出: ${usage.completion_tokens})`);
  console.log('💰 费用估算: 约 $' + (usage.total_tokens * 0.00000045).toFixed(6) + ' (0.09x倍率)');
}

/**
 * 流式聊天补全示例
 */
async function streamChat() {
  console.log('\n' + '='.repeat(60));
  console.log('📡 [流式] 模型: gpt-4o-mini');
  console.log('='.repeat(60) + '\n');

  const stream = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'user', content: '用10个字形容蓝鹰AI网关' },
    ],
    stream: true,
    temperature: 0.7,
  });

  process.stdout.write('🤖 回复: ');
  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content || '';
    process.stdout.write(content);
  }
  console.log('\n');
}

/**
 * 主函数
 */
async function main() {
  console.log('🦅 蓝鹰AI网关 - Node.js 调用示例');
  console.log('='.repeat(60));

  try {
    // 示例1: 标准聊天
    await chatCompletion();

    // 示例2: 流式聊天
    await streamChat();

    console.log('✅ 演示完成！');
    console.log('🔗 了解更多: https://ahg.codes');
  } catch (error) {
    console.error('❌ 错误:', error.message);
    if (error.status === 401) {
      console.error('  请检查你的 API Key 是否正确配置');
    }
  }
}

main();