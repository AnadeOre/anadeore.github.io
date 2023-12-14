import './styles/globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Ana Emilia de Orellana',
  description: "Ana's personal website",
};

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <title>{metadata.title}</title>
      <meta name='Description' content={metadata.description} />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
