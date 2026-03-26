import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog-data';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="block group">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative w-full h-48">
            <Image 
                src={post.imageUrl} 
                alt={post.title} 
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
            />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-sm text-gray-500 mb-1">{post.publishDate}</p>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#8D0169] transition-colors duration-300">
            {post.title}
          </h3>
          <p className="mt-3 text-gray-600 flex-grow">{post.excerpt}</p>
          <div className="mt-4">
            <span className="font-semibold text-[#8D0169] group-hover:underline">
              Read More &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

