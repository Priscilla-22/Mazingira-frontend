import React, { useState, useEffect } from 'react';
import BlogPreview from './BlogPreview';
import axios from 'axios'; // Import axios for making HTTP requests

const BlogList = () => {
  const [blogs, setBlogs] = useState([]); // State to store fetched blogs

  useEffect(() => {
    // Function to fetch blogs when component mounts
    const fetchBlogs = async () => {
      try {
        // Make GET request to fetch blogs from the endpoint
        const response = await axios.get('http://localhost:5000/blogs');
        // Set the fetched blogs to state
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs(); // Call the fetchBlogs function
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className='bg-gray-200 '>
      <h1 className='text-orange-700 text-4xl font-bold mx-auto text-center'>
        BLOGS.
      </h1>
      <div className='container mx-auto mt-8 p-4'>
        <div className='flex flex-wrap justify-center'>
          {blogs.map((blog, index) => (
            <BlogPreview key={index} {...blog} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
