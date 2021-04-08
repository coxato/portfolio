import { projectsImgs, lngLogo } from '../../utils/imagesDict';

const technologies = {
    react:      { name: 'React.js', logo: lngLogo['react'], logoSize: 25 },
    node:       { name: 'Node.js', logo: lngLogo['node'], logoSize: 25 },
    mongo:      { name: 'MongoDB', logo: lngLogo['mongoDB'], logoSize: 12 },
    python:     { name: 'python', logo: lngLogo['python'], logoSize: 25 },
    express:    { name: 'Express.js', logo: lngLogo['express'], logoSize: 25 },
    js:         { name: 'VanillaJS (ES6, ES7)', logo: lngLogo['javascript'], logoSize: 25 },
    htmlAndCss: { name: 'HTML-CSS', logo: lngLogo['html_and_css'], logoSize: 25 },
    socket:     { name: 'Socket.io', logo: lngLogo['socketio'], logoSize: 25 },
    nextjs:     { name: 'Next.js', logo: lngLogo['nextjs'], logoSize: 25 },
    mysql:      { name: 'MySQL', logo: lngLogo['mysql'], logoSize: 25 },
}

const { 
    react, 
    nextjs, 
    mysql, 
    express, 
    // python, 
    // node, 
    // mongo, 
    // js, 
    // htmlAndCss, 
    // socket
} = technologies;

export const projects = [
    {
        name: 'Mercadoabierto',
        photo: projectsImgs['mercadoabierto'],
        technologies: [ nextjs, express, mysql ],
        url: 'https://mercadoabierto.vercel.app/',
        code: 'https://github.com/coxato/mercadoabierto'
    },
    {
        name: 'Img2save',
        photo: projectsImgs['img2save'],
        technologies: [ react ],
        url: 'http://img2save.vercel.app/',
        code: 'https://github.com/coxato/img2save'
    },
    {
        name: 'nested-selects-react',
        photo: projectsImgs['nestedSelectsReact'],
        technologies: [ react ],
        url: 'https://coxato.github.io/nested-selects-react/',
        code: 'https://github.com/coxato/nested-selects-react'
    },
    // {
    //     name: 'MasPlay',
    //     photo: projectsImgs['masplay'],
    //     technologies: [ react, node, express, mongo ],
    //     url: 'http://masplay.now.sh/',
    //     code: 'https://github.com/coxato/videogames-room'
    // },
    // {
    //     name: 'Guárico',
    //     photo: projectsImgs['guarico'],
    //     technologies: [ htmlAndCss, js, python ],
    //     url: 'https://carlosedua.pythonanywhere.com/',
    //     code: 'https://github.com/coxato/guarico.com'
    // },
    // {
    //     name: 'Chat messages',
    //     photo: projectsImgs['chat'],
    //     technologies: [ react, node, express, socket ],
    //     url: 'https://react-chat-carlosedua.netlify.app/',
    //     code: 'https://github.com/coxato/socket.io-chat-client'
    // },
    // {
    //     name: 'nested-selects',
    //     photo: projectsImgs['nestedSelects'],
    //     technologies: [ js ],
    //     url: 'https://github.com/coxato/nested-selects.js',
    //     code: 'https://github.com/coxato/nested-selects.js'
    // },

    
]