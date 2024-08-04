
module.exports = {
navLinks: [
  // {
  //   name: 'Hola',
  //   url: '/#hola',
  // },
    {
      name: 'Sobre mi',
      url: '/#sobremi',
    },
    {
      name: 'Trabajos',
      url: '/#trabajos',
    },
    {
      name: 'Contacto',
      url: '/#contacto',
    },
  ],
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Cfonta1986',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/cristian-fontanini/',
    },
  ],
  email: 'cristianfonta16@gmail.com',
  navDelay: 1000,
  loaderDelay: 2000,

  KEY_CODES: {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_LEFT_IE11: 'Left',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_RIGHT_IE11: 'Right',
  ARROW_UP: 'ArrowUp',
  ARROW_UP_IE11: 'Up',
  ARROW_DOWN: 'ArrowDown',
  ARROW_DOWN_IE11: 'Down',
  ESCAPE: 'Escape',
  ESCAPE_IE11: 'Esc',
  TAB: 'Tab',
  SPACE: ' ',
  SPACE_IE11: 'Spacebar',
  ENTER: 'Enter',
},

srConfig: (delay = 200, viewFactor = 0.25) => ({
  origin: 'bottom',
  distance: '20px',
  duration: 500,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
}),

featureProjects: [
  {
    title: 'Profe en casa',
    cover: '/profeencasa.png',
    github: 'https://github.com/Cfonta1986',
    external: 'https://www.profeencasa.online',
    descriptionHtml:
      'Chat Bot creado para ayudar de manera personalizada al alumno y al docente. Realizado con sistema de autenticación y Base de Datos. <a target="_blank" rel="noreferrer" href="https://www.profeencasa.online">Probalo!</a> ',
    techs: ['MongoDB', 'Typescript', 'OpenAi API', 'Next-Auth', 'TailWind'],
  },
  {
    title: 'Curriculum v1',
    cover: '/cv-viejo.png',
    github: 'https://github.com/Cfonta1986/cv_cristian',
    external: 'https://cv-cristian-deploy.vercel.app/',
    descriptionHtml:
      'Primer versión de Curriculum personal, realizado solo con React y Styled Components.',
    techs: ['React', 'Javascript', 'Styled Components', 'Material UI'],
  }
],

}