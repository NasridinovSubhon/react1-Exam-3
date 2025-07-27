import React from 'react'
import ilus from "@/assets/illustration (4).svg"
import ilus1 from "@/assets/illustration (5).svg"
import ilus2 from "@/assets/illustration (6).svg"
import ilus3 from "@/assets/illustration (7).svg"
import ilus4 from "@/assets/illustration (8).svg"
import dukh from "@/assets/illustration (9).svg"
import lodka from "@/assets/ic-website.png"
import icd from "@/assets/client-logo.svg"
import cirkle from "@/assets/circle.svg"
import swap from "@/assets/swaper.jpg"


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import '@/index.css';


import { EffectCreative } from 'swiper/modules';


const Stadies = () => {
  return (
    <div>

      <div data-aos="fade-up"
        data-aos-duration="3000" className="bg-[url('/src/assets/p2Bac.png')] h-[80vh] bg-cover bg-center flex items-center text-white">
        <div className='xl:w-[35%] sm:w-[80%] m-auto text-center'>
          <h1 className='xl:text-[70px] sm:text-[40px]'>Our services</h1>
          <h1 className='xl:text-[17px] sm:text-[10px] mt-[25px] text-[#FFFFFF]'>We offer more than services. Our agency provides solutions to your top-priority concerns, involving customer targeting, email performance and sales growth. If there is no existing solution readily available, we create one, specifically to suit your business.</h1>
        </div>
      </div>

      <div>
        <div className='xl:w-[70%] sm:w-[95%] flex items-center gap-[35px] m-auto mt-[70px] flex-wrap'>
          <div data-aos="fade-right" className='xl:w-[47.5%]'>
            <h1 className='xl:text-[32px] sm:text-[17px]'>Social Media Marketing</h1>
            <h1 className='xl:text-[16px] sm:text-[12px] mt-[15px]'> Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium.
            </h1>
            <div className='flex gap-[20px] items-center mt-[60px]'>
              <button className='text-[#7772F1] border-2 border-[#7772F1] p-[8px_28px]'> Learn more </button>
              <button className=' border-2 bg-[#7772F1] p-[8px_28px]'> Learn more </button>
            </div>
          </div>
          <img data-aos="fade-left" src={ilus} alt="" className='xl:w-[47%] md:w-[95%] m-auto' />
        </div>
        <hr />
        <div className='xl:w-[70%] sm:w-[95%] flex items-center gap-[35px] m-auto mt-[70px] flex-wrap'>
          <img data-aos="fade-down-left" src={ilus1} alt="" className='xl:w-[47%] md:w-[95%] m-auto' />
          <div data-aos="fade-down-right" className='xl:w-[47.5%]'>
            <h1 className='xl:text-[32px] sm:text-[17px]'>Social Media Marketing</h1>
            <h1 className='xl:text-[16px] sm:text-[12px] mt-[15px]'> Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium.
            </h1>
            <div className='flex gap-[20px] items-center mt-[60px]'>
              <button className='text-[#7772F1] border-2 border-[#7772F1] p-[8px_28px]'> Learn more </button>
              <button className=' border-2 bg-[#7772F1] p-[8px_28px]'> Learn more </button>
            </div>
          </div>
        </div>
        <hr className='mt-[20px]' />
        <div className='xl:w-[70%] sm:w-[95%] flex items-center gap-[35px] m-auto mt-[70px] flex-wrap'>
          <div data-aos="flip-up" className='xl:w-[47.5%]'>
            <h1 className='xl:text-[32px] sm:text-[17px]'>Social Media Marketing</h1>
            <h1 className='xl:text-[16px] sm:text-[12px] mt-[15px]'> Eleifend o arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium.
            </h1>
            <div className='flex gap-[20px] items-center mt-[60px]'>
              <button className='text-[#7772F1] border-2 border-[#7772F1] p-[8px_28px]'> Learn more </button>
              <button className=' border-2 bg-[#7772F1] p-[8px_28px]'> Learn more </button>
            </div>
          </div>
          <img data-aos="flip-down" src={ilus2} alt="" className='xl:w-[47%] md:w-[95%] m-auto' />
        </div>
        <hr className='mt-[20px]' />
        <div className='xl:w-[70%] sm:w-[95%] flex items-center gap-[35px] m-auto  flex-wrap'>
          <img data-aos="zoom-in-right" src={ilus3} alt="" className='xl:w-[47%] md:w-[95%] m-auto' />
          <div data-aos="zoom-in-left" className='xl:w-[47.5%]'>
            <h1 className='xl:text-[32px] sm:text-[17px]'>Social Media Marketing</h1>
            <h1 className='xl:text-[16px] sm:text-[12px] mt-[15px]'> Eleifend o arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium.
            </h1>
            <div className='flex gap-[20px] items-center mt-[60px]'>
              <button className='text-[#7772F1] border-2 border-[#7772F1] p-[8px_28px]'> Learn more </button>
              <button className=' border-2 bg-[#7772F1] p-[8px_28px]'> Learn more </button>
            </div>
          </div>
        </div>
        <hr className='mt-[20px]' />
        <div className='xl:w-[70%] sm:w-[95%] flex items-center gap-[35px] m-auto  flex-wrap'>
          <div data-aos="flip-left" className='xl:w-[47.5%]'>
            <h1 className='xl:text-[32px] sm:text-[17px]'>Social Media Marketing</h1>
            <h1 className='xl:text-[16px] sm:text-[12px] mt-[15px]'> Eleifend o arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium.
            </h1>
            <div className='flex gap-[20px] items-center mt-[60px]'>
              <button className='text-[#7772F1] border-2 border-[#7772F1] p-[8px_28px]'> Learn more </button>
              <button className=' border-2 bg-[#7772F1] p-[8px_28px]'> Learn more </button>
            </div>
          </div>
          <img data-aos="flip-right" src={ilus4} alt="" className='xl:w-[47%] md:w-[95%] m-auto' />
        </div>
      </div>

      <hr />

      <div className='py-[30px] mt-[100px] bg-black'>
        <div className='xl:w-[70%] m-auto sm:w-[95%] flex flex-wrap items-center justify-between'>
          <img data-aos="flip-left" src={dukh} alt="" className='xl:w-[35%] sm:w-[80%] xl:m-0 sm:m-auto' />
          <div data-aos="flip-right" className='xl:w-[50%] sm:w-[80%] xl:m-0 sm:m-auto text-white text-center'>
            <h1 className='text-[40px]'>Get a Free SEO Analysis!</h1>
            <input type="text" className='bg-[#FFFFFF33] m-3 p-[5px]' placeholder="Name" />
            <input type="text" className='bg-[#FFFFFF33] m-3 p-[5px]' placeholder="Email" />
            <input type="text" className='bg-[#FFFFFF33] m-3 p-[5px] w-[90%]' placeholder="Website URL" />
            <button className='rounded-md bg-[#7772F1] xl:p-[7px_10px] sm:p-[4px_10px] text-white mt-[30px] '>Get a free analysis</button>
          </div>

        </div>
      </div>

      <div className='xl:w-[70%] sm:w-[95%] m-auto text-center mt-[120px]'>
        <h1 className='xl:text-[42px] sm:text-[19px]'>Markets in which we operate</h1>
        <div data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0" className='flex items-center gap-[25px] flex-wrap mt-[40px]'>
          <div className='xl:w-[23%] sm:w-[80%] xl:m-0 sm:m-auto text-center'>
            <img src={lodka} alt="" className='m-auto' />
            <h1 className='mt-[15px] xl:text-[18px] sm:text-[15px]'>  E-commerce Websites </h1>
            <h1 className='mt-[10px] text-[#787A80] xl:text-[16px] sm:text-[13px]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </h1>
          </div>
          <div className='xl:w-[23%] sm:w-[80%] xl:m-0 sm:m-auto text-center'>
            <img src={lodka} alt="" className='m-auto' />
            <h1 className='mt-[15px] xl:text-[18px] sm:text-[15px]'>  E-commerce Websites </h1>
            <h1 className='mt-[10px] text-[#787A80] xl:text-[16px] sm:text-[13px]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </h1>
          </div>
          <div className='xl:w-[23%] sm:w-[80%] xl:m-0 sm:m-auto text-center'>
            <img src={lodka} alt="" className='m-auto' />
            <h1 className='mt-[15px] xl:text-[18px] sm:text-[15px]'>  E-commerce Websites </h1>
            <h1 className='mt-[10px] text-[#787A80] xl:text-[16px] sm:text-[13px]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </h1>
          </div>
          <div className='xl:w-[23%] sm:w-[80%] xl:m-0 sm:m-auto text-center'>
            <img src={lodka} alt="" className='m-auto' />
            <h1 className='mt-[15px] xl:text-[18px] sm:text-[15px]'>  E-commerce Websites </h1>
            <h1 className='mt-[10px] text-[#787A80] xl:text-[16px] sm:text-[13px]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </h1>
          </div>
        </div>
      </div>


      <Swiper
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

      <div className="flex  justify-between mt-[100px]">
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
              <h1 className="mt-[40px]">Read more >> </h1>
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
              <h1 className="">Read more >> </h1>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>


    </div>
  )
}

export default Stadies
