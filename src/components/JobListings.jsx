import React from 'react'
import { useState, useEffect } from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner'
import { Fa0 } from 'react-icons/fa6'

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    const fetchJobs = async() => {
      const apiUrl = isHome ? '/api/jobs?_limits=3' : '/api/jobs'
      // there is a problem but it suppost to show 3 jobs in 'Home' and 6 in 'Jobs'
      try{
        const res = await fetch(apiUrl)
        const data = await res.json()
        setJobs(data)
      } catch (error) {
        console.log('Error fetching data', error)
      } finally{
        setLoading(false)
      }
    }
    fetchJobs()
    //we called the fetchjobs function we just created
  }, [])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          { isHome ? 'Recent Jobs' : 'Browse Jobs' }
        </h2>

          {loading ? (<Spinner loading={loading} />) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={ job } />
            // above = like import obListing+ take as propt the job because it need the value
            // its like in python to put this file and enter to the function the 'job'
            ))}
            </div>
          )}
      </div>
    </section>

  )
}

export default JobListings