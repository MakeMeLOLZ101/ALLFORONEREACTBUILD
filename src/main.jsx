import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SayHello from './components/SayHello.jsx'
import AskingQuestion from './components/AskingQuestion.jsx'
import AddingTwo from './components/AddingTwo.jsx'
import GuessIt from './components/GuessIt.jsx'
import Magic8Ball from './components/Magic8Ball.jsx'
import OddOrEven from './components/OddOrEven.jsx'
import RestaurantPicker from './components/RestaurantPicker.jsx'
import ReverseItAlpha from './components/ReverseItAlpha.jsx'
import MadLib from './components/MadLib.jsx'
import ReverseItNumbers from './components/ReverseItNumbers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/say-hello' element={<SayHello />} />
      <Route path='/adding-nums' element={<AddingTwo />} />
      <Route path='/asking-questions' element={<AskingQuestion />} />
      <Route path='/guess-it' element={<GuessIt />} />
      <Route path='/magic-ball' element={<Magic8Ball />} />
      <Route path='/odd-or-even' element={<OddOrEven />} />
      <Route path='/rest-picker' element={<RestaurantPicker />} />
      <Route path='/reverse-it-alpha' element={<ReverseItAlpha />} />
      <Route path='/mad-lib' element={<MadLib />} />
      <Route path='/reverse-it-nums' element={<ReverseItNumbers />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
