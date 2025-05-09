import "./styles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { aileron } from "@/assets/fonts/aileron";

export const metadata = {
  description:
    "Explore the world with TYDD! Based in Mumbai, we offer personalized, affordable luxury trips—national & international. Travel made hassle-free.",
  title: "Travel Your Dream Destination",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" className={`${aileron.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
