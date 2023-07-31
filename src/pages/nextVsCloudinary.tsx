import NextImage from './components/NextImage';
import CloudinaryImage from './components/CloudinaryImage';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Image Optimization</h1>
      <main className={styles.main}>
        <h2>Next Image</h2>
        <NextImage />
        <h2>Cloudinary Image</h2>
        <CloudinaryImage />
      </main>
    </div>
  );
}
