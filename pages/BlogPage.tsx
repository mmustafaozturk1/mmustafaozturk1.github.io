
import React from 'react';
import { BLOG_POSTS } from '../data/blogs';
import BlogCard from '../components/BlogCard';
import { BlogPost } from '../types';

const BlogPage: React.FC = () => {
    const sortedPosts = [...BLOG_POSTS].sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="animate-fade-in-up">
            <h1 className="text-4xl font-bold text-lightest-slate mb-12 flex items-center">
                From the Blog
                <span className="flex-grow h-px bg-lightest-navy ml-6"></span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedPosts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
