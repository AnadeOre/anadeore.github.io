import Image from 'next/image';
import styles from './styles/page.module.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Link from 'next/link';
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <h1>About</h1>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            src='/Image.jpeg'
            className={styles.profilePic}
            width={200}
            height={1140}
            alt='Profile picture'
          />
          <figcaption className={styles.imageCaption}>
            Me (left) with a Highland Cow.
          </figcaption>
        </div>
        <div className={styles.description}>
          <p>
            I am a third year Maths PhD student at the University of St Andrews,
            supervised by{' '}
            <Link
              className='linkDecor'
              target='_blank'
              href='https://jonathan-fraser.github.io/homepage/'>
              Jonathan Fraser
            </Link>{' '}
            and{' '}
            <Link
              className='linkDecor'
              target='_blank'
              href='https://kennethfalconer.github.io'>
              Kenneth Falconer
            </Link>
            . I completed my undergraduate studies in mathemathics at the
            Universidad Nacional del Litoral, in Argentina.
          </p>
          {/* <p>
            My research interests are in dimension theory. Specifically, in the
            connection between geometric measure theory and Fourier analysis
            through the Fourier spectrum. Visit my{' '}
            <Link href='/research' className='linkDecor'>
              research page
            </Link>{' '}
            for more details.
          </p> */}
          <p>
            My work sits at the intersection of fractal geometry and harmonic
            analysis. I'm interested in using ideas from Fourier analysis to
            understand fractal structures, and using fractal sets to rethink
            classical problems in harmonic analysis. Visit my{' '}
            <Link href='/research' className='linkDecor'>
              research page
            </Link>{' '}
            for more details.
          </p>
          {/* <p>
            I'm currently organising an{' '}
            <Link className='linkDecor' href='http://localhost:3000/HAPDE'>
              afternoon workshop
            </Link>{' '}
            as part of the HAPDE network together with Jonathan Fraser.
          </p> */}

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
              href='https://www.instagram.com/problemathicvideos/'
              target='_blank'
              className='linkDecor'>
              Instagram page
            </Link>
            . In addition to this, my hobbies include having small{' '}
            <Link
              href='https://animaths.vercel.app'
              target='_blank'
              className='linkDecor'>
              programming projects
            </Link>
            , mostly in web development.
          </p>
        </div>
      </div>
      <br />
      <address className={styles.address}>
        <h3>Contact Details</h3>
        <Link
          className='linkDecor'
          href='mailto:aedo1@st-andrews.ac.uk'
          target='_blank'>
          aedo1@st-andrews.ac.uk
        </Link>
        <br />
        Room 103, Mathematics Institute
        <br />
        University of St Andrews
        <br />
        North Haugh, St Andrews
        <br />
        KY16 9SS
        <br />
        Scotland, UK
        <br />
        <Link
          href='https://research-portal.st-andrews.ac.uk/en/persons/ana-emilia-de-orellana'
          target='_blank'
          className='linkDecor'>
          St Andrews profile
        </Link>
      </address>
      {/* <Footer /> */}
    </main>
  );
}
