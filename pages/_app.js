import 'tailwindcss/tailwind.css'
import { Nunito } from "@next/font/google";
const oswald = Nunito({ subsets: ["latin"] });


export default function MyApp({ Component, pageProps }) {
  return (
      <main className={oswald.className}>
          <Component {...pageProps} />
      </main>
  );
}