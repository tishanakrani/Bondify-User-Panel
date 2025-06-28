import React, { useState } from 'react';

const FAQs = () => {
  const [isOpen, setIsOpen] = useState({});

  const toggleRow = (index) => {
    setIsOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      question: "What is TalkAngel App?",
      answer: "TalkAngel App is an emotional wellness platform where you can freely talk to a listener about your feelings in private over video call. Your identity is hidden and the listener will ensure to make you feel better :)"
    },
    {
      question: "When do people use TalkAngel App?",
      answer: "People mostly use TalkAngel App when they are moving through a breakup, a relationship issue, feeling lonely or when they are broken and need emotional support or online counseling. Most people start to feel happier right after 10 minutes of talking on the TalkAngel App :)"
    },
    {
      question: "Who is a Listener?",
      answer: "Listeners are people on TalkAngel App who have seen tough times in their lives and can actively listen to your problems and feelings and make you feel better."
    },
    {
      question: "Are Listeners on TalkAngel App verified?",
      answer: "All listeners on the TalkAngel App are 100% verified against their identity. For Indian listeners, verification of the Aadhaar card is done."
    },
    {
      question: "Is TalkAngel App really Anonymous?",
      answer: "TalkAngel App is 100% Anonymous for users. Listeners can never know who they are talking to on the TalkAngel App."
    },
    {
      question: "If TalkAngel App is anonymous then why am I required to signup using my mobile number and OTP?",
      answer: "You are required to signup using mobile authentication so that if you mistakenly logout of your app or change your phone, you can easily retrieve your wallet balance and your money is not lost :)"
    },
    {
      question: "Is TalkAngel App free?",
      answer: "TalkAngel App is free to download and use but if you wish to talk to a Listener on the TalkAngel App, you will have to recharge your wallet and use the wallet money to talk to the listeners. You are charged by the minute."
    },
    {
      question: "Is TalkAngel App a dating app?",
      answer: "No, TalkAngel App is an emotional wellness app where you can freely talk to a listener about your feelings in private over chat, call or video call."
    },
    {
      question: "What are the different types of addiction?",
      answer: "Addiction can be to substances like drugs and alcohol or to behaviors like gambling or sex. TalkAngel App connects you with experienced listeners who have overcome addiction and can support you in achieving your goals."
    },
    {
      question: "How can addiction be prevented?",
      answer: "Addiction can be prevented through education, early intervention, and healthy coping skills. Listeners on the TalkAngel App have firsthand experience with addiction and offer support to assist you in achieving your full potential."
    },
    {
      question: "Is addiction a disease?",
      answer: "Addiction is considered a disease by the medical community. TalkAngel App connects you with experienced listeners who have overcome addiction and can support you in achieving your goals."
    },
    {
      question: "How does addiction impact mental health?",
      answer: "Addiction can co-occur with mental health conditions like depression and anxiety. TalkAngel App connects you with experienced listeners who have overcome addiction and can support you in achieving your goals."
    },
    {
      question: "How do I stop being addicted?",
      answer: "Overcoming addiction requires seeking professional help, developing a strong support system, committing to a treatment plan, and making lifestyle changes to avoid triggers and maintain sobriety. TalkAngel App connects you with experienced listeners who have overcome addiction and can support you in achieving your goals."
    },
    {
      question: "What are the 5 symptoms of anxiety?",
      answer: "The five symptoms of anxiety are: excessive worrying, restlessness, difficulty concentrating, irritability, and physical symptoms such as sweating, trembling, and palpitations. TalkAngel App offers anxiety support from experienced listeners."
    },
    {
      question: "Is getting irritated quickly anxiety?",
      answer: "Getting irritated quickly can be a symptom of anxiety, but it can also be a symptom of other conditions such as ADHD or bipolar disorder. You can get the perfect advice from the listeners on TalkAngel App."
    },
    {
      question: "Why is it so difficult to talk to a girl?",
      answer: "It can be difficult to talk to a girl due to fear of rejection, low self-esteem, or social anxiety. Practice anonymously with non-judgmental listeners on TalkAngel App."
    },
    {
      question: "What causes anger?",
      answer: "Anger can be caused by a variety of factors, including stress, frustration, fear, and feelings of injustice or unfairness. TalkAngel app's listeners have experienced similar issues and offer great support."
    }
  ];

  return (
    <div className='bg-[#2d2c3a] min-h-svh -mt-[100px]'>
      <div className='mx-auto px-6 py-12 sm:py-32 lg:px-8 lg:py-12 lg:max-w-[85vw] '>
        <div className='pt-[100px]'>
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">About TalkAngel App</h2>
          <dl className='mt-5'>
            {faqData.map((faq, index) => (
              <div key={index} className='mb-1'>
                <span onClick={() => toggleRow(index)} className="flex w-full items-center text-[17px] justify-between text-left text-[#fff] cursor-pointer bg-[hsla(0,0%,100%,.1)] p-4">
                  {faq.question}
                  <span className="ml-6 flex h-7 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                  </span>
                </span>
                <dd className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen[index] ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'
                } bg-[hsla(0,0%,100%,.05)]`}>
                  <p className="text-[17px] font-medium leading-7 pl-[32px] pb-[16px] pt-[16px] pr-[16px] text-white">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
