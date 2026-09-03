import './App.css'
import Proyectos from './components/Proyectos'

function App() {
  return (
    <main className="portfolio-container">
      
      {/* 1. SECCIÓN HERO (PORTADA) */}
      <section className="hero">
        <p className="saludo">👋 Hola, mi nombre es</p>
        <h1 className="nombre">Antonio M. Gámez.</h1>
        <h2 className="puesto">Desarrollo aplicaciones multiplataforma.</h2>
        
        <p className="descripcion">
          Estudiante de 2º año del Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) radicado en Marbella. 
          Me enfoco en construir soluciones Full-Stack escalables, especializándome en crear APIs robustas con 
          <strong> Java Spring Boot</strong> e interfaces dinámicas con <strong>React</strong>.
        </p>
        
        <div className="botones-hero">
          <a href="https://github.com/16Antonio" target="_blank" rel="noreferrer" className="btn-primario">
            Visitar GitHub
          </a>
          <a href="#proyectos" className="btn-secundario">
            Ver Proyectos
          </a>
        </div>
      </section>

      {/* 2. SECCIÓN SOBRE MÍ Y HABILIDADES */}
      <section id="sobre-mi" className="seccion">
        <h2 className="titulo-seccion">Sobre Mí & Tecnologías</h2>
        
        <div className="sobre-mi-layout">
          <div className="sobre-mi-texto">
            <p>
              Mi enfoque en el desarrollo de software abarca desde el modelado y diseño de bases de datos 
              hasta la creación de interfaces de usuario. Disfruto resolviendo problemas lógicos y 
              aprendiendo nuevas tecnologías.
            </p>
            <p>
              Cuento con experiencia laboral de cara al público en hostelería, como socorrista, y 
              realizando prácticas en un entorno sociosanitario. Estas experiencias me han dotado de una 
              gran capacidad para el trabajo en equipo, la gestión del estrés y la comunicación efectiva; 
              habilidades clave para cualquier equipo de desarrollo.
            </p>
            <p>Aquí tienes algunas de las tecnologías con las que trabajo habitualmente:</p>
          </div>
          
          <ul className="grid-habilidades">
            <li>▹ Java</li>
            <li>▹ React</li>
            <li>▹ JavaScript</li>
            <li>▹ Spring Boot</li>
            <li>▹ HTML & CSS</li>
            <li>▹ SQL & PL/SQL</li>
            <li>▹ Docker</li>
            <li>▹ UML (Modelio)</li>
          </ul>
        </div>
      </section>

      {/* 3. SECCIÓN PROYECTOS (¡Ahora desde su propio componente!) */}
      <Proyectos />

      {/* 4. FOOTER (PIE DE PÁGINA) */}
      <footer className="footer">
        <a href="https://github.com/16Antonio" target="_blank" rel="noreferrer">
          Diseñado y construido por Antonio M. Gámez
        </a>
      </footer>
      
    </main>
  )
}

export default App