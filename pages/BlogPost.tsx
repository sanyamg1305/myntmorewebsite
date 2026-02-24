import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

interface BlogPostProps {
    postId: string;
    onNavigate: (page: string) => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId, onNavigate }) => {
    const post = BLOG_POSTS.find(p => p.id === postId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [postId]);

    if (!post) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                <h2 className="text-4xl font-black mb-6">Post Not Found</h2>
                <button
                    onClick={() => onNavigate('resources')}
                    className="text-[#FFC947] uppercase tracking-widest text-sm font-bold flex items-center hover:text-white transition-colors"
                >
                    <ArrowLeft className="mr-2" /> Back to Resources
                </button>
            </div>
        );
    }

    return (
        <div className="bg-black text-white min-h-screen pt-32 pb-32">
            <article className="max-w-4xl mx-auto px-6">
                <button
                    onClick={() => onNavigate('resources')}
                    className="mb-12 text-white/40 hover:text-[#FFC947] uppercase tracking-widest text-xs font-bold flex items-center transition-colors"
                >
                    <ArrowLeft className="mr-2" size={16} /> Back to Resources
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-[#FFC947] font-black uppercase tracking-[0.4em] text-xs mb-6">
                        {post.category}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight mb-8">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/40 mb-16 border-y border-white/10 py-6">
                        <div className="flex items-center">
                            <Calendar size={14} className="mr-2" />
                            {post.date}
                        </div>
                        {post.author && (
                            <div className="flex items-center">
                                <User size={14} className="mr-2" />
                                {post.author}
                            </div>
                        )}
                        <div className="flex items-center">
                            <Clock size={14} className="mr-2" />
                            3 min read
                        </div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none text-white/80 leading-relaxed font-light">
                        {post.content}
                    </div>
                </motion.div>
            </article>

            {/* Share / CTA Footer */}
            <div className="max-w-4xl mx-auto px-6 mt-24 pt-12 border-t border-white/10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest">
                        Share this article
                    </p>
                    <button
                        onClick={() => window.open('https://www.linkedin.com/', '_blank')}
                        className="bg-white text-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#FFC947] transition-colors rounded-full"
                    >
                        Share on LinkedIn
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
