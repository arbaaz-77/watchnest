import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
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

        {/* Search Bar Placeholder */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search titles..."
              className="w-48 sm:w-64 rounded-full bg-gray-900 px-4 py-1.5 text-sm text-white placeholder-gray-500 border border-gray-800 focus:border-amber-500 focus:outline-none transition"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
