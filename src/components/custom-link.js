import {Link, useMatch, useResolvedPath} from "react-router-dom";

function CustomLink({children, to, ...props}) {
    let resolved = useResolvedPath(to);
    let match = useMatch({path: resolved.pathname, end: true});

    return (
        <Link
            className={match ? "menu__item menu__item-active" : "menu__item"}
            to={to}
            {...props}
        >
            {children}
        </Link>
    )
}

export default CustomLink;
