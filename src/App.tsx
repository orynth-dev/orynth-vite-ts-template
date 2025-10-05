import { useEffect, useState } from 'react'
import { createAppKit } from '@reown/appkit/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { metadata, projectId, solanaWeb3JsAdapter } from './config'

export function App() {
  const [appKitInitialized, setAppKitInitialized] = useState(false)

  useEffect(() => {
    try {
      // Create modal only once when component mounts
      if (!appKitInitialized) {
        createAppKit({
          projectId,
          metadata,
          themeMode: 'light',
          networks: [solana, solanaTestnet, solanaDevnet],
          adapters: [solanaWeb3JsAdapter],
          features: {
            analytics: true
          },
          themeVariables: {
            '--w3m-accent': '#000000'
          }
        })
        setAppKitInitialized(true)
      }
    } catch (error) {
      console.error('Failed to initialize AppKit:', error)
    }
  }, [appKitInitialized])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
      <h2>Web3 Website Builder</h2>
      {appKitInitialized ? (
        <appkit-button />
      ) : (
        <div>Loading wallet connection...</div>
      )}
      {/* Your website builder components go here */}
    </div>
  )
}

export default App