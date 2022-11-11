function Title({ typeTitle, children, className}) {
    if (typeTitle === "1") {
        return <h1 className={className}>{children}</h1>;
    }
    if (typeTitle === "2") {
        return <h2 className={className}>{children}</h2>;
    }
    if (typeTitle === "3") {
        return <h3 className={className}>{children}</h3>;
    }
    if (typeTitle === "4") {
        return <h4 className={className}>{children}</h4>;
    }
    if (typeTitle === "5") {
        return <h5 className={className}>{children}</h5>;
    }
    if (typeTitle === "6") {
        return <h6 className={className}>{children}</h6>;
    }
}
export default Title;
