import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/home/Home'
import { MainLayout } from './components/ui/layout/MainLayout'

function App () {
  const { loading } = useSelector((state) => state.uiReducer)
  console.log('IS LOADING', loading)
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
