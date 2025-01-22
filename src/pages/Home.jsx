import { useEffect, useState } from 'react'
import React from 'react'
import Navbar from '../components/core/Navbar'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Testimonials from '../components/home/Testimonials'
import Join from '../components/home/Join'
import Footer from '../components/core/Footer'
import Form from '../components/core/Form'
import SuccessBanner from '../components/core/SuccessBanner'
import { useSearchParams } from 'react-router-dom'
import DataTable from '../components/home/DataTable'

const Home = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch('https://todo-backend-mkub.onrender.com/users', {
          method: 'GET',
        })
        const data = await response.json();

        if(!data.users) {
          throw new Error('No users found');
        }

        setData(data?.users);

      } catch (e) {
        console.log(e)
      }
    }
    fetchData();
  }, [searchParams]);

  return (
    <div>
      {/* navbar */}
      <Navbar />

      <Form />
      <SuccessBanner />

      {/* hero section */}
      <Hero />

      {/* fetures section */}
      <Features />

      {/* testimonials section */}
      <Testimonials />

      {/* join section */}
      <Join />

      {
        data.length > 0 && <DataTable data={data} />
      }

      {/* footer */}
      <Footer />
    </div>
  )
}

export default Home