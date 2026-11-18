import { useEffect, useState } from 'react'
import './App.css'

type HealthResponse = {
  status: string
  service: string
  version: string
}

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function checkBackend() {
      try {
        const response = await fetch('/api/v1/health', {
          signal: controller.signal,
          headers: {
            Accept: 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`)
        }

        const data: HealthResponse = await response.json()
        setHealth(data)
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    void checkBackend()

    return () => controller.abort()
  }, [])

  return (
    <main>
      <h1>HSE ORGANIX</h1>
      <p>Enterprise HSE Management Platform</p>

      <section aria-live="polite">
        <h2>Backend Connection</h2>

        {loading && <p>Checking connection...</p>}

        {health && (
          <div>
            <p>Status: {health.status}</p>
            <p>Service: {health.service}</p>
            <p>API Version: {health.version}</p>
          </div>
        )}

        {error && (
          <p role="alert">
            Backend connection failed: {error}
          </p>
        )}
      </section>
    </main>
  )
}

export default App
