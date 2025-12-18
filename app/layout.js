import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Landing Doctor</title>
        <meta name="description" content="Landing de un doctor proyecto - Prueba." />
        <meta name="keywords" content="landindg, doctor" />
        <meta name="author" content="Dany Rivera" />
        <link rel="icon" href="/logo.webp" />
      </head>
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
