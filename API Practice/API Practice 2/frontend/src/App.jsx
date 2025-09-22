import React from 'react'
import { Route, Routes } from 'react-router'
import CreateAccount from './pages/CreateAccount'
import { ShowAccounts } from './pages/ShowAccounts'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<CreateAccount/>} />
            <Route path="/show" element={<ShowAccounts/>} />
        </Routes>
    </div>
  )
}

export default App
