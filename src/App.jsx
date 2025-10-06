import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import TodosPage from './TodosPage'
import Header from './Header'

function App() {

  return (
    <div className='layout'>
      <TodosPage />
    </div>
  )
}

export default App
