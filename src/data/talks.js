const talks = [
  {
    isTalk: false,
    title: 'Registro de asistentes',
    startDate: '08:00',
    endDate: '09:05',
  },
  {
    isTalk: true,
    isInformative: true,
    title: 'Bienvenida a los Participantes',
    startDate: '09:05',
    endDate: '09:15',
    abstract: '',
    speakers: [
      {
        name: 'Matheus Tait',
        role: 'Manager Director Thoughtworks Ecuador',
      },
      {
        name: 'Luisa Emme',
        role: 'Head of Technology ThoughtWorks Ecuador'
      }
    ]
  },
  {
    backendCode: 220,
    isTalk: true,
    isWelcome: false,
    isKeyNote: true,
    title: 'Achieving Business Agility',
    startDate: '09:20',
    endDate: '10:20',
    abstract: 'A major point of contention between IT departments and their business counterparts, be they internal users or product managers, is the lack of responsiveness to change in IT systems. How these systems got to this condition is one question, but this talk addresses the issue of how to change the situation. Making a system maintainable requires new tools and processes. This talk will describe the various techniques -- such as continuous design, continuous delivery and evolutionary architecture -- that transform a system to one that can be readily enhanced and provide the warning mechanisms that prevent inadvertent drift back into the mud.',
    speakers: [
      {
        name: 'Rebecca Parsons',
        role: 'Chief Tecnology Officer ThoughtWorks ',
        image: 'rebcca_p.jpg'
      }
    ]
  },
  {
    backendCode: 735,
    isTalk: true,
    title: 'Deploying microservices using elastic infrastructure in Google Kubernetes Engine',
    startDate: '10:25',
    endDate: '10:55',
    abstract: 'The way development teams use to deploy their applications has been changing a lot in the latest years. Besides having an automated continuous delivery pipeline and integrating code frequently, with the DevOps movement many tasks that were infrastructure related start being part of a developer\'s daily routine.\n' +
      '\n' +
      'Many times the usage of automated provisioning scripts with tools like Vagrant, Chef and Puppet are not enough to achieve the needs of big companies that want to stay ahead of the competition and ensure a good time to market. In this scenario, the advent of containers and orchestration platforms like Docker and Kubernetes gives enough abstraction and flexibility to gain control over the overall deployment with better performance and scaling.\n' +
      '\n' +
      'We want to share our experiences using Kubernetes in Google Cloud Platform for Latam Airlines, its potential to reduce operational costs and give more control to the developers. Also, we are going to cover what changes in the developer role as they have more power and responsibility over the deployment.',
    speakers: [
      {
        name: 'Alexandre Goedert',
        role: 'Head of Technology Chile',
        image: 'alexander_g.jpg'
      },
      {
        name: 'Jonnatan Oyarzún',
        role: 'Software Engineer LATAM Airlines',
        image: 'jonnatan_o.jpg'
      }
    ]
  },
  {
    isTalk: false,
    title: 'Break ',
    startDate: '10:55',
    endDate: '11:05',
  },
  {
    backendCode: 945,
    isTalk: true,
    title: 'Physical, Now Digital: Intelligent Glove, Success story',
    startDate: '11:15',
    endDate: '11:45',
    abstract: 'Across every segment industry, we’re seeing physical processes being changed, replaced or enhanced with digital ones. The shift to digital isn’t simply about replacing physical activities: it’s about improving on them. The key challenge to thrive in this new world is to understand how to apply modern software development approaches to ecosystems with physical devices — to bridge the gap between hardware and software.\n' +
      '\n' +
      'The first step in starting a journey of digital transformation is to find new ways to solve real business problems using emerging technologies.\n' +
      '\n' +
      'It\'s a pleasure to present case of smart ecosystem in practice, Glove project. \n' +
      'The innovation project has wearable technology and two central elements, software and hardware. Equipped with automation and fast prototype Smart Glove which aims more inclusively digital to enhance visually impaired to "see" pictures at place strongly visual, like museums.',
    speakers: [
      {
        name: 'Desiree Santos',
        role: 'Senior Consultant Developer ThoughtWorks Brasil',
        image: 'desiree_s.jpg'
      }
    ]
  },
  {
    backendCode:102,
    isTalk: true,
    title: 'Continuous Intelligence: Automatización de la cadena de despliegue de Machine Learning',
    startDate: '11:50',
    endDate: '12:20',
    abstract: 'La naturaleza de las aplicaciones que tienen un modelo entrenado de Machine Learning nos lleva a enfocarnos en automatizar otros procesos que son propios de este tipo de aplicaciones, como lo es el entrenamiento del modelo.\n' +
      'En esta charla queremos explicar el diseño y creación de un pipeline de entrenamiento para un modelo muy simple de Machine Learning que nos permitirá automatizar y versionar la experimentación de ese modelo. ',
    speakers: [
      {
        name: 'Andrés Salazar',
        role: 'Consultant Developer ThoughtWorks Ecuador',
        image: 'andres_s.jpg'
      },
      {
        name: 'Iván Pazmiño',
        role: 'Engineer Principal, Intelligent Empowerment Country Lead, ThoughtWorks Ecuador',
        image: 'ivan_p.jpg'
      }
    ]
  },
  {
    backendCode: 305,
    isTalk: true,
    title: 'Monitoreo y Análisis Sintético: Caso de Estudio',
    startDate: '12:25',
    endDate: '12:55',
    abstract: 'La historia que tu aplicación cuenta puede ser muy diferente de aquella que sus logs y datos de analítica contarían. ¿Cómo pueden estas dos narrativas juntarse y relatar una historia aún mejor y que esta sea más gratificante y satisfaciente para el lado de negocios y el lado tecnológico? En esta charla investigaremos como la técnica del monitoreo sintético puede apoyarse de los logs de aplicación para proveer una mejor manera de entender lo que realmente nos quiere decir nuestro ambiente de producción.',
    speakers: [
      {
        name: 'David Corrales',
        role: 'Consultant Developer ThoughtWorks Ecuador',
        image: 'david_c.jpg'
      },
      {
        name: 'Fanny Barco',
        role: 'Quality Analyst ThoughtWorks Ecuador',
        image: 'fanny_b.jpg'
      },
      {
        name: 'Michaell Gonzales',
        role: 'Quality Analyst ThoughtWorks Ecuador',
        image: 'michell_g.jpg'
      }
    ]
  },
  {
    isTalk: false,
    title: 'Lunch',
    startDate: '12:55',
    endDate: '13:35',
  },
  {
    backendCode: 1024,
    isTalk: true,
    title: 'DevOps y Plataformas Digitales de la A a la Z',
    startDate: '13:40',
    endDate: '14:10',
    abstract: 'La Transformación Digital y la Nube han popularizado, aún más que antes, los términos Plataforma y DevOps. En la actualidad, ambas palabras se utilizan ampliamente para referirse a distintas cosas. Por ejemplo, vemos la palabra plataforma relacionada con proveedores de la nube (Google Cloud Platform, Azure), plataforma como servicio en la nube (Heroku, App Engine, AWS Beanstalk), plataforma como modelo de negocio (Uber, Facebook, Alibaba), productos o servicios en la nube (Auth0, Salesforce, CircleCI), entre muchos otros más. Por otro lado, la palabra DevOps ha sido utilizada para referirse a nuevos roles o perfiles (DevOps Engineer), tecnologías relacionadas a la automatización de infraestructura (Ansible, Terraform, Docker), competencias que unen la administración de sistemas y el desarrollo de software, herramientas de CI/CD, e incluso DevOps como una cultura. Creemos necesario establecer un lenguaje común que nos permita llevar a las organizaciones un paso más cerca de la era digital. Es por eso que, a través de esta charla, abordaremos los conceptos de “Plataforma Digital” y “Cultura DevOps” en el contexto de la tan popular y anhelada Transformación Digital.',
    speakers: [
      {
        name: 'Luisa Emme',
        role: 'Head of Technology ThoughtWorks Ecuador',
        image: 'luisa_e.jpg'
      }
    ]
  },
  {
    backendCode: 1234,
    isTalk: true,
    title: 'Desafíos de innovar y evolucionar aplicaciones móviles en una aerolínea ',
    startDate: '14:15',
    endDate: '14:45',
    abstract: 'En los últimos años hemos visto como las tecnologías móviles han desempeñado un papel fundamental en la comunicación entre empresas y sus clientes, y sabemos que seguirá siendo cada vez más importante. En LATAM, el pasajero es el foco de nuestras decisiones y, a través de excelencia en software y soluciones digitales innovadoras buscamos ofrecer la mejor experiencia a nuestros pasajeros posicionándonos como una empresa que está a la vanguardia en tecnología, para eso, nos enfocamos en el desarrollo de aplicaciones nativas (Android y iOS) para ofrecer siempre la mejor experiencia a nuestros clientes. En esta charla vamos a hablar como logramos compatibilizar el desarrollo de features Innovadoras como la de Realidad Aumentada junto con la premisa de "do the basic right", para así lograr ofrecer una App robusta e innovadora.',
    speakers: [
      {
        name: 'Cristian Tumani',
        role: 'Senior Product Owner LATAM Airlines',
        image: 'cristian_t.jpg'
      },
      {
        name: 'Phellipe Silva',
        role: 'Senior Consultant Developer ThoughtWorks Brazil',
        image: 'phellipe_s.jpg'
      }
    ]
  },
  {
    backendCode: 34,
    isTalk: true,
    title: 'Implementando una arquitectura orientada a eventos usando Kafka',
    startDate: '14:50',
    endDate: '15:20',
    abstract: 'Las arquitecturas orientadas a eventos nos ayudan a modelar procesos de negocios complejos en los cuales necesitamos responder a múltiples acciones y muchas veces desencadenar otras. Sin embargo, el implementar este tipo de arquitectura puede presentar muchos desafíos.\n' +
      '\n' +
      'En esta charla hablaremos de nuestra experiencia implementando una Arquitectura Orientada a Eventos. Partiremos por explicar qué elementos de estas arquitecturas estamos utilizando, como Event Sourcing y Event Notification. Introduciremos algunos conceptos generales de Kafka, sus beneficios, desafíos y nuestras lecciones aprendidas. ',
    speakers: [
      {
        name: 'Pablo Correa',
        role: 'Consultant Developer ThoughtWorks Ecuador',
        image: 'pablo_c.jpg'
      },
      {
        name: 'Álvaro Hernandez',
        role: 'Consultant Developer ThoughtWorks Chile',
        image: 'alvaro_h.jpg'
      }
    ]
  },
  {
    isTalk: false,
    title: 'Break',
    startDate: '15:20',
    endDate: '15:30'
  },
  {
    backendCode: 564,
    isTalk: true,
    title: 'Arquitectura Evolutiva: Apoyando al cambio constante',
    startDate: '15:35',
    endDate: '16:05',
    abstract: 'Tradicionalmente, la arquitectura de software ha sido vista como un elemento descriptivo de cómo los sistemas deben construirse. Este proceso de generación de planos es basado en muchos supuestos, que al momento de la construcción son desmentidos o nunca se producen, adicionalmente estamos en un ecosistema muy cambiante en el que no podemos anticipar lo que sucederá y es por ello que es necesaria una visión y un enfoque evolutivo que considere el cambio no solo como un hecho, sino como algo deseado. En esta charla veremos como crear arquitecturas de software que puedan evolucionar en el tiempo.',
    speakers: [
      {
        name: 'Fausto de la Torre',
        role: 'Head of Technology ThoughtWorks Ecuador',
        image: 'fausto_t.jpg'
      },
      {
        name: 'Ana Tellería',
        role: 'Senior Consultant Developer ThoughtWorks Ecuador',
        image: 'ana_t.jpg'
      }
    ]
  },
  {
    backendCode: 732,
    isTalk: true,
    title: 'Do this first: Choices and options to start your mobile project',
    startDate: '16:10',
    endDate: '16:40',
    abstract: 'Even in the most agile project, some decisions have to be made early, and are hard to change later.  The biggest, earliest, hardest-to-change decision in a mobile project is which toolchain to use for building your app, and the best choice depends on many factors.\n' +
      '\n' +
      'We will discuss the current mobile ecosystem in Ecuador and around the world, the benefits and drawbacks of the most popular tools for mobile development, and what you need to know about your business and your project in order to make the right choices at the very beginning.',
    speakers: [
      {
        name: 'Gabriela Cobo',
        role: 'Business Analyst ThoughtWorks Ecuador',
        image: 'grabriela_c.jpg'
      },
      {
        name: 'Jorge Rodríguez',
        role: 'Consultant Developer ThoughtWorks Ecuador',
        image: 'jorge_r.jpg'
      },
      {
        name: 'Michael Chaffee',
        role: 'Lead Consultant ThoughWorks North America',
        image: 'michael_c.jpg'
      }
    ]
  },
  {
    backendCode: 901,
    isTalk: true,
    title: 'The New Face of IT: the role of technology and agility in modern organizations',
    startDate: '16:45',
    endDate: '17:15',
    abstract: 'The traditional IT department is gone. Nowadays we watch technology and market cycles move faster and faster. New technology brings new ways to interact with people and consumer demands are on the rise. Christensen\'s Innovation Dilemma is as vivid as ever in organizations at large. How to survive - and thrive - in a so dynamic world, where successful companies last for 15 years instead of 60?\n' +
      '\n' +
      'Without a question, the technology strategy a company deploys is key and we see the software delivery ecosystem getting more complex by the day. The days when you could just buy a whole suite of solutions from one vendor are long gone: it is clear that companies must embrace complexity in its fullest in several different dimensions. Besides, our industry has seen enormous success in agile methods; we now face the challenge of scaling those principles to the whole enterprise.\n' +
      '\n' +
      'We will discuss how companies must embrace these values beyond their development teams, combining the organizational structure with technology, processes and culture to foster true innovation, learning and reinvention.',
    speakers: [
      {
        name: 'Alexey A. Villas Boas',
        role: 'Head of Technology ThoughtWorks Brasil',
        image: 'alexey_v.jpg'
      }
    ]
  },
  {
    isTalk: true,
    isInformative: true,
    isOpenSpace: true,
    title: 'Indicaciones Open Space',
    startDate: '17:15',
    endDate: '17:20',
    abstract: "Tendrás la posibilidad de eligir un tema referente a tendencias tecnológicas. Tendremos una platarforma en dónde podrás votar por el tema que más te interese. Te daremos más instrucciones el día de la conferencia. ",
  },
  {
    isTalk: false,
    title: 'Open Space: Panel de preguntas a los speakers',
    startDate: '17:35',
    endDate: '18:00',
    abstract: "Tendrás la posibilidad de eligir un tema referente a tendencias tecnológicas. Tendremos una platarforma en dónde podrás votar por el tema que más te interese. Te daremos más instrucciones el día de la conferencia. ",
  },
  {
    isTalk: false,
    title: 'Palabras de cierre del evento y agradecimiento a speakers. Invitación al coctel de cierre',
    startDate: '18:05',
    endDate: '18:10',
  },
  {
    isTalk: false,
    title: 'Coctel de cierre, espacio de Networking',
    startDate: '18:10',
    endDate: '18:30',
  }
]

export default talks
