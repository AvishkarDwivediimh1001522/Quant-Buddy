import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const topics =[
    {
      "tittle": "Quant Finance",
      "img": "/Quant_finance_logo.png",
      "desc": "Let's discuss everything related to Quntitative finance ",
      "slug": "Quant-chat-new"
    },
    {
      "tittle": "Python",
      "img": "/python.svg",
      "desc": "Let's discuss everything related to python ",
      "slug": "Python-chat-new" 
    },
    {
      "tittle": "JavaScript",
      "img": "/js_logo.png",
      "desc": "Let's discuss everything related to Javascript ",
      "slug": "JavaScript-chat-new"
    },
    {
      "tittle": "Quantitative Development",
      "img": "",
      "desc": "Let's discuss everything related to Quntitative development and strategies ",
      "slug": "Quantitative-Development-chat-new"
    },
    {
      "tittle": "Machine Learning",
      "img": "",
      "desc": "Let's discuss everything related to Machine Learning ",
      "slug": "Machine-Learning-chat-new"
    },
    {
      "tittle": "Data Science",
      "img": "",
      "desc": "Let's discuss everything related to Data Science ",
      "slug": "Data-Science-chat-new"
    },
    {
      "tittle": "Finacial Mathematics",
      "img": "",
      "desc": "Let's discuss everything related to Financial mathematics ",
      "slug": "Financial-Mathematics-chat-new"
    },
    {
      "tittle": "Financial modelling ",
      "img": "",
      "desc": "Let's discuss everything related to finacial model ",
      "slug": "Financial-modelling-chat-new"
    },
    {
      "tittle": "Optimization",
      "img": "",
      "desc": "Let's discuss everything related to Optimization ",
      "slug": "Optimization-chat-new"
    }
  ]

const Forum = () => {
    return (
        // <div>
        //   <div className=' my-32 container mx-auto '>
        //       <h1 className='text-4xl font-serif text-center mb-10'>Discussion Forum</h1>
        //       <div className='lg:flex lg:justify-center flex-row gap-5 gap-y-10 px-4 mb-32 container mx-auto max-w-6xl '>

        //             <div  className='  shadow-slate-500 shadow-lg '>
        //                 <div className='flex-col items-center flex justify-center max-w-[90%]'>
        //                     <img src="/python.svg" width={150} className='bg-gray-50 rounded-full lg:mt-5 mt-16 ' alt="person" />
        //                     <Link href="/about" passHref><p className='text-sky-400 pt-2'>About Developer</p></Link>
        //                 </div>
        //                 <p className='text-center px-6 py-2  text-sm'>You have a chance to know more about our developer(s) and their knowledge.</p>
        //             </div>

        //             {/* <div className='  shadow-slate-500 shadow-lg '>
        //                 <div className='flex-col items-center flex justify-center w-full'>
        //                     <img src="/Quant_finance_logo.png" width={150} className='bg-gray-50 rounded-full lg:mt-5 mt-16  ' alt="person" />
        //                     <Link href="/about" passHref><p className='text-sky-400 pt-2'>Massege to Developer</p></Link>
        //                 </div>
        //                 <p className='text-center px-6 py-2 text-sm'>You will be able to show support to the developer by massaging good thigs.</p>
        //             </div>
        //             <div className='  shadow-slate-500 shadow-lg '>
        //                 <div className='flex-col items-center flex justify-center w-full'>
        //                     <img src="/group.gif" width={150} className='bg-gray-50 rounded-full lg:mt-5 mt-16 ' alt="group" />
        //                     <Link href="/about" passHref><p className='text-sky-400 pt-2'>More about team</p></Link>
        //                 </div>
        //                 <p className='text-center px-6 py-2 text-sm'>Get to know about our team and real faces(real heros) behind our team. </p>
        //             </div> */}
        //         </div>
        //   </div>
        // </div>

        <div>
            <div className=' my-16  '>
                <h1 className='lg:text-5xl text-4xl font-serif text-center mb-10'>Discussion Forum</h1>
                <div>
                    <div className='sm:flex sm:justify-center flex-row sm:flex-wrap justify-center'>
                        {topics.map((topic) => {
                            return <div key={topic.slug} className='bg-gray-50 lg:w-1/4 sm:w-2/5 m-8 flex flex-col justify-center items-center gap-4 py-8 shadow-slate-500 hover:shadow-slate-700 hover:shadow-4xl shadow-lg '>
                                <Image src={topic.img ?topic.img:"/avatar.gif"}
                                 width={100} height={100} className='rounded' alt='logo' objectFit='cover'/>
                                <h1 className='font-serif text-2xl'>{topic.tittle}</h1>
                                <p className='text-center  font-serif h-14  px-2 w-11/12 overflow-hidden translate'>{topic.desc}</p>
                                <Link href={`/chat_forum/${topic.tittle}`} >
                                <Button>Discuss now</Button>
                                </Link>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forum
