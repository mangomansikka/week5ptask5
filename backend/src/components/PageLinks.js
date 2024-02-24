import PageLink from "./PageLink";
import { pageLinks } from "../data";

function PageLinks({ parentClass }) {
	return (
		<ul className={`${parentClass}s`} id="nav-links">
			{pageLinks.map((links) => (
				<PageLink key={links.id} {...links} childClass={parentClass} />
			))}
		</ul>
	);
}

export default PageLinks;
