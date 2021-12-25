import { API_ROOT } from './root'

export async function fetchFoods() {
  const res = await fetch(`${API_ROOT}/foods`)
  const json = await res.json()
  return json
}
