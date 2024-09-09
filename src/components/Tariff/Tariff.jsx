import React from 'react'
import { useTranslation } from 'react-i18next'

const Tariff = () => {
    const { t } = useTranslation()
    const table = [
        {service: t("tariffs.tbody1"), main: t("tariffs.tbody2"), active: t("tariffs.tbody3"), corporative: t("tariffs.tbody4")},
        {service: t("tariffs.tbody5"), main: "$50", active: "$100", corporative: "$150"},
        {service: t("tariffs.tbody5"), main: "$200", active: "$300", corporative: "$400"},
    ]
    const title1 = t("tariffs.title")
    const title2 = t("tariffs.title_2")
    const subtitle = t("tariffs.subtitle")
    const cards = [
        {title: t("tariffs.title1"), desc: t("tariffs.desc1"), price: "$480"},
        {title: t("tariffs.title2"), desc: t("tariffs.desc2"), price: "$240"},
        {title: t("tariffs.title3"), desc: t("tariffs.desc3"), price: "$800"}
    ]
  return (
    <section className="bg-gray-100 py-16 flex justify-center" id="tariffs">
        <div className="container max-w-[1200px] mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">{title1}</h1>
            <p className="text-lg mb-8">{subtitle}</p>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse bg-white rounded-lg">
                    <thead>
                        <tr className="bg-[#E57F34] text-white">
                            <th className="py-4 px-6">{t("tariffs.thead1")}</th>
                            <th className="py-4 px-6">{t("tariffs.thead2")}</th>
                            <th className="py-4 px-6">{t("tariffs.thead3")}</th>
                            <th className="py-4 px-6">{t("tariffs.thead4")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            table?.map((item,index)=> {
                                return <tr className="border-t hover:bg-[#E57F34] hover:text-white" key={index}>
                                <td className="py-4 px-6 font-semibold">{item?.service}</td>
                                <td className="py-4 px-6">{item?.main}</td>
                                <td className="py-4 px-6">{item?.active}</td>
                                <td className="py-4 px-6">{item?.corporative}</td>
                            </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="mt-[60px]">
                <h2 className="text-3xl font-semibold mb-10">{title2}</h2>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {
                        cards?.map((item,index)=> {
                            return <div className="p-6 bg-white rounded shadow w-[100%] ease-linear duration-300 hover:text-white hover:bg-[#7B1FA2]" key={index}>
                            <h3 className="text-xl font-bold mb-2">{item?.title}</h3>
                            <p className="mb-4">{item?.desc}</p>
                            <span className="text-2xl font-semibold">{item?.price}</span>
                        </div>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tariff
