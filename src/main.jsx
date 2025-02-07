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
      <Route path='/sayhello' element={<SayHello />} />
      <Route path='/addingnums' element={<AddingTwo />} />
      <Route path='/askingquestions' element={<AskingQuestion />} />
      <Route path='/guessit' element={<GuessIt />} />
      <Route path='/magicball' element={<Magic8Ball />} />
      <Route path='/oddoreven' element={<OddOrEven />} />
      <Route path='/restpicker' element={<RestaurantPicker />} />
      <Route path='/reverseita' element={<ReverseItAlpha />} />
      <Route path='/madlib' element={<MadLib />} />
      <Route path='/reverseitn' element={<ReverseItNumbers />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
