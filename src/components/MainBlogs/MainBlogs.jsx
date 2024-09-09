import React from "react";
import { useTranslation } from "react-i18next";
import BlogsImg from "../../assets/blog.webp"
const MainBlogs = () => {
    const { t } = useTranslation()
  const blogs = [
    {
        id: 1,
        img: BlogsImg,
        title: t("main_blogs.title1"),
        desc: t("main_blogs.desc1") 
    },
    {
        id: 2,
        img: BlogsImg,
        title: t("main_blogs.title2"),
        desc: t("main_blogs.desc2") 
    },
    {
        id: 3,
        img: BlogsImg,
        title: t("main_blogs.title3"),
        desc: t("main_blogs.desc3") 
    },
    {
        id: 4,
        img: BlogsImg,
        title: t("main_blogs.title1"),
        desc: t("main_blogs.desc1") 
    },
    {
        id: 5,
        img: BlogsImg,
        title: t("main_blogs.title2"),
        desc: t("main_blogs.desc2") 
    },
    {
        id: 6,
        img: BlogsImg,
        title: t("main_blogs.title3"),
        desc: t("main_blogs.desc3") 
    },
  ];
  const title = t("main_blogs.title")
  const subtitle = t("main_blogs.subtitle")
  return (
    <section className="bg-gray-100 py-[150px] px-[16px]">
      <div className="container max-w-[1200px] mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{title}</h1>
        <p className="text-center text-lg text-gray-600 mb-12">{subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <a href="#" className="inline-block text-blue-500 hover:text-blue-700 font-semibold">{t("main_blogs.link")}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainBlogs;
