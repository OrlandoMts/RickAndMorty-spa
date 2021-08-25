import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Header from "../templates/Header";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

// Render de mis rutas

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

// Manejador de mi rutas segun la logica establecida

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    
    let hash = getHash();
    // Hay que esperar a que resolveRoutes haga las validaciones necesarias
    // y devuelva un valor
    let route = await resolveRoutes(hash);

    let render = routes[route] ? routes[route] : Error404;
    // Muestra la vista que obtuvo render
    content.innerHTML = await render();
}

export default router;