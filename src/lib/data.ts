export const personalInfo = {
  name: "Jose Imbaquinga",
  location: "Quito, Ecuador",
  email: "ricardoimbaquinga@gmail.com",
  github: "https://github.com/jrimbaquingaguana",
  linkedin: "https://www.linkedin.com/in/jose-imbaquinga-702851285",
  profilePicture: "/profile.jpg",
heroDescription: "💡 Busco desempeñar un papel significativo en la creación de soluciones tecnológicas innovadoras y eficientes. Busco integrarme en un entorno colaborativo y dinámico que me permita seguir aprendiendo, perfeccionar mis habilidades y participar en proyectos desafiantes que impulsen mi desarrollo profesional y generen resultados excepcionales. Me motiva aportar ideas creativas, optimizar procesos y contribuir al éxito de proyectos que tengan un impacto tangible en el mundo digital.",

};

export const workExperience = [
  {
    company: "Freelance | Varios",
    
    location: "Remoto",
    period: "2025 - Present" ,
    achievements: [
      "Construcción de aplicaciones web y móviles utilizando tecnologías como React, Angular y Flutter.",
    ],
  },
{
  company: "Cociber",
  location: "Quito, Ecuador",
  period: "Mayo 2024 - Marzo 2025",
  achievements: [
    "Diseñé y desarrollé aplicaciones full-stack, incluyendo interfaces de usuario y lógica del servidor.",
    "Implementé buenas prácticas de programación, pruebas y mantenimiento de código, mejorando la calidad del software.",
    "Desarrollé un sistema web para detectar ataques por malware, contribuyendo a la seguridad de la plataforma.",
    "Colaboré en un equipo ágil, participando en planificación de sprints y revisiones de código.",
  ],
},

];

export const education = [
  {
    institution: "Universidad de las Fuerzas Armadas ESPE",
    location: "Sangolquí, Ecuador",
    degree: "Ingenería en Software",
    period: "Mayo 2020 -  Agosto 2025",
    
  },
];
export const skills = {
  lenguajesDeProgramacion: [
    { name: "Java", logo: "../lenguajes/descarga.png" },
    { name: "TypeScript", logo: "../lenguajes/tps.png" },
    { name: "JavaScript", logo: "../lenguajes/javas.png" },
    { name: "C++", logo: "/../lenguajes/c++.png" },
    { name: "C#", logo: "../lenguajes/c.png" },
    { name: "Dart", logo: "../lenguajes/dart.png" },
    { name: "Python", logo: "../lenguajes/pythobn.jpg" },
    { name: "Kotlin", logo: "../lenguajes/kotlin.jpg" },
    { name: "Go", logo: "../lenguajes/go.png" },
  ],
  desarrolloFrontend: [
    { name: "Angular", logo: "../front/angular.png" },
    { name: "Reactjs", logo: "../front/react.jpg" },
    { name: "Astro", logo: "/front/astro.png" },
    { name: "Flutter", logo: "/front/flutter.png" },
    { name: "Tailwind CSS", logo: "/front/tail.png" },
    { name: "HTML", logo: "/front/html.png" },
    { name: "CSS", logo: "/front/css.png" },
  ],
  desarrolloBackend: [
    { name: "Spring Boot", logo: "/back/spring.png" },
    { name: "Nodejs", logo: "/back/nodejs.jpg" },
    { name: "Expressjs", logo: "/back/express.png" },
    { name: "Nestjs", logo: "/back/nestjs.png" },
    { name: "Flask", logo: "/back/flask.png" },
    { name: "FastAPI", logo: "/back/fastapi.svg" },
    { name: ".NET", logo: "/back/dotnet.png" },
  ],
  baseDeDatos: [
    { name: "MySQL", logo: "/database/mysql.png" },
    { name: "PostgreSQL", logo: "/database/postgresql.png" },
    { name: "MongoDB", logo: "/database/mongodb.png" },
    { name: "SQLite", logo: "/database/sqllite.png" },
    { name: "Firebase", logo: "/database/firebase.png" },
    { name: "OracleDB", logo: "/database/oracle.png" },
  ],
  nubeYDevops: [
    { name: "Azure", logo: "/tools/azure.png" },
    { name: "Google Cloud", logo: "/tools/googlecloud.jpg" },
    { name: "AWS", logo: "/tools/aws.jpg" },
  ],
  herramientasYServicios: [
    { name: "Docker", logo: "/otros/docker.png" },
    { name: "SonarQube", logo: "/otros/sonarqube.png" },
    { name: "Jira", logo: "/otros/jira.png" },
    { name: "Github", logo: "/otros/images.jpg" },
    { name: "Jenkins", logo: "/otros/jenkins.png" },
    { name: "Bizagi", logo: "/otros/bizagi.avif" },
    { name: "Postman", logo: "/otros/postman.png" },
    { name: "Visual Studio Code", logo: "/otros/vsc.jpg" },
    { name: "IntelliJ", logo: "/otros/intellij.jpg" },
    { name: "Android Studio", logo: "/otros/androidstudio.jpg" },
  ],
 


};


