import React, { useState } from 'react';
import styles from '../styles/header.module.css';

import Gallery from 'react-photo-gallery';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const bridalPhotos = [
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8636.JPEG',
    width: 4,
    height: 3,
    title: 'Soft glam – Photo: Jane Doe'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 4,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 1,
    height: 1,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 2,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 4,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 4,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 4,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 4,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 4,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8636.JPEG',
    width: 4,
    height: 3,
    title: 'Soft glam – Photo: Jane Doe'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 4,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
];

const studioPhotos = [
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8636.JPEG',
    width: 4,
    height: 3,
    title: 'Soft glam – Photo: Jane Doe'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 4,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 1,
    height: 1,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 2,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 4,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 4,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 4,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 4,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 4,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8636.JPEG',
    width: 4,
    height: 3,
    title: 'Soft glam – Photo: Jane Doe'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG',
    width: 4,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  maxWidth: '90vw',
  maxHeight: '90vh',
  overflow: 'auto'
};

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  const handleClick = (_, { photo }) => {
    setSelected(photo);
  };

  const handleClose = () => setSelected(null);

  return (
    <Box className={styles.portfolioWrapper}>
      <Box id="bridal">
      <Typography className={styles.navLink} >
        Bridal
      </Typography>
      <Gallery photos={bridalPhotos} onClick={handleClick}/>
      </Box>
      <Box id="studio">
    <Typography className={styles.navLink} >
        Studio
      </Typography>
      <Gallery photos={studioPhotos} onClick={handleClick} id="studio"/>
      </Box>
      

      <Modal open={!!selected} onClose={handleClose} className={styles.modalStyle}>
        <Box sx={modalStyle}>
          {selected && (
            <>
              <img
                src={selected.src}
                alt={selected.title}
                style={{ maxWidth: '100%', maxHeight: '80vh', marginBottom: 10 }}
              />
              <Typography variant="subtitle1">{selected.title}</Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
