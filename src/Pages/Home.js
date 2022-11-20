import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ExpCard from '../Components/Card/ExpCard'
import HomeCard from '../Components/Card/HomeCard'
import SearchForm from '../Components/Form/SearchForm'
import Spinner from '../Components/Spinner/Spinner'


const Home = () => {

  const [allExp, setAllExp] = useState([])


  useEffect(() => {

    fetch("expdata.json")
      .then(res => res.json())
      .then(data => setAllExp(data))

  }, [])

  return (
    <>
      {/* <Spinner /> */}
      <div className='container mx-auto'>
        <div className='flex justify-center lg:flex-row flex-col'>
          <div className='mt-4'> <SearchForm></SearchForm> </div>


          <div className='flex-1 mt-10'>
            <div className='flex justify-between items-center px-4'>
              <h2 className='text-2xl font-bold'>Experience</h2>
              <Link className='font-semibold' to="/coming-soon">See all</Link>
            </div>
            <div className=''>
              <div className='flex flex-wrap'>
                {
                  allExp.map((exp, i) => <HomeCard
                    key={i}
                    exp={exp}
                  ></HomeCard>)
                }
              </div>
              <div className='flex justify-between items-center px-4'>
                <h2 className='text-2xl font-bold'>Experience</h2>
                <Link className='font-semibold' to="/coming-soon">See all</Link>
              </div>
              <div className='flex justify-between flex-col lg:flex-row'>
                {
                  allExp.slice(0, 4).map((exp, index) => <ExpCard
                    key={index}
                    exp={exp}
                  ></ExpCard>)
                }
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Home
