import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function handleLogout() {
    // Lógica para cerrar sesión

    history.replace('/');
}
export default handleLogout