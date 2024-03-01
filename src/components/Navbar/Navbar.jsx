import  style from'./Navbar.module.css';
function Navbar(props){
    console.log(props);
return (
<nav className={style.bg}>
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">cart{props.count} </a>
</nav>
);
}
export default Navbar;