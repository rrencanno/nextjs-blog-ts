export default function Footer() {
    return (
      <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 mt-auto border-t">
        <div className="container mx-auto p-6 text-center">
          <p>© {new Date().getFullYear()} My Next.js Blog. All Rights Reserved.</p>
          <p className="text-sm mt-2">
            Powered by <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Next.js</a> & <a href="https://microcms.io/" target="_blank" rel="noopener noreferrer" className="hover:underline">microCMS</a>
          </p>
        </div>
      </footer>
    );
  }