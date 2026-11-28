import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="py-20 sm:py-28">
      <div className="max-w-xl mx-auto px-4 text-center space-y-5">
        <span className="inline-block px-3 py-1 rounded-full bg-[#FF7722]/15 text-[#FF7722] text-xs font-bold uppercase tracking-wider">
          404 — Page Not Found
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white">
          Page Not Available
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          The page you are looking for does not exist or may have moved. Visit our home page to explore balloon decoration themes in Hyderabad.
        </p>
        <div className="pt-2">
          <Link to="/">
            <Button variant="primary" size="md" icon={ArrowLeft}>
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
