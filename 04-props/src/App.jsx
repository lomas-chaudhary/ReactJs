import React from 'react'
import Card from '../components/Card'

function App() {
  return (
    <div className='parent'>
      <Card user='Aman Gupta' age={34} image='https://images.unsplash.com/photo-1769461779986-6846b8df5ccf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Lomas Chaudhary' age={68} image='https://plus.unsplash.com/premium_photo-1761696091312-5f580b6a5af1?q=80&w=1135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Vikrant Chaudhary' age={99} image='https://images.unsplash.com/photo-1769107635827-0f5a0d46917e?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
