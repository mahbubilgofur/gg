import '../style.css';
import Logout from '../../asset/login/logout';

function Nav(){
    return(
    <div className="sidebar">
        <h1>Admin</h1>
        <ul className="nav">
            <li><a href="/dasboard">Dashboard</a></li>
            <li><a href="/album">Album</a></li>
            <li><a href="/foto">Foto</a></li>
            <li><a href="/komentar">Komentar</a></li>
            <li><a href="/like">Like Foto</a></li>
            <li><a href="/user">User</a></li>
            <li><Logout/></li>
        </ul>
</div>
    )
};
export default Nav;