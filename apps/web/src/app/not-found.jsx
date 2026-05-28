import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#05060B] px-6 text-center text-white">
      <div className="max-w-md">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">404</p>
        <h1 className="mt-4 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-white/70">
          The page you are looking for is not available.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-md border border-cyan-300/40 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
