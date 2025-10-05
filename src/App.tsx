import { createAppKit } from '@reown/appkit/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { metadata, projectId, solanaWeb3JsAdapter } from './config'

// Create modal
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

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Web3 Website Builder</h2>
      <appkit-button />
      {/* Your website builder components go here */}
    </div>
  )
}

export default App