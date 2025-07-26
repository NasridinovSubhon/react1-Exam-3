import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { Api } from '@/config/api';

const UserById = () => {

  const [data, setData] = useState({})
  const { id } = useParams()

  async function getId() {
    try {
      const { data } = await axios.get(`${Api}/${id}`)
      setData(data.data)
    } catch (error) { console.error(error) }
  }

  useEffect(() => {
    getId()
  }, [])


  console.log(data);

  async function delImg(id) {
    try {
      await axios.delete(`${Api}/images/${id}`)
      getId()
    } catch (error) {

    }
  }

  return (
    <div className='mt-[300px]'>

      <div className=" xl:w-[40%] m-auto absolute xl:bottom-[45%] sm:bottom-[30%] left-4 right-4 rounded-2xl bg-white/30 dark:bg-white/10 backdrop-blur-md p-4 flex flex-wrap justify-around gap-4 shadow-lg sm:w-[90%]">
        <h2 className="w-full text-center text-lg font-semibold text-gray-800 dark:text-white">
          {data.name}
        </h2>

        {data?.images?.map((e, i) => (
          <div key={i} className="flex flex-col items-center bg-white/20 dark:bg-white/10 rounded-xl p-2 shadow hover:shadow-xl transition-all duration-300">
            <img
              src={`https://to-dos-api.softclub.tj/images/${e?.imageName}`}
              alt=""
              className="w-[70px] h-[70px] object-cover rounded-xl"
            />
            <InteractiveHoverButton onClick={() => { delImg(e.id) }} >
              img❌
            </InteractiveHoverButton>
          </div>
        ))}
      </div>


    </div>
  )
}

export default UserById
