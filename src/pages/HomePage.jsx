import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings isHome={true}/>
        {/* i added property called 'isHome' so they will get it and that 
        will determine if i want to see 3 or 6 jobs in every page */}
        <ViewAllJobs />
    </>
  )
}

export default HomePage