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


import insIcon from "@/assets/socials.svg"
import avad from "@/assets/awards.svg"

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

      <div className="xl:mt-[200px] sm:mt-[150px] bg-[#1E212C] text-[#FFFFFF] pt-[50px]">
        <div className="xl:w-[75%] sm:w-[95%] flex justify-between flex-wrap m-auto" >
          <div className="xl:w-[32%] sm:w-[95%] sm:m-auto xl:m-0 xl:mb-0 sm:mb-10">
            <img src={logo} alt="" className='xl:w-[100px] sm:w-[50px] xl:m-0 sm:m-auto' />
            <h1 className="xl:text-[14px] sm:text-[10px] mt-[14px] xl:text-start sm:text-center">Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</h1>
            <img src={insIcon} alt="" className='xl:w-[200px] sm:w-[100px] xl:m-0 sm:m-auto  xl:mt-[25px] sm:mt-[25px] ' />
          </div>
          <div className="xl:w-[15%] xl:block sm:block">
            <h1  >COMPANY</h1>
            <h1 className="text-[14px] mt-[12px]" >About Us</h1>
            <h1 className="xl:text-[14px] sm:text-[10px] mt-[12px]" >Case Studies</h1>
            <h1 className="xl:text-[14px] sm:text-[10px] mt-[12px]" >About Us</h1>
            <h1 className="xl:text-[14px] sm:text-[10px] mt-[12px]" >Case Studies</h1>
          </div>
          <div className="xl:w-[15%] xl:block sm:block">
            <h1  >SERVICES</h1>
            <h1 className="text-[14px] mt-[12px]" >Social Media</h1>
            <h1 className="xl:text-[14px] sm:text-[10px] mt-[12px]" >SEO</h1>
            <h1 className="xl:text-[14px] sm:text-[10px] mt-[12px]" >Research</h1>
            <h1 className="xl:text-[14px] sm:text-[10px] mt-[12px]" >Payed Traffic</h1>
          </div>
          <div className="xl:w-[15%] xl:block sm:block">
            <h1  >CONTACT US</h1>
            <h1 className="xl:text-[14px] sm:text-[10px]mt-[12px]" >(405) 555-0128</h1>
            <h1 className="xl:text-[14px] sm:text-[10px]mt-[12px]" >hello@createx.com</h1>

          </div>
          <div className="xl:w-[20%] xl:block sm:hidden">
            <h1  >SIGN UP TO OUR NEWSLETTER</h1>
            <input type="text" className="w-full p-[6px] rounded-md bg-[#FFFFFF1F] mt-[18px]" />
            <h1 className="mt-[12px] xl:text-[12px] sm:text-[10px] " >*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</h1>

          </div>

        </div>
        <hr className="mt-[50px] pb-[40px]" />

      </div>

    </div >
  )
}

export default Layout

