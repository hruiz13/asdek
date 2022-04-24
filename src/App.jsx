import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/home/Home'
import { MainLayout } from './components/ui/layout/MainLayout'

function App () {
  return (
    <BrowserRouter>
      <MainLayout>

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </MainLayout>
    </BrowserRouter>
  )
}

export default App
