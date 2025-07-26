import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import React, { useEffect, useState } from 'react'


import ilus from "@/assets/illustration.svg"
import futDiv from "@/assets/features.svg"
import ik from "@/assets/image.png"
import cp from "@/assets/Clients.png"
import hay from "@/assets/image (6).svg"
import cirkle from "@/assets/Figures.svg"
import tabs from "@/assets/tabs.svg"
import check from "@/assets/Mark.png"
import ilus1 from "@/assets/illustration (1).svg"
import dukh from "@/assets/illustration (2).svg"
import iReq from "@/assets/request-form.svg"
import t1 from "@/assets/panel-open.svg"
import t2 from "@/assets/panel.svg"
import hay2 from "@/assets/illustration (3).svg"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/index.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios'
import { Api } from './../config/api';

import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";





import { EllipsisVertical, Minus, Plus } from "lucide-react"

import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
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
import { Formik, useFormik } from "formik"
import { createRoutesFromElements, Link } from 'react-router-dom';

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

























const Services = () => {
  const [goal, setGoal] = useState(350)

  function onClick() {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  const [data, setData] = useState([])
  const [hoverImage, setHoverImage] = useState(null);

  async function Getdata() {
    try {
      const { data } = await axios.get(Api)
      setData(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    Getdata()
  }, [])

  async function delUs(id) {
    try {
      await axios.delete(`${Api}?id=${id}`)
      Getdata()
    } catch (error) {

    }
  }

  const forMik = useFormik({

    initialValues: {
      Name: "",
      Description: "",
      Id: null
    },

    onSubmit: async (values) => {
      const EdObj = {
        name: values.Name,
        description: values.Description,
        id: values.Id
      }

      try {
        await axios.put(Api, EdObj)
        Getdata()

      } catch (error) { console.error(error) }

    }

  })

  const formikImage = useFormik({
    initialValues: {
      Images: null,
      id: null,
    },

    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("images", values.Images);

      try {
        await axios.post(`${Api}/${values.id}/images`, formData);
        Getdata();
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });


  const fromikAdd = useFormik({
    initialValues: {
      Name: "",
      Images: null,
      Description: ""
    },



    onSubmit: async (values, { resetForm }) => {
      const formdata = new FormData()
      formdata.append("Name", values.Name)
      formdata.append("Images", values.Images)
      formdata.append("Description", values.Description)
      try {
        await axios.post(Api, formdata)
        Getdata()
        resetForm()
      } catch (error) { console.error(error) }

    }

  })

  const handleChangeFile = (e) => {
    fromikAdd.setFieldValue("Images", e.target.files[0])
  }

  return (
    <div className=''>

      <div className="bg-[url('/src/assets/p1Bac.png')] xl:h-screen bg-cover bg-center sm:h-[70vh]">
        <br /><br /><br /><br /><br /><br className="xl:block hidden" /><br className="xl:block hidden" />
        <div className='xl:w-[70%] sm:[95%] m-auto flex items-center justify-between xl:flex-nowrap sm:flex-wrap '>
          <div className='xl:w-[68%]'>
            <h1 className='xl:text-[60px] inline sm:text-3xl '>
              Best <span className='text-[purple]'>SEO & Marketing</span> Solutions for You
            </h1>
          </div>
          <img src={ilus} alt="" className='w-[45%] xl:mt-0 sm:mt-[30px] sm:m-auto xl:m-0' />
        </div>
        <img src={futDiv} alt="" className='xl:w-[70%] m-auto mt-[45px] sm:w-[100%]' />
      </div>


      <div className='xl:w-[70%] sm:w-[95%] mt-[100px] flex items-center justify-between m-auto xl:flex-nowrap sm:flex-wrap'>
        <div className='xl:w-[50%]'>
          <h1 className='xl:text-[23px] sm:text-[15px] sm:text-center xl:text-start'>
            Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.
          </h1>
        </div>

        <div className='xl:w-[50%] sm:w-[90%] flex flex-wrap gap-[15px] items-center'>
          {[...Array(4)].map((_, i) => (
            <div key={i} className='flex items-center justify-between xl:w-[48%] sm:w-[40%] xl:m-0 sm:m-auto sm:mt-2 xl:mt-0'>
              <img src={ik} alt="" className='w-[30%]' />
              <h1 className='xl:text-[17px] sm:text-[9px]'>Top SEO Companies 2020 by Clutch</h1>
            </div>
          ))}
        </div>
      </div>

      <img src={cp} alt="" className='xl:w-[70%] m-auto xl:mt-[100px] xl:mb-[100px] sm:w-[100%] sm:mt-[40px] sm:mb-[30px]' />


      <div className='flex xl:w-[70%] m-auto xl:flex-nowrap sm:flex-wrap items-center justify-between mt-[80px]'>
        <div className='xl:w-[35%] sm:w-[90%] xl:m-0 sm:m-auto '>
          <h1 className='xl:text-[35px] sm:text-[28px]'>Createx Agency</h1>
          <h1 className='xl:text-[14px] sm:text-[11px] mt-[30px]'>
            Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.
          </h1>
          <button className='rounded-md bg-[#7772F1] xl:p-[7px_10px] sm:p-[4px_10px] text-white mt-[30px] '>More about us</button>
        </div>
        <img src={hay} alt="" className='xl:w-[55%] sm:w-[90%] xl:m-0 sm:m-auto xl:mt-0 sm:mt-[40px]' />
      </div>

      <img src={cirkle} alt="" className='xl:w-[40%] m-auto xl:mt-[120px] sm:mt-[70px] sm:w-[95%]' />


      <div className='xl:w-[70%] m-auto sm:w-[95%]  xl:mt-[160px] sm:mt-[80px]'>
        <h1 className='xl:text-[40px] sm:text-[30px] text-center'>Our services</h1>
        <img src={tabs} alt="" className='mt-[30px]' />
        <div className='flex items-center gap-[25px] flex-wrap xl:mt-[50px] sm:mt-[30px]'>
          <div className='xl:w-[43%] sm:w-[90%] xl:m-0 sm:m-auto'>
            <h1 className='text-[27px]'>Complete Workflow For Any SEO Professional</h1>
            {[...Array(6)].map((_, i) => (
              <div key={i} className='flex items-center gap-[15px] mt-[20px]'>
                <img src={check} alt="" />
                <h1>Aenean enim tellus morbi nisl vulputate dictumst.</h1>
              </div>
            ))}
            <div className='flex items-center gap-[20px]'>
              <button className='rounded-md border-2 border-[#7772F1] xl:p-[7px_10px] sm:p-[4px_10px] mt-[30px] '>Learn more</button>
              <button className='rounded-md bg-[#7772F1] xl:p-[7px_10px] sm:p-[4px_10px] text-white mt-[30px] '>Try SEO toolkit</button>
            </div>
          </div>
          <img src={ilus1} alt="" className='xl:w-[54%] sm:w-[95%] xl:m-0 sm:m-auto' />
        </div>
      </div>


      <div className='py-[30px] mt-[100px] bg-black'>
        <div className='xl:w-[70%] m-auto sm:w-[95%] flex flex-wrap items-center justify-between'>
          <img src={dukh} alt="" className='xl:w-[35%] sm:w-[80%] xl:m-0 sm:m-auto' />
          <div className='xl:w-[50%] sm:w-[80%] xl:m-0 sm:m-auto text-white text-center'>
            <h1 className='text-[40px]'>Get a Free SEO Analysis!</h1>
            <input type="text" className='bg-[#FFFFFF33] m-3 p-[5px]' placeholder="Name" />
            <input type="text" className='bg-[#FFFFFF33] m-3 p-[5px]' placeholder="Email" />
            <input type="text" className='bg-[#FFFFFF33] m-3 p-[5px] w-[90%]' placeholder="Website URL" />
            <button className='rounded-md bg-[#7772F1] xl:p-[7px_10px] sm:p-[4px_10px] text-white mt-[30px] '>Get a free analysis</button>
          </div>
        </div>
      </div>


      <div className='mt-[100px] xl:w-[70%] m-auto sm:w-[95%] flex flex-wrap items-center justify-between'>
        <div className='xl:w-[57%] sm:w-[90%] sm:text-center xl:text-start'>
          <h1 className='xl:text-[40px]'>Frequently Asked Questions</h1>
          <img src={t1} alt="" className='mt-[10px]' />
          <img src={t2} alt="" className='mt-[20px]' />
          <img src={t2} alt="" className='mt-[20px]' />
          <img src={t2} alt="" className='mt-[20px]' />
        </div>
        <img src={hay2} alt="" className='xl:w-[40%] sm:w-[90%] xl:m-0 sm:m-auto sm:mt-[20px] xl:mt-0' />
      </div>


      <div className="xl:w-[70%] m-auto sm:w-[95%] mt-[100px]">
        <h1 className="xl:text-[40px] sm:text-[30px] text-center mb-10">Our Projects</h1>
        <Drawer>

          <DrawerTrigger asChild>
            <InteractiveHoverButton className="ml-[20px] mb-[20px]">
              ADD USER
            </InteractiveHoverButton>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>Set your daily activity goal.</DrawerDescription>
              </DrawerHeader>
              <form onSubmit={fromikAdd.handleSubmit}>

                <div className="w-full max-w-md mx-auto space-y-6">
                  <div className="relative">
                    <input
                      onChange={fromikAdd.handleChange}
                      type="text"
                      id="Name"
                      name="Name"
                      placeholder=" "
                      className="peer w-full px-2 py-3 text-sm bg-white dark:bg-[#1e1e1e] border border-gray-300 
                 dark:border-gray-700 rounded-lg shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                 placeholder-transparent transition"
                    />
                    <label
                      htmlFor="Name"
                      className="absolute left-3 top-7 text-gray-500 dark:text-gray-400 text-sm 
                 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
                 peer-placeholder-shown:text-gray-400
                 peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600 
                 transition-all"
                    >
                      Name
                    </label>

                  </div>


                  <div className="relative">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-300">Upload Image</label>
                    <input
                      onChange={handleChangeFile}
                      type="file"
                      className="block w-full text-sm text-gray-500
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:bg-purple-50 file:text-purple-700
                 hover:file:bg-purple-100
                 dark:file:bg-[#2a2a2a] dark:file:text-white
                 transition"
                    />
                  </div>

                  <div className="relative">
                    <input
                      onChange={fromikAdd.handleChange}
                      type="text"
                      id="Description"
                      name='Description'
                      placeholder=" "
                      className="peer w-full px-3 py-3 text-sm bg-white dark:bg-[#1e1e1e] border border-gray-300 
                 dark:border-gray-700 rounded-lg shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                 placeholder-transparent transition"
                    />
                    <label
                      htmlFor="Description"
                      className="absolute left-3 top-7 text-gray-500 dark:text-gray-400 text-sm 
                 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
                 peer-placeholder-shown:text-gray-400
                 peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600 
                 transition-all"
                    >
                      Description
                    </label>

                  </div>


                </div>

                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button type="submit">Submit</Button>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </form>
            </div>
          </DrawerContent>
        </Drawer>

        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >

          {data.map((e, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex justify-center gap-6 flex-wrap items-center">
                  <div
                    className={`relative w-[300px] h-[400px] overflow-hidden rounded-2xl shadow-lg transition-transform duration-500`}>
                    <div className="p-4 flex items-center justify-between absolute top-4 left-4 right-4 z-20 rounded-2xl bg-white/20 backdrop-blur-xl text-white cursor-default">

                      <div>
                        <p className="font-semibold text-lg truncate">Name: {e.name}</p>
                        <p className="mt-1 text-sm line-clamp-3" >Description: {e.description?.slice(0, 15)}</p>
                      </div>

                      <Popover>
                        <PopoverTrigger>
                          <EllipsisVertical />
                        </PopoverTrigger>
                        <PopoverContent >
                          <InteractiveHoverButton
                            onClick={() => { delUs(e.id) }}
                            className="">
                            delete
                          </InteractiveHoverButton>

                          <Drawer>
                            <DrawerTrigger asChild>
                              <InteractiveHoverButton
                                onClick={() => { forMik.setFieldValue("Name", e.name), forMik.setFieldValue("Id", e.id), forMik.setFieldValue("Description", e.description) }}
                                className="ml-[10px] mb-[20px]">
                                Edit
                              </InteractiveHoverButton>
                            </DrawerTrigger>
                            <DrawerContent>
                              <div className="mx-auto w-full max-w-sm">
                                <DrawerHeader>
                                  <DrawerTitle>Move Goal</DrawerTitle>
                                  <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                                </DrawerHeader>
                                <form onSubmit={forMik.handleSubmit}>
                                  <div className="max-w-md mx-auto mt-10 flex flex-col gap-6">

                                    <input
                                      onChange={forMik.handleChange}
                                      value={forMik.values.Name}
                                      name="Name"
                                      type="text"
                                      placeholder="Name"
                                      className="px-4 py-3 rounded-lg border border-gray-300 shadow-sm 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                                    focus:border-blue-500 transition placeholder-gray-400"
                                    />

                                    <input
                                      onChange={forMik.handleChange}
                                      value={forMik.values.Description}
                                      name="Description"
                                      type="text"
                                      placeholder="Description"
                                      className="px-4 py-3 rounded-lg border border-gray-300 shadow-sm 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                                    focus:border-blue-500 transition placeholder-gray-400"
                                    />
                                  </div>
                                  <DrawerFooter>
                                    <DrawerClose asChild>
                                      <Button type="submit">Submit</Button>
                                    </DrawerClose>
                                    <DrawerClose asChild>
                                      <Button variant="outline">Cancel</Button>
                                    </DrawerClose>
                                  </DrawerFooter>
                                </form>
                              </div>
                            </DrawerContent>
                          </Drawer>

                          <Drawer>
                            <DrawerTrigger asChild>
                              <InteractiveHoverButton
                                onClick={() => { formikImage.setFieldValue("id", e.id) }}
                                className="mr-[10px]">
                                Post Image
                              </InteractiveHoverButton>
                            </DrawerTrigger>
                            <DrawerContent>
                              <div className="mx-auto w-full max-w-sm">
                                <DrawerHeader>
                                  <DrawerTitle >Post Image</DrawerTitle>

                                </DrawerHeader>
                                <form onSubmit={formikImage.handleSubmit}>
                                  <input
                                    name="Images"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                      formikImage.setFieldValue("Images", e.currentTarget.files[0]);
                                    }}
                                    className="block w-full text-sm text-gray-500 
    file:mr-4 file:py-2 file:px-4
    file:rounded-full file:border-0
    file:text-sm file:font-medium
    file:bg-blue-50 file:text-blue-700
    hover:file:bg-blue-100
    transition"
                                  />

                                  <DrawerFooter>
                                    <DrawerClose asChild>
                                      <Button type="submit">Submit</Button>
                                    </DrawerClose>
                                    <DrawerClose asChild>
                                      <Button variant="outline">Cancel</Button>
                                    </DrawerClose>
                                  </DrawerFooter>
                                </form>

                              </div>
                            </DrawerContent>
                          </Drawer>
                          <Link to={`user/${e.id}`}>
                            <InteractiveHoverButton>
                              Info
                            </InteractiveHoverButton>
                          </Link>
                        </PopoverContent>
                      </Popover>
                    </div>


                    <div
                      className="w-full h-full absolute inset-0"
                    >
                      <img
                        src={`https://to-dos-api.softclub.tj/images/${e.images[0]?.imageName}`}
                        alt={e.name}
                        className={`w-full h-full object-cover transition-filter duration-500`}
                      />



                    </div>



                  </div>
                </div>
              </SwiperSlide>
            );
          })}

        </Swiper>
        <h1>Explore more case studies</h1>
      </div>



    </div >
  )
}

export default Services


