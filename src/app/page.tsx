import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.main}>
      <Image
        className={styles.main_img}
        src="/woman-me.png"
        width={500}
        height={500}
        alt="Amr Shawki"
      />
      <div className={styles.main_wrapper}>
        <p className="main_text">Hello. I&apos;m</p>
        <h1 className="main__title">Amr Shawki</h1>
        <p className="main_text">
          an ambitious full-stack software developer driven by passion and an{' '}
          <br />
          unwavering work ethic. With a commitment to crafting elegant
          <br />
          solutions, I merge creativity and code to transform ideas into
          <br />
          captivating digital experiences.
        </p>
        <div className="btn_group">
          <button className="btn">Resume</button>
          <button className="btn">Reach Out</button>
        </div>
      </div>
    </section>
  );
}
