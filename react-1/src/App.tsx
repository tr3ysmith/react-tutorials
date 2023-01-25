import { useState } from 'react'
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <AdjustmentsHorizontalIcon className="w-5 h-5" />
    </div>
  )
}

export default App
