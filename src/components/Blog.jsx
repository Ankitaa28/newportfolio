import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "React State Management Challenges",
    excerpt: "Managing state in React can be challenging, especially in complex apps. Here’s how I solved it using Context API and Redux...",
    date: "September 25, 2024",
    author: "Ankita",
  },
  {
    id: 2,
    title: "Handling API Errors Effectively in Web Apps",
    excerpt: "APIs are essential for modern web apps, but they can fail. Here’s how I handled API errors and ensured better user experience...",
    date: "October 2, 2024",
    author: "Ankita",
  },
  // Add more posts
];

function Blog() {
  return (
    <section className="py-16 bg-[#0b0d13] text-white" id="Blog">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.id}`} 
                className="text-blue-400 hover:underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
