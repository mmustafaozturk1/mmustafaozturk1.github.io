import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/blogs';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundPost = BLOG_POSTS.find(p => p.id === id);
    setPost(foundPost || null);
  }, [id]);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-lightest-slate">Blog post not found.</h2>
        <Link to="/blog" className="text-green hover:underline mt-4 inline-block">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <Link to="/blog" className="text-green hover:underline mb-8 inline-block font-mono">
        &larr; Back to Blog
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold text-lightest-slate">{post.title}</h1>
      <p className="font-mono text-green mt-4">{post.date}</p>
      
      <div className="prose prose-lg max-w-none mt-12 text-light-slate prose-headings:text-lightest-slate prose-strong:text-lightest-slate prose-a:text-green prose-blockquote:border-l-green prose-blockquote:text-slate">
        <div dangerouslySetInnerHTML={{ __html: post.fullContent }} />
      </div>
    </div>
  );
};

export default BlogDetailPage;