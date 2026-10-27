
import "./globals.css";

export const metadata = {
  title: "Mansi Saroj | Full Stack Developer",
  description:
    "Mansi Saroj's portfolio — Full Stack Developer based in Mumbai, India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
