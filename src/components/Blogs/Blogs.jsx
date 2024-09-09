import React from 'react'
import { useTranslation } from 'react-i18next'

const Blogs = () => {
    const { t } = useTranslation()
    const title = t("blogs.title")
    const subtitle = t("blogs.subtitle")
    const cards = [
        {title: t("blogs.title1"), subtitle: t("blogs.subtitle1"), link: t("blogs.link")},
        {title: t("blogs.title2"), subtitle: t("blogs.subtitle2"), link: t("blogs.link")},
        {title: t("blogs.title3"), subtitle: t("blogs.subtitle3"), link: t("blogs.link")}
    ]
  return (
    <section className="bg-gray-100 py-[150px] flex justify-center px-[16px]">
        <div className="container mx-auto max-w-[1200px] w-[100%]">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-6">{title}</h1>
                <p className="text-lg mb-8">{subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    cards?.map((item,index)=> {
                        return <div className="p-6 bg-white rounded shadow flex flex-col justify-between gap-[20px]" key={index}>
                            <div className='flex flex-col gap-[10px]'>
                                <h2 className="text-xl font-semibold">{item?.title}</h2>
                                <p className="text-gray-700">{item?.subtitle}</p>
                            </div>
                            <a href="#" className="text-blue-600 hover:underline">{item?.link}</a>
                        </div>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Blogs
