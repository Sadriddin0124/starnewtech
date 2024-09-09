import React from 'react'
import BlogsHero from '../../components/BlogsHero/BlogsHero'
import Blogs from '../../components/Blogs/Blogs'
import MainBlogs from '../../components/MainBlogs/MainBlogs'
import Contacts from '../../components/Contacts/Contacts'

const BlogsPage = () => {
  return (
    <div>
      <BlogsHero/>
      <MainBlogs/>
      <Blogs/>
      <Contacts/>
    </div>
  )
}

export default BlogsPage
