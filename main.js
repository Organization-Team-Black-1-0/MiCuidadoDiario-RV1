const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    /* Antes en linea de abajo "/": "./pages/home.html",*/
    "/home": "./pages/home.html",
    "/register": "./pages/register.html",
    "/login": "./pages/login.html",
    "/checkList": "./pages/checkList.html",
    /*Inicio codigo adicionado para paginas de checklist y registro presion*/
    "/checklist-estados-animo": "./pages/checklist-estados-animo.html",
    "/checklist-higiene": "./pages/checklist-higiene.html",
    "/registro-presion-arterial": "./pages/registro-presion-arterial.html",
    /*Fin codigo adicionado para paginas de checklist y registro presion*/
    404: "/pages/404.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

