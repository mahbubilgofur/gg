import Home from './img/home.png';
function Header() {
  return (
 <div>
    	<nav className="fh5co-nav" role="navigation">
		<div className="container">
			<div className="fh5co-top-logo">
				<div id="fh5co-logo"><a href="index.html">Gallery</a></div>
			</div>
			<div className="fh5co-top-menu menu-1 text-center">
				<ul>
					<li><a href="work.html"><img src={Home} /></a></li>
					<li><a href="/login">login</a></li>
					<li className="has-dropdown">
						<a href="#">album</a>
					</li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>
 </div>
  );
}

export default Header;
