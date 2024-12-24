import { Star } from "lucide-react";

export function ReviewCard({ content, author, rating }) {
  return (
    <div className='bg-white rounded-xl p-6 shadow-sm border border-grey'>
      <div className='text-blue mb-4'>
        <span className='text-3xl'>&quot;</span>
      </div>
      <p className='text-gray-700 italic mb-4'>{content}</p>
      <div className='flex flex-col gap-2'>
        <p className='text-gray-600'>- {author}</p>
        <div className='flex'>
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className='w-5 h-5 text-blue fill-blue'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
