import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

function SocialLinks() {
	return (
		<ul className="nav-icons">
			{socialLinks.map((links) => (
				<SocialLink key={links.id} {...links} name="nav-icon" />
			))}
		</ul>
	);
}

export default SocialLinks;
