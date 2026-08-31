"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Redirect to the search page with the query in the URL
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery(""); // Clear the input after searching
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 transition hover:opacity-80"
          >
            <Logo className="w-8 h-8" />
            <span className="text-2xl font-black tracking-wider text-amber-500 hidden sm:block">
              WATCHNEST
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/movies"
              className="transition-colors hover:text-white"
            >
              Movies
            </Link>
            <Link
              href="/tv"
              className="transition-colors hover:text-white"
            >
              TV Shows
            </Link>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-4">
          <form
            onSubmit={handleSearch}
            className="relative"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search titles..."
              className="w-48 sm:w-64 rounded-full bg-gray-900 px-4 py-1.5 text-sm text-white placeholder-gray-500 border border-gray-800 focus:border-amber-500 focus:outline-none transition"
            />
          </form>
        </div>
      </div>
    </header>
  );
}
