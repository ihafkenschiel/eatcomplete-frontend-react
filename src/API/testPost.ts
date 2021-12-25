import { API_ROOT } from './root'

export async function testPost(input: string) {
  const res = await fetch(`${API_ROOT}/test-post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ input }),
  })
  const json = await res.json()
  return json
}
