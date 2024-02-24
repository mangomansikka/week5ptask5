// import PageLink from "./PageLink";
import SocialLink from "./SocialLink";
import PageLinks from "./PageLinks";
import { pageLinks, socialLinks } from "../data";

function Footer() {
	return (
		<div>
			<footer className="section footer">
				<PageLinks parentClass="footer-link" />
				<ul className="footer-icons">
					{socialLinks.map((links) => (
						<SocialLink key={links.id} {...links} name="footer-icon" />
					))}
				</ul>
				<p className="copyright">
					copyright © travel tours company<span id="date">2023</span>. all rights reserved
				</p>
			</footer>
		</div>
	);
}

export default Footer;
