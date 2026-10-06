import { Router } from 'express'
import { usuarios } from '../usuarios.js';
const router = Router ()

const hora = new Date().toLocaleTimeString('es-CO')

router.get('/', (req, res) => res.render('index', { etiqueta: 'Mi primer Sitio Web with Node',  hora:hora }))

router.get('/sobre_nosotros', (req, res) => 
    res.render('sobre_nosotros.ejs', { etiqueta: 'Sobre Nosotros' }))
router.get('/menu', (req, res ) => res.render('menu.ejs', { etiqueta: 'Menu Empresarial' }))

router.get('/contactos', (req, res ) => res.render('contactos.ejs', { etiqueta: 'Pagina de Contactos' }))

router.get('/portal-inspector', (req, res) => {
    res.render('portal-inspector');
});

router.get('/portal-administrativo', (req, res) => {
    res.render('portal-administrativo');
});

router.get('/gestionar-usuarios', (req, res) => {
    res.render('gestionar-usuarios');
});

router.get('/detalle-usuario', (req, res) => {
    res.render('detalle-usuario');
});

router.get('/consulta-inspecciones', (req, res) => {
    res.render('consulta-inspecciones');
});

router.get('/corte-inspecciones', (req, res) => {
    res.render('corte-inspecciones');
});

router.get('/registrar-inspeccion', (req, res) => {
    res.render('registrar-inspeccion');
});

router.post('/registrar-inspeccion', (req, res) => {

    console.log("========== NUEVA INSPECCIÓN ==========");
    console.log(req.body);
    console.log("======================================");

    res.render('registrar-inspeccion');
});

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

    const usuarioEncontrado = usuarios.find(
        (u) => u.usuario.trim() === usuario.trim() &&
               u.contrasena === contrasena
    );

    if (usuarioEncontrado) {if (usuarioEncontrado.cargo === 'cliente') {
        return res.redirect('/portal-cliente');
    }

    if (usuarioEncontrado.cargo === 'tecnico') {
        return res.redirect('/portal-tecnico');
    }

    if (usuarioEncontrado.cargo === 'inspector') {
        return res.redirect('/portal-inspector');
    }

    if (usuarioEncontrado.cargo === 'administrativo') {
        return res.redirect('/portal-administrativo');
    }

    return res.redirect('/menu');
}

    return res.render('login', {
        etiqueta: 'Vista de inicio de sesion',
        mensaje: 'Usuario o contraseña incorrectos'
    });
});

export default router