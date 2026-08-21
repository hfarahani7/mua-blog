import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/header.module.css';
import Image from 'next/image';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const bridalPhotos = [
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/0048.webp',
    width: 1,
    height: 2,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/0060.webp',
    width: 2,
    height: 1.6,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/0663.webp',
    width: 2,
    height: 3,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/A7BA88FE-E4A7-46F8-9833-18DF2FD1F2EA.webp',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/Dana-21.webp',
    width: 1.5,
    height: 2,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/Dana-28.webp',
    width: 1,
    height: 1.5,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/Dana-48.webp',
    width: 1,
    height: 1.5,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/Dana-117.webp',
    width: 1.5,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/DSCF7649.webp',
    width: 1.5,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/DTC-14.webp',
    width: 1,
    height: 1.5,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/EJ-32.webp',
    width: 1.5,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/hl-16102776383.webp',
    width: 2.5,
    height: 1.5,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_3040.webp',
    width: 1.5,
    height: 2,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_4037.webp',
    width: 1,
    height: 1.5,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_5471.webp',
    width: 1.5,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_6008.webp',
    width: 4,
    height: 2.5,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_6086.webp',
    width: 2,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_6093.webp',
    width: 4,
    height: 2,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_8629.webp',
    width: 1.5,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_8630.webp',
    width: 1.5,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_9073.webp',
    width: 1.75,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_9085.webp',
    width: 1,
    height: 1.75,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_9092.webp',
    width: 1,
    height: 1.6,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/Kath_Matt_JeanLaurentGaudy_030.webp',
    width: 1,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/Kath_Matt_JeanLaurentGaudy_060.webp',
    width: 1,
    height: 1.5,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/Kath_Matt_JeanLaurentGaudy_087.webp',
    width: 1.7,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/Kath_Matt_JeanLaurentGaudy_185.webp',
    width: 1,
    height: 1.6,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/Kath_Matt_JeanLaurentGaudy_527.webp',
    width: 2,
    height: 1.3,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/Kath_Matt_JeanLaurentGaudy_603.webp',
    width: 1.4,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/pc-32.webp',
    width: 1,
    height: 1.5,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/pc-35.webp',
    width: 1,
    height: 1.4,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/pc-51%2B%281%29.webp',
    width: 1.4,
    height: 1,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/pc-67.webp',
    width: 1,
    height: 1.3,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/pc-74.webp',
    width: 1,
    height: 1.6,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/pc-81%2B%281%29.webp',
    width: 1.2,
    height: 2,
    title: `Studio image`
  },
];

const studioPhotos = [
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/1DC67769-7753-4D92-86BB-1C5AAA630CEF.webp',
    width: 1,
    height: 1.3,
    title: 'Soft glam – Photo: Jane Doe'
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/3CFE1B70-5830-430E-A829-992DB953FAC7.webp',
    width: 1,
    height: 1.3,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/7D2FA728-C2AB-4F5F-8319-AD4344BCF27E.webp',
    width: 1,
    height: 1,
    title: 'Elegant dress – Photo: John Smith'
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/374AC1DE-0983-4B4F-A336-0AA0187C7E55.webp',
    width: 1,
    height: 1.6,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/4949BFE8-2684-49B7-A4A0-D4D103B941E0.webp',
    width: 1,
    height: 1.3,
    title: `Studio image`
  }, 
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/C9FBB259-D95B-4990-9992-CFF20769905C.webp',
    width: 1,
    height: 1.6,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/D6420A2F-B705-4371-B6E9-DEBE128ECD87.webp',
    width: 1,
    height: 1.6,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/E6710887-BA74-4089-8D4D-D1677C468DFE.webp',
    width: 1,
    height: 1.4,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/EJ-24%2B%281%29.webp',
    width: 1,
    height: 1.4,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_0581.webp',
    width: 1,
    height: 1.2,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_0600.webp',
    width: 1,
    height: 1.2,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_0655.webp',
    width: 1,
    height: 1.3,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_6418.webp',
    width: 1,
    height: 1.6,
    title: `Studio image`
  },
  {
    src: 'https://dwxk3eiesmmgs.cloudfront.net/images/IMG_9677.webp',
    width: 1,
    height: 1.4,
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

function ScrollableGallery({ title, photos }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selected, setSelected] = useState(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft < 
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  const handleClose = () => setSelected(null);

  return (
    <>
      <Box id={title.toLowerCase()}>
        <Typography className={styles.navLink} sx={{ textAlign: 'center', margin: '2rem 0 1rem' }}>
          {title}
        </Typography>
        <Box sx={{ 
          position: 'relative',
          padding: '0 2rem'
        }}>
          {canScrollLeft && (
            <IconButton
              onClick={() => scroll('left')}
              sx={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 1)' }
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}
          {canScrollRight && (
            <IconButton
              onClick={() => scroll('right')}
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 1)' }
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          )}
          <Box
            ref={scrollRef}
            onScroll={checkScroll}
            sx={{
              display: 'flex',
              gap: '1.5rem',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              paddingBottom: '1rem',
              '&::-webkit-scrollbar': {
                height: '8px'
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
                borderRadius: '10px'
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#D4C1B3',
                borderRadius: '10px',
                '&:hover': {
                  background: '#c4b1a3'
                }
              }
            }}
          >
            {photos.map((photo, idx) => (
              <Box
                key={idx}
                onClick={() => setSelected(photo)}
                sx={{
                  flex: '0 0 350px',
                  height: '300px',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  '&:hover img': { 
                    transform: 'scale(1.05)',
                  }
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
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
    </>
  );
}

export default function Portfolio() {
  return (
    <Box className={styles.portfolioWrapper} sx={{ pb: 4 }}>
      <ScrollableGallery title="Bridal" photos={bridalPhotos} />
      <ScrollableGallery title="Studio" photos={studioPhotos} />
    </Box>
  );
}
