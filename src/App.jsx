import './App.css'
import SayHello from './components/SayHello'
import AddingTwo from './components/AddingTwo'
import AskingQuestion from './components/AskingQuestion'
import GuessIt from './components/GuessIt'
import MadLib from './components/MadLib'
import OddOrEven from './components/OddOrEven'
import ReverseItAlpha from './components/ReverseItAlpha'
import ReverseItNumbers from './components/ReverseItNumbers'
import EightBall from './components/Magic8Ball'
import RestaurantPicker from './components/RestaurantPicker'
import { Button } from 'flowbite-react'
import { NavLink } from 'react-router-dom'


function App() {
  return (
    <div className='px-3'>
      <h1 className='text-7xl flex items-center justify-center'>All For One</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 justify-items-center center'>
        <div className='m-5 w-full p-1'>
          <NavLink type='button' to={'/say-hello'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-0'>Say Hello</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-1'>
          <NavLink type='button' to={'/adding-nums'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-0'>Add Two Numbers</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-1'>
          <NavLink type='button' to={'/asking-questions'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-0'>Asking Questions</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-1'>
          <NavLink type='button' to={'/guess-it'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-0'>Guess It</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-1'>
          <NavLink type='button' to={'/mad-lib'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-0'>Mad Lib</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-1'>
          <NavLink type='button' to={'/odd-or-even'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-0'>Odd Or Even</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-1'>
          <NavLink type='button' to={'/reverse-it-alpha'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-0'>Reverse It (Alphanumeric)</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-1'>
          <NavLink type='button' to={'/reverse-it-nums'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-0'>Reverse It (Numeric)</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-1'>
          <NavLink type='button' to={'/magic-ball'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-0'>Magic 8 Ball</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-1 col-start-2'>
          <NavLink type='button' to={'/rest-picker'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-0'>Restaurant Picker</h1>
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default App
