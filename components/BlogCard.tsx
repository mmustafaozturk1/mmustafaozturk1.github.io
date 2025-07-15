
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { ContentType } from '../types';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <Link 
      to={`/${ContentType.Blog}/${post.id}`} 
      className="group block bg-light-navy p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col h-full">
        <p className="text-sm font-mono text-green mb-2">{post.date}</p>
        <h3 className="text-xl font-bold text-lightest-slate group-hover:text-green transition-colors duration-300 mb-3">{post.title}</h3>
        <p className="text-light-slate flex-grow">{post.excerpt}</p>
        <span className="mt-4 text-sm font-mono text-green self-start">Read More &rarr;</span>
      </div>
    </Link>
  );
};

export default BlogCard;
