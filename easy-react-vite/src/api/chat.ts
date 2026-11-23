import request from './request'

export interface ChatApiMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatResponse {
  reply: string
}

export async function sendChatMessage(messages: ChatApiMessage[]): Promise<string> {
  const data = await request.post<ChatResponse, ChatResponse>('/chat', { messages })
  return data.reply
}
