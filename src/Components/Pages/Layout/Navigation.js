import React from 'react'
import logo from '../../Assets/logo.png';
import { Link } from 'react-router';

const Navigation = () => {

  //   const navigate = useNavigate();



  return (
    <>
        <nav className='bg-transparent'>
          <div className='mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex h-24 items-center justify-between'>
              <div className='flex items-center justify-between w-full'>
                <div className='flex-shrink-0'>
                  <img className='h-10 w-auto' src={logo} alt="logo" />
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4 items-center'>
                    <Link to={'/'} className="text-lg font-light text-white font-league">Home</Link>
                    <Link to={'/Listeners'} className="text-lg font-light text-white font-league">Listeners</Link>
                    <Link to={'/Blog'} className="text-lg font-light text-white font-league">Blog</Link>
                    <Link to={'/FAQs'} className="text-lg font-light text-white font-league">FAQs</Link>
                    <Link to={'/#'} className='border rounded-full w-[100px] h-[40px] text-white flex items-center justify-center'>Download</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navigation