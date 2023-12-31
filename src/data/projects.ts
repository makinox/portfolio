export enum ProjectKind {
  Web = 'Web',
  Game = 'Game',
  Native = 'Native',
  Library = 'Library',
  Old = 'Old',
  All = 'All',
}

const projects = [
  {
    title: 'Blog',
    repo: 'https://github.com/makinox/blog',
    app: 'https://voib.jesusbossa.dev/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img12.avif',
    imageAlt: 'Blog por Jesus bossa',
    techList: ['React', 'Gatsby', 'GraphQl'],
    kind: ProjectKind.Web,
  },
  {
    title: 'Invaders Game',
    repo: 'https://github.com/makinox/invaders-game',
    app: 'https://invaders.jesusbossa.dev/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img25.avif',
    imageAlt: 'Juego de invasores por Jesus bossa',
    techList: ['Vanilla', 'Kaboom'],
    kind: ProjectKind.Game,
  },
  {
    title: 'Crehana Desktop',
    repo: '',
    app: 'https://www.crehana.com/apps',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img22.avif',
    imageAlt: 'Crehana desktop por jesus bossa y el equipo crehana',
    techList: ['Typescript', 'Electron', 'React'],
    kind: ProjectKind.Native,
  },
  {
    title: 'EVA PACS',
    repo: '',
    app: 'https://evacenter.com',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img29.avif',
    imageAlt: 'Eva pacs por el equipo eva y jesus bossa  ',
    techList: ['Typescript', 'React'],
    kind: ProjectKind.Web,
  },
  {
    title: 'Workshop: Data analysis, Server components',
    repo: 'https://github.com/makinox/Workshop-Data-analisis-cloud-server-components',
    app: 'https://data-workshop.jesusbossa.dev/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img31.avif',
    imageAlt: 'Workshop: Developing a football season analysis website using google sheets and firebase hosting by Jesus Bossa',
    techList: ['NextJS', 'Google Sheets'],
    kind: ProjectKind.Web,
  },
  {
    title: 'Random',
    repo: 'https://github.com/makinox/random',
    app: 'https://random.jesusbossa.dev/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img32.avif',
    imageAlt: 'Random por jesus bossa  ',
    techList: ['NextJS', 'DaisyUI', 'TailwindCSS'],
    kind: ProjectKind.Web,
  },
  {
    title: 'Shopping',
    repo: 'https://github.com/makinox/vendure-material-ui-test',
    app: 'https://64a45033f689af007bedfc33--flourishing-mermaid-2850c7.netlify.app/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img33.avif',
    imageAlt: 'Shopping por jesus bossa  ',
    techList: ['Vendure', 'MaterialUI'],
    kind: ProjectKind.Web,
  },
  {
    title: 'Roomes',
    repo: 'https://github.com/makinox/roomes',
    app: 'https://roomes.jesusbossa.dev/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img23.avif',
    imageAlt: 'Roomes por Jesus bossa',
    techList: ['Svelte', 'Typescript'],
    kind: ProjectKind.Web,
  },
  {
    title: 'Space-weight',
    repo: 'https://github.com/makinox/space-weight',
    app: 'https://space-weight.jesusbossa.dev/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img26.avif',
    imageAlt: 'Space-weight por Jesus bossa',
    techList: ['NextJS', 'React', 'Typescript', '3D'],
    kind: ProjectKind.Web,
  },
  {
    title: 'Limons',
    repo: 'https://github.com/makinox/nimonx',
    app: 'https://limons.jesusbossa.dev/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img27.avif',
    imageAlt: 'Limons por Jesus bossa',
    techList: ['NextJS', 'React', 'Typescript', '3D'],
    kind: ProjectKind.Web,
  },
  {
    title: 'D Task',
    repo: 'https://github.com/makinox/solid-contract',
    app: '',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img24.avif',
    imageAlt: 'D Task dapp por Jesus bossa',
    techList: ['Vanilla', 'Solidity', 'Blockchain'],
    kind: ProjectKind.Web,
  },
  {
    title: 'Makinox-g11n',
    repo: 'https://github.com/makinox/makinox-g11n',
    app: '',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img30.avif',
    imageAlt: 'Makinox-g11n libreria por Jesus bossa',
    techList: ['Typescript', 'React', 'Nx'],
    kind: ProjectKind.Library,
  },
  {
    title: 'Makinox-image-creator',
    repo: 'https://github.com/makinox/makinox-image-creator',
    app: 'https://www.npmjs.com/package/@makinox/image-creator',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img21.avif',
    imageAlt: 'Makinox-image-creator libreria por Jesus bossa',
    techList: ['Typescript'],
    kind: ProjectKind.Library,
  },
  {
    title: 'Makinox-tools',
    repo: 'https://github.com/makinox/tools',
    app: 'https://www.npmjs.com/package/@makinox/tools',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img28.avif',
    imageAlt: 'Makinox-utils libreria por Jesus bossa',
    techList: ['Rust', 'Web Assembly'],
    kind: ProjectKind.Library,
  },
  {
    title: 'Makinox-ui',
    repo: 'https://github.com/makinox/makinox-ui',
    app: 'https://makinox-ui.jesusbossa.dev',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img20.avif',
    imageAlt: 'Makinox-ui libreria por Jesus bossa',
    techList: ['React', 'Gatsby', 'GraphQl'],
    kind: ProjectKind.Library,
  },
  {
    title: 'Preview',
    repo: 'https://github.com/makinox/shVideo',
    app: 'https://preview.jesusbossa.dev/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img14.avif',
    imageAlt: 'App de videos por Jesus bossa',
    techList: ['Angular', 'Custom', 'PWA'],
    kind: ProjectKind.Web,
  },
  {
    title: 'Snake Game',
    repo: 'https://github.com/makinox/Snake-game',
    app: 'https://snake.jesusbossa.dev/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img16.avif',
    imageAlt: 'Juego de la culebrita por Jesus bossa',
    techList: ['Vanilla'],
    kind: ProjectKind.Game,
  },
  {
    title: 'Memory Game',
    repo: 'https://github.com/makinox/Memory-game',
    app: 'https://memory.jesusbossa.dev/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img15.avif',
    imageAlt: 'Juego de memoria por Jesus bossa',
    techList: ['Vanilla'],
    kind: ProjectKind.Game,
  },
  {
    title: 'Moose',
    repo: 'https://github.com/makinox/Moose',
    app: 'https://play.google.com/store/apps/details?id=moose.jesusbossa.dev',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img13.avif',
    imageAlt: 'Museo interactivo por Jesus bossa',
    techList: ['React-Native', 'Gatsby', 'GraphQl'],
    kind: ProjectKind.Native,
  },
  {
    title: 'Best pizza',
    repo: 'https://github.com/makinox/Best-pizza',
    app: 'https://bpizza.jesusbossa.dev',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img19.avif',
    imageAlt: 'Aplicacion de pizza por Jesus bossa',
    techList: ['React'],
    kind: ProjectKind.Old,
  },
  {
    title: 'Cereno',
    repo: 'https://github.com/makinox/Cereno',
    app: 'https://cereno.jesusbossa.dev/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img11.avif',
    imageAlt: 'Aplicacion de restaurantes por Jesus bossa',
    techList: ['React', 'Gatsby', 'GraphQl'],
    kind: ProjectKind.Web,
  },
  {
    title: 'Thumb',
    repo: 'https://github.com/makinox/Thumb',
    app: 'https://thumb.jesusbossa.dev/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img18.avif',
    imageAlt: 'Aplicacion de votos por Jesus bossa',
    techList: ['React'],
    kind: ProjectKind.Old,
  },
  {
    title: 'Vtask',
    repo: 'https://github.com/makinox/vtask',
    app: 'https://vtask.jesusbossa.dev/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img17.avif',
    imageAlt: 'Aplicacion de tareas por Jesus bossa',
    techList: ['Vue'],
    kind: ProjectKind.Web,
  },
  {
    title: 'Petigram',
    repo: 'https://github.com/makinox/petigram',
    app: 'https://petgram-front-makinox.makinoxx.now.sh/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img10.avif',
    imageAlt: 'Aplicacion de mascotas por Jesus bossa',
    techList: ['React', 'Hooks', 'GraphQl'],
    kind: ProjectKind.Old,
  },
  {
    title: 'Darys',
    repo: '',
    app: 'https://play.google.com/store/apps/details?id=com.darys.jesusbossa',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img7.avif',
    imageAlt: 'Aplicacion de diario y notas por Jesus bossa',
    techList: ['Ionic', 'Capacitor', 'Angular'],
    kind: ProjectKind.Native,
  },
  {
    title: 'Factiffy',
    repo: '',
    app: 'https://play.google.com/store/apps/details?id=com.jesusbossa.factiffy',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img8.avif',
    imageAlt: 'Aplicacion de red social por Jesus bossa',
    techList: ['Ionic', 'Cordova', 'Angular'],
    kind: ProjectKind.Native,
  },
  {
    title: 'Financial',
    repo: 'https://github.com/makinox/financial',
    app: '',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img9.avif',
    imageAlt: 'Aplicacion de finanzas por Jesus bossa',
    techList: ['Ios', 'Storyboards', 'Pods'],
    kind: ProjectKind.Native,
  },
  {
    title: 'Priorize',
    repo: 'https://github.com/makinox/priorize',
    app: 'https://priorize.jesusbossa.dev/',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img4.avif',
    imageAlt: 'Aplicacion para tareas basicas por Jesus bossa',
    techList: ['ReactJS', 'PWA'],
    kind: ProjectKind.Old,
  },
  {
    title: 'Trips',
    repo: 'https://github.com/makinox/flutter-trips',
    app: 'https://drive.google.com/open?id=16xQ6AhcL--BtdMiLrOAjFTo5G4kvPevU',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img6.avif',
    imageAlt: 'Aplicacion de viajes por Jesus bossa',
    techList: ['Flutter', 'BLoC'],
    kind: ProjectKind.Old,
  },
  {
    title: 'MovieApp',
    repo: 'https://github.com/makinox/moviePlayer',
    app: 'https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40makinox/movieplayer-7392818119eeadcbdd885a0622b7063e-signed.apk',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img5.avif',
    imageAlt: 'Aplicacion para ver trailers de peliculas por Jesus bossa',
    techList: ['React-native', 'Redux'],
    kind: ProjectKind.Old,
  },
  {
    title: 'Utopia',
    repo: '',
    app: 'https://utopia1.herokuapp.com',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img3.avif',
    imageAlt: 'Aplicacion de utopia creada por Jesus bossa',
    techList: ['VanillaJS', 'PWA'],
    kind: ProjectKind.Old,
  },
  {
    title: 'Inventario',
    repo: '',
    app: 'https://inventory.regypos.com',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img2.avif',
    imageAlt: 'Inventario creado por Jesus bossa',
    techList: ['React', 'Redux', 'Bootstrap', 'PWA'],
    kind: ProjectKind.Old,
  },
  {
    title: 'Regypos',
    repo: '',
    app: 'https://www.regypos.com',
    imageSrc: 'https://buck-one.s3.us-south.cloud-object-storage.appdomain.cloud/portfolioImages/projects/projects-img1.avif',
    imageAlt: 'Regypos creado por Jesus bossa',
    techList: ['React', 'Bootstrap', 'PWA'],
    kind: ProjectKind.Old,
  },
];

export type ProjectType = (typeof projects)[0];

export default projects;
