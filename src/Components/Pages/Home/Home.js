import React, { useState, useEffect } from 'react';
// import logo from '../../Assets/logo.png';
import { Link } from 'react-router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

   const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,           
  Speed: 1000, 
  cssEase: "linear",
  slidesToShow: 1.5,  
  slidesToShow: 4,
  slidesToScroll: 1.5,
  rows: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
      },
    },
  ],
};


 const settings2 = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  // speed: 1000,            
  // autoplaySpeed: 4000,    
  // cssEase: "ease-in-out",
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};




  const images = [
    'https://www.talkangels.com/static/media/Herosection.fcb38da2448bfae4c4db.png',
    'https://www.talkangels.com/static/media/Herosection2.e8b533f6ae6a05ce9b48.png',
    'https://www.talkangels.com/static/media/Herosection3.0eef8177ee347f62aa25.png',
    'https://www.talkangels.com/static/media/Herosection4.338acec211b61213a73d.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='bg-Homepage'>
        <div className='xl:max-w[90%] mx-auto px-3'>
          <div className='grid lg:grid-cols-2 grid-cols-1 xl:items-center items-start justify-between flex-wrap'>
            <div>
              <h2 className='text-[52px] font-league tracking-wide text-white font-light relative lg:w-fit lg:text-left text-start'>The door to</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="113" height="12" viewBox="0 0 113 12" fill="none" className='ml-[85px]'><path d="M1 11C18.6957 4.64899 68.7288 -0.641643 112 1.47349" stroke="#FF4848" strokeWidth="2"></path></svg>
              <h2 className='text-[#15B37E] lg:text-[64px] text-[58px] lg:justify-start justify-center font-bold mt-5 flex items-center gap-2 '>
                Friendship 
                  <img className='h-[69px] w-[87px]' src='https://www.talkangels.com/static/media/Vector8.14b38eec580baa2ebc12.png'/>
                Forever
              </h2>
              <h2 className='text-white lg:text-[80px] text-[60px] lg:text-left text-center font-bold'>Unlocked!</h2>
              <p className='text-white text-[27px] font-thin lg:max-w-[690px] lg:text-left text-center'>Join the exciting journey of meeting new friends within our vibrant community of over one million users!</p>
              <div className='flex items-center gap-4 mt-[28px] flex-wrap lg:justify-start justify-center'>
                <Link to="#" className='w-[230px] h-[60px] bg-[#15B37E] text-[20px] text-white rounded-full flex items-center justify-center gap-[34px]'>
                  Get Started
                 <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8266 15.6913C13.7392 15.7866 13.6338 15.863 13.5167 15.916C13.3996 15.969 13.2732 15.9976 13.1451 15.9998C13.0169 16.0021 12.8896 15.9782 12.7707 15.9294C12.6519 15.8806 12.5439 15.808 12.4532 15.7159C12.3626 15.6238 12.2911 15.5141 12.2431 15.3933C12.1951 15.2725 12.1715 15.1431 12.1738 15.0129C12.1761 14.8826 12.2041 14.7542 12.2563 14.6352C12.3085 14.5162 12.3837 14.4091 12.4775 14.3203L17.7425 8.97003H0.954582C0.70141 8.97003 0.458609 8.86783 0.279589 8.68591C0.100571 8.504 -1.90735e-06 8.25727 -1.90735e-06 8C-1.90735e-06 7.74273 0.100571 7.496 0.279589 7.31408C0.458609 7.13217 0.70141 7.02997 0.954582 7.02997H17.7425L12.4775 1.67971C12.3837 1.59091 12.3085 1.48382 12.2563 1.36483C12.2041 1.24584 12.1761 1.11739 12.1738 0.987143C12.1715 0.856896 12.1951 0.727521 12.2431 0.606735C12.2911 0.48595 12.3626 0.376228 12.4532 0.284115C12.5439 0.192003 12.6519 0.119386 12.7707 0.0705988C12.8896 0.0218115 13.0169 -0.00214708 13.1451 0.000150968C13.2732 0.00244901 13.3996 0.0309567 13.5167 0.0839747C13.6338 0.136993 13.7392 0.213434 13.8266 0.308738L20.7208 7.31451C20.8996 7.49639 21 7.74294 21 8C21 8.25706 20.8996 8.50361 20.7208 8.68549L13.8266 15.6913Z" fill="currentColor"></path></svg>
                </Link>
                <Link to="#" className='w-[260px] h-[60px] bg-red-500 text-[20px] text-white rounded-full flex items-center justify-center gap-[34px]'>
                  Download the app
                  <div className='-rotate-45'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8266 15.6913C13.7392 15.7866 13.6338 15.863 13.5167 15.916C13.3996 15.969 13.2732 15.9976 13.1451 15.9998C13.0169 16.0021 12.8896 15.9782 12.7707 15.9294C12.6519 15.8806 12.5439 15.808 12.4532 15.7159C12.3626 15.6238 12.2911 15.5141 12.2431 15.3933C12.1951 15.2725 12.1715 15.1431 12.1738 15.0129C12.1761 14.8826 12.2041 14.7542 12.2563 14.6352C12.3085 14.5162 12.3837 14.4091 12.4775 14.3203L17.7425 8.97003H0.954582C0.70141 8.97003 0.458609 8.86783 0.279589 8.68591C0.100571 8.504 -1.90735e-06 8.25727 -1.90735e-06 8C-1.90735e-06 7.74273 0.100571 7.496 0.279589 7.31408C0.458609 7.13217 0.70141 7.02997 0.954582 7.02997H17.7425L12.4775 1.67971C12.3837 1.59091 12.3085 1.48382 12.2563 1.36483C12.2041 1.24584 12.1761 1.11739 12.1738 0.987143C12.1715 0.856896 12.1951 0.727521 12.2431 0.606735C12.2911 0.48595 12.3626 0.376228 12.4532 0.284115C12.5439 0.192003 12.6519 0.119386 12.7707 0.0705988C12.8896 0.0218115 13.0169 -0.00214708 13.1451 0.000150968C13.2732 0.00244901 13.3996 0.0309567 13.5167 0.0839747C13.6338 0.136993 13.7392 0.213434 13.8266 0.308738L20.7208 7.31451C20.8996 7.49639 21 7.74294 21 8C21 8.25706 20.8996 8.50361 20.7208 8.68549L13.8266 15.6913Z" fill="currentColor"></path></svg>
                  </div>
                </Link>
              </div>
              </div>

            <div className='relative items-center justify-center lg:order-2 order-1 lg:flex hidden'>
                <div className={`w-full h-full absolute mb-48 object-contain transition-opacity duration-700 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
                  <img  key={currentIndex} src={images[currentIndex]} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      
      <div className='pt-[66px] bg-Homepage mt-[339px] pb-[64px]'>
        <h3 className='text-center text-white text-[64px] relative'>Listeners
          <span className='absolute bottom-2 left-1/2 -translate-x-1/2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="113" height="12" viewBox="0 0 113 12" fill="none"><path d="M1 11C18.6957 4.64899 68.7288 -0.641643 112 1.47349" stroke="#FF4848" stroke-width="2"></path></svg>
          </span>
        </h3>
        <div className=' mx-auto px-7 mt-[63px]'>
          <div className='grid xxl:grid-cols-4 xxl:gap-x-[52px] gap-x-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-20 gap-y-6'>
            <div className='bg-[#232243] rounded-xl flex items-center justify-center py-[25px] px-[20px]'>
              <div>
                <div className='relative listener z-20 flex items-center justify-center'>
                  <div className='w-[217px] h-[217px] rounded-full overflow-hidden'>
                    <img src='https://img.freepik.com/free-photo/smiling-young-beautiful-girl-looking-straight-ahead-wearing-white-t-shirt-isolated-pink_141793-86537.jpg' className='object-cover h-full w-full'/>
                  </div>
                </div>
                <div className='mt-5'>
                  <div className='flex items-center justify-center gap-2'>
                    <h4 className="text-[#E4D056] text-[32px] font-bold text-center">Riya</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M23.4675 10.4884L21.8354 8.59285C21.5233 8.23294 21.2713 7.56111 21.2713 7.08123V5.04174C21.2713 3.77006 20.2273 2.72632 18.9552 2.72632H16.9151C16.447 2.72632 15.763 2.47438 15.403 2.16246L13.5068 0.530867C12.6788 -0.176956 11.3227 -0.176956 10.4827 0.530867L8.59853 2.17446C8.23851 2.47438 7.55447 2.72632 7.08644 2.72632H5.01031C3.73823 2.72632 2.69417 3.77006 2.69417 5.04174V7.09323C2.69417 7.56111 2.44215 8.23294 2.14213 8.59285L0.522032 10.5004C-0.174011 11.3282 -0.174011 12.6718 0.522032 13.4996L2.14213 15.4071C2.44215 15.7671 2.69417 16.4389 2.69417 16.9068V18.9583C2.69417 20.2299 3.73823 21.2737 5.01031 21.2737H7.08644C7.55447 21.2737 8.23851 21.5256 8.59853 21.8375L10.4947 23.4691C11.3227 24.177 12.6788 24.177 13.5188 23.4691L15.415 21.8375C15.775 21.5256 16.447 21.2737 16.9271 21.2737H18.9672C20.2393 21.2737 21.2833 20.2299 21.2833 18.9583V16.9188C21.2833 16.4509 21.5353 15.7671 21.8474 15.4071L23.4795 13.5116C24.1755 12.6838 24.1755 11.3162 23.4675 10.4884ZM16.9871 9.73257L11.1907 15.5271C11.0227 15.6951 10.7947 15.7911 10.5547 15.7911C10.3146 15.7911 10.0866 15.6951 9.91862 15.5271L7.01444 12.6238C6.66641 12.2759 6.66641 11.7001 7.01444 11.3522C7.36246 11.0042 7.93849 11.0042 8.28651 11.3522L10.5547 13.6196L15.715 8.46089C16.063 8.11297 16.639 8.11297 16.9871 8.46089C17.3351 8.8088 17.3351 9.38465 16.9871 9.73257Z" fill="#4285F4"></path><path d="M23.4675 10.4884L21.8354 8.59285C21.5233 8.23294 21.2713 7.56111 21.2713 7.08123V5.04174C21.2713 3.77006 20.2273 2.72632 18.9552 2.72632H16.9151C16.447 2.72632 15.763 2.47438 15.403 2.16246L13.5068 0.530867C12.6788 -0.176956 11.3227 -0.176956 10.4827 0.530867L8.59853 2.17446C8.23851 2.47438 7.55447 2.72632 7.08644 2.72632H5.01031C3.73823 2.72632 2.69417 3.77006 2.69417 5.04174V7.09323C2.69417 7.56111 2.44215 8.23294 2.14213 8.59285L0.522032 10.5004C-0.174011 11.3282 -0.174011 12.6718 0.522032 13.4996L2.14213 15.4071C2.44215 15.7671 2.69417 16.4389 2.69417 16.9068V18.9583C2.69417 20.2299 3.73823 21.2737 5.01031 21.2737H7.08644C7.55447 21.2737 8.23851 21.5256 8.59853 21.8375L10.4947 23.4691C11.3227 24.177 12.6788 24.177 13.5188 23.4691L15.415 21.8375C15.775 21.5256 16.447 21.2737 16.9271 21.2737H18.9672C20.2393 21.2737 21.2833 20.2299 21.2833 18.9583V16.9188C21.2833 16.4509 21.5353 15.7671 21.8474 15.4071L23.4795 13.5116C24.1755 12.6838 24.1755 11.3162 23.4675 10.4884ZM16.9871 9.73257L11.1907 15.5271C11.0227 15.6951 10.7947 15.7911 10.5547 15.7911C10.3146 15.7911 10.0866 15.6951 9.91862 15.5271L7.01444 12.6238C6.66641 12.2759 6.66641 11.7001 7.01444 11.3522C7.36246 11.0042 7.93849 11.0042 8.28651 11.3522L10.5547 13.6196L15.715 8.46089C16.063 8.11297 16.639 8.11297 16.9871 8.46089C17.3351 8.8088 17.3351 9.38465 16.9871 9.73257Z" stroke="#4285F4"></path></svg>
                  </div>
                  <p className="text-[#D9D9D9]/50 text-center text-base">F-30 Yrs • 2 yrs of Experience</p>
                  <div className='mt-5'>
                    <p className="text-white text-justify text-lg font-normal max-w-[300px] text-ellipsis max-h-[170px] overflow-hidden">I started dating a guy when I was young it went on for 4 long years. Since the beginning of the relationship, I found myself to be begging for attention &amp; time but he put no effort at all. Also, he wouldn't talk to me for days which make me panic. During the first 2 years, when I felt like things were getting hard, I portrayed my frustration by saying that I wanted to break up but he always assured me that things would be fine &amp; he is in love with me. But soon, he started taking me for granted &amp; blackmailed me that he would leave me and blame me for everything that went wrong. Finally, I broke up with him. It wasn't easy but I healed myself &amp; now I want to help you.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-[#232243] rounded-xl flex items-center justify-center py-[25px] px-[20px]'>
              <div>
                <div className='relative listener z-20 flex items-center justify-center'>
                  <div className='w-[217px] h-[217px] rounded-full overflow-hidden'>
                    <img src='https://i.pinimg.com/736x/23/76/b6/2376b6619630266ab3de14ae52897d39.jpg' className='object-cover h-full w-full'/>
                  </div>
                </div>
                <div className='mt-5'>
                  <div className='flex items-center justify-center gap-2'>
                    <h4 className="text-[#E4D056] text-[32px] font-bold text-center">Shivani</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M23.4675 10.4884L21.8354 8.59285C21.5233 8.23294 21.2713 7.56111 21.2713 7.08123V5.04174C21.2713 3.77006 20.2273 2.72632 18.9552 2.72632H16.9151C16.447 2.72632 15.763 2.47438 15.403 2.16246L13.5068 0.530867C12.6788 -0.176956 11.3227 -0.176956 10.4827 0.530867L8.59853 2.17446C8.23851 2.47438 7.55447 2.72632 7.08644 2.72632H5.01031C3.73823 2.72632 2.69417 3.77006 2.69417 5.04174V7.09323C2.69417 7.56111 2.44215 8.23294 2.14213 8.59285L0.522032 10.5004C-0.174011 11.3282 -0.174011 12.6718 0.522032 13.4996L2.14213 15.4071C2.44215 15.7671 2.69417 16.4389 2.69417 16.9068V18.9583C2.69417 20.2299 3.73823 21.2737 5.01031 21.2737H7.08644C7.55447 21.2737 8.23851 21.5256 8.59853 21.8375L10.4947 23.4691C11.3227 24.177 12.6788 24.177 13.5188 23.4691L15.415 21.8375C15.775 21.5256 16.447 21.2737 16.9271 21.2737H18.9672C20.2393 21.2737 21.2833 20.2299 21.2833 18.9583V16.9188C21.2833 16.4509 21.5353 15.7671 21.8474 15.4071L23.4795 13.5116C24.1755 12.6838 24.1755 11.3162 23.4675 10.4884ZM16.9871 9.73257L11.1907 15.5271C11.0227 15.6951 10.7947 15.7911 10.5547 15.7911C10.3146 15.7911 10.0866 15.6951 9.91862 15.5271L7.01444 12.6238C6.66641 12.2759 6.66641 11.7001 7.01444 11.3522C7.36246 11.0042 7.93849 11.0042 8.28651 11.3522L10.5547 13.6196L15.715 8.46089C16.063 8.11297 16.639 8.11297 16.9871 8.46089C17.3351 8.8088 17.3351 9.38465 16.9871 9.73257Z" fill="#4285F4"></path><path d="M23.4675 10.4884L21.8354 8.59285C21.5233 8.23294 21.2713 7.56111 21.2713 7.08123V5.04174C21.2713 3.77006 20.2273 2.72632 18.9552 2.72632H16.9151C16.447 2.72632 15.763 2.47438 15.403 2.16246L13.5068 0.530867C12.6788 -0.176956 11.3227 -0.176956 10.4827 0.530867L8.59853 2.17446C8.23851 2.47438 7.55447 2.72632 7.08644 2.72632H5.01031C3.73823 2.72632 2.69417 3.77006 2.69417 5.04174V7.09323C2.69417 7.56111 2.44215 8.23294 2.14213 8.59285L0.522032 10.5004C-0.174011 11.3282 -0.174011 12.6718 0.522032 13.4996L2.14213 15.4071C2.44215 15.7671 2.69417 16.4389 2.69417 16.9068V18.9583C2.69417 20.2299 3.73823 21.2737 5.01031 21.2737H7.08644C7.55447 21.2737 8.23851 21.5256 8.59853 21.8375L10.4947 23.4691C11.3227 24.177 12.6788 24.177 13.5188 23.4691L15.415 21.8375C15.775 21.5256 16.447 21.2737 16.9271 21.2737H18.9672C20.2393 21.2737 21.2833 20.2299 21.2833 18.9583V16.9188C21.2833 16.4509 21.5353 15.7671 21.8474 15.4071L23.4795 13.5116C24.1755 12.6838 24.1755 11.3162 23.4675 10.4884ZM16.9871 9.73257L11.1907 15.5271C11.0227 15.6951 10.7947 15.7911 10.5547 15.7911C10.3146 15.7911 10.0866 15.6951 9.91862 15.5271L7.01444 12.6238C6.66641 12.2759 6.66641 11.7001 7.01444 11.3522C7.36246 11.0042 7.93849 11.0042 8.28651 11.3522L10.5547 13.6196L15.715 8.46089C16.063 8.11297 16.639 8.11297 16.9871 8.46089C17.3351 8.8088 17.3351 9.38465 16.9871 9.73257Z" stroke="#4285F4"></path></svg>
                  </div>
                  <p className="text-[#D9D9D9]/50 text-center text-base">F-22 Yrs • 1.4 yrs of Experience</p>
                  <div className='mt-5'>
                    <p className="text-white text-justify text-lg font-normal max-w-[300px] text-ellipsis max-h-[170px] overflow-hidden">About 5 years ago, I met a guy. He proposed to me and I accepted the proposal. Initially, the relationship went in a very smooth way. Gradually, it became toxic. He started tracking my life like a spy. There was no personal space for me. If I wanted to do something, first I had to tell him and wait for his approval. He became extremely possessive with time, even he blocked all my male friends from my phone and told me not to talk to anyone of them. I was depressed as hell. One day, I gathered myself and told my friends everything that I felt in those 3 years and I finally, broke up with him. That day I felt like I got out of 3-year imprisonment. Let's connect if you want to share something.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-[#232243] rounded-xl flex items-center justify-center py-[25px] px-[20px]'>
              <div>
                <div className='relative listener z-20 flex items-center justify-center'>
                  <div className='w-[217px] h-[217px] rounded-full overflow-hidden'>
                    <img src='https://www.talkangels.com/static/media/Listenersimg_1.9b7e99e96371a1430c2a.png' className='object-cover h-full w-full'/>
                  </div>
                </div>
                <div className='mt-5'>
                  <div className='flex items-center justify-center gap-2'>
                    <h4 className="text-[#E4D056] text-[32px] font-bold text-center">Anuradha</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M23.4675 10.4884L21.8354 8.59285C21.5233 8.23294 21.2713 7.56111 21.2713 7.08123V5.04174C21.2713 3.77006 20.2273 2.72632 18.9552 2.72632H16.9151C16.447 2.72632 15.763 2.47438 15.403 2.16246L13.5068 0.530867C12.6788 -0.176956 11.3227 -0.176956 10.4827 0.530867L8.59853 2.17446C8.23851 2.47438 7.55447 2.72632 7.08644 2.72632H5.01031C3.73823 2.72632 2.69417 3.77006 2.69417 5.04174V7.09323C2.69417 7.56111 2.44215 8.23294 2.14213 8.59285L0.522032 10.5004C-0.174011 11.3282 -0.174011 12.6718 0.522032 13.4996L2.14213 15.4071C2.44215 15.7671 2.69417 16.4389 2.69417 16.9068V18.9583C2.69417 20.2299 3.73823 21.2737 5.01031 21.2737H7.08644C7.55447 21.2737 8.23851 21.5256 8.59853 21.8375L10.4947 23.4691C11.3227 24.177 12.6788 24.177 13.5188 23.4691L15.415 21.8375C15.775 21.5256 16.447 21.2737 16.9271 21.2737H18.9672C20.2393 21.2737 21.2833 20.2299 21.2833 18.9583V16.9188C21.2833 16.4509 21.5353 15.7671 21.8474 15.4071L23.4795 13.5116C24.1755 12.6838 24.1755 11.3162 23.4675 10.4884ZM16.9871 9.73257L11.1907 15.5271C11.0227 15.6951 10.7947 15.7911 10.5547 15.7911C10.3146 15.7911 10.0866 15.6951 9.91862 15.5271L7.01444 12.6238C6.66641 12.2759 6.66641 11.7001 7.01444 11.3522C7.36246 11.0042 7.93849 11.0042 8.28651 11.3522L10.5547 13.6196L15.715 8.46089C16.063 8.11297 16.639 8.11297 16.9871 8.46089C17.3351 8.8088 17.3351 9.38465 16.9871 9.73257Z" fill="#4285F4"></path><path d="M23.4675 10.4884L21.8354 8.59285C21.5233 8.23294 21.2713 7.56111 21.2713 7.08123V5.04174C21.2713 3.77006 20.2273 2.72632 18.9552 2.72632H16.9151C16.447 2.72632 15.763 2.47438 15.403 2.16246L13.5068 0.530867C12.6788 -0.176956 11.3227 -0.176956 10.4827 0.530867L8.59853 2.17446C8.23851 2.47438 7.55447 2.72632 7.08644 2.72632H5.01031C3.73823 2.72632 2.69417 3.77006 2.69417 5.04174V7.09323C2.69417 7.56111 2.44215 8.23294 2.14213 8.59285L0.522032 10.5004C-0.174011 11.3282 -0.174011 12.6718 0.522032 13.4996L2.14213 15.4071C2.44215 15.7671 2.69417 16.4389 2.69417 16.9068V18.9583C2.69417 20.2299 3.73823 21.2737 5.01031 21.2737H7.08644C7.55447 21.2737 8.23851 21.5256 8.59853 21.8375L10.4947 23.4691C11.3227 24.177 12.6788 24.177 13.5188 23.4691L15.415 21.8375C15.775 21.5256 16.447 21.2737 16.9271 21.2737H18.9672C20.2393 21.2737 21.2833 20.2299 21.2833 18.9583V16.9188C21.2833 16.4509 21.5353 15.7671 21.8474 15.4071L23.4795 13.5116C24.1755 12.6838 24.1755 11.3162 23.4675 10.4884ZM16.9871 9.73257L11.1907 15.5271C11.0227 15.6951 10.7947 15.7911 10.5547 15.7911C10.3146 15.7911 10.0866 15.6951 9.91862 15.5271L7.01444 12.6238C6.66641 12.2759 6.66641 11.7001 7.01444 11.3522C7.36246 11.0042 7.93849 11.0042 8.28651 11.3522L10.5547 13.6196L15.715 8.46089C16.063 8.11297 16.639 8.11297 16.9871 8.46089C17.3351 8.8088 17.3351 9.38465 16.9871 9.73257Z" stroke="#4285F4"></path></svg>
                  </div>
                  <p className="text-[#D9D9D9]/50 text-center text-base">F-34 Yrs • 1 yrs of Experience</p>
                  <div className='mt-5'>
                    <p className="text-white text-justify text-lg font-normal max-w-[300px] text-ellipsis max-h-[170px] overflow-hidden">I personally suffered from loneliness and anxiety. The journey was tough but I gradually recovered with self-love and detachment from the people who were adding negative thoughts to my life. I have even faced work and family pressure. But somehow I learned to manage both by letting go of overthinking and negative thoughts. Now I want to help others by sharing my experience of recovery and making their lives easier to live. I believe in spiritual, physical, and mental well-being and this has helped me to inculcate positive aspects into my life. Let's connect if you want to share something or want to vent. I will listen to you without any judgments.</p>                    </div>
                </div>
              </div>
            </div>

            <div className='bg-[#232243] rounded-xl flex items-center justify-center py-[25px] px-[20px]'>
              <div>
                <div className='relative listener z-20 flex items-center justify-center'>
                  <div className='w-[217px] h-[217px] rounded-full overflow-hidden'>
                    <img src='https://media.istockphoto.com/id/613557584/photo/portrait-of-a-beautifull-smiling-man.jpg?s=612x612&w=0&k=20&c=hkCg5CrmTKOApePbPOyo1U9GexEfIJOJqoLXJIvcN8E=' className='object-cover h-full w-full'/>
                  </div>
                </div>
                <div className='mt-5'>
                  <div className='flex items-center justify-center gap-2'>
                    <h4 className="text-[#E4D056] text-[32px] font-bold text-center">Neetesh</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M23.4675 10.4884L21.8354 8.59285C21.5233 8.23294 21.2713 7.56111 21.2713 7.08123V5.04174C21.2713 3.77006 20.2273 2.72632 18.9552 2.72632H16.9151C16.447 2.72632 15.763 2.47438 15.403 2.16246L13.5068 0.530867C12.6788 -0.176956 11.3227 -0.176956 10.4827 0.530867L8.59853 2.17446C8.23851 2.47438 7.55447 2.72632 7.08644 2.72632H5.01031C3.73823 2.72632 2.69417 3.77006 2.69417 5.04174V7.09323C2.69417 7.56111 2.44215 8.23294 2.14213 8.59285L0.522032 10.5004C-0.174011 11.3282 -0.174011 12.6718 0.522032 13.4996L2.14213 15.4071C2.44215 15.7671 2.69417 16.4389 2.69417 16.9068V18.9583C2.69417 20.2299 3.73823 21.2737 5.01031 21.2737H7.08644C7.55447 21.2737 8.23851 21.5256 8.59853 21.8375L10.4947 23.4691C11.3227 24.177 12.6788 24.177 13.5188 23.4691L15.415 21.8375C15.775 21.5256 16.447 21.2737 16.9271 21.2737H18.9672C20.2393 21.2737 21.2833 20.2299 21.2833 18.9583V16.9188C21.2833 16.4509 21.5353 15.7671 21.8474 15.4071L23.4795 13.5116C24.1755 12.6838 24.1755 11.3162 23.4675 10.4884ZM16.9871 9.73257L11.1907 15.5271C11.0227 15.6951 10.7947 15.7911 10.5547 15.7911C10.3146 15.7911 10.0866 15.6951 9.91862 15.5271L7.01444 12.6238C6.66641 12.2759 6.66641 11.7001 7.01444 11.3522C7.36246 11.0042 7.93849 11.0042 8.28651 11.3522L10.5547 13.6196L15.715 8.46089C16.063 8.11297 16.639 8.11297 16.9871 8.46089C17.3351 8.8088 17.3351 9.38465 16.9871 9.73257Z" fill="#4285F4"></path><path d="M23.4675 10.4884L21.8354 8.59285C21.5233 8.23294 21.2713 7.56111 21.2713 7.08123V5.04174C21.2713 3.77006 20.2273 2.72632 18.9552 2.72632H16.9151C16.447 2.72632 15.763 2.47438 15.403 2.16246L13.5068 0.530867C12.6788 -0.176956 11.3227 -0.176956 10.4827 0.530867L8.59853 2.17446C8.23851 2.47438 7.55447 2.72632 7.08644 2.72632H5.01031C3.73823 2.72632 2.69417 3.77006 2.69417 5.04174V7.09323C2.69417 7.56111 2.44215 8.23294 2.14213 8.59285L0.522032 10.5004C-0.174011 11.3282 -0.174011 12.6718 0.522032 13.4996L2.14213 15.4071C2.44215 15.7671 2.69417 16.4389 2.69417 16.9068V18.9583C2.69417 20.2299 3.73823 21.2737 5.01031 21.2737H7.08644C7.55447 21.2737 8.23851 21.5256 8.59853 21.8375L10.4947 23.4691C11.3227 24.177 12.6788 24.177 13.5188 23.4691L15.415 21.8375C15.775 21.5256 16.447 21.2737 16.9271 21.2737H18.9672C20.2393 21.2737 21.2833 20.2299 21.2833 18.9583V16.9188C21.2833 16.4509 21.5353 15.7671 21.8474 15.4071L23.4795 13.5116C24.1755 12.6838 24.1755 11.3162 23.4675 10.4884ZM16.9871 9.73257L11.1907 15.5271C11.0227 15.6951 10.7947 15.7911 10.5547 15.7911C10.3146 15.7911 10.0866 15.6951 9.91862 15.5271L7.01444 12.6238C6.66641 12.2759 6.66641 11.7001 7.01444 11.3522C7.36246 11.0042 7.93849 11.0042 8.28651 11.3522L10.5547 13.6196L15.715 8.46089C16.063 8.11297 16.639 8.11297 16.9871 8.46089C17.3351 8.8088 17.3351 9.38465 16.9871 9.73257Z" stroke="#4285F4"></path></svg>
                  </div>
                  <p className="text-[#D9D9D9]/50 text-center text-base">F-23 Yrs • 0.5 yrs of Experience</p>
                  <div className='mt-5'>
                  <p className="text-white text-justify text-lg font-normal max-w-[300px] text-ellipsis max-h-[170px] overflow-hidden">Due to poor guidance and peer pressure, I took up biology as my major in 10th. Although I never wanted to become a doctor, Indians have this mindset that any biology student should only become a doctor. It was difficult to convince my family &amp; they asked me to give it a try, I felt depressed. I took counseling and decided to give ICAR exam. I got placed in a nice college but when I met the people there I realized I couldn't connect with them. They always spoke with only cuss words, which I didn't like. I felt very lonely but I had no other option, over time I have made a few friends and it's better now. I hope I can be your shoulder to cry on and help you through your problems.</p>                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex lg:justify-end justify-center'>
          <Link className=" text-white text-center text-[24px] bg-[#232243] p-4 mr-7 rounded">View More Listeners</Link>
        </div>
      </div>

      <div className='pt-[70px]'>
        <div className=' mx-auto px-3 overflow-x-auto'>
          <div className='flex items-center lg:flex-nowrap flex-wrap lg:justify-start justify-center'>
            <div>
              <div className='relative hidden md:block'>
                <img src='https://www.talkangels.com/static/media/iPhone-13-Pro-Front.bfd3ad4acc101a655894.png'/>
                <img className='absolute top-1/2 -right-[155px] -translate-y-1/2 scale-125' src='https://www.talkangels.com/static/media/phonecard.3aa385532281e684d4cb.png'/>
              </div>
            </div>
            <div className='xl:w-[50%] lg:w-[50%] w-full lg:ml-auto lg:mt-0'>
              <h3 className="text-center text-white  text-[60px] relative xl:-ml-[100px] ml-0">Key Features<span className="absolute bottom-2 left-1/2  -translate-x-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="113" height="12" viewBox="0 0 113 12" fill="none"><path d="M1 11C18.6957 4.64899 68.7288 -0.641643 112 1.47349" stroke="#FF4848" stroke-width="2"></path></svg></span></h3>
            <div className='flex items-center flex-wrap justify-center'>
                <div className='mt-14'>
                <h4 className="text-white text-[28px]  font-semibold mt-5 lg:text-justify text-center">Empathetic Support and Solutions, Without Professional Counseling</h4>
                <p className="text-[20px] lg:text-justify text-center text-white font-extralight">Talkangel App in an emotional wellness app where you can speak with empathetic listeners who can help you find solutions to your problems and relief over your concerns. However, the way to get advice or help on Talkangel App is very different from counselling and we do not provide any form of professional counselling.</p>
                </div>
              <div>
                <div class="flex lg:justify-start justify-center mt-10"></div>
                  <h4 className="text-white text-[28px] font-semibold mt-5 lg:text-left text-center">Listeners Choose Between Real or Masked Names for Safety</h4>
                  <p className="text-[20px] lg:text-justify text-center text-white font-extralight ">If a listener is comfortable sharing his/her name publicly then his/her name would be real otherwise we allow listeners to use a masked name to keep their identity safe online. give me title of that</p>
              </div>
              <div className='mt-10'>
                <h4 className="text-white text-[28px] font-semibold mt-5 lg:text-left text-center">Our Listener?</h4>
                <p className="text-[20px] lg:text-justify text-center text-white font-extralight">Listeners are people on TALKANGELS App who have seen tough times in their lives and can actively listen to your problems and feelings and make you feel better.</p>
              </div>
              <div className='mt-10'>
                <h4 className="text-white text-[28px] font-semibold mt-5 lg:text-left text-center">Ensuring 100% User Anonymous</h4>
                <p className="text-[20px] lg:text-justify text-center text-white font-extralight">Talkangel App is 100% Anonymous for users. Listeners can never know who they are talking to on the Talkangel App.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative  pt-[90px] px-3'>
        <div className=' mx-auto '>
          <div className='flex items-center justify-between'>
            <div className='lg:max-w-[693px]'>
              <h3 className="lg:text-left text-center text-white lg:text-[50px] text-[40px] relative uppercase font-bold ">Our Speciality<span className="absolute bottom-1 left-1/2 -translate-x-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="113" height="12" viewBox="0 0 113 12" fill="none"><path d="M1 11C18.6957 4.64899 68.7288 -0.641643 112 1.47349" stroke="#FF4848" stroke-width="2"></path></svg></span></h3>
            <p className="text-[24px] lg:text-justify text-center text-white font-extralight">Welcome to TalkAngel! We're more than just a dating app. Our platform makes it easy for you to find and chat with special people. You can look for love, friendship, or just have a nice chat. Plus, we have a cool feature that lets you recharge and make voice calls to your matches. Your safety and privacy are super important to us too.</p>
            <p className="text-[36px] font-[600] text-white mt-[52px] lg:text-left text-center">Join TalkAngel today 
              <span className="text-[#15B37E]"> to find the one who makes your heart happy.</span>
            </p>
            </div>
            <div>
              <img className='absolute top-0 w-[38%] right-0 Speciality hidden md:block' src='https://www.talkangels.com/static/media/SpecialityMobile.21bdaaeeed84f5941ef3.png'/>
            </div>
          </div>
        </div>
      </div>
 <div className='relative  lg:pt-[178px] pt-[100px] px-7'>
      <Slider {...settings}>
        <div className='px-2'>
          <div className='h-[250px] rounded-[35px] overflow-hidden'>
            <img className='w-full h-full object-cover object-top' src='https://i.pinimg.com/736x/23/76/b6/2376b6619630266ab3de14ae52897d39.jpg' />
          </div>
        </div>
        <div className='px-2'>
          <div className='h-[250px] rounded-[35px] overflow-hidden'>
            <img className='w-full h-full object-cover object-top' src='https://img.freepik.com/free-photo/smiling-young-beautiful-girl-looking-straight-ahead-wearing-white-t-shirt-isolated-pink_141793-86537.jpg' />
          </div>
        </div>
        <div className='px-2'>
          <div className='h-[250px] rounded-[35px] overflow-hidden'>
            <img className='w-full h-full object-cover object-top' src='https://avatars.mds.yandex.net/i?id=320423d984ab91d480a88de13a54e8a17215460f-12159448-images-thumbs&n=13' />
          </div>
        </div>
        <div className='px-2'>
          <div className='h-[250px] rounded-[35px] overflow-hidden'>
            <img className='w-full h-full object-cover object-top' src='https://avatars.mds.yandex.net/i?id=2ac87f014a26f48e7928adfb6b56333f787c5f1b-10449875-images-thumbs&n=13' />
          </div>
        </div>
        <div className='px-2'>
          <div className='h-[250px] rounded-[35px] overflow-hidden'>
            <img className='w-full h-full object-cover object-top' src='https://www.talkangels.com/static/media/Listenersimg_1.9b7e99e96371a1430c2a.png' />
          </div>
        </div>
        <div className='px-2'>
          <div className='h-[250px] rounded-[35px] overflow-hidden'>
            <img className='w-full h-full object-cover object-top' src='https://media.istockphoto.com/id/613557584/photo/portrait-of-a-beautifull-smiling-man.jpg?s=612x612&w=0&k=20&c=hkCg5CrmTKOApePbPOyo1U9GexEfIJOJqoLXJIvcN8E=' />
          </div>
        </div>
      </Slider>
  </div>

  {/* <Slider {...settings2}>
    <div>
      <h3 className="text-[#15B37E] text-[215px] text-center">”</h3>
      <p className="text-center text-[30px] font-extralight text-white -mt-[150px] px-3">"An extremely helpful aap, talkangels can be of tremendous assistance to those who are struggling with stress, anxiety, and despair. It's a useful tool for people who have recently lost someone and are trying to move on as well. The software provides a diverse array of features that are all conveniently placed in one location, including heat maps, session recordings, user metrics, and a sophisticated dashboard. In light of my experience, I heartily endorse talkangels and considers it as an amazing app."</p>
      <div className='flex items-center justify-center gap-x-3 mt-7'><svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M20.0982 1.8541C20.6969 0.0114779 23.3037 0.0114789 23.9024 1.8541L27.6452 13.3733C27.913 14.1973 28.6809 14.7553 29.5473 14.7553H41.6593C43.5967 14.7553 44.4023 17.2345 42.8349 18.3733L33.0361 25.4925C32.3351 26.0018 32.0418 26.9046 32.3095 27.7286L36.0523 39.2478C36.651 41.0904 34.5421 42.6227 32.9747 41.4839L23.1758 34.3646C22.4749 33.8553 21.5257 33.8553 20.8247 34.3646L11.0259 41.4839C9.45848 42.6227 7.34952 41.0904 7.94822 39.2478L11.691 27.7286C11.9588 26.9046 11.6655 26.0018 10.9645 25.4925L1.16568 18.3733C-0.401745 17.2345 0.403809 14.7553 2.34126 14.7553H14.4532C15.3197 14.7553 16.0876 14.1973 16.3554 13.3733L20.0982 1.8541Z" fill="#FFBA40"></path></svg><svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M20.0982 1.8541C20.6969 0.0114779 23.3037 0.0114789 23.9024 1.8541L27.6452 13.3733C27.913 14.1973 28.6809 14.7553 29.5473 14.7553H41.6593C43.5967 14.7553 44.4023 17.2345 42.8349 18.3733L33.0361 25.4925C32.3351 26.0018 32.0418 26.9046 32.3095 27.7286L36.0523 39.2478C36.651 41.0904 34.5421 42.6227 32.9747 41.4839L23.1758 34.3646C22.4749 33.8553 21.5257 33.8553 20.8247 34.3646L11.0259 41.4839C9.45848 42.6227 7.34952 41.0904 7.94822 39.2478L11.691 27.7286C11.9588 26.9046 11.6655 26.0018 10.9645 25.4925L1.16568 18.3733C-0.401745 17.2345 0.403809 14.7553 2.34126 14.7553H14.4532C15.3197 14.7553 16.0876 14.1973 16.3554 13.3733L20.0982 1.8541Z" fill="#FFBA40"></path></svg><svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M20.0982 1.8541C20.6969 0.0114779 23.3037 0.0114789 23.9024 1.8541L27.6452 13.3733C27.913 14.1973 28.6809 14.7553 29.5473 14.7553H41.6593C43.5967 14.7553 44.4023 17.2345 42.8349 18.3733L33.0361 25.4925C32.3351 26.0018 32.0418 26.9046 32.3095 27.7286L36.0523 39.2478C36.651 41.0904 34.5421 42.6227 32.9747 41.4839L23.1758 34.3646C22.4749 33.8553 21.5257 33.8553 20.8247 34.3646L11.0259 41.4839C9.45848 42.6227 7.34952 41.0904 7.94822 39.2478L11.691 27.7286C11.9588 26.9046 11.6655 26.0018 10.9645 25.4925L1.16568 18.3733C-0.401745 17.2345 0.403809 14.7553 2.34126 14.7553H14.4532C15.3197 14.7553 16.0876 14.1973 16.3554 13.3733L20.0982 1.8541Z" fill="#FFBA40"></path></svg>
      <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M20.0982 1.8541C20.6969 0.0114779 23.3037 0.0114789 23.9024 1.8541L27.6452 13.3733C27.913 14.1973 28.6809 14.7553 29.5473 14.7553H41.6593C43.5967 14.7553 44.4023 17.2345 42.8349 18.3733L33.0361 25.4925C32.3351 26.0018 32.0418 26.9046 32.3095 27.7286L36.0523 39.2478C36.651 41.0904 34.5421 42.6227 32.9747 41.4839L23.1758 34.3646C22.4749 33.8553 21.5257 33.8553 20.8247 34.3646L11.0259 41.4839C9.45848 42.6227 7.34952 41.0904 7.94822 39.2478L11.691 27.7286C11.9588 26.9046 11.6655 26.0018 10.9645 25.4925L1.16568 18.3733C-0.401745 17.2345 0.403809 14.7553 2.34126 14.7553H14.4532C15.3197 14.7553 16.0876 14.1973 16.3554 13.3733L20.0982 1.8541Z" fill="#FFBA40"></path></svg><svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M20.0982 1.8541C20.6969 0.0114779 23.3037 0.0114789 23.9024 1.8541L27.6452 13.3733C27.913 14.1973 28.6809 14.7553 29.5473 14.7553H41.6593C43.5967 14.7553 44.4023 17.2345 42.8349 18.3733L33.0361 25.4925C32.3351 26.0018 32.0418 26.9046 32.3095 27.7286L36.0523 39.2478C36.651 41.0904 34.5421 42.6227 32.9747 41.4839L23.1758 34.3646C22.4749 33.8553 21.5257 33.8553 20.8247 34.3646L11.0259 41.4839C9.45848 42.6227 7.34952 41.0904 7.94822 39.2478L11.691 27.7286C11.9588 26.9046 11.6655 26.0018 10.9645 25.4925L1.16568 18.3733C-0.401745 17.2345 0.403809 14.7553 2.34126 14.7553H14.4532C15.3197 14.7553 16.0876 14.1973 16.3554 13.3733L20.0982 1.8541Z" fill="#FFBA40"></path></svg></div>
    <div className='flex items-center justify-center mt-7'>
      <div className='w-20 h-20 rounded-full border border-[#15B37E] overflow-hidden'>
        <img className='w-full h-full object-cover ' src='https://avatars.mds.yandex.net/i?id=2ac87f014a26f48e7928adfb6b56333f787c5f1b-10449875-images-thumbs&n=13'/>
      </div>
      <div className='ml-4'>
        <h3 className="uppercase text-white font-Popins font-bold tracking-[1px]">Rita L.</h3>
      </div>    
    </div>
    </div>

     <div>
      <h3 className="text-[#15B37E] text-[215px] text-center">”</h3>
      <p className="text-center text-[32px] font-extralight text-white -mt-[150px] px-3">"It is really a great app. recommended to all those who are facing stress, depression or any other types of difficulties in their life. the experts are reallyg good. They are really good listener as well as consultation. one more thing that I like about the app is that both in the morning as well as in the night the send motivation messages which is really sweet"</p>
      <div className='flex items-center justify-center gap-x-3 mt-7'><svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M20.0982 1.8541C20.6969 0.0114779 23.3037 0.0114789 23.9024 1.8541L27.6452 13.3733C27.913 14.1973 28.6809 14.7553 29.5473 14.7553H41.6593C43.5967 14.7553 44.4023 17.2345 42.8349 18.3733L33.0361 25.4925C32.3351 26.0018 32.0418 26.9046 32.3095 27.7286L36.0523 39.2478C36.651 41.0904 34.5421 42.6227 32.9747 41.4839L23.1758 34.3646C22.4749 33.8553 21.5257 33.8553 20.8247 34.3646L11.0259 41.4839C9.45848 42.6227 7.34952 41.0904 7.94822 39.2478L11.691 27.7286C11.9588 26.9046 11.6655 26.0018 10.9645 25.4925L1.16568 18.3733C-0.401745 17.2345 0.403809 14.7553 2.34126 14.7553H14.4532C15.3197 14.7553 16.0876 14.1973 16.3554 13.3733L20.0982 1.8541Z" fill="#FFBA40"></path></svg><svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M20.0982 1.8541C20.6969 0.0114779 23.3037 0.0114789 23.9024 1.8541L27.6452 13.3733C27.913 14.1973 28.6809 14.7553 29.5473 14.7553H41.6593C43.5967 14.7553 44.4023 17.2345 42.8349 18.3733L33.0361 25.4925C32.3351 26.0018 32.0418 26.9046 32.3095 27.7286L36.0523 39.2478C36.651 41.0904 34.5421 42.6227 32.9747 41.4839L23.1758 34.3646C22.4749 33.8553 21.5257 33.8553 20.8247 34.3646L11.0259 41.4839C9.45848 42.6227 7.34952 41.0904 7.94822 39.2478L11.691 27.7286C11.9588 26.9046 11.6655 26.0018 10.9645 25.4925L1.16568 18.3733C-0.401745 17.2345 0.403809 14.7553 2.34126 14.7553H14.4532C15.3197 14.7553 16.0876 14.1973 16.3554 13.3733L20.0982 1.8541Z" fill="#FFBA40"></path></svg><svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M20.0982 1.8541C20.6969 0.0114779 23.3037 0.0114789 23.9024 1.8541L27.6452 13.3733C27.913 14.1973 28.6809 14.7553 29.5473 14.7553H41.6593C43.5967 14.7553 44.4023 17.2345 42.8349 18.3733L33.0361 25.4925C32.3351 26.0018 32.0418 26.9046 32.3095 27.7286L36.0523 39.2478C36.651 41.0904 34.5421 42.6227 32.9747 41.4839L23.1758 34.3646C22.4749 33.8553 21.5257 33.8553 20.8247 34.3646L11.0259 41.4839C9.45848 42.6227 7.34952 41.0904 7.94822 39.2478L11.691 27.7286C11.9588 26.9046 11.6655 26.0018 10.9645 25.4925L1.16568 18.3733C-0.401745 17.2345 0.403809 14.7553 2.34126 14.7553H14.4532C15.3197 14.7553 16.0876 14.1973 16.3554 13.3733L20.0982 1.8541Z" fill="#FFBA40"></path></svg>
      <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M20.0982 1.8541C20.6969 0.0114779 23.3037 0.0114789 23.9024 1.8541L27.6452 13.3733C27.913 14.1973 28.6809 14.7553 29.5473 14.7553H41.6593C43.5967 14.7553 44.4023 17.2345 42.8349 18.3733L33.0361 25.4925C32.3351 26.0018 32.0418 26.9046 32.3095 27.7286L36.0523 39.2478C36.651 41.0904 34.5421 42.6227 32.9747 41.4839L23.1758 34.3646C22.4749 33.8553 21.5257 33.8553 20.8247 34.3646L11.0259 41.4839C9.45848 42.6227 7.34952 41.0904 7.94822 39.2478L11.691 27.7286C11.9588 26.9046 11.6655 26.0018 10.9645 25.4925L1.16568 18.3733C-0.401745 17.2345 0.403809 14.7553 2.34126 14.7553H14.4532C15.3197 14.7553 16.0876 14.1973 16.3554 13.3733L20.0982 1.8541Z" fill="#FFBA40"></path></svg></div>
      <div className='flex items-center justify-center mt-7'>
      <div className='ml-4'>
        <h3 className="uppercase text-white font-Popins font-bold tracking-[1px]">Anushka S.</h3>
      </div>
    </div>
    </div>
  </Slider> */}

  <div className='h-[644px] bg-cover bg-no-repeat bg-bottom bg-bimg mt-24 pt-[111px] pb-[190px] relative'>
    <div className=' mx-auto px-3'>
        <div>
          <h2 className="lg:text-left text-center md:text-[50px] text-[45px] font-semibold text-white flex flex-wrap md:justify-start justify-center">Your happily
            <span className="uppercase ml-2 lg:static block">ever after</span>
          </h2>
          <h2 className=" text-start md:text-[68px] text-[47px] font-semibold text-white uppercase  relative">with Talkangel!</h2>
          <p className="lg:text-left text-center text-[26px] text-white font-thin lg:max-w-[630px] mt-2">Join the exciting journey of meeting new friends within our vibrant community of over one million users!</p>
          <div className='flex items-center gap-4 mt-[28px] flex-wrap lg:justify-start justify-center'>
            <Link className='w-[230px] h-[65px] bg-[#15B37E] text-[22px] text-white rounded-full flex items-center justify-center gap-[34px]'>Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8266 15.6913C13.7392 15.7866 13.6338 15.863 13.5167 15.916C13.3996 15.969 13.2732 15.9976 13.1451 15.9998C13.0169 16.0021 12.8896 15.9782 12.7707 15.9294C12.6519 15.8806 12.5439 15.808 12.4532 15.7159C12.3626 15.6238 12.2911 15.5141 12.2431 15.3933C12.1951 15.2725 12.1715 15.1431 12.1738 15.0129C12.1761 14.8826 12.2041 14.7542 12.2563 14.6352C12.3085 14.5162 12.3837 14.4091 12.4775 14.3203L17.7425 8.97003H0.954582C0.70141 8.97003 0.458609 8.86783 0.279589 8.68591C0.100571 8.504 -1.90735e-06 8.25727 -1.90735e-06 8C-1.90735e-06 7.74273 0.100571 7.496 0.279589 7.31408C0.458609 7.13217 0.70141 7.02997 0.954582 7.02997H17.7425L12.4775 1.67971C12.3837 1.59091 12.3085 1.48382 12.2563 1.36483C12.2041 1.24584 12.1761 1.11739 12.1738 0.987143C12.1715 0.856896 12.1951 0.727521 12.2431 0.606735C12.2911 0.48595 12.3626 0.376228 12.4532 0.284115C12.5439 0.192003 12.6519 0.119386 12.7707 0.0705988C12.8896 0.0218115 13.0169 -0.00214708 13.1451 0.000150968C13.2732 0.00244901 13.3996 0.0309567 13.5167 0.0839747C13.6338 0.136993 13.7392 0.213434 13.8266 0.308738L20.7208 7.31451C20.8996 7.49639 21 7.74294 21 8C21 8.25706 20.8996 8.50361 20.7208 8.68549L13.8266 15.6913Z" fill="currentColor"></path></svg>
            </Link>
            <Link className='w-[280px] h-[65px] bg-red-500  text-[22px] text-white rounded-full flex items-center justify-center gap-[34px]'>Download the app
            <div className  ="-rotate-45"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8266 15.6913C13.7392 15.7866 13.6338 15.863 13.5167 15.916C13.3996 15.969 13.2732 15.9976 13.1451 15.9998C13.0169 16.0021 12.8896 15.9782 12.7707 15.9294C12.6519 15.8806 12.5439 15.808 12.4532 15.7159C12.3626 15.6238 12.2911 15.5141 12.2431 15.3933C12.1951 15.2725 12.1715 15.1431 12.1738 15.0129C12.1761 14.8826 12.2041 14.7542 12.2563 14.6352C12.3085 14.5162 12.3837 14.4091 12.4775 14.3203L17.7425 8.97003H0.954582C0.70141 8.97003 0.458609 8.86783 0.279589 8.68591C0.100571 8.504 -1.90735e-06 8.25727 -1.90735e-06 8C-1.90735e-06 7.74273 0.100571 7.496 0.279589 7.31408C0.458609 7.13217 0.70141 7.02997 0.954582 7.02997H17.7425L12.4775 1.67971C12.3837 1.59091 12.3085 1.48382 12.2563 1.36483C12.2041 1.24584 12.1761 1.11739 12.1738 0.987143C12.1715 0.856896 12.1951 0.727521 12.2431 0.606735C12.2911 0.48595 12.3626 0.376228 12.4532 0.284115C12.5439 0.192003 12.6519 0.119386 12.7707 0.0705988C12.8896 0.0218115 13.0169 -0.00214708 13.1451 0.000150968C13.2732 0.00244901 13.3996 0.0309567 13.5167 0.0839747C13.6338 0.136993 13.7392 0.213434 13.8266 0.308738L20.7208 7.31451C20.8996 7.49639 21 7.74294 21 8C21 8.25706 20.8996 8.50361 20.7208 8.68549L13.8266 15.6913Z" fill="currentColor"></path></svg></div>
            </Link>
          </div>
        </div>  
      <img className='lg:absolute top-[79px] xl:right-[150px]  lg:mt-0 mt-10 mx-auto px-7 h-[600px] ' src='https://www.talkangels.com/static/media/iPhone-13-Pro-Front.bfd3ad4acc101a655894.png'/>
    </div>

  </div>

  {/* <footer>
    <div className='lg:pt-[110px] mx-auto px-3'>
    <div className='flex items-center lg:justify-between justify-center border-b border-white/25 pb-[30px] flex-wrap'>
      <div className='lg:w-auto w-full'>
        <h2 className="sm:text-[48px] text-[43px] text-white uppercase font-bold lg:text-left text-center">TALKANGELS</h2>
        <div className='flex items-center gap-6 flex-wrap ml-2 lg:justify-start justify-center lg:mt-0 my-6'>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="21" viewBox="0 0 11 21" fill="none"><path d="M8.25293 0C5.36213 0 3.66667 1.5615 3.66667 5.1195V8.25H0V12H3.66667V21H7.33333V12H10.2667L11 8.25H7.33333V5.754C7.33333 4.41375 7.76087 3.75 8.99067 3.75H11V0.15375C10.6524 0.10575 9.63967 0 8.25293 0Z" fill="white"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><g clip-path="url(#clip0_533_242)"><path d="M6.89371 20.5741C15.1755 20.5741 19.7059 13.7119 19.7059 7.77146C19.7059 7.57944 19.7059 7.38467 19.6977 7.19264C20.5797 6.55414 21.341 5.76363 21.9458 4.85816C21.1219 5.22143 20.2488 5.46085 19.3548 5.56866C20.2964 5.0058 21.0017 4.12019 21.3395 3.07644C20.4548 3.60056 19.4865 3.9685 18.477 4.16413C17.7983 3.44132 16.9002 2.96248 15.9218 2.80178C14.9434 2.64109 13.9393 2.8075 13.0651 3.27524C12.1908 3.74298 11.4952 4.48595 11.086 5.38906C10.6767 6.29217 10.5767 7.30502 10.8014 8.27073C9.01112 8.18096 7.25968 7.71587 5.66069 6.90562C4.06171 6.09538 2.65089 4.95807 1.51974 3.56748C0.945506 4.55926 0.77026 5.73243 1.02959 6.84873C1.28893 7.96504 1.9634 8.9408 2.91604 9.57787C2.20217 9.55362 1.504 9.36193 0.877831 9.01826V9.07998C0.879061 10.1189 1.23899 11.1256 1.89676 11.9299C2.55454 12.7341 3.46983 13.2865 4.48791 13.4938C4.10148 13.6003 3.70229 13.6533 3.30147 13.6516C3.01889 13.6524 2.73688 13.6262 2.4593 13.5734C2.74704 14.4677 3.30733 15.2497 4.06168 15.8098C4.81603 16.3698 5.72666 16.6799 6.66603 16.6965C5.07023 17.9499 3.09902 18.6297 1.06986 18.6264C0.712306 18.6279 0.355004 18.6073 0 18.5647C2.05949 19.8777 4.45128 20.5748 6.89371 20.5741Z" fill="white"></path></g><defs><clipPath id="clip0_533_242"><rect width="21.9458" height="21.9458" fill="white"></rect></clipPath></defs></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none"><path d="M13.1843 2.04004C15.9554 2.04004 16.3011 2.05024 17.3883 2.10123C18.4746 2.15223 19.214 2.32256 19.8647 2.57549C20.5378 2.83455 21.1049 3.1854 21.672 3.75146C22.1906 4.26131 22.5919 4.87804 22.848 5.55875C23.0999 6.20843 23.2712 6.94889 23.3222 8.0351C23.3702 9.12233 23.3834 9.46808 23.3834 12.2392C23.3834 15.0103 23.3732 15.3561 23.3222 16.4433C23.2712 17.5295 23.0999 18.2689 22.848 18.9196C22.5926 19.6007 22.1913 20.2176 21.672 20.7269C21.162 21.2454 20.5453 21.6466 19.8647 21.9029C19.215 22.1548 18.4746 22.3262 17.3883 22.3771C16.3011 22.4251 15.9554 22.4383 13.1843 22.4383C10.4131 22.4383 10.0674 22.4281 8.98017 22.3771C7.89396 22.3262 7.15452 22.1548 6.50381 21.9029C5.82284 21.6474 5.206 21.246 4.69653 20.7269C4.1778 20.2172 3.77649 19.6004 3.52056 18.9196C3.26762 18.2699 3.0973 17.5295 3.0463 16.4433C2.99837 15.3561 2.98511 15.0103 2.98511 12.2392C2.98511 9.46808 2.99531 9.12233 3.0463 8.0351C3.0973 6.94787 3.26762 6.20945 3.52056 5.55875C3.77578 4.87763 4.17719 4.26072 4.69653 3.75146C5.20615 3.23256 5.82295 2.83122 6.50381 2.57549C7.15452 2.32256 7.89294 2.15223 8.98017 2.10123C10.0674 2.0533 10.4131 2.04004 13.1843 2.04004ZM13.1843 7.13962C11.8318 7.13962 10.5347 7.67689 9.57831 8.63325C8.62196 9.5896 8.08468 10.8867 8.08468 12.2392C8.08468 13.5917 8.62196 14.8888 9.57831 15.8451C10.5347 16.8015 11.8318 17.3388 13.1843 17.3388C14.5368 17.3388 15.8338 16.8015 16.7902 15.8451C17.7466 14.8888 18.2838 13.5917 18.2838 12.2392C18.2838 10.8867 17.7466 9.5896 16.7902 8.63325C15.8338 7.67689 14.5368 7.13962 13.1843 7.13962ZM19.8137 6.88464C19.8137 6.54651 19.6794 6.22224 19.4403 5.98315C19.2012 5.74406 18.8769 5.60974 18.5388 5.60974C18.2007 5.60974 17.8764 5.74406 17.6373 5.98315C17.3982 6.22224 17.2639 6.54651 17.2639 6.88464C17.2639 7.22276 17.3982 7.54703 17.6373 7.78612C17.8764 8.02521 18.2007 8.15953 18.5388 8.15953C18.8769 8.15953 19.2012 8.02521 19.4403 7.78612C19.6794 7.54703 19.8137 7.22276 19.8137 6.88464ZM13.1843 9.17945C13.9958 9.17945 14.774 9.50181 15.3478 10.0756C15.9216 10.6494 16.244 11.4277 16.244 12.2392C16.244 13.0507 15.9216 13.8289 15.3478 14.4028C14.774 14.9766 13.9958 15.2989 13.1843 15.2989C12.3728 15.2989 11.5945 14.9766 11.0207 14.4028C10.4469 13.8289 10.1245 13.0507 10.1245 12.2392C10.1245 11.4277 10.4469 10.6494 11.0207 10.0756C11.5945 9.50181 12.3728 9.17945 13.1843 9.17945Z" fill="white"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M5.68133 7.59361C6.95629 7.59361 7.98985 6.56005 7.98985 5.28509C7.98985 4.01012 6.95629 2.97656 5.68133 2.97656C4.40636 2.97656 3.3728 4.01012 3.3728 5.28509C3.3728 6.56005 4.40636 7.59361 5.68133 7.59361Z" fill="white"></path><path d="M10.1695 9.34289V22.1506H14.1462V15.8169C14.1462 14.1456 14.4606 12.5271 16.5328 12.5271C18.5765 12.5271 18.6018 14.4379 18.6018 15.9224V22.1516H22.5805V15.1279C22.5805 11.6778 21.8377 9.02637 17.8052 9.02637C15.8691 9.02637 14.5714 10.0888 14.0406 11.0943H13.9868V9.34289H10.1695ZM3.68921 9.34289H7.67215V22.1506H3.68921V9.34289Z" fill="white"></path></svg>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 gap-x-[67px] lg:w-auto w-full'>
        <Link className='text-white lg:text-right text-center text-[18px] font-extralight tracking-[0.36px]'>Refund & Cancellation</Link>
        <Link className='text-white lg:text-right text-center text-[18px] font-extralight tracking-[0.36px]'>Privacy Policy</Link>
        <Link className='text-white lg:text-right text-center text-[18px] font-extralight tracking-[0.36px]'>FAQs</Link>
        <Link className='text-white lg:text-right text-center text-[18px] font-extralight tracking-[0.36px]'>Contact-Us</Link>
      </div>
    </div>
    <div className='py-11 flex items-center justify-between flex-wrap'>
      <div className='flex items-center flex-wrap lg:justify-start justify-center'>
        <h2 className="text-white text-[26px] font-medium leading-[37.674px] mr-5">Get the App!</h2>
        <img src='data:image/png;base64,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' />
        <img className='ml-4' src='data:image/png;base64,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'/>
      </div>
      <div>
        <Link className='text-white text-lg lg:text-right text-center font-medium leading-[37.674px] block w-fit md:ml-auto md:mx-0 mx-auto'>talkangels5524@gmail.com</Link>
        <h2 className='text-white lg:text-right text-center text-lg font-light'>© Copyright 2024 -
        <span className="text-[#15B37E]"> TALKANGELS</span>
        , All Rights Reserved.
        </h2>
      </div>
    </div>
    </div>
  </footer> */}
  
      </div>
    </>
  );
};

export default Home;
