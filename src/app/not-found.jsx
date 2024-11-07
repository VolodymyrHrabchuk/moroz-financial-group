// app/not-found.jsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4'>
      <div className='text-center'>
        {/* Icon or Illustration */}
        <svg
          className='w-24 h-24 mx-auto mb-4 text-blue-600'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <circle
            cx='11'
            cy='11'
            r='8'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-4.35-4.35'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 9a2 2 0 100-4 2 2 0 000 4z'
          />
          {/* Adding a question mark inside the magnifying glass */}
          <path
            d='M11 14a1 1 0 100-2 1 1 0 000 2zM11 17h.01'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            fill='currentColor'
          />
        </svg>

        {/* Heading */}
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>
          404 - Page Not Found
        </h1>

        {/* Description */}
        <p className='text-lg text-gray-600 mb-6'>
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        {/* Back to Home Button */}
        <Link
          href='/'
          className='inline-block bg-blue text-white px-6 py-3 rounded-md hover:bg-blue/40 transition'
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
