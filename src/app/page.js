import Image from 'next/image';
import styles from './styles/page.module.css';
import Footer from './components/Footer';
import Link from 'next/link';
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>About</h1>
      <div className={styles.infoContainer}>
        <Image
          src='/Image.jpeg'
          className={styles.profilePic}
          width={1004}
          height={1144}
          layout='intrinsic'
          alt='Profile picture'
        />
        <div className={styles.description}>
          <p>
            I am currently a Maths Ph.D. student at the University of St.
            Andrews, supervised by{' '}
            <Link
              className='linkDecor'
              href='https://jonathan-fraser.github.io/homepage/'>
              Jonathan Fraser
            </Link>{' '}
            and{' '}
            <Link
              className='linkDecor'
              href='https://kennethfalconer.github.io'>
              Kenneth Falconer
            </Link>
            . I completed my undergraduate studies in mathemathics at the
            Universidad Nacional del Litoral, in Argentina.
          </p>
          <p>
            My research interests include fractal geometry, Fourier analysis and
            dimension theory, specifically in the connection between the three.
          </p>
          <br />
          <p>
            I'm the creator behind the{' '}
            <Link
              href='https://www.youtube.com/problemathic'
              target='_blank'
              className='linkDecor'>
              Problemathic YouTube channel
            </Link>{' '}
            and{' '}
            <Link
              href='http://instagram.com/problemathicvideos/'
              target='_blank'
              className='linkDecor'>
              Instagram
            </Link>
            . I enjoy having small and absolutely useless{' '}
            <Link
              href='https://github.com/AnadeOre'
              target='_blank'
              className='linkDecor'>
              programming projects
            </Link>
            , mostly in web development. My lastest project "
            <Link target='_blank' href='https://animaths.vercel.app'>
              AniMaths
            </Link>
            " uses NextJS and a plotting library for react to explain
            mathematics with animations. I'm also a bartender, so I always enjoy
            experimenting and making cocktails.
          </p>
        </div>
      </div>
      <br />
      <address className={styles.address}>
        <Link
          className='linkDecor'
          href='mailto:aedo1@st-andrews.ac.uk'
          target='_blank'>
          aedo1@st-andrews.ac.uk
        </Link>
        <br />
        School of Mathematics and Statistics
        <br />
        University of St. Andrews
        <br />
        St. Andrews
        <br />
        KY16 9SS
        <br />
        Scotland
      </address>
      <Footer />
    </main>
  );
}
