"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="header__area two header__sticky">
			<div className="custom__container">
				<div className="header__area-menubar">
					
					{/* Sol Logo */}
					<div className="header__area-menubar-left">
						<div className="header__area-menubar-left-logo">
							<Link href="/">
								<img
									className="dark-n"
									src="/assets/img/nexdx-1.png"
									alt="image"
								/>
							</Link>
						</div>
					</div>

					{/* Menü (desktop’ta aynen korunuyor) */}
					<div className="header__area-menubar-center hidden md:block">
						<div className="header__area-menubar-center-menu menu-responsive">
							<ul id="mobilemenu">
								<li className="menu-item-has-children">
									<a href="#services">Services</a>
								</li>
								<li className="menu-item-has-children">
									<a href="#projects">Projects</a>
								</li>
								<li className="menu-item-has-children">
									<a href="#products">Products</a>
								</li>
								<li className="menu-item-has-children">
									<a href="#about">About Us</a>
								</li>
								<li className="menu-item-has-children">
									<a href="#contact">Contact</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Sağ taraf */}
					<div className="header__area-menubar-right">
						{/* Mobil Hamburger Butonu */}
						<div className="md:hidden">
							<button
								className="text-3xl"
								onClick={() => setIsOpen(!isOpen)}
							>
								☰
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Mobil Menü */}
			{isOpen && (
				<div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center">
					{/* Kapatma Butonu */}
					<button
						className="absolute top-5 right-5 text-3xl"
						onClick={() => setIsOpen(false)}
					>
						✕
					</button>
					<ul className="flex flex-col gap-8 text-xl">
						<li><a onClick={() => setIsOpen(false)} href="#services">Services</a></li>
						<li><a onClick={() => setIsOpen(false)} href="#projects">Projects</a></li>
						<li><a onClick={() => setIsOpen(false)} href="#products">Products</a></li>
						<li><a onClick={() => setIsOpen(false)} href="#about">About Us</a></li>
						<li><a onClick={() => setIsOpen(false)} href="#contact">Contact</a></li>
					</ul>
				</div>
			)}
		</div>
	);
}
