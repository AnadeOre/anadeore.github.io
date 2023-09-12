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
            My research interests revolve around the connection between
            geometric measure theory and dimension theory with Fourier Analysis.
          </p>
          <p>
            I'm the creator behind the{' '}
            <Link
              href='https://www.youtube.com/problemathic'
              target='_blank'
              className='linkDecor'>
              Problemathic YouTube channel
            </Link>
            . In addition to this, my hobbies include having small{' '}
            <Link
              href='https://github.com/AnadeOre'
              target='_blank'
              className='linkDecor'>
              programming projects
            </Link>
            , mostly in web development. I'm also a bartender, so I always enjoy
            experimenting with cocktails and homemade liqueurs.
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
        <br />
        Office 103
      </address>
      <Footer />
    </main>
  );
}
