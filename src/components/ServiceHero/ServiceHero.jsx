import React from 'react';
import HeroImage from "../../assets/service_hero.jpg"
import { useTranslation } from 'react-i18next';
const ServicesHeroSection = () => {
  const { t } = useTranslation()
  const title = t("services.title")
  const subtitle = t("services.subtitle")
  const btn = t("services.btn")
  return (
    <section className="relative min-h-[100vh] bg-[#0000005e] flex justify-center px-[16px] py-[150px]">
      <img src={HeroImage} alt="HeroImage" className='absolute top-0 left-0 z-[-1] w-[100%] h-[100%] object-cover'/>
      <div className='max-w-[1200px] w-[100%] flex flex-col justify-end'>
        <div className='text-white flex flex-col gap-[20px] items-start max-w-[700px]'>
          <h1 className='text-[55px] font-[600]'>{title}</h1>
          <p className='text-[20px]'>{subtitle}</p>
            <a href='#use_services' className='px-[15px] py-[8px] hover:bg-[#E57F34] hover:text-[#fff] text-[#E57F34] ease-in-out duration-300 rounded-md border-2 border-[#E57F34]'>{btn}</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
