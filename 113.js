document.addEventListener('DOMContentLoaded', function() {
  const styles = {
    '*': {
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
    },
    'body': {
      backgroundColor: '#0d0c0c',
      color: '#ffffff',
      lineHeight: '1.6',
      backgroundImage: 'radial-gradient(circle, #1a1a1a, #0d0c0c)',
    },
    '.banner': {
      padding: '20px',
    },
    '.navbar': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      padding: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '0 0 10px 10px',
    },
    '.navbar ul': {
      listStyle: 'none',
      display: 'flex',
      flexWrap: 'wrap',
    },
    '.navbar ul li': {
      margin: '5px 10px',
    },
    '.navbar ul li a': {
      color: '#ffffff',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    '.navbar ul li a:hover': {
      color: '#F7CAC9',
    },
    '.logo': {
      maxWidth: '100px',
      height: 'auto',
    },
    '.ponencias': {
      textAlign: 'center',
      marginBottom: '30px',
    },
    '.ponencias a': {
      color: '#F7CAC9',
      textDecoration: 'none',
      fontSize: '1.2em',
      fontWeight: 'bold',
      transition: 'color 0.3s ease',
    },
    '.ponencias a:hover': {
      color: '#ffffff',
    },
    '.galeria-container': {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '20px',
      padding: '0 20px',
    },
    '.galeria': {
      backgroundColor: '#1a1a1a',
      borderRadius: '10px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRight: '3px solid #F7CAC9',
    },
    '.galeria:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
    '.foto img': {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    '.pie': {
      padding: '15px',
      textAlign: 'center',
    },
    '.pie p': {
      margin: '5px 0',
      fontSize: '0.9em',
    },
    '.pie p:first-child': {
      fontWeight: 'bold',
      color: '#F7CAC9',
    },
  };

  const mediaQueries = {
    '(max-width: 1200px)': {
      '.galeria-container': {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },
    '(max-width: 992px)': {
      '.galeria-container': {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    },
    '(max-width: 768px)': {
      '.galeria-container': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      '.navbar': {
        flexDirection: 'column',
      },
      '.navbar ul': {
        marginTop: '10px',
        justifyContent: 'center',
      },
    },
    '(max-width: 480px)': {
      '.galeria-container': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '10px',
      },
      '.pie': {
        padding: '10px',
      },
      '.pie p': {
        fontSize: '0.8em',
      },
    },
  };

  function applyStyles(styles) {
    Object.keys(styles).forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        Object.assign(element.style, styles[selector]);
      });
    });
  }

  function applyMediaQueries() {
    Object.keys(mediaQueries).forEach(query => {
      const mediaQuery = window.matchMedia(query);
      function handleMediaQuery(e) {
        if (e.matches) {
          applyStyles(mediaQueries[query]);
        }
      }
      mediaQuery.addListener(handleMediaQuery);
      handleMediaQuery(mediaQuery);
    });
  }

 
  applyStyles(styles);


  applyMediaQueries();


  const galleryItems = document.querySelectorAll('.galeria');
  galleryItems.forEach((item, index) => {
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
       
        item.click();
      }
    });
  });
});