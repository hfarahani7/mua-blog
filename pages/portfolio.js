import React, { useState } from 'react';
import styles from '../styles/header.module.css';

import Gallery from 'react-photo-gallery';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const bridalPhotos = [
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/0048.jpg',
    width: 4,
    height: 4,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/0060.jpg',
    width: 3,
    height: 2,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/0663.jpg',
    width: 2,
    height: 4,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/A7BA88FE-E4A7-46F8-9833-18DF2FD1F2EA.JPG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/Dana-21.JPEG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/Dana-28.JPEG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/Dana-48.JPEG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/Dana-117.JPEG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/DSCF7649.jpeg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/DTC-14.jpg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/EJ-32.jpg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/hl-16102776383.JPEG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_3040.jpeg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_4037.JPEG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_5471.JPEG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_6008.JPEG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_6086.jpeg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_6093.jpeg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8629.JPEG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8630.JPEG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_9073.JPG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_9085.JPG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_9092.JPG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/Kath_Matt_JeanLaurentGaudy_030.jpg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/Kath_Matt_JeanLaurentGaudy_060.jpg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/Kath_Matt_JeanLaurentGaudy_087.jpg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/Kath_Matt_JeanLaurentGaudy_185.jpg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/Kath_Matt_JeanLaurentGaudy_527.jpg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/Kath_Matt_JeanLaurentGaudy_603.jpg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/pc-32.jpg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/pc-35.jpg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/pc-51+(1).jpg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/pc-67.jpg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/pc-74.jpg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/pc-81+(1).jpg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
];

const studioPhotos = [
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/1DC67769-7753-4D92-86BB-1C5AAA630CEF.JPG',
    width: 4,
    height: 3,
    title: 'Soft glam – Photo: Jane Doe'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/3CFE1B70-5830-430E-A829-992DB953FAC7.JPG',
    width: 4,
    height: 3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/7D2FA728-C2AB-4F5F-8319-AD4344BCF27E.JPG',
    width: 1,
    height: 1,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/374AC1DE-0983-4B4F-A336-0AA0187C7E55.JPG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/4949BFE8-2684-49B7-A4A0-D4D103B941E0.JPEG',
    width: 1,
    height: 1,
    title: `Studio image`
  }, 
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/C9FBB259-D95B-4990-9992-CFF20769905C.JPG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/D6420A2F-B705-4371-B6E9-DEBE128ECD87.JPG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/E6710887-BA74-4089-8D4D-D1677C468DFE.JPG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/EJ-24+(1).jpg',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_0581.JPEG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_0600.JPEG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_0655.JPEG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_6418.JPG',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_9677.JPG',
    width: 1,
    height: 1,
    title: `Studio image`
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
