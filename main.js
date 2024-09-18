document.addEventListener('DOMContentLoaded', function () {
    const styles = `
    * {
      margin: 0;
      font-family: sans-serif;
    }

    body {
      background-color: #0d0c0c;
    } 

    .banner {
      width: 100%;
      height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: repeat-y;
      background-attachment: fixed;
    }

    .navbar {
      width: 85%;
      margin: auto;
      padding: 35px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      width: 120px;
      cursor: pointer;
    }

    .navbar ul {
      list-style: none;
      display: flex;
    }

    .navbar ul li {
      margin: 0 20px;
      position: relative;
    }

    .navbar ul li a {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
    }

    .navbar ul li::after {
      content: '';
      height: 3px;
      width: 0;
      background: rosybrown;
      position: absolute;
      left: 0;
      bottom: -6px;
      transition: 0.5s;
    }

    .navbar ul li:hover::after {
      width: 100%;
    }

    .content {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      color: white;
    }

    .content h1 {
      font-size: 70px;
      margin-top: 80px;
    }

    .content p {
      margin: 20px auto;
      font-weight: 100;
      line-height: 25px;
    }

    .navbar2 {
      margin-top: 50px;
    }

    .navbar2 ul {
      list-style: none;
      display: flex;
      justify-content: center;
    }

    .navbar2 ul li {
      margin: 0 20px;
      position: relative;
    }

    .navbar2 ul li a {
      text-decoration: none;
      color: rosybrown;
      text-transform: uppercase;
    }

    .navbar2 ul li::after {
      content: '';
      height: 3px;
      width: 0;
      background: rosybrown;
      position: absolute;
      left: 0;
      bottom: -7px;
      transition: 0.5s;
    }

    .navbar2 ul li:hover::after {
      width: 100%;
    }

    .social-media {
      position: fixed;
      bottom: 20px;
      left: 0;
      right: 0;
      text-align: center;
    }

    .social-media a {
      display: inline-block;
      margin: 0 10px;
    }

    .social-media img {
      width: 40px;
      height: 40px;
      transition: transform 0.3s ease;
    }

    .social-media img:hover {
      transform: scale(1.1);
    }

    @media (max-width: 989px) {
      .logo {
        width: 80px;
      }

      .content h1 {
        font-size: 40px;
      }

      .content p {
        font-size: 16px;
        width: 90%;
        margin: 20px auto;
      }
    }

    @media (min-width: 990px) {
      body {
        background-image: linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(background.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: repeat-y;
        background-attachment: fixed;
      }
    }
  `;

    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    const metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=0.8';
    document.head.appendChild(metaViewport);

    const linkCSS = document.createElement('link');
    linkCSS.rel = 'stylesheet';
    linkCSS.href = 'style.css';
    document.head.appendChild(linkCSS);

    const linkIcon = document.createElement('link');
    linkIcon.rel = 'shortcut icon';
    linkIcon.href = 'Images/favicon.ico';
    linkIcon.type = 'image/x-icon';
    document.head.appendChild(linkIcon);

    ['111.js', '112.js', '113.js'].forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        document.head.appendChild(script);
    });

    document.title = 'Congreso Filosofia';

    const banner = document.createElement('div');
    banner.className = 'banner';

    const navbar = document.createElement('div');
    navbar.className = 'navbar';

    const logo = document.createElement('img');
    logo.src = 'pixelcut-export-removebg-preview.png';
    logo.className = 'logo';
    navbar.appendChild(logo);

    const navList = document.createElement('ul');
    [
        { href: 'index.html', text: 'Ponencias:' },
        { href: '111.html', text: '11-1' },
        { href: '112.html', text: '11-2' },
        { href: '113.html', text: '11-3' },
        { href: 'creditos.html', text: 'Creditos' },
        { href: 'https://drive.google.com/drive/folders/1b8CJTaGyj-tIiHwTdqABQcJTGUoBbHoD?usp=sharing', text: 'Registros'},
    ].forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        navList.appendChild(li);
    });
    navbar.appendChild(navList);

    banner.appendChild(navbar);

    const content = document.createElement('div');
    content.className = 'content';

    const h1 = document.createElement('h1');
    h1.innerHTML = 'XI CONGRESO FILOSOFÍA: RAZONAMIENTO VS <br> INTELIGENCIA ARTIFICIAL';
    content.appendChild(h1);

    const p = document.createElement('p');
    p.innerHTML = 'Aquí podrás encontrar todas las ponencias,<br> avances y todo sobre el congreso filosófico<br> hecho por los estudiantes del José Celestino Mutis.';
    content.appendChild(p);

    const navbar2 = document.createElement('div');
    navbar2.className = 'navbar2';

    const navbar2List = document.createElement('ul');
    [
        { href: 'https://drive.google.com/drive/folders/17Fdpe-9nqyC9dAkadqaYwtVaiaplSm-x?usp=sharing', text: 'PONENCIAS' },
        { href: '#', text: 'CERTIFICADOS' },
        { href: 'https://drive.google.com/drive/folders/1b8CJTaGyj-tIiHwTdqABQcJTGUoBbHoD?usp=sharing', text: 'REGISTRO'},
    ].forEach(item => {
        const li = document.createElement('li');
        if (item.href) {
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;
            li.appendChild(a);
        } else {
            li.innerHTML = `<span>${item.text}</span>`;
        }
        navbar2List.appendChild(li);
    });
    navbar2.appendChild(navbar2List);

    content.appendChild(navbar2);
    banner.appendChild(content);

    document.body.appendChild(banner);

    const br1 = document.createElement('br');
    document.body.appendChild(br1);

    const imagen = document.createElement('div');
    imagen.className = 'Imagen';
    document.body.appendChild(imagen);

    const br2 = document.createElement('br');
    document.body.appendChild(br2);

    const h2 = document.createElement('h2');
    document.body.appendChild(h2);

    
    const socialMedia = document.createElement('div');
    socialMedia.className = 'social-media';

    const facebookLink = document.createElement('a');
    facebookLink.href = 'https://www.facebook.com/profile.php?id=61565316082228';
    facebookLink.target = '_blank';
    facebookLink.rel = 'noopener noreferrer';
    const facebookIcon = document.createElement('img');
    facebookIcon.src = 'https://static.vecteezy.com/system/resources/previews/016/716/447/non_2x/facebook-icon-free-png.png';
    facebookIcon.alt = 'Facebook';
    facebookLink.appendChild(facebookIcon);

    const instagramLink = document.createElement('a');
    instagramLink.href = 'https://www.instagram.com/filosofiacongreso_jcm/#'; 
    instagramLink.target = '_blank';
    instagramLink.rel = 'noopener noreferrer';
    const instagramIcon = document.createElement('img');
    instagramIcon.src = 'https://cdn-icons-png.flaticon.com/512/1409/1409946.png';
    instagramIcon.alt = 'Instagram';
    instagramLink.appendChild(instagramIcon);

    socialMedia.appendChild(facebookLink);
    socialMedia.appendChild(instagramLink);

    document.body.appendChild(socialMedia);
});