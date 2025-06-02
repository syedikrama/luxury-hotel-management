import React from 'react';
import './LatestBlog.css';
import blog1 from '../assets/images/blog-1.jpg'
import blog2 from '../assets/images/blog-2.jpg'
import blog3 from '../assets/images/blog-3.jpg'


export default function LatestBlog() {
  const blogs = [
    {
      image: blog1,
      date: '24th March 2022',
      title: 'Cras accumsan nulla nec lacus ultricies placerat.',
      description:
        'Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.',
    },
    {
      image:  blog2,
      date: '24th March 2022',
      title: 'Dras accumsan nulla nec lacus ultricies placerat.',
      description:
        'Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.',
    },
    {
      image:  blog3,
      date: '24th March 2022',
      title: 'Seas accumsan nulla nec lacus ultricies placerat.',
      description:
        'Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.',
    },
  ];

  return (
    <section className="latest-blog">
      <div className="header">
        <span className='heading-about'>Our Blog</span>
        <h2>Latest Blog & News</h2>
        <p>
        Discover travel tips, luxury experiences, and hotel updates to inspire your next getaway. Our blog
        brings you closer to unforgettable destinations, behind-the-scenes stories, and the finest in hospitality.
        </p>
      </div>

      <div className="blog-row">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <span className="date">{blog.date}</span>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <a href="#">READ MORE</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
