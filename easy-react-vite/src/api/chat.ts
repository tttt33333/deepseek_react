export interface ChatApiMessage {
  role: 'user' | 'assistant'
  content: string
}

/**
 * 流式对话：后端返回 SSE，每段格式为 `data: {"content":"..."}`，结束为 `data: [DONE]`
 * 浏览器端无法用 axios 消费流，所以这里直接用 fetch + ReadableStream
 */
export async function sendChatMessageStream(
  messages: ChatApiMessage[],
  onContent: (chunk: string) => void
): Promise<void> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  })
  if (!res.ok || !res.body) {
    throw new Error(`请求失败: ${res.status}`)
  }

  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''

  // 解析一行 SSE，返回 true 表示收到 [DONE]
  const handleLine = (line: string): boolean => {
    const text = line.trim()
    if (!text.startsWith('data:')) return false

    const data = text.slice(5).trim()
    if (data === '[DONE]') return true

    try {
      const content = JSON.parse(data).content
      if (content) onContent(content)
    } catch {
      // 不完整的片段直接跳过
    }
    return false
  }

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    buffer += decoder.decode(value, { stream: true })
    const lines = buffer.split('\n')
    buffer = lines.pop() ?? '' // 最后半行留到下一段

    for (const line of lines) {
      if (handleLine(line)) return
    }
  }

  // 流结束时处理最后残留的一行
  handleLine(buffer)
}
