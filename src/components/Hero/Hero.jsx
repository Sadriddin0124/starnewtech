import React from 'react'
import { GrHostMaintenance } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import HeroImg from "../../assets/hero_img.jpg"
import { useTranslation } from 'react-i18next';
const Hero = () => {
    const { t } = useTranslation()
    const cards = [
        {title: t("hero.title1"), subtitle: t("hero.subtitle1"), icon: <FaGlobe/>, btn: t("hero.btn1"), rating: `${t("hero.rating")}: 25k+`},
        {title: t("hero.title2"), subtitle: t("hero.subtitle2"), icon: <GrHostMaintenance/>, btn: t("hero.btn1"), rating: `${t("hero.rating")}: 15k+`},
        {title: t("hero.title3"), subtitle: t("hero.subtitle3"), icon: <FaCode/>, btn: t("hero.btn2"), rating: `${t("hero.rating")}: 14k+`},
    ]
  return (
    <section className='w-[100%] relative flex justify-center min-h-[100vh] py-[120px] px-[16px] bg-[#000000a8]'>
      <img src={HeroImg} alt="HeroImg" className='w-[100%] h-[100%] absolute z-[-1] top-0 left-0 object-cover'/>
      <div className='max-w-[1200px] w-[100%]'>
        <div className='flex flex-col md:items-start items-center gap-[20px]'>
            <h1 className='text-[24px] text-center md:text-left sm:text-[35px] lg:text-[45px] font-[600] text-white'>NewTec - {t("hero.title")}</h1>
            <p className='text-[16px] md:text-[20px] text-center md:text-left text-white mb-[50px]'>{t("hero.subtitle")}</p>
            <div className='w-[100%] flex-col md:flex-row flex items-center justify-between gap-[20px]'>
                {
                    cards?.map((item,index)=> {
                        return <div key={index} className='bg-white gap-[10px] p-[20px] rounded-md flex flex-col justify-between items-center md:max-w-[340px] w-[100%]'>
                            <span className='text-[50px] text-[#7B1FA2]'>{item?.icon}</span>
                            <h4 className='text-[18px] font-[500] text-center'>{item?.title}</h4>
                            <p className='text-[14px] text-center'>{item?.subtitle}</p>
                            <p className='text-[18px] font-[600] text-transparent bg-clip-text bg-gradient-to-r from-[#7B1FA2] via-pink-500 to-[#FFAA00]'>{item?.rating}</p>
                            <button className='px-[25px] py-[8px] border border-[#E57F34] rounded-md text-[#E57F34] ease-out duration-300 hover:bg-[#E57F34] hover:text-white font-[500]'>{item?.btn}</button>
                        </div>
                    })
                }
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
