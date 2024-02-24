function PageLink({ id, href, text, childClass }) {
	return (
		<li>
			<a href={href} className={childClass}>
				{text}
			</a>
		</li>
	);
}

export default PageLink;
