import { useState } from 'react'

export default function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div>
      {isVisible && <p>This text can be hidden or shown.</p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

