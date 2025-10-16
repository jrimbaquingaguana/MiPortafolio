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
      "Aplicación móvil para la exploración turística en Ecuador, resaltando la interculturalidad entre pueblos y culturas.",
      "Integración de Realidad Aumentada (AR) y Realidad Virtual (VR) para visualizar puntos turísticos de forma inmersiva.",
      "Incluye itinerarios personalizados, álbum de recuerdos y selección interactiva de lugares turísticos.",
      "Multilenguaje (Español, Inglés, Francés, Portugués) para mayor alcance cultural.",
      "Desarrollada con Flutter y Firebase, con integración de APIs de Google Maps y Traductor.",
      "Ofrece orientación en tiempo real y experiencias accesibles e inclusivas para viajeros."
    ],
  },
  {
    title: "EurekaBank – Tu Banca Digital de Confianza",
    github: "https://github.com/jrimbaquingaguana/Proyecto_Construccion",
    description: [
      "Aplicación bancaria distribuida basada en microservicios con Spring Boot y Eureka.",
      "Microservicios para depósitos, retiros, transferencias, consultas y movimientos de clientes.",
      "Diseño multiplataforma con clientes móvil (Kotlin), web, consola y escritorio en Java.",
      "Contenedorización de servicios mediante Docker y Docker Compose.",
      "Integración con Jenkins para CI/CD y despliegue automatizado en entornos controlados."
    ],
  },
  {
    title: "Página Web para consumo de modelo de Inteligencia Artificial",
    github: "https://github.com/jrimbaquingaguana/Front_tesis",
    description: [
      "Frontend desarrollado con React y Vite para interactuar con un modelo de IA.",
      "Autenticación segura con límite de intentos fallidos para reforzar la seguridad.",
      "Gestión de usuarios, roles y permisos con control de acceso basado en roles.",
      "Historial de uso con visualización de registros y resultados de predicciones.",
      "Dashboard administrativo con métricas y logs en tiempo real."
    ],
  },
  {
    title: "API Backend para detección de Ciberacoso con Inteligencia Artificial",
    github: "https://github.com/jrimbaquingaguana/Back_tesis",
    description: [
      "API REST desarrollada con Flask para detección de ciberacoso y análisis de mensajes.",
      "Modelo IA basado en LightGBM + BERT para clasificar mensajes en Normal, Cibersexting o CiberGrooming.",
      "Preprocesamiento y limpieza de texto con NLTK y Unidecode.",
      "Gestión de usuarios con autenticación segura (bcrypt) y control de roles.",
      "Auditoría completa de acciones y persistencia en MongoDB.",
      "Contenedorización con Docker y orquestación con Docker Compose."
    ],
  },
  {
    title: "Sistema Backend de Gestión de Sensores con Autenticación y Notificaciones",
    github: "https://github.com/jrimbaquingaguana/Prueba_Tecnica_Back_Sensor",
    description: [
      "Backend modular desarrollado con NestJS para gestión y monitoreo de sensores IoT.",
      "Autenticación segura con JWT, recuperación de contraseñas y envío de correos vía Mailtrap.",
      "Módulo de sensores para tipos de temperatura, humedad y combinados.",
      "Validación de datos con class-validator y arquitectura basada en módulos independientes.",
      "Comunicación en tiempo real mediante WebSockets para transmisión de lecturas y eventos.",
      "Tecnologías principales: NestJS, TypeScript, Node.js, Mailtrap."
    ],
  },
  {
    title: "Sistema Frontend en React para Monitoreo en Tiempo Real de Sensores",
    github: "https://github.com/jrimbaquingaguana/Prueba_Tecnica_FullStack/tree/main/sensor-front",
    description: [
      "Interfaz desarrollada con React y Vite para visualización y control de sensores IoT.",
      "Integración con backend NestJS mediante API REST y WebSockets (Socket.IO) para datos en tiempo real.",
      "Gráficos y métricas interactivas con Recharts y react-circular-progressbar.",
      "Gestión global del estado con Redux Toolkit (autenticación, sensores, tema visual).",
      "Generación de reportes PDF personalizados con jsPDF y html2canvas.",
      "Soporte para modo claro/oscuro y arquitectura basada en componentes reutilizables."
    ],
  },
  {
    title: "Examen 3er Parcial – Aplicaciones Basadas en el Conocimiento",
    github: "https://github.com/jrimbaquingaguana/ExamenBasadas_3Parcial",
    description: [
      "Proyecto de detección de objetos utilizando Python y Deep Learning.",
      "Uso de Arucos para delimitar áreas y activar alertas al detectar intrusiones.",
      "Implementación de visión artificial con OpenCV 4.5.5 y TensorFlow 2.17.0.",
      "Aplicación práctica de IA para monitoreo de zonas mediante análisis visual automatizado."
    ],
  },
  {
  title: "Comando de Control – Sistema Full Stack de Monitoreo y Automatización",
  github: "https://github.com/jrimbaquingaguana/PracticasWeb/tree/main",
  description: [
    "Sistema Full Stack para monitoreo y control de redes con backend en Node.js y frontend en React.",
    "Backend desarrollado con Express y WebSockets para comunicación en tiempo real.",
    "Gestión de usuarios con registro, login y seguridad mediante bcrypt.",
    "Generación automática de scripts PowerShell y descarga directa desde el frontend.",
    "Monitoreo de estado de redes con ejecución de procesos en segundo plano (ncat) y visualización en tiempo real.",
    "Frontend en React con dashboard interactivo, tabla de redes, botones de acción y modo oscuro/neón.",
    "Integración completa entre frontend y backend, con rutas privadas y control de autenticación.",
    "Uso de Axios para consumo de API, manejo de estados con useState y efectos con useEffect."
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
