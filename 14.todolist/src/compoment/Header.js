const Header = () => {
    return(
        <div className="header">
            <h2>Todo List 📕</h2>
            <h3>{new Date().toDateString()}</h3>
        </div>
        
    )
}
export default Header;