import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-4xl font-light text-gray-900 mb-4 font-serif">Page not found</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        That page doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
