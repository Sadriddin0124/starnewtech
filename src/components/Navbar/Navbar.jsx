import React, { useEffect, useState } from 'react'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { switchLang } from '../../plugins/changeLang'
import { useTranslation } from 'react-i18next'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoIosArrowUp, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const { t } = useTranslation()
  const links = [
    {text: t("navbar.link1"), path: "/"},
    {text: t("navbar.link2"), path: "/services"},
    {text: t("navbar.link3"), path: "/tariffs"},
    {text: t("navbar.link4"), path: "/blogs"},
  ]
  const languages = [
    {text: "en"},
    {text: "ru"},
    {text: "uz"},
  ]
  const [activeLang, setActiveLang] = useState("en")
  const [changeLang, setChangeLang] = useState(false)
  const switchLanguage = (text) => {
    setChangeLang(!changeLang)
    setActiveLang(text)
    switchLang(text)
    sessionStorage.setItem("lang", text)
  }
  useEffect(()=> {
    const lang = sessionStorage.getItem("lang")
    if (lang) {
      switchLang(lang)
      setActiveLang(lang)
    }else {
      switchLang("uz")
      setActiveLang("uz")
    }
  },[])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const [sideBar, setSideBar] = useState(false)
  return (
    <nav className='w-[100%] flex justify-center flex-col items-center shadow-md'>
      <div className='w-[100%] py-[5px] hidden lg:flex justify-center bg-[#E57F34] px-[16px]'>
        <h6 className='text-[10px] text-white max-w-[1200px] w-[100%]'>{t("navbar.top")}</h6>
      </div>
      <div className='max-w-[1200px] w-[100%] flex items-center justify-between px-[16px]'>
        <div className='flex items-center gap-[20px] lg:gap-[83px] py-[11px]'>
          <img src={Logo} alt="Logo" className=''/>
          <ul className='hidden md:flex gap-[15px] lg:gap-[40px]'>
            {
              links?.map((item,index)=> {
                return <li key={index} className='text_black text-[14px]'>
                  <Link to={item?.path}>{item?.text}</Link>
                </li>
              })
            }
          </ul>
        </div>
        <div className='hidden md:flex items-center gap-[10px]'>
          <div className='relative z-[2]'>
            <span className={`text-[18px] uppercase cursor-pointer font-[500] bg-[#7B1FA2] w-[46px] h-[46px] flex justify-center items-center p-[10px] text-white z-[2] ${changeLang ? "rounded-t-full" : "rounded-full"}`} onClick={()=>switchLanguage(activeLang)}>{activeLang}</span>
            <ul className={`${changeLang ? "flex flex-col" : "hidden"} text-[18px] font-[500] absolute bg-[#7B1FA2] text-white p-[10px] w-[46px] items-center rounded-b-full pt-0`}>
                {
                  languages?.map((item,index)=> {
                    return <li key={index} className='cursor-pointer uppercase hover:underline' onClick={()=>switchLanguage(item?.text)}>{item?.text}</li>
                  })
                }
            </ul>
          </div>
          <button className='w-[80px] h-[32px] text-[14px] border-[#E57F34] border-2 rounded-[8px] text-[#E57F34] flex justify-center items-center duration-300 ease-in-out hover:bg-[#E57F34] hover:text-white'>Log In</button>
        </div>
        <button className='md:hidden' onClick={()=>setSideBar(!sideBar)}><HiMiniBars3BottomRight size={24}/></button>
      </div>
      <aside className={`w-[300px] h-[100vh] bg-white fixed z-[10] top-0 duration-300 ease-in-out py-[80px] px-[20px] ${sideBar ? "right-0" : "right-[-1000px]"}`}>
        <IoMdClose className='absolute right-[20px] top-[20px] text-[24px] cursor-pointer'  onClick={()=>setSideBar(!sideBar)}/>
        <div className='absolute top-[20px] left-[20px]'>
          <div className='relative z-[2]'>
            <span className={`text-[18px] uppercase cursor-pointer font-[500] bg-[#7B1FA2] w-[46px] h-[46px] flex justify-center items-center p-[10px] text-white z-[2] ${changeLang ? "rounded-t-full" : "rounded-full"}`} onClick={()=>switchLanguage(activeLang)}>{activeLang}</span>
            <ul className={`${changeLang ? "flex flex-col" : "hidden"} text-[18px] font-[500] absolute bg-[#7B1FA2] text-white p-[10px] w-[46px] items-center rounded-b-full pt-0`}>
                {
                  languages?.map((item,index)=> {
                    return <li key={index} className='cursor-pointer uppercase hover:underline' onClick={()=>switchLanguage(item?.text)}>{item?.text}</li>
                  })
                }
            </ul>
          </div>
        </div>
        <ul className='flex flex-col gap-[15px] lg:gap-[40px]'>
            {
              links?.map((item,index)=> {
                return <li key={index} className='text_black text-[14px] hover:underline'>
                  <Link to={item?.path}>{item?.text}</Link>
                </li>
              })
            }
          </ul>
      </aside>
        <button onClick={scrollToTop} className='p-[10px] fixed bottom-[30px] right-[30px] bg-[#E57F34] rounded-md text-white'><IoIosArrowUp /></button>
    </nav>
  )
}

export default Navbar
