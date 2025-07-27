import React from 'react'
import ta from "@/assets/Clients.svg"
import hack from "@/assets/image (7).svg"
import ic from "@/assets/ic-options.svg"
import line from "@/assets/line (1).svg"
import check from "@/assets/Mark.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import swap from "@/assets/swaper.jpg"
import icd from "@/assets/client-logo.svg"

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import '@/index.css';
import cirkle from "@/assets/circle.svg"


import { EffectCreative } from 'swiper/modules';


const About = () => {
  return (
    <div>
      <div data-aos="fade-up"
        data-aos-duration="3000" className="bg-[url('/src/assets/p2Bac.png')] h-[80vh] bg-cover bg-center flex items-center">
        <div className='xl:w-[50%] sm:w-[80%] m-auto text-center text-white'>
          <h1 className='xl:text-[50px] sm:text-[20px]'>Search Engine Optimization</h1>
          <h1 className='xl:text-[15px] sm:text-[8px] mt-[25px] text-[#FFFFFF]'>We offer more than services. Our agency provides solutions to your top-priority concerns, involving customer targeting, email performance and sales growth. If there is no existing solution readily available, we create one, specifically to suit your business.</h1>
          <div className='flex items-center justify-baseline mt-[40px]'>
            <input type="text" className='w-[80%] py-[7px] bg-[#FFFFFF33]' placeholder='http://yoursite.com' />
            <button className='w-[20%] bg-[#7772F1] xl:py-[7px] sm:py-[14px] xl:text-[16px] sm:text-[6px]'>
              Analyse your site
            </button>
          </div>
        </div>
      </div>

      <img src={ta} alt="" className='xl:w-[70%] m-auto sm:w-[95%] mt-[90px]' />

      <div className='flex items-center justify-between xl:w-[70%] m-auto sm:w-[90%] mt-[90px] flex-wrap'>
        <img data-aos="fade-right" src={hack} alt="" className='xl:w-[50%]  sm:w-[90%] m-auto' />
        <div data-aos="fade-left" className='xl:w-[45%]  sm:w-[90%] m-auto xl:m-0 sm:mt-[30px]'>
          <h1 className='xl:text-[40px] sm:text-[16px]'>We go above and beyond to ensure successful SEO</h1>
          <h1 className='mt-[20px] xl:text-[16px] sm:text-[14px]'>Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</h1>
        </div>
      </div>

      <div data-aos="zoom-in-down" className='xl:w-[70%] sm:w-[95%] m-auto mt-[100px] text-center'>
        <h1 className='xl:text-[45px] sm:text-[20px]'>SEO services include</h1>

        <div className='xl:m-0 sm:m-auto mt-[40px] flex items-center gap-[30px] justify-between flex-wrap '>
          <div data-aos="zoom-in-down" className='xl:w-[28%] sm:w-[45%] text-start mt-[60px] xl:text-start sm:text-center'>
            <img src={ic} alt="" className='xl:m-0 sm:m-auto' />
            <h1 className='text-[17px] mt-[15px]'>SEO Strategy</h1>
            <h1 className='text-[15px] mt-[15px]'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</h1>
          </div>
          <div ata-aos="zoom-in" className='xl:w-[28%] sm:w-[45%] text-start mt-[60px] xl:text-start sm:text-center'>
            <img src={ic} alt="" className='xl:m-0 sm:m-auto' />
            <h1 className='text-[17px] mt-[15px]'>SEO Strategy</h1>
            <h1 className='text-[15px] mt-[15px]'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</h1>
          </div>
          <div data-aos="zoom-in-down" className='xl:w-[28%] sm:w-[45%] text-start mt-[60px] xl:text-start sm:text-center'>
            <img src={ic} alt="" className='xl:m-0 sm:m-auto' />
            <h1 className='text-[17px] mt-[15px]'>SEO Strategy</h1>
            <h1 className='text-[15px] mt-[15px]'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</h1>
          </div>
          <div ata-aos="zoom-in" className='xl:w-[28%] sm:w-[45%] text-start mt-[60px] xl:text-start sm:text-center'>
            <img src={ic} alt="" className='xl:m-0 sm:m-auto' />
            <h1 className='text-[17px] mt-[15px]'>SEO Strategy</h1>
            <h1 className='text-[15px] mt-[15px]'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</h1>
          </div>
          <div data-aos="zoom-in-down" className='xl:w-[28%] sm:w-[45%] text-start mt-[60px] xl:text-start sm:text-center xl:block sm:hidden'>
            <img src={ic} alt="" className='xl:m-0 sm:m-auto' />
            <h1 className='text-[17px] mt-[15px]'>SEO Strategy</h1>
            <h1 className='text-[15px] mt-[15px]'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</h1>
          </div>
          <div ata-aos="zoom-in" className='xl:w-[28%] sm:w-[45%] text-start mt-[60px] xl:text-start sm:text-center xl:block sm:hidden'>
            <img src={ic} alt="" className='xl:m-0 sm:m-auto' />
            <h1 className='text-[17px] mt-[15px]'>SEO Strategy</h1>
            <h1 className='text-[15px] mt-[15px]'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</h1>
          </div>

        </div>

      </div>

      <div data-aos="flip-down" className='w-[70%] m-auto py-[20px] bg-[#7772F1] text-center mt-[100px]'>

        <h1 className='mt-[30px] xl:text-[32px] sm:text-[17px] text-white'>  Get a Free SEO Analysis! </h1>

        <div className='flex items-center justify-between text-white flex-wrap px-4'>
          <div className='xl:w-[24%] sm:w-[80%] xl:m-0 sm:m-auto text-start'>
            <label > Name </label>
            <input type="text" className='w-[100%] bg-white ' placeholder='Your Name' />
          </div>

          <div className='xl:w-[24%] sm:w-[80%] xl:m-0 sm:m-auto text-start'>
            <label > Desacription </label>
            <input type="text" className='w-[100%] bg-white ' placeholder='Your Name' />
          </div>
          <div className='xl:w-[24%] sm:w-[80%] xl:m-0 sm:m-auto text-start'>
            <label > Image </label>
            <input type="text" className='w-[100%] bg-white ' placeholder='Your Name' />
          </div>

          <button className='bg-black text-white p-[8px_20px] xl:m-0 sm:m-auto xl:mt-4 sm:mt-[10px]'> Analyse your site </button>
        </div>

      </div>

      <div className='xl:w-[55%] m-auto text-center sm:w-[70%] mt-[100px]'>
        <h1 className='mb-[30px] xl:text-[46px] sm:text-[18px]'>That’s how it works</h1>
        <div className='flex flex-wrap gap-[30px]'>
          <div className='text-end xl:w-[40%] sm:w-[80%] xl:m-0 sm:m-auto'>
            <div data-aos="fade-down-right" className='mt-[70px]'>
              <h1 className='text-[20px] '>STEP 2
                Technical SEO Optimizations</h1>
              <h1 className='xl:text-[16px] sm:text-[14px] mt-[15px]'>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.</h1>
            </div>
            <div data-aos="fade-right" className='mt-[70px]'>
              <h1 className='text-[20px] '>Content Marketing</h1>
              <h1 className='xl:text-[16px] sm:text-[14px] mt-[15px]'>Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor. Faucibus in leo, nulla odio nulla imperdiet quis faucibus neque.</h1>
            </div>
          </div>
          <img src={line} alt="" />
          <div className='text-end xl:w-[40%] sm:w-[80%] xl:m-0 sm:m-auto'>
            <div data-aos="fade-down-left" className=''>
              <h1 className='text-[20px] '>Off-Site SEO Analysis</h1>
              <h1 className='xl:text-[16px] sm:text-[14px] mt-[15px]'>Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</h1>
            </div>
            <div data-aos="fade-right" className='mt-[70px]'>
              <h1 className='text-[20px] '>Usability Check</h1>
              <h1 className='xl:text-[16px] sm:text-[14px] mt-[15px]'>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.</h1>
            </div>
          </div>
        </div>
      </div>


      <div  className="xl:w-[70%] sm:w-[95%] text-center m-auto mt-[100px]">
        <h1 className="xl:text-[40px] sm:text-[18px]">Flexible pricing plans</h1>
        <div className="flex justify-center items-center">
          <button className="bg-[#7772F1] p-[8px_45px] rounded-3xl"> Monthly </button>
          <button className="text-[#7772F1] border-[#7772F1] border-2 p-[8px_45px] rounded-3xl"> Monthly </button>
        </div>

        <div className="flex flex-wrap gap-[20px] items-center mt-[40px]">
          <div data-aos="zoom-out-up" className="dark:bg-black dark:text-white bg-white text-black  xl:w-[31%] sm:w-[80%] xl:m-0 sm:m-auto rounded-md p-[20px] text-center border-2">
            <h1 className="xl:text-[26px] sm:text-[17px] mt-[20px]"> Basic </h1>
            <h1 className="xl:text-[40px] sm:text-[18px] mt-[20px] text-[#7772F1]"> $24 <span className="xl:text-[18px] sm:text-[15px]">/mon</span></h1>
            <div className="flex gap-[18px] items-center justify-center mt-[20px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <button className="text-[#7772F1]  border-[#7772F1] border-2 p-[8px_30px] rounded-sm  mt-[20px] mb-4">
              Choose plan
            </button>
          </div>
          <div data-aos="zoom-out-up" className="dark:bg-white dark:text-black bg-black text-white xl:w-[31%] sm:w-[80%] xl:m-0 sm:m-auto rounded-md p-[20px] text-center border-2 py-[20px]">
            <h1 className="xl:text-[40px] sm:text-[18px] mt-[20px] text-[#03CEA4]"> <span className="xl:text-[18px] sm:text-[15px]">/mon</span></h1>
            <hr className="mt-[40px] mb-[15px]" />
            <div className="flex gap-[18px] items-center justify-center mt-[20px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <button className="text-[#7772F1]  border-[#7772F1] border-2 p-[8px_30px] rounded-sm  mt-[20px] mb-4">
              Choose plan
            </button>
          </div>

          <div data-aos="zoom-out-up" className="dark:bg-black dark:text-white bg-white text-black  xl:w-[31%] sm:w-[80%] xl:m-0 sm:m-auto rounded-md p-[20px] text-center border-2">
            <h1 className="xl:text-[26px] sm:text-[17px] mt-[20px]"> Basic </h1>
            <h1 className="xl:text-[40px] sm:text-[18px] mt-[20px] text-[#7772F1]"><span className="xl:text-[18px] sm:text-[15px]">/mon</span></h1>
            <div className="flex gap-[18px] items-center justify-center mt-[20px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <div className="flex gap-[18px] items-center justify-center mt-[10px]">
              <img src={check} alt="" />
              <h1>Advanced Analytics</h1>
            </div>
            <button className="text-[#7772F1]  border-[#7772F1] border-2 p-[8px_30px] rounded-sm  mt-[20px] mb-4">
              Choose plan
            </button>
          </div>

        </div>
      </div>

      <Swiper
       data-aos="zoom-out-right"
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper xl:w-[50%] sm:w-[95%] m-auto mt-[100px]"
      >
        <SwiperSlide>
          <div className='p-[30px] w-[100%] bg-[#00000009]'>
            <img src={icd} alt="" className='w-[100px]' />
            <h1 className='mt-[10px]'>Charity organisation</h1>
            <hr className='mt-[17px]' />
            <h1>Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.</h1>
            <div className='flex items-center gap-[15px] mt-[40px]'>
              <div className='flex items-center gap-[15px]'>
                <img src={cirkle} alt="" />
                <div>
                  <h1>90%</h1>
                  <h1 className='text-[12px]'>Engagement</h1>
                </div>
              </div>
              <div className='flex items-center gap-[15px]'>
                <img src={cirkle} alt="" />
                <div>
                  <h1>100%</h1>
                  <h1 className='text-[12px]'>Engagement</h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-[30px] w-[100%] bg-[url('/src/assets/swaper.jpg')] bg-cover" style={{ backgroundRepeat: "no-repeat" }}>
            <img src={icd} alt="" className='w-[100px]' />
            <h1 className='mt-[10px]'>Charity organisation</h1>
            <hr className='mt-[17px]' />
            <h1>Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.</h1>
            <div className='flex items-center gap-[15px] mt-[40px]'>
              <div className='flex items-center gap-[15px]'>
                <img src={cirkle} alt="" />
                <div>
                  <h1>200%</h1>
                  <h1 className='text-[12px]'>Engagement</h1>
                </div>
              </div>
              <div className='flex items-center gap-[15px]'>
                <img src={cirkle} alt="" />
                <div>
                  <h1>1,400%</h1>
                  <h1 className='text-[12px]'>Engagement</h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-[30px] w-[100%] bg-[#00000010]'>
            <img src={icd} alt="" className='w-[100px]' />
            <h1 className='mt-[10px]'>Charity organisation</h1>
            <hr className='mt-[17px]' />
            <h1>Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.</h1>
            <div className='flex items-center gap-[15px] mt-[40px]'>
              <div className='flex items-center gap-[15px]'>
                <img src={cirkle} alt="" />
                <div>
                  <h1>90%</h1>
                  <h1 className='text-[12px]'>Engagement</h1>
                </div>
              </div>
              <div className='flex items-center gap-[15px]'>
                <img src={cirkle} alt="" />
                <div>
                  <h1>100%</h1>
                  <h1 className='text-[12px]'>Engagement</h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
      className="flex  justify-between mt-[100px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mt-[100px] xl:w-[70%] sm:w-[95%] m-auto"
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
          <SwiperSlide>
            <div className="w-[100%]">
              <h1 className="xl:text-[40px] sm:text-[20px]">Latest news</h1>
              <h1 className="mt-[20px]">Check more posts in our blog for featured news and advertising insights</h1>
              <button className="text-[#7772F1]  border-[#7772F1] border-2 p-[8px_30px] rounded-sm  mt-[20px] mb-4">
                Choose plan
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>

            <div className="w-[100%] ">
              <img src={swap} alt="" className="w-[100%]" />
              <h1 className="text-[15px] mt-[8px]">SEO
                July 5, 2020
                By Diane Mccoy</h1>
              <h1 className="mt-[40px]">Read more  </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>

            <div className="w-[100%] ">
              <img src={swap} alt="" className="w-[100%]" />
              <h1 className="text-[15px] mt-[8px]">SEO
                July 5, 2020
                By Diane Mccoy</h1>
              <h1 className="text-[14px]">The Basics of Blogging Search Engine Optimization.</h1>
              <p className="text-[14px]">Mauris tincidunt sollicitudin  </p>
              <h1 className="">Read more  </h1>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  )
}

export default About
