import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "React State Management Challenges",
    content: `Managing state in React can be tricky, especially in large-scale apps. In this blog, I’ll discuss how I encountered performance 
              issues when using useState for too many components, and how switching to Context API streamlined the data flow.`,
    date: "September 25, 2024",
    author: "Ankita",
  },
  {
    id: 2,
    title: "Handling API Errors Effectively in Web Apps",
    content: `While building an e-commerce app, I faced inconsistent API responses during peak loads. In this post, I’ll discuss how
              I added retry logic and user-friendly error messages to improve the overall UX.`,
    date: "October 2, 2024",
    author: "Ankita",
  },
  // Add more posts
];

function SingleBlog() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  return (
    <section className="py-16 bg-[#0b0d13] text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">{post.title}</h2>
        <p className="text-gray-400 mb-4">Written by {post.author} on {post.date}</p>
        <div className="prose prose-invert">
          <p>{post.content}</p>
        </div>
      </div>
    </section>
  );
}

export default SingleBlog;
