import { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { BlogCard } from './BlogCard';

export const metadata: Metadata = {
  title: 'Our Blog | BizVibez Properties',
  description: 'Explore the latest insights, trends, and tips in the Dubai real estate market. Your expert guide to buying, selling, and investing in property.',
};

export default function BlogsPage() {
  return (
    <div>
      {/* --- HERO SECTION --- */}
      <div 
        className="relative h-80 flex items-center justify-center text-white"
        style={{ backgroundColor: '#2a2028ff' }}
      >
        <img
          src="/b33.webp"
          alt="Dubai Real Estate Skyline"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            BizVibez Properties Blogs
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            Your expert guide to the Dubai property market.
          </p>
        </div>
      </div>
      {/* --- END HERO SECTION --- */}

      {/* Blog Posts Grid */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 sm:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}

