import React from 'react'
import TariffsImg from "../../assets/tariffs.jpg"
import { useTranslation } from 'react-i18next'

const TariffsHero = () => {
    const { t } = useTranslation()
    const title = t("tariff.title")
    const subtitle = t("tariff.subtitle")
    const btn = t("tariff.btn")
  return (
    <section className='w-[100%] flex justify-center px-[16px] py-[150px] relative min-h-[100vh] bg-[#0000007c]'>
        <img src={TariffsImg} alt="TariffsImg" className='absolute w-[100%] h-[100%] top-0 left-0 z-[-1] object-cover'/>
        <div className='max-w-[1200px] w-[100%] flex flex-col justify-end'>
            <div className="max-w-[700px] flex flex-col items-start gap-[20px] text-white">
                <h1 className='text-[24px] sm:text-[35px] lg:text-[55px] font-[600]'>{title}</h1>
                <p className='text-[16px] md:text-[20px]'>{subtitle}</p>
                <a href='#tariffs' className='px-[15px] py-[8px] hover:bg-[#E57F34] hover:text-[#fff] text-[#E57F34] ease-in-out duration-300 rounded-md border-2 border-[#E57F34]'>{btn}</a>
            </div>
        </div>
    </section>
  )
}

export default TariffsHero
