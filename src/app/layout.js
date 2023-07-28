import './styles/globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Ana Emilia de Orellana',
  description: "Ana's personal website",
};

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
