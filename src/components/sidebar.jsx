const Sidebar = ({ children, func }) => {
    return (
        <aside>
            {children.map((item) => (
                <button onClick={() => func(item)} key={item.id}>
                    {item.title}
                </button>
            ))}
        </aside>
    );
};

export default Sidebar;
