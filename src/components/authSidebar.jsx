// import React from 'react'
import UNTHIcon from '../assets/unth-Icon.png'
// import './authSideBar.css'

const authSidebar = () => {
  return (
    <section className='w-2/3 h-screen bg-light-primary-green flex flex-col items-center justify-center'>
      <div className='p-5 bg-light-primary-blue rounded-3xl mb-5'>
        <img src={UNTHIcon} alt="UNTH Icon" />
      </div>
      <p className='text-3xl font-semibold text-white'>UNTH CORPORATIVES</p>
    </section>
  );
}

export default authSidebar