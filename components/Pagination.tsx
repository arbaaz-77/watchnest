import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  searchQuery?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
  searchQuery,
}: PaginationProps) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage >= totalPages;

  const queryParam = searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : "";

  return (
    <div className="flex items-center justify-center gap-6 mt-12 mb-8">
      {/* Previous Button */}
      {isFirstPage ? (
        <button
          disabled
          className="px-4 py-2 rounded-lg bg-gray-900 text-gray-600 cursor-not-allowed"
        >
          Previous
        </button>
      ) : (
        <Link
          href={`${basePath}?page=${currentPage - 1}${queryParam}`}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-amber-600 transition-colors"
        >
          Previous
        </Link>
      )}

      {/* Page Indicator */}
      <span className="text-gray-400 font-medium">
        Page {currentPage} of {totalPages > 500 ? 500 : totalPages}
      </span>

      {/* Next Button */}
      {isLastPage ? (
        <button
          disabled
          className="px-4 py-2 rounded-lg bg-gray-900 text-gray-600 cursor-not-allowed"
        >
          Next
        </button>
      ) : (
        <Link
          href={`${basePath}?page=${currentPage + 1}${queryParam}`}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-amber-600 transition-colors"
        >
          Next
        </Link>
      )}
    </div>
  );
}
