import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <section className="flex text-center justify-center">
    <h1 className="w-full max-w-lg text-white rounded-2xl bg-gray-600 mt-10 text-5xl">The All For One Game!</h1>
</section>

<section className="mt-8 grid grid-cols-2 place-items-center gap-10">
    <button to='/sayhello' type="button" className="max-w-sm text-4xl text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl py-2.5 me-4 mb-2 bg dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Hello World!</button>
    <button type="button" className="max-w-sm text-4xl text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl py-2.5 me-4 mb-2 bg dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Asking Questions</button>
    <button type="button" className="max-w-sm text-4xl text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl py-2.5 me-4 mb-2 bg dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Adding Two Numbers</button>
    <button type="button" className="max-w-sm text-4xl text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl py-2.5 me-4 mb-2 bg dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Madlib</button>
    <button type="button" className="max-w-sm text-4xl text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl py-2.5 me-4 mb-2 bg dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Odd Or Even</button>
    <button type="button" className="max-w-sm text-4xl text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl py-2.5 me-4 mb-2 bg dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Reverse It (Numbers)</button>
    <button type="button" className="max-w-sm text-4xl text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl py-2.5 me-4 mb-2 bg dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Reverse It (Words)</button>
    <button type="button" className="max-w-sm text-4xl text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl py-2.5 me-4 mb-2 bg dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Magic 8 Ball</button>
    <button type="button" className="max-w-sm text-4xl text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl py-2.5 me-4 mb-2 bg dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Greater Or Less Than</button>
    <button type="button" className="max-w-sm text-4xl text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl py-2.5 me-4 mb-2 bg dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Restaurant Picker</button>
</section>
    </>
  )
}

export default App
