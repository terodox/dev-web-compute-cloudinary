import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
const NextImage = () => {
  return (
    <div className={styles.imagecontainer}>
      <Image
        className={styles.image}
        src="/small-dog.jpg"
        alt="Food"
        width={450}
        height={280}
      />
      <h1 className={styles.nextcard}>Next Image</h1>
    </div>
  );
};
export default NextImage;
