import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import type { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | BizVibez Blog`,
    description: post.metaDescription,
  };
}


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      <article className="max-w-4xl mx-auto">
        {/* Hero Image for the Post */}
        <div className="relative w-full h-64 md:h-96">
            <Image 
                src={post.imageUrl} 
                alt={post.title} 
                layout="fill"
                objectFit="cover"
                priority // Load this image first
            />
        </div>
        
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <Link href="/blogs" className="text-[#8D0169] hover:text-[#7d004e] text-sm font-semibold transition-colors duration-200">
                  &larr; Back to all blogs
                </Link>
                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  {post.title}
                </h1>
                <p className="mt-3 text-sm text-gray-500">
                  Published on {post.publishDate}
                </p>
              </div>

              <div 
                  className="prose prose-lg lg:prose-xl max-w-none text-gray-700 mx-auto"
                  dangerouslySetInnerHTML={{ __html: post.content }}
              />
            
              {/* --- Second "Back to all blogs" link --- */}
              <div className="mt-12 text-center">
                   <Link href="/blogs" className="text-[#8D0169] hover:text-[#7d004e] text-sm font-semibold transition-colors duration-200">
                      &larr; Back to all blogs
                  </Link>
              </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

