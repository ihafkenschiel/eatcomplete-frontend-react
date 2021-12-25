import { helloWorld } from 'API/helloWorld'
import { testPost } from 'API/testPost'
import { FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HelloWorld() {
  const [testData, setTestData] = useState()
  const [input, setInput] = useState('')

  useEffect(() => {
    helloWorld().then((data) => setTestData(data))
  }, [])

  console.log(testData)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await testPost(input)
    setInput('')
  }

  return (
    <div>
      <h1>Hello world from the index route</h1>
      {testData && (
        <p>Got some data from the server! {JSON.stringify(testData)}</p>
      )}
      <Link to="/another-route">Go to different page</Link>

      <h2>Send some data to the server</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
