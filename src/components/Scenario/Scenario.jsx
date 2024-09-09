import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const DomainPurchase = ({t}) => {
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
      <h2 className="text-xl font-bold mb-4">{t("scenario.title1")}</h2>
      <input
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        placeholder={t("scenario.placeholder")}
        className="border p-2 rounded mb-4"
      />
      <button onClick={checkAvailability} className="bg-blue-500 text-white px-4 py-2 rounded">
        {t("scenario.btn1")}
      </button>
      {available && <p className="text-green-500 mt-2">{t("scenario.status1")}</p>}
      {!available && <p className="text-red-500 mt-2">{t("scenario.status2")}</p>}
      <button onClick={addToCart} className="bg-green-500 text-white px-4 py-2 rounded mt-4">
        {t("scenario.add")}
      </button>
    </div>
  );
};

const HostingPurchase = ({t}) => {
  const [plan, setPlan] = useState(null);

  const selectPlan = (planName) => {
    setPlan(planName);
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">{t("scenario.title2")}</h2>
      <div>
        <button onClick={() => selectPlan("Asosiy")} className="bg-blue-500 text-white px-4 py-2 rounded mb-2">
          {t("scenario.btn2")}
        </button>
        <button onClick={() => selectPlan("Ilg‘or")} className="bg-blue-500 text-white px-4 py-2 rounded mb-2 ml-2">
          {t("scenario.btn3")}
        </button>
        <button onClick={() => selectPlan("Korporativ")} className="bg-blue-500 text-white px-4 py-2 rounded mb-2 ml-2">
          {t("scenario.btn4")}
        </button>
      </div>
      {plan && (
        <p className="mt-4">
          {t("scenario.status3")}: {plan}. {t("scenario.status4")}
        </p>
      )}
    </div>
  );
};

const TemplateBuilder = ({t}) => {
  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">{t("scenario.title3")}</h2>
      <p>{t("scenario.subtitle1")}</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">{t("scenario.btn5")}</button>
    </div>
  );
};

const AppDevelopmentOrder = ({t}) => {
  const [description, setDescription] = useState("");

  const submitRequest = () => {
    alert(t("scenario.status5"));
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">{t("scenario.title4")}</h2>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={t("scenario.placeholder2")}
        className="border p-2 rounded mb-4 w-full"
      ></textarea>
      <button onClick={submitRequest} className="bg-blue-500 text-white px-4 py-2 rounded">
        {t("scenario.btn6")}
      </button>
    </div>
  );
};

const UserScenarios = () => {
  const { t } = useTranslation()
  return (
    <section className="w-[100%] flex justify-center px-[16px] py-[150px] bg-gray-100" id="use_services">
      <div className="max-w-[1200px] w-[100%] mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Foydalanuvchi stsenariylari</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DomainPurchase t={t}/>
          <HostingPurchase t={t}/>
          <TemplateBuilder t={t}/>
          <AppDevelopmentOrder t={t}/>
        </div>
      </div>
    </section>
  );
};

export default UserScenarios;
