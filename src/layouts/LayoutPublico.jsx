import React from 'react'
import { Outlet } from 'react-router-dom'

export const LayoutPublico = () => {
  return (
    <>
        <div>LayoutPublico</div>
        <Outlet/>
    </>
  )
}
