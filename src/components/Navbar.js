import React from "react";
import logo from "./static/favicon.ico";

export const Navbar = ({ getData }) => {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="#">
					<img
						src={logo}
						style={{ maxHeight: "4vh", marginRight: "10px" }}
					/>
					<p className="title is-5">Bhatesh Patil</p>
				</a>

				<a
					role="button"
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-end">
					<div className="navbar-item">
						<div
							className="buttons"
							onClick={() => {
								getData(true);
							}}
						>
							<a className="button is-dark">
								<strong>Get Users</strong>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
