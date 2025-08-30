import "@/styles/globals.css";
import PageTransition from "../components/PageTransition";
import Footer from "../components/footer";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col">
      <PageTransition key={router.pathname}>
        <Component {...pageProps} />
      </PageTransition>
      <Footer />
    </div>
  );
}