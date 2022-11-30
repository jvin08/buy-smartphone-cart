import React from 'react'
import { useGlobalContext } from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {

  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className='loading'>
        <h2>LOADING...</h2>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
