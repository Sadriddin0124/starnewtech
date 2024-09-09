import React, { useState } from "react";

const DomainPurchase = () => {
  const [domain, setDomain] = useState("");
  const [available, setAvailable] = useState(false);
  const checkAvailability = () => {
    setAvailable(Math.random() > 0.5);
  };

  const addToCart = () => {
    if (available) {
      alert("Domain added to cart!");
    } else {
      alert("Domain is not available!");
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Domen tanlash va sotib olish</h2>
      <input
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        placeholder="Domen nomini kiriting"
        className="border p-2 rounded mb-4"
      />
      <button onClick={checkAvailability} className="bg-blue-500 text-white px-4 py-2 rounded">
        Mavjudligini tekshirish
      </button>
      {available && <p className="text-green-500 mt-2">Domen mavjud!</p>}
      {!available && <p className="text-red-500 mt-2">Domen mavjud emas!</p>}
      <button onClick={addToCart} className="bg-green-500 text-white px-4 py-2 rounded mt-4">
        Savatga qo'shish va sotib olish
      </button>
    </div>
  );
};

const HostingPurchase = () => {
  const [plan, setPlan] = useState(null);

  const selectPlan = (planName) => {
    setPlan(planName);
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Xosting sotib olish</h2>
      <div>
        <button onClick={() => selectPlan("Asosiy")} className="bg-blue-500 text-white px-4 py-2 rounded mb-2">
          Asosiy
        </button>
        <button onClick={() => selectPlan("Ilg‘or")} className="bg-blue-500 text-white px-4 py-2 rounded mb-2 ml-2">
          Ilg‘or
        </button>
        <button onClick={() => selectPlan("Korporativ")} className="bg-blue-500 text-white px-4 py-2 rounded mb-2 ml-2">
          Korporativ
        </button>
      </div>
      {plan && (
        <p className="mt-4">
          Siz {plan} tarifini tanladingiz. Savatga qo‘shing va sotib oling.
        </p>
      )}
    </div>
  );
};

const TemplateBuilder = () => {
  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Shablon konstruktorini ishga tushirish</h2>
      <p>Shablon tanlang va sozlashni boshlang.</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">Shablon tanlash</button>
    </div>
  );
};

const AppDevelopmentOrder = () => {
  const [description, setDescription] = useState("");

  const submitRequest = () => {
    alert("Ariza yuborildi. Menejer tez orada siz bilan bog‘lanadi.");
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Mobil ilova ishlab chiqishni buyurtma qilish</h2>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Loyihangiz haqida qisqacha ma'lumot kiriting"
        className="border p-2 rounded mb-4 w-full"
      ></textarea>
      <button onClick={submitRequest} className="bg-blue-500 text-white px-4 py-2 rounded">
        Arizani yuborish
      </button>
    </div>
  );
};

const UserScenarios = () => {
  return (
    <section className="w-[100%] flex justify-center px-[16px] py-[150px]" id="use_services">
      <div className="max-w-[1200px] w-[100%] mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Foydalanuvchi stsenariylari</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DomainPurchase />
          <HostingPurchase />
          <TemplateBuilder />
          <AppDevelopmentOrder />
        </div>
      </div>
    </section>
  );
};

export default UserScenarios;
