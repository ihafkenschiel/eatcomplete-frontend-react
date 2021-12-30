import { API_ROOT } from './root'

export async function fetchNutrients() {
  const res = await fetch(`${API_ROOT}/nutrients`)
  const json = await res.json()
  return json
}
