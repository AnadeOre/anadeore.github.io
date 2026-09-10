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
            loading='eager'
            alt='Profile picture'
          />
          <figcaption className={styles.imageCaption}>
            Me (left) with a Highland Cow.
          </figcaption>
          <br />
          <div className={styles.identifiers}>
            <Link
              className='linkDecor'
              href='https://orcid.org/0009-0005-6958-896X'
              target='_blank'>
              {/* ORCID */}
              <Image
                src='/Logos/ORCID.svg'
                width={30}
                height={30}
                alt='ORCID'
              />
            </Link>{' '}
            <Link
              className='linkDecor'
              href='http://arxiv.org/a/deorellana_a_1'
              target='_blank'>
              {/* arXiv */}
              <Image
                src='/Logos/ArxivLogo.png'
                width={18}
                height={30}
                alt='ORCID'
              />
            </Link>{' '}
            <Link
              className='linkDecor'
              href='https://scholar.google.co.uk/citations?user=U6vkEe4AAAAJ&hl=en&oi=ao'
              target='_blank'>
              {/* Google Scholar */}
              <Image
                src='/Logos/GoogleScholar.png'
                width={30}
                height={30}
                alt='ORCID'
              />
            </Link>
          </div>
        </div>
        <div className={styles.description}>
          <p>
            I am a mathemathics postdoctoral researcher at the University of Jyväskylä working with <Link
              className='linkDecor'
              target='_blank'
              href='https://sites.google.com/view/tuomaths/home?authuser=0'>
              Tuomas Orponen
            </Link>. I did my PhD at the University of St Andrews supervised by{' '}
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

          {/* <br />
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
          </p> */}
        </div>
      </div>
      {/* <br /> */}

      <br />
      <address className={styles.address}>
        <h3>Contact Details</h3>
        <Link
          className='linkDecor'
          href='mailto:ana.e.deorellana@jyu.fi'
          target='_blank'>
          ana.e.deorellana@jyu.fi
        </Link>
        <br />
        Department of Mathematics and Statistics
        <br />
        University Jyväskylä
        <br />
        Agora Building, Jyväskylä
        <br />
        FI-40014
        <br />
        Finland
        {/* <br />
        <Link
          href='https://research-portal.st-andrews.ac.uk/en/persons/ana-emilia-de-orellana'
          target='_blank'
          className='linkDecor'>
          St Andrews profile
        </Link> */}
      </address>
      {/* <Footer /> */}
    </main>
  );
}