export const projects = [
{
  title: "ExplorAR – Haz de cada paso una historia para recordar",
  github: "https://github.com/jrimbaquingaguana/Interculturalidad_ExploAR",
  description: [
    "Desarrolle una aplicación móvil para la exploración turística en Ecuador, destacando la interculturalidad entre pueblos y culturas.",
    "Implementación de visualización de puntos turísticos mediante Realidad Aumentada (AR) y Realidad Virtual (VR) para una experiencia inmersiva.",
    "Funcionalidades principales: itinerario personalizado, álbum de recuerdos por lugar visitado y selección de lugares turísticos.",
    "Multilenguaje personalizado (Español, Inglés, Francés, Portugués) para adaptarse a los usuarios de diferentes culturas.",
    "Construida con Flutter, utilizando Firebase para backend y almacenamiento, e integración de APIs de mapas (Google Maps / Google Traductor).",
    "Incluye funcionalidades de orientación en tiempo real, planificación de viajes y experiencia interactiva, con enfoque multicultural y accesible."
  ],
}
,
{
  title: "EurekaBank - Tu Banca Digital de Confianza",
  github: "https://github.com/jrimbaquingaguana/Proyecto_Construccion",
  description: [
    "Desarrollo de una aplicación bancaria distribuida basada en microservicios, utilizando Spring Boot para los servicios y Eureka para el registro de servicios.",
    "Implementación de múltiples microservicios, incluyendo funcionalidades de banca como depósitos, retiros, transferencias, consulta de movimientos y saldos de clientes.",
    "Diseño de 4 clientes distintos: móvil (Kotlin), web (Java), consola (Java) y escritorio (Java), asegurando compatibilidad y accesibilidad para los usuarios.",
    "Configuración de Dockerfiles y Docker Compose para contenedorización de los microservicios, facilitando despliegue y pruebas locales.",
    "Integración con Jenkins para automatización del despliegue continuo (CI/CD) de la aplicación en entornos controlados."
  ],
}
,
{
  title: "Examen 3er Parcial – Aplicaciones Basadas en el Conocimiento",
  github: "https://github.com/jrimbaquingaguana/ExamenBasadas_3Parcial",
  description: [
    "Desarrollado utilizando Python y técnicas de Deep Learning.",
    "Implementación de detección de objetos mediante Arucos, colocando 4 ejes en el suelo, cada Aruco representando una esquina.",
    "Cuando un objeto cruzaba la zona delimitada por los Arucos, se activaba una alerta automática.",
    "Tecnologías utilizadas: OpenCV 4.5.5 y TensorFlow 2.17.0 para procesamiento de imágenes y aprendizaje profundo."
  ],
},

{
  title: "Página Web para consumir modelo de Inteligencia Artificial",
  github: "https://github.com/jrimbaquingaguana/Front_tesis",
  description: [
    "Aplicación web desarrollada con React y Vite como frontend para la interacción con un modelo de inteligencia artificial.",
    "Incluye login y registro con validaciones en el cliente: límite de 3 intentos fallidos para reforzar la seguridad y prevenir ataques de fuerza bruta.",
    "Visualización de usuarios y roles con control de accesos basado en permisos (role-based access control).",
    "Módulo de historial que permite consultar y visualizar registros de uso del sistema.",
    "Dashboard administrativo con métricas clave y visualización de logs para monitoreo en tiempo real.",
    "Interfaz optimizada para enviar datos al backend y mostrar predicciones/resultados del modelo de IA de manera intuitiva.",
  ],
  
},

{
  title: "API Backend para detección de Ciberacoso con IA",
  github: "https://github.com/jrimbaquingaguana/Back_tesis",
  description: [
    "Desarrollado con Flask como framework principal para la creación de una API REST que conecta con el frontend.",
    "Integración de un modelo de Machine Learning (LightGBM + BERT) para la clasificación de mensajes en categorías como Normal, Cibersexting y CiberGrooming.",
    "Procesamiento y limpieza de texto con NLTK y Unidecode para mejorar la precisión de las predicciones.",
    "Gestión de usuarios con registro, login seguro (bcrypt), actualización y eliminación de cuentas.",
    "Control de roles y autenticación con auditoría de acciones (creación, login, edición, eliminación).",
    "Módulo de historial de mensajes con endpoints para consultar, actualizar y eliminar registros de predicciones.",
    "Sistema de auditoría que almacena cada acción realizada en la aplicación para trazabilidad y seguridad.",
    "Persistencia de datos en MongoDB para usuarios, historiales y auditoría.",
    "Contenedorización con Docker y orquestación mediante Docker Compose para facilitar despliegue y pruebas.",
    "Tecnologías principales: Flask, Python, MongoDB, LightGBM, BERT, NLTK, bcrypt y Docker."
  ],
}


];

export const learning = [
  {
    title: "GraphQL",
    description:
      "Aprendiendo los fundamentos de GraphQL para crear APIs más flexibles y eficientes. Explorando consultas, mutaciones, suscripciones y la integración con React.",
    tags: ["GraphQL", "API", "React", "Fullstack"],
    date: "Julio 2025",
    image: "/experiencia/graphql.png",
  },
  {
    title: "Kubernetes",
    description:
      "Explorando Kubernetes para la orquestación de contenedores y la gestión de aplicaciones escalables, aprovechando conocimientos previos de Docker.",
    tags: ["Kubernetes", "Containers", "DevOps"],
    date: "Agosto 2025",
    image: "/experiencia/kubernets.png",
  },
  {
    title: "Apache Kafka",
    description:
      "Aprendiendo a usar Apache Kafka para la transmisión de datos en tiempo real, integración con sistemas distribuidos y manejo de flujos de eventos en aplicaciones modernas.",
    tags: ["Kafka", "Streaming", "Event-Driven", "Data Pipelines"],
    date: "Septiembre 2025",
    image: "/experiencia/kafka.svg",
  },
];
