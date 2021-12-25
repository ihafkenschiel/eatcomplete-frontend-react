import { API_ROOT } from './root'

export async function helloWorld() {
  const res = await fetch(`${API_ROOT}`)
  const json = await res.json()
  return json
}
