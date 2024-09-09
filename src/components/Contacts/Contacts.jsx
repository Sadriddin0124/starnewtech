import React from 'react'
import { useTranslation } from 'react-i18next'

const Contacts = () => {
    const { t } = useTranslation()
  return (
    <section className="bg-gray-100 py-16">
        <div className="container mx-auto max-w-[1200px]">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-6">{t("contacts.title")}</h1>
                <p className="text-lg mb-8">{t("contacts.subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-white rounded shadow">
                <h2 className="text-xl font-semibold mb-4">{t("contacts.title1")}</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">{t("contacts.input1")}</label>
                        <input type="text" id="name" className="w-full outline-none p-2 border rounded" placeholder={t("contacts.placeholder1")}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">{t("contacts.input2")}</label>
                        <input type="email" id="email" className="w-full outline-none p-2 border rounded" placeholder={t("contacts.placeholder2")}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700">{t("contacts.input3")}</label>
                        <textarea id="message" className="w-full resize-none outline-none p-2 border rounded" rows="5" placeholder={t("contacts.placeholder3")}></textarea>
                    </div>
                    <button type="submit" className="px-[25px] py-[8px] border border-[#E57F34] rounded-md text-[#E57F34] ease-out duration-300 hover:bg-[#E57F34] hover:text-white font-[500]">{t("contacts.btn1")}</button>
                </form>
            </div>
            <div className="p-6 bg-white rounded shadow">
                <h2 className="text-xl font-semibold mb-4">{t("contacts.title2")}</h2>
                <p className="text-gray-700 mb-4">{t("contacts.desc")}</p>
                <button className="px-[25px] py-[8px] border border-[#E57F34] rounded-md text-[#E57F34] ease-out duration-300 hover:bg-[#E57F34] hover:text-white font-[500]">{t("contacts.btn2")}</button>
            </div>
            </div>
            <div className="mb-12">
                <h2 className="text-xl font-semibold text-center mb-4">{t("contacts.title3")}</h2>
                <div className="h-64 w-full bg-gray-300">
                    <iframe src="https://yandex.uz/map-widget/v1/-/CDwo6RLD" className='w-[100%] h-[100%]'></iframe>
                </div>
            </div>
            <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">{t("contacts.title4")}</h2>
                <div className="flex justify-center space-x-6">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                        <i className="fab fa-facebook-f"></i> Facebook
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-600">
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="#" className="text-pink-600 hover:text-pink-800">
                        <i className="fab fa-instagram"></i> Instagram
                    </a>
                    <a href="#" className="text-blue-700 hover:text-blue-900">
                        <i className="fab fa-linkedin-in"></i> LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Contacts
