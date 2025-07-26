import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"



import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import logo from "@/assets/logo.svg"

import { Switch } from "@/components/ui/switch"
import useDarkSide from "@/config/useDarkMode";
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';

import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import { useFormik } from 'formik';
import axios from "axios"
import { Api } from "@/config/api"




const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]





const Layout = () => {
  const [theme, toggleTheme] = useDarkSide();
  const [goal, setGoal] = useState(350)

  function onClick() {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  const [data, setData] = useState([])

  async function GetData() {
    try {
      const { data } = await axios.post(Api)
      setData(data.data)
    } catch (error) {

    }
  }

  useEffect(() => {
    GetData()
  }, [])

 


  return (
    <div>


      <div className='fixed top-0 w-full bg-[#00000037] z-50'>
        <div data-aos="zoom-in-up" className='xl:w-[70%]  m-auto flex items-center justify-between py-[24px] sm:w-[95%]'>
          <img src={logo} alt="" className='xl:w-[100px] sm:w-[50px]' />
          <ul className=' items-center justify-between w-[45%] hidden md:flex'>
            <li>
              <Link href="" to="/" >
                Services
              </Link>
            </li>
            <li>
              <Link href="" to="stadies" >
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="" to="about" >
                About Us
              </Link>
            </li >
          </ul >


         


          <Switch id="airplane-mode" onClick={toggleTheme} checked={theme === "dark" ? true : false} />

        </div>
      </div>



      <Outlet />
    </div >
  )
}

export default Layout

