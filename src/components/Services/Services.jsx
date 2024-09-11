import React from 'react'
import { useTranslation } from 'react-i18next'
import CardImg1 from "../../assets/domain.png"
import CardImg2 from "../../assets/hosting.png"
import CardImg3 from "../../assets/templates.png"
import CardImg4 from "../../assets/web_creation.png"
import CardImg5 from "../../assets/branding.png"
import CardImg6 from "../../assets/app_creation.png"
const Services = () => {
    const { t } = useTranslation()
    const title = t("service.title")
    const subtitle = t("service.subtitle")
    const cards = [
        {img: CardImg2, title: t("service.title2"), subtitle: t("service.subtitle2")},
        {img: CardImg1, title: t("service.title1"), subtitle: t("service.subtitle1")},
        {img: CardImg3, title: t("service.title3"), subtitle: t("service.subtitle3")},
        {img: CardImg4, title: t("service.title4"), subtitle: t("service.subtitle4")},
        {img: CardImg5, title: t("service.title5"), subtitle: t("service.subtitle5")},
        {img: CardImg6, title: t("service.title6"), subtitle: t("service.subtitle6")}
    ]
  return (
    <section className="bg-gray-100 py-16 flex justify-center px-[16px]" id="services">
        <div className="container max-w-[1200px] mx-auto text-center">
            <h1 className="text-[24px] md:text-[35px] font-bold mb-6">{title}</h1>
            <p className="text-[16px] md:text-[18px] mb-8">{subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    cards?.map((item,index)=> {
                        return <div className="p-6 bg-white rounded shadow ease-linear duration-300 hover:bg-[#7B1FA2] hover:text-white" key={index}>
                        <img src={item?.img} alt={item?.title} className="h-12 mx-auto mb-4"/>
                        <h2 className="text-xl font-semibold mb-2">{item?.title}</h2>
                        <p>{item?.subtitle}</p>
                    </div>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Services
