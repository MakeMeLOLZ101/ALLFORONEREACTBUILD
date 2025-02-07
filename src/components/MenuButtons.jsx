import { Button } from 'flowbite-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuButtons = () => {
  return (
    <div className='fixed bottom-10 left-10' >
      <NavLink type='button' to={'/'}>
        <Button>
          <h1 className='text-3xl p-4'>Back To Menu</h1>
        </Button>
      </NavLink>
    </div>
  )
}

export default MenuButtons