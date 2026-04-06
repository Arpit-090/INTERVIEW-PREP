import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white px-6'>

      {/* Heading */}
      <h1 className='text-4xl md:text-6xl font-bold text-center leading-tight mb-6'>
        ACE INTERVIEW WITH <br />
        <span className='text-yellow-300'>AI POWERED</span> LEARNING
      </h1>

      {/* Subtext */}
      <p className='text-lg md:text-xl text-center max-w-xl mb-8 text-gray-200'>
        Practice smarter, improve faster, and land your dream job with AI-driven mock interviews.
      </p>

      {/* Button */}
      <button
        className='bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105'
        onClick={() => navigate('/login')}
      >
        Get Started 🚀
      </button>

    </div>
  )
}

export default LandingPage