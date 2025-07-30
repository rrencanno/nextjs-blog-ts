import '@/app/globals.css';
import Header from '@/app/components/Header'; // Headerをインポート
import Footer from '@/app/components/Footer'; // Footerをインポート

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-200 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4 md:p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
