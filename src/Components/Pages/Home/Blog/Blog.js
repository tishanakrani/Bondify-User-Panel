import React from 'react'
import Footer from '../../Layout/Footer'

const Blog = () => {
  return (
    <>
      <div className='bg-Homepage -mt-36'>
        <div className='mx-auto px-3 pt-[145px] pb-[370px]'>
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
            <div className='bg-[#75879b26] rounded-lg overflow-hidden'>
              <div>
                <img className='rounded-b-lg' src='https://clarityapp.in/img/blog/blogThumbnails/blog1.webp' />
              </div>
              <div className='font-Popins pb-2'>
                <h3 className="text-[22px] font-medium text-white p-3 md:my-3 md:mt-0 mt-3">3 Main Problems In A Long Distance Relationship</h3>
                <p className="text-[15px] font-medium text-[#d3d3d3] p-3"> I am two years into a long distance relationship with my boyfriend and it started with apprehension.They say, long distance does not work. We were ready ...</p>
              </div>
            </div>

            <div className='bg-[#75879b26] rounded-lg overflow-hidden'>
              <div>
                <img className='rounded-b-lg' src='https://clarityapp.in/img/blog/blogThumbnails/blog2.webp' />
              </div>
              <div className='font-Popins pb-2'>
                <h3 className="text-[22px] font-medium text-white p-3 md:my-3 md:mt-0 mt-3">5 Things to Do To Forget Your Ex</h3>
                <p className="text-[15px] font-medium text-[#d3d3d3] p-3">I scanned my room from left to right - all remnants of our relationship- the teddy he gifted me on Valentine’s day, the t-shirt I once borrowed from him ...</p>
              </div>
            </div>

            <div className='bg-[#75879b26] rounded-lg overflow-hidden'>
              <div>
                <img className='rounded-b-lg' src='https://clarityapp.in/img/blog/blogThumbnails/blog3.webp' />
              </div>
              <div className='font-Popins pb-2'>
                <h3 className="text-[22px] font-medium text-white p-3 md:my-3 md:mt-0 mt-3">5 Things To Do When You Are Feeling Lonely</h3>
                <p className="text-[15px] font-medium text-[#d3d3d3] p-3">A few days ago I met a friend after long and there was so much to catch up with her. Most post-pandemic conversations with friends revolve around mental ...</p>              </div>
            </div>

            <div className='bg-[#75879b26] rounded-lg overflow-hidden'>
              <div>
                <img className='rounded-b-lg' src='https://clarityapp.in/img/blog/blogThumbnails/blog4.webp' />
              </div>
              <div className='font-Popins pb-2'>
                <h3 className="text-[22px] font-medium text-white p-3 md:my-3 md:mt-0 mt-3">How To Cope Up With A Terrible Breakup?</h3>
                <p className="text-[15px] font-medium text-[#d3d3d3] p-3">I met Annie when I was going through the toughest phase of my life. I had just come out of a relationship. After months of going on and off break in that ...</p>              </div>
            </div>

            <div className='bg-[#75879b26] rounded-lg overflow-hidden'>
              <div>
                <img className='rounded-b-lg' src='https://clarityapp.in/img/blog/blogThumbnails/blog5.webp' />
              </div>
              <div className='font-Popins pb-2'>
                <h3 className="text-[22px] font-medium text-white p-3 md:my-3 md:mt-0 mt-3">How to Move On Over a Breakup?</h3>
                <p className="text-[15px] font-medium text-[#d3d3d3] p-3">Ashok and I were childhood sweethearts. We were together in the most formative years of our lives. He had known when I had my first period. I had known ...</p>                </div>
            </div>

            <div className='bg-[#75879b26] rounded-lg overflow-hidden'>
              <div>
                <img className='rounded-b-lg' src='https://clarityapp.in/img/blog/blogThumbnails/blog6.webp' />
              </div>
              <div className='font-Popins pb-2'>
                <h3 className="text-[22px] font-medium text-white p-3 md:my-3 md:mt-0 mt-3">Is it OKAY or healthy to be friends with your Ex?</h3>
                <p className="text-[15px] font-medium text-[#d3d3d3] p-3">My friend, Kritika has the most bizarre ways to find answers to questions. Of late, her ex-boyfriend was her new obsession and she curiously interviewed ...</p>                </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog