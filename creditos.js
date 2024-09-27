document.addEventListener('DOMContentLoaded', function () {
    const styles = `
    * {
      margin: 0;
      font-family: sans-serif;
    }

    body {
      background-color: #0d0c0c;
      color: #ffffff;
    } 

    .banner {
      width: 100%;
      padding: 20px 0;
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
      width: 80%;
      margin: 0 auto;
      text-align: center;
    }

    h1 {
      font-size: 40px;
      margin-bottom: 30px;
      color: rosybrown;
    }

    .credits-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-bottom: 50px;
    }

    .credit-item {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      padding: 20px;
    }

    .credit-item h2 {
      font-size: 24px;
      margin-bottom: 15px;
      color: rosybrown;
    }

    .credit-item ul {
      list-style: none;
      padding: 0;
    }

    .credit-item ul li {
      margin-bottom: 10px;
    }

    .social-media, .tech-icons {
      margin-top: 30px;
    }

    .social-media a, .tech-icons img {
      display: inline-block;
      margin: 0 10px;
    }

    .social-media img, .tech-icons img {
      width: 40px;
      height: 40px;
      transition: transform 0.3s ease;
    }

    .social-media img:hover, .tech-icons img:hover {
      transform: scale(1.1);
    }

    .dropdown {
      position: relative;
      display: inline-block;
      width: 100%;
      margin-bottom: 15px;
    }

    .dropbtn {
      background-color: rosybrown;
      color: white;
      padding: 10px;
      font-size: 16px;
      border: none;
      cursor: pointer;
      width: 100%;
      text-align: left;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 100%;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }

    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content a:hover {
      background-color: #f1f1f1;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .dropdown:hover .dropbtn {
      background-color: #965a5a;
    }

    @media (max-width: 989px) {
      .navbar {
        flex-direction: column;
      }

      .logo {
        margin-bottom: 20px;
      }

      .navbar ul {
        flex-wrap: wrap;
        justify-content: center;
      }

      h1 {
        font-size: 30px;
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

    document.title = 'Creditos - Congreso Filosofia';

    const content = `
    <div class="banner">
      <div class="navbar">
        <img src="pixelcut-export-removebg-preview.png" class="logo" alt="Logo del Congreso de Filosof�a">
        <ul>
          <li><a href="index.html">Inicio:</a></li>
          <li><a href="111.html">11-1</a></li>
          <li><a href="112.html">11-2</a></li>
          <li><a href="113.html">11-3</a></li>
          <li><a href="creditos.html">Creditos</a></li>
          <li><a href="https://drive.google.com/drive/folders/1b8CJTaGyj-tIiHwTdqABQcJTGUoBbHoD?usp=sharing">Registro</a></li>
        </ul>
      </div>
    </div>
    <div class="content">
      <h1>Creditos</h1>
      <div class="credits-container">
        <div class="credit-item">
          <h2>Organizadores</h2>
          <ul>
            <li>I. E. Jose Celestino Mutis</li>
            <li>Docente. Maria Ines Castellanos Fajardo (Filosofia)</li>
            <li>Grado 11 - Promocion 2024 "Niksen"</li>
          </ul>
        </div>
        <div class="credit-item">
          <h2>Ponentes</h2>
          <div class="dropdown">
            <button class="dropbtn">Ponentes: 11-1</button>
            <div class="dropdown-content">
              <a href="#">Mariana Hernandes Rosas</a>
              <a href="#">Maria Valentina Mendez</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Ponentes: 11-2</button>
            <div class="dropdown-content">
              <a href="#">Juan David Fuentes</a>
              <a href="#">Ana Maria Gamboa</a>
              <a href="#">Edward Orlando Mogollon</a>
              <a href="#">Maria Fernanda Giraldo</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Ponentes: 11-3</button>
            <div class="dropdown-content">
              <a href="#">Natalia Rodriguez</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Ponentes Invitados</button>
            <div class="dropdown-content">
              <a href="#">Prescolar: Gabriel y Gabriela</a>
              <a href="#">5: Diego Andres Quintana y <br> Joseph Esteban Castro Maldonado</a>
              <a href="#">6: Mariana Santander y<br> Esteban Martinez</a>
              <a href="#">Profesora: Sandra Luz Paez</a>
              <a href="#">IE Damazo Zapata Tecnologico: <br> Jefferson Dario Sarmiento</a>
              <a href="#">6. Mariana Niño Zuluaga</a>
              <a href="#">IE Vicente Azuero: <br> Andres Felipe Rojas Cardenas y <br> Juan Diego Tamy Alzate</a>
              <a href="#">Padres de Familia: Johana Giraldo</a>
            </div>
          </div>
        </div>
        <div class="credit-item">
          <h2>Colaboradores</h2>
          <ul>
            <li>Miguel Angel Osorio Orduz</li>
            <li>Juan Camilo Arciniegas Medina</li>
            <li>Miguel Angel Neira Martinez</li>
          </ul>
        </div>
        <div class="credit-item">
          <h2>Agradecimientos Especiales</h2>
          <ul>
            <li>Doctor: Luis Fernando Arévalo</li>
            <li>Rectora: Dalhi Esperanza Ortega</li>
            <li>Licenciada: Medarda Lozano</li>
            <li>Exalumno: Camilo Murcia</li>
            <li>Estudiantes colegios Invitados.</li> 
          </ul>
        </div>
        <div class="credit-item">
          <h2>Invitados</h2>
          <ul>
            <li>Universidad Industrial de Santander</li>
            <li>Colegio Tecnologico Damazo Zapata</li>
            <li>Colegio Trinidad Camacho Pinzón Cite Santader</li>
            <li>Colegio Vicente Azuero de Floridablanca Santander</li>
            <li>Colegio Comfenalco Bucaramanga</li>
            <li>Maestros</li>
            <li>Padres de Familia</li>
            <li>Exalumnos Jose Celestino Mutis</li>
            <li>Compañeros IEJCM</li>
          </ul>
        </div>
      </div>  
      <div class="credit-item">
        <h2>Redes Sociales</h2>
        <div class="social-media">
          <a href="https://www.facebook.com/profile.php?id=61565316082228" target="_blank" rel="noopener noreferrer">
            <img src="https://static.vecteezy.com/system/resources/previews/016/716/447/non_2x/facebook-icon-free-png.png" alt="Facebook">
          </a>
          <a href="https://www.instagram.com/filosofiacongreso_jcm/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt="Instagram">
          </a>
        </div>
      </div>
      <div class="credit-item">
        <h2>Tecnologias Utilizadas</h2>
        <div class="tech-icons">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="HTML">
        </div>
      </div>
    </div>
  `;

    document.body.innerHTML = content;

    const metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=0.8';
    document.head.appendChild(metaViewport);

    const linkIcon = document.createElement('link');
    linkIcon.rel = 'shortcut icon';
    linkIcon.href = 'Images/favicon.ico';
    linkIcon.type = 'image/x-icon';
    document.head.appendChild(linkIcon);


    const navItems = document.querySelectorAll('.navbar ul li a, .dropdown-content a');
    navItems.forEach((item, index) => {
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                item.click();
            }
        });
    });


    const dropbtns = document.querySelectorAll('.dropbtn');
    dropbtns.forEach((btn) => {
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
                const dropdownContent = btn.nextElementSibling;
                const firstLink = dropdownContent.querySelector('a');
                if (firstLink) firstLink.focus();
            }
        });
    });
});