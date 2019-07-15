const speakers = [
  {
    name: 'Martin Fowler',
    description:
      "Martin, reconocido autor, consultor de software y ponente, tiene dos décadas de experiencia ayudando a corporaciones a cumplir sus requerimientos críticos utilizando la tecnología. Él fue uno de los autores del Manifiesto Ágil para el Desarrollo de Software, y ha escrito siete libros premiados acerca de desarrollo de software. Además, es un expositor reconocido en conferencias internacionales.",
    work: '',
    role: 'Chief Scientist',
    url: 'https://www.thoughtworks.com/profiles/martin-fowler/',
    image: 'martin-fowler'
  },
  {
    name: 'Luisa Emme',
    description:
      "Electrónica de profesión y apasionada por el desarrollo de software. Con 3 años y medio de experiencia en consultoría y desarrollo junto a Thoughtworks, he participado en proyectos con diversas áreas de negocio y tecnologías.Soy una amante de la tecnología y la innovación. Estoy activamente involucrada en temas e iniciativas relacionadas al open hardware y al internet de las cosas. He participado también dando charlas y talleres enfocados al desarollo ágil en variados eventos incluyendo el Scrum Gathering Lima, Scrum Day Chile, Ágiles Ecuador, Agile Brazil y el Developer Week New York.Algunos de mis intereses en la actualidad incluyen la Infraestructura como código, DevOps, Arquitecturas Evolutivas y la Nube.",
    work: '',
    role: 'Tech Passionate Consultant Developer',
    url: 'https://thoughtworks.com/',
    image: 'luisa-emme'
  },
  {
    name: 'Fausto de la Torre',
    description:
      'Fausto De La Torre trabaja en Thoughtworks como Head of Technology de la región de los Andes, liderando y ejecutando la estrategia tecnológica dentro de la región andina, ayuda a liberar el potencial de los equipos de Thoughtworks buscando soluciones más efectivas para llevar a sus clientes al siguiente nivel. Fausto ha trabajado como arquitecto y desarrollador de software en varias verticales de la industria en diferentes metodologías por más de una década lo que le ha permitido ampliar el espectro tanto en el mundo ágil como tradicional.',
    work: '',
    role: 'Head of Technology de ThoughtWorks Andes',
    url: 'https://faustodelatorre.com/about/',
    image: 'fausto-delatorre'
  },
  {
    name: 'Luiza Nunes',
    description:
      "Luiza Nunes es Tecnóloga en Bases de Datos, actualmente trabajando como Gerente de Proyectos Agile en ThoughtWorks Brasil. Durante sus 5 años en la compañía, tuvo la oportunidad de trabajar como Ingeniera de Pruebas, Líder de Desarrollo de Capacidades y Liderazgo y actualmente lidera equipos distribuidos con LATAM Airlines. Antes de unirse a ThoughtWorks, trabajó como desarrolladora de software en el Instituto Nacional Brasileño de Investigaciones Espaciales, durante dos años.",
    work: '',
    role: 'Quality Advocate',
    url: 'https://www.thoughtworks.com/profiles/luiza-nunes',
    image: 'luiza-nunes'
  },
  {
    name: 'Julio Castellón',
    description:
      'Julio Castellón es actualmente Gerente de Entrega en LATAM Airlines. Su carrera en la empresa comenzó hace 10 años como el único administrador de sistemas para el sitio web de LAN.com, cuando el equipo digital comenzó a crecer exponencialmente. Durante su trabajo en LATAM siempre en el lado operativo del grupo de TI, Julio ha liderado proyectos como la automatización del aprovisionamiento de infraestructuras, mejorar la escalabilidad y alta disponibilidad del sitio web y el año pasado se ha centrado en ampliar la cultura devops dentro de la empresa. Antes de unirse a LATAM trabajó como administrador de sistemas para la Facultad de Ingeniería (FCFM) de la Universidad de Chile, donde también obtuvo su título.',
    work: 'LATAM',
    role: 'Gerente de Entrega en LATAM',
    url: '',
    image: 'julio-castellon'
  },
  {
    name: 'Pamela Plúas',
    description:
      'Pame Plúas es una desarrolladora guayaquileña. Tiene 4 años de experiencia en desarrollo, de los cuales 1 año y medio pertenece a Thoughtworks. Tiene experiencia como Front End Developer y ha trabajado en varios proyectos en React y ahora en Redux. Apasionada por la igualdad de género y por conocer más mujeres que amen el desarrollo, le encanta leer, el desarrollo web y aprender nuevas tecnologías.',
    work: '',
    role: 'Consultant Developer',
    url: 'https://thoughtworks.com/',
    image: 'pamela-pluas'
  },
  {
    name: 'Felipe Gómez',
    description:
      'Chileno, 32 años respirando, 20 desde mi primer código, 10 desarrollando de verdad, 7 agilizando culturas, 1 como ThoughtWorker, y para los próximos el plan es seguir cambiando el mundo en esta hermosa compañía de 100 años, hasta dejar de respirar.',
    work: '',
    role: 'Software Development Consultant',
    url: 'https://thoughtworks.com/',
    image: 'felipe-gomez'
  },
  {
    name: 'Karina Mora',
    description:
      'Karina Mora, Ing. de Sistemas Informáticos, desarrolladora de software en Thoughtworks, con 6 años de experiencia en desarrollo de software y docencia. Ha tenido la oportunidad de trabajar en equipos distribuidos e interculturales aplicando desarrollo ágil de aplicaciones usando BDD, TDD y ATDD, asi como integración y entrega continua. Se siente motivada por temas de coaching, desarrollo de capacidades, asi como liderazgo técnico. Le interesa participar en el desarrollo de la comunidad de mujeres en tecnología en el país. Adicionalmente, en su radar se encuentra el desarrollo con lenguajes funcionales y el análisis de volúmenes grandes de datos con la práctica de metodologías ágiles. Entre los lenguajes más usados por ella se encuentran Python, Java, C#, Javascript y Ruby.',
    work: '',
    role: 'Lead Consultant Developer',
    url: 'https://thoughtworks.com/',
    image: 'karina-mora'
  },
  {
    name: 'Rodrigo Vallejo',
    description:
      'Rodrigo ha trabajado como arquitecto y desarrollador de software en varias areas de la industria con diferentes metodologías por más de 12 años lo que le ha permitido ampliar el espectro tanto en el mundo ágil como tradicional.',
    work: '',
    role: 'Lead Consultant Developer',
    url: 'https://thoughtworks.com/',
    image: 'rodrigo-vallejo'
  },
  {
    name: 'Gabriela Chasifán',
    description:
      'Gabriela Chasifán, Desarrolladora de Software en Thoughtworks, 7 años de experiencia en desarrollo e implementación de aplicaciones. Experiencia con desarrollo ágil aplicado a equipos distribuidos. Apasionada por temas relacionados a diversidad y equidad de género.',
    work: '',
    role: 'Consultant Developer',
    url: 'https://thoughtworks.com/',
    image: 'gabriela-chasifan'
  },
  {
    name: 'Carlos Fuentes',
    description:
      'Carlos Fuentes es un consultor/desarrollador con más de 10 años de experiencia en el desarrollo de software.  Estudió investigación e innovación en informática donde trabajo en temas de optimización de algoritmos en grafos. En los últimos dos años, su principal interés ha sido enfocado al análisis algoritmos de machine learning y deep learning.',
    work: '',
    role: 'Consultant Developer',
    url: 'https://thoughtworks.com/',
    image: 'carlos-fuentes'
  },
  {
    name: 'Rebecca Karasik',
    description:
      'Rebecca es diseñadora de experiencia que se especializa en investigaciones y pruebas de usuario y en diseño enfocado en el humano. Mucha de su experiencia está en diseñar productos para usuarios con menos recursos o con menos acceso a nuevas tecnologías. A Rebecca le apasiona la igualdad de acceso a sistemas de salud y justicia reproductiva. Además le encantan los rompecabezas lógicos.',
    work: '',
    role: 'Experience Designer',
    url: 'https://thoughtworks.com/',
    image: 'rebecca-karasik'
  },
  {
    name: 'Diego Villacís',
    description:
      'Diego Villacís es un desarrollador y consultor en ThoughtWorks Quito, donde ha trabajado con tecnologías como Java, Ruby, Javascript entre otros. Le apasiona los temas de DevOps, desarrollo móvil y la programación funcional. Él busca seguir siempre los principios ágiles y disfruta pasar su tiempo aprendiendo sobre las nuevas tendencias en la tecnología. Temido centro delantero al momento de jugar fútbol con sus amigos.',
    work: '',
    role: 'Consultant Developer',
    url: 'https://thoughtworks.com/',
    image: 'diego-villacis'
  },
  {
    name: 'Vinicius Fernandes',
    description: 'Vinícius Fernandes es un consultor de TW Brasil que está en Ecuador hablando portuñol desde fines de 2016. Ha trabajado con Desarrollo de Software un poco más de tres años, siendo dos en ThoughtWorks trabajando con la entrega de Microservicios, principalmente en Java y también proyecto front end con KnockoutJS y React.',
    work: '',
    role: 'Consultant Developer',
    url: 'https://thoughtworks.com/',
    image: 'vinicius-fernandes'
  },
  {
    name: 'Jorge Dominguez',
    description:
      'Es diseñador de productos y servicios, con experiencia en desarrollo de aplicaciones moviles y videojuegos en los que ha ganado reconocimientos en Ecuador, Chile y Austrlia por sus trabajos. En los ultimo años ha comenzado a incursionar en areas de interacción humano - maquina proponiendo nuevas formas para desarrollar proyectos con estas nuevas tecnologias.',
    work: '',
    role: 'Consultant XD',
    url: 'https://thoughtworks.com/',
    image: 'jorge-dominguez'
  },
  {
    name: 'Nilet Soto',
    description:
      'Ingeniera informática de profesión, ha trabajado como gerente y analista de proyectos en varias áreas de la industria de software. Con 12 años de experiencia en el uso de diferentes enfoques y metodologías de desarrollo; y el último año como miembro de equipos ágiles en Thoughtworks Ecuador. Ha trabajado además como docente, impartiendo materias de ingeniería y gestión de software. Le encanta trabajar con proyectos de diferentes dominios de negocio y vivir la experiencia de llevar una "idea" a un producto que entregue valor a un usuario final usando las tecnologías de la información y las comunicaciones.',
    work: '',
    role: 'Senior Business Analyst',
    url: 'https://thoughtworks.com/',
    image: 'nilet-soto'
  },
  {
    name: 'Jennifer Carrillo',
    description:
      'Estudié Ingeniería en Sistemas e ingresé a Thoughtworks hace ocho meses como desarrolladora. Mi primer acercamiento a la empresa fue hace tres años en un evento enfocado a las mujeres en la programación. Hace unos meses, tuve la oportunidad de viajar a India para un programa de capacitación donde desarrollé mis habilidades técnicas; al igual, que fue una experiencia enriquecedora por la búsqueda de la justicia de género. Así mismo, he trabajado en proyectos enfocados a aerolíneas aplicando metodologías ágiles. Me interesa mucho el desarrollo web y la seguridad en las aplicaciones. Emocionada por conocer más mujeres en el mundo de la tecnología.',
    work: '',
    role: 'Consultant Developer',
    url: 'https://thoughtworks.com/',
    image: 'jennifer-carrillo'
  }
]

export default speakers
