import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-800 bg-gray-950 py-8 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand and Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-black tracking-wider text-amber-500 mb-2">
            WATCHNEST
          </span>
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Arbaaz Sumar. All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/movies"
            className="hover:text-white transition-colors"
          >
            Popular
          </Link>
        </nav>
      </div>
    </footer>
  );
}
