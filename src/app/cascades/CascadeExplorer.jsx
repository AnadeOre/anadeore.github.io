'use client';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import Link from 'next/link';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import styles from './cascades.module.css';

// N = 2, d = 2: each dyadic square splits into 4 at every level
const MAX_LEVEL = 9;
const CANVAS_SIZE = 512;

// Small seeded random number generator, so a realisation can be kept
// fixed while the distribution of W changes
const mulberry32 = (seed) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// One uniform random number per dyadic square, for every level
const makeUniforms = (seed) => {
  const random = mulberry32(seed);
  const levels = [];
  for (let k = 1; k <= MAX_LEVEL; k++) {
    const u = new Float32Array(4 ** k);
    for (let i = 0; i < u.length; i++) u[i] = random();
    levels.push(u);
  }
  return levels;
};

// W = 0 with probability p, 2 with probability p, 1 otherwise (so E(W) = 1)
const sampleW = (u, p) => (u < p ? 0 : u >= 1 - p ? 2 : 1);

// Density of mu_n on the 2^n x 2^n grid of dyadic squares
const cascadeDensity = (uniforms, p, level) => {
  let density = new Float32Array([1]);
  for (let k = 1; k <= level; k++) {
    const side = 2 ** k;
    const next = new Float32Array(side * side);
    const u = uniforms[k - 1];
    for (let i = 0; i < side; i++) {
      for (let j = 0; j < side; j++) {
        const parent = density[(i >> 1) * (side >> 1) + (j >> 1)];
        next[i * side + j] = parent * sampleW(u[i * side + j], p);
      }
    }
    density = next;
  }
  return density;
};

// Matplotlib's BuPu colour scale (white to blue to purple), as in the
// figures in my thesis
const STOPS = [
  [247, 252, 253],
  [224, 236, 244],
  [191, 211, 230],
  [158, 188, 218],
  [140, 150, 198],
  [140, 107, 177],
  [136, 65, 157],
  [129, 15, 124],
  [77, 0, 75],
];
const colour = (t) => {
  const x = Math.min(Math.max(t, 0), 1) * (STOPS.length - 1);
  const i = Math.min(Math.floor(x), STOPS.length - 2);
  const f = x - i;
  return STOPS[i].map((c, k) => Math.round(c + f * (STOPS[i + 1][k] - c)));
};

const formatDim = (x) => x.toFixed(3);

const CascadeExplorer = () => {
  const [p, setP] = useState(0.1);
  const [depth, setDepth] = useState(6);
  const [seed, setSeed] = useState(2024);
  const canvasRef = useRef(null);

  const uniforms = useMemo(() => makeUniforms(seed), [seed]);
  const density = useMemo(
    () => cascadeDensity(uniforms, p, depth),
    [uniforms, p, depth],
  );
  const extinct = density.every((x) => x === 0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const side = 2 ** depth;
    let max = 0;
    for (const x of density) max = Math.max(max, x);

    const small = document.createElement('canvas');
    small.width = side;
    small.height = side;
    const smallCtx = small.getContext('2d');
    const image = smallCtx.createImageData(side, side);
    for (let i = 0; i < density.length; i++) {
      const [r, g, b] = colour(max > 0 ? density[i] / max : 0);
      image.data.set([r, g, b, 255], 4 * i);
    }
    smallCtx.putImageData(image, 0, 0);

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(small, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }, [density, depth]);

  const newRealisation = () => {
    setSeed(Math.floor(Math.random() * 2 ** 31));
  };

  return (
    <div className={styles.layout}>
      <div className={styles.text}>
        <p>
          <Latex>
            {`Mandelbrot cascades are random measures on $[0,1]^2$ built by repeatedly splitting squares. Start with mass $1$ on the unit square. At each level, split every square into $4$ and multiply the mass in each new square by an independent copy of a random variable $W \\geq 0$ with $\\mathbb{E}(W) = 1$.`}
          </Latex>
        </p>
        <p>
          <Latex>
            {`Here $W = 0$ or $W = 2$ each with probability $p$, and $W = 1$ otherwise. The case $p = 0.1$ is the example in Chapter 5 of `}
          </Latex>
          <Link href='/PhDThesis.pdf' target='_blank' className='linkDecor'>
            my PhD thesis
          </Link>
          . Darker squares carry more mass.
        </p>

        <div className={styles.controls}>
          <label className={styles.control}>
            <span>
              <Latex>{`$p = ${p.toFixed(2)}$`}</Latex>
            </span>
            <input
              type='range'
              min='0'
              max='0.5'
              step='0.01'
              value={p}
              onChange={(e) => setP(Number(e.target.value))}
            />
          </label>
          <label className={styles.control}>
            <span>
              <Latex>{`levels $n = ${depth}$`}</Latex>
            </span>
            <input
              type='range'
              min='1'
              max={MAX_LEVEL}
              step='1'
              value={depth}
              onChange={(e) => setDepth(Number(e.target.value))}
            />
          </label>
          <div className={styles.buttons}>
            <button className='linkDecorButton' onClick={newRealisation}>
              New realisation
            </button>
          </div>
        </div>

        <table className={styles.dims}>
          <tbody>
            <tr>
              <td>
                <Latex>{`$\\dim_{\\mathrm{H}} \\operatorname{supp} \\mu = \\log_2 4(1-p)$`}</Latex>
              </td>
              <td>{formatDim(Math.log2(4 * (1 - p)))}</td>
            </tr>
            <tr>
              <td>
                <Latex>{`$\\dim_{\\mathrm{H}} \\mu = 2 - \\frac{\\mathbb{E}(W \\log W)}{\\log 2}$`}</Latex>
              </td>
              <td>{formatDim(2 - 2 * p)}</td>
            </tr>
            <tr>
              <td>
                <Latex>{`$\\dim_{\\mathrm{F}} \\mu = 2 - \\log_2 \\mathbb{E}(W^2)$`}</Latex>
              </td>
              <td>{formatDim(2 - Math.log2(1 + 2 * p))}</td>
            </tr>
          </tbody>
        </table>
        <p className={styles.note}>
          Almost surely, conditioned on the cascade not dying out.
        </p>
      </div>

      <figure className={styles.figure}>
        <canvas
          ref={canvasRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          className={styles.canvas}
          aria-label={`Mandelbrot cascade after ${depth} levels with p = ${p.toFixed(2)}`}
          role='img'
        />
        <figcaption className={styles.caption}>
          {extinct
            ? 'This realisation died out: every square has mass 0. Try a new realisation.'
            : `${depth} levels: ${2 ** depth} × ${2 ** depth} squares`}
        </figcaption>
      </figure>
    </div>
  );
};

export default CascadeExplorer;
