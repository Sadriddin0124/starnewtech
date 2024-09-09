import React from 'react'

const Personal = () => {
  return (
    <div classNameName='flex justify-center'>
        <div className="container mx-auto py-12 max-w-[1200px] w-[100%]">
            <h1 className="text-4xl font-bold text-center mb-8">Shaxsiy kabinet</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Buyurtma qilingan xizmatlarni boshqarish</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded shadow">
                    <h3 className="text-xl font-semibold mb-2">Domen boshqaruvi</h3>
                    <p>Domenlaringizni boshqaring, amal qilish muddatini yangilang va yangi domen qo'shing.</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Domenlarni boshqarish</button>
                </div>
                <div className="p-6 bg-white rounded shadow">
                    <h3 className="text-xl font-semibold mb-2">Xosting boshqaruvi</h3>
                    <p>Xosting xizmatlarini ko'rib chiqing va server resurslarini yangilang.</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Xostingni boshqarish</button>
                </div>
                <div className="p-6 bg-white rounded shadow">
                    <h3 className="text-xl font-semibold mb-2">Shablon boshqaruvi</h3>
                    <p>Sizning saytingiz uchun shablonni tanlang va dizaynni tahrir qiling.</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Shablonlarni boshqarish</button>
                </div>
                </div>
            </section>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Texnik yordam</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded shadow">
                    <h3 className="text-xl font-semibold mb-2">So'rovlar tarixi</h3>
                    <p>Texnik yordam so'rovlarining tarixi va ularning holatini kuzatib boring.</p>
                    <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">So'rovlarni ko'rish</button>
                </div>
                <div className="p-6 bg-white rounded shadow">
                    <h3 className="text-xl font-semibold mb-2">Yangi tiket yaratish</h3>
                    <p>Yordam olish uchun yangi texnik so'rov jo'nating.</p>
                    <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Yangi tiket yaratish</button>
                </div>
                </div>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">Moliyaviy blok</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded shadow">
                    <h3 className="text-xl font-semibold mb-2">To'lovlar tarixi</h3>
                    <p>Amalga oshirilgan to'lovlar va hisob-fakturalar tarixi.</p>
                    <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded">To'lovlar tarixini ko'rish</button>
                </div>
                <div className="p-6 bg-white rounded shadow">
                    <h3 className="text-xl font-semibold mb-2">Xizmatlarni yangilash</h3>
                    <p>Hozirgi xizmatlarni yangilang va qo'shimcha xizmatlar sotib oling.</p>
                    <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded">Xizmatlarni yangilash</button>
                </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Personal
