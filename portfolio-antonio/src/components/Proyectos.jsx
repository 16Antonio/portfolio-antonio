// src/components/Proyectos.jsx

const listaProyectos = [
    {
        id: 1,
        etiqueta: "Proyecto Full-Stack",
        titulo: "Portal del Empleado / Gestor de Turnos",
        descripcion: "Plataforma integral que optimiza el tiempo de planificación de horarios y previene conflictos de solapamiento en las plantillas. Desarrollada en un repositorio unificado separando lógica de cliente y servidor.",
        imagen: "/gestor-turnos.png", // Busca la imagen en la carpeta public
        detalles: [
            "Backend: API REST securizada con JWT y Spring Security. Empaquetada con Docker y alojada en Render.",
            "Frontend: Interfaz SPA reactiva construida con React y Vite, desplegada en Vercel.",
            "Datos: Base de datos MySQL en la nube (Aiven) con sistema de Data Seeding automatizado."
        ],
        tecnologias: ["Java 21", "Spring Boot", "React", "Docker", "MySQL"],
        enlaceCodigo: "https://github.com/16Antonio/portalEmpleados",
        enlaceWeb: "https://portal-empleados-topaz.vercel.app"
    }
];

export default function Proyectos() {
    return (
        <section id="proyectos" className="seccion">
            <h2 className="titulo-seccion">Proyectos Destacados</h2>

            <div className="proyectos-grid">
                {listaProyectos.map((proyecto) => (
                    <div key={proyecto.id} className="proyecto-tarjeta">
                        <div className="proyecto-layout">

                            {/* Columna de la Imagen */}
                            <div className="proyecto-imagen">
                                <a href={proyecto.enlaceWeb} target="_blank" rel="noreferrer">
                                    <img src={proyecto.imagen} alt={`Captura de pantalla de ${proyecto.titulo}`} />
                                </a>
                            </div>

                            {/* Columna del Contenido */}
                            <div className="proyecto-contenido">
                                <p className="proyecto-destacado">{proyecto.etiqueta}</p>
                                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>

                                <div className="proyecto-descripcion">
                                    <p>{proyecto.descripcion}</p>
                                    <ul>
                                        {proyecto.detalles.map((detalle, index) => (
                                            <li key={index}>{detalle}</li>
                                        ))}
                                    </ul>
                                </div>

                                <ul className="proyecto-tecnologias">
                                    {proyecto.tecnologias.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>

                                <div className="proyecto-enlaces">
                                    {proyecto.enlaceCodigo && (
                                        <a href={proyecto.enlaceCodigo} target="_blank" rel="noreferrer" className="enlace-icono">
                                            📁 Ver Código
                                        </a>
                                    )}
                                    {proyecto.enlaceWeb && (
                                        <a href={proyecto.enlaceWeb} target="_blank" rel="noreferrer" className="enlace-icono">
                                            🌐 Visitar Web
                                        </a>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}