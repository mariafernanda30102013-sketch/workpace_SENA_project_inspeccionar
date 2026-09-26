import { Router } from 'express'
const router = Router ()

const hora = new Date().toLocaleTimeString('es-CO')

router.get('/', (req, res) => res.render('index', { etiqueta: 'Mi primer Sitio Web with Node',  hora:hora }))

router.get('/sobre_nosotros', (req, res) => res.render('sobre_nosotros.ejs', { etiqueta: 'Sobre Nosotros' }))
router.get('/menu', (req, res ) => res.render('menu.ejs', { etiqueta: 'Menu Empresarial' }))

router.get('/contactos', (req, res ) => res.render('contactos.ejs', { etiqueta: 'Pagina de Contactos' }))

// --- RUTA GET PARA EL LOGIN (Única y con mensaje incluido) ---
router.get('/login', (req, res) => {
    res.render('login', {
        etiqueta: 'Vista de inicio de sesion',
        mensaje: null
    });
});

// --- RUTA POST PARA PROCESAR EL LOGIN ---
router.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;

    if (usuario === 'admin' && contrasena === '1234') {
        return res.redirect('/menu');
    }

    return res.render('login', {
        etiqueta: 'Vista de inicio de sesion',
        mensaje: 'Usuario o contraseña incorrectos'
    });
});

export default router