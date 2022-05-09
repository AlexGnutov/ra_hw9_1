import CustomLink from "./custom-link";

function Menu() {
    return (
        <nav className="menu">
            <CustomLink to="/">Главная</CustomLink>
            <CustomLink to="/drift">Дрифт-такси</CustomLink>
            <CustomLink to="/timeattack">Time Attack</CustomLink>
            <CustomLink to="/forza">Forza Karting</CustomLink>
        </nav>
    );
}

export default Menu;
