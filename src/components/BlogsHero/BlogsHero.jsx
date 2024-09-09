import React from 'react'
import { useTranslation } from 'react-i18next'
import BlogsImg from "../../assets/blogs.webp"
const BlogsHero = () => {
    const  { t } = useTranslation()
    const title = t("blog.title")
    const subtitle = t("blog.subtitle")
  return (
    <section className='w-[100%] flex justify-center px-[16px] py-[150px] relative bg-[#00000093]'>
        <img src={BlogsImg} alt="BlogsImg" className='w-[100%] h-[100%] absolute top-0 left-0 z-[-1] object-cover'/>
        <div className='max-w-[1200px] w-[100%] flex flex-col justify-end'>
            <div className='max-w-[700px] flex flex-col text-white gap-[20px] items-start'>
                <h1 className='text-[24px] sm:text-[35px] lg:text-[55px] font-[600]'>{title}</h1>
                <p className='text-[16px] md:text-[20px]'>{subtitle}</p>
            </div>
        </div>
    </section>
  )
}

export default BlogsHero
