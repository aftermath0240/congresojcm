document.addEventListener('DOMContentLoaded', function () {
    const styles = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }
        body {
            background-color: #0d0c0c;
            color: #ffffff;
            line-height: 1.6;
        }
        .banner {
            padding: 20px;
        }
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding: 10px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 5px;
        }
        .navbar ul {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
        }
        .navbar ul li {
            margin: 5px 10px;
        }
        .navbar ul li a {
            color: #ffffff;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .navbar ul li a:hover {
            color: #F7CAC9;
        }
        .logo {
            max-width: 100px;
            height: auto;
        }
        .ponencias {
            text-align: center;
            margin-bottom: 30px;
        }
        .ponencias a {
            color: #F7CAC9;
            text-decoration: none;
            font-size: 1.2em;
            font-weight: bold;
            transition: color 0.3s ease;
        }
        .ponencias a:hover {
            color: #ffffff;
        }
        .galeria-container {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 20px;
            padding: 0 20px;
        }
        .galeria {
            background-color: #1a1a1a;
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .galeria:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        .foto img {
            width: 100%;
            height: auto;
            display: block;
        }
        .pie {
            padding: 15px;
            text-align: center;
        }
        .pie p {
            margin: 5px 0;
            font-size: 0.9em;
        }
        .pie p:first-child {
            font-weight: bold;
            color: #F7CAC9;
        }
        @media (max-width: 1200px) {
            .galeria-container {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        @media (max-width: 992px) {
            .galeria-container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media (max-width: 768px) {
            .galeria-container {
                grid-template-columns: repeat(2, 1fr);
            }
            .navbar {
                flex-direction: column;
            }
            .navbar ul {
                margin-top: 10px;
                justify-content: center;
            }
        }
        @media (max-width: 480px) {
            .galeria-container {
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
            }
            .pie {
                padding: 10px;
            }
            .pie p {
                font-size: 0.8em;
            }
        }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    const pageStyles = {
        '111.html': `
            body {
                background-image: linear-gradient(45deg, #1a1a1a, #0d0c0c);
            }
            .navbar {
                background-color: #2c2c2c;
            }
            .galeria {
                border-left: 3px solid #F7CAC9;
            }
        `,
        '112.html': `
            body {
                background-image: linear-gradient(to right, #0d0c0c, #1a1a1a);
            }
            .navbar {
                border-bottom: 2px solid #F7CAC9;
            }
            .galeria {
                border-top: 3px solid #F7CAC9;
            }
        `,
        '113.html': `
            body {
                background-image: radial-gradient(circle, #1a1a1a, #0d0c0c);
            }
            .navbar {
                background-color: #0d0c0c;
                border-radius: 0 0 10px 10px;
            }
            .galeria {
                border-right: 3px solid #F7CAC9;
            }
        `,
    };

    const currentPage = window.location.pathname.split('/').pop();
    if (pageStyles[currentPage]) {
        const pageStyleElement = document.createElement('style');
        pageStyleElement.textContent = pageStyles[currentPage];
        document.head.appendChild(pageStyleElement);
    }


    const galleryItems = document.querySelectorAll('.galeria');
    galleryItems.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                item.click();
            }
        });
    });


    window.addEventListener('load', function () {
        document.querySelector('.galeria-container').style.opacity = '1';
    });
});