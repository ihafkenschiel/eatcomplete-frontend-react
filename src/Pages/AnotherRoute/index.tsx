import { Link } from 'react-router-dom'

export default function AnotherRoute() {
  return (
    <div>
      <h1>Hello from another route</h1>
      <Link to="/">Go back home</Link>
    </div>
  )
}
