import "./globals.css";

export const metadata = {
  title: "Arthur Hinton",
  description: "Growth & Operations — Builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
