import React from 'react'
import PersonImage1 from "../../assets/person1.jpg"
import PersonImage2 from "../../assets/person2.avif"
import PersonImage3 from "../../assets/person3.avif"
import { useTranslation } from 'react-i18next'
import PartnerImg from "../../assets/partner.png"
const Company = () => {
    const { t } = useTranslation()
    const team = [
        {img: PersonImage1, name: t("team.name1"), job: t("team.job1")},
        {img: PersonImage2, name: t("team.name2"), job: t("team.job2")},
        {img: PersonImage3, name: t("team.name3"), job: t("team.job3")},
    ]
    const clients = [
        {img: PartnerImg, desc: t("clients.desc1")},
        {img: PartnerImg, desc: t("clients.desc2")},
        {img: PartnerImg, desc: t("clients.desc3")}
    ]
    const title = t("company.title")
    const subtitle = t("company.subtitle")
    const title1 = t("team.title")
    const title2 = t("clients.title")
  return (
    <section>
        <div className="bg-gray-100 py-[150px] flex justify-center">
            <div className="container mx-auto text-center max-w-[1200px] w-[100%]">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-6">{title}</h1>
                    <p className="text-lg mb-8">{subtitle}</p>
                </div>
                <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">{title1}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        team?.map((item,index)=> {
                            return <div className="p-6 group bg-white rounded shadow ease-linear duration-300 hover:text-white hover:bg-[#7B1FA2]" key={index}>
                                <img src={item?.img} alt={item?.name} className="h-48 w-48 mx-auto mb-4 rounded-full object-cover"/>
                                <h3 className="text-xl font-bold mb-2">{item?.name}</h3>
                                <p className="text-gray-700 group-hover:text-white ease-linear duration-300">{item?.job}</p>
                            </div>
                        })
                    }
                </div>
                </div>
                <div className='mt-[100px]'>
                    <h2 className="text-3xl font-semibold mb-6">{title2}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {
                            clients?.map((item,index)=> {
                                return <div className="p-6 bg-white rounded shadow ease-linear duration-300 hover:text-white hover:bg-[#E57F34]" key={index}>
                                <img src={item?.img} alt={"Mijoz" + index + 1} className="h-24 mx-auto mb-4 mix-blend-multiply"/>
                                <p className="text-lg font-semibold">{item?.desc}</p>
                            </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Company
