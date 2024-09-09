import React from 'react';
import { useTranslation } from 'react-i18next';

const SpecialOrders = () => {
  const { t } = useTranslation()
  return (
    <section className="bg-gray-100 flex justify-center py-[200px]">
      <div className="container max-w-[1200px] mx-auto px-6 text-center">
        <div className="p-6 bg-blue-50 rounded shadow ease-linear duration-300 hover:bg-[#E57F34] cursor-pointer hover:text-white mb-12">
          <h2 className="text-2xl font-bold mb-4">{t("specialOrders.title1")}</h2>
          <p>{t("specialOrders.subtitle1")}</p>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t("specialOrders.title2")}</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded shadow ease-linear duration-300 hover:bg-[#E57F34] cursor-pointer hover:text-white">
              <p className="italic">{t("specialOrders.subtitle2")}</p>
              <p className="font-semibold">{t("specialOrders.title3")}</p>
            </div>
            <div className="p-4 bg-white rounded shadow ease-linear duration-300 hover:bg-[#E57F34] cursor-pointer hover:text-white">
              <p className="italic">{t("specialOrders.subtitle3")}</p>
              <p className="font-semibold">{t("specialOrders.title4")}</p>
            </div>
          </div>
        </div>
        <div className="p-6 group bg-gray-50 rounded shadow ease-linear duration-300 hover:bg-[#E57F34] cursor-pointer hover:text-white">
          <h2 className="text-2xl font-bold mb-4">{t("specialOrders.title5")}</h2>
          <p>{t("specialOrders.subtitle4")}</p>
          <div className="mt-4">
            <a href="#" className="text-blue-600 group-hover:text-white hover:underline">{t("specialOrders.link1")}</a> | 
            <a href="#" className="text-blue-600 group-hover:text-white hover:underline ml-2">{t("specialOrders.link2")}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOrders;
