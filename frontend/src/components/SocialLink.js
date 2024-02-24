function SocialLink({ href, icon, name }) {
	return (
		<li>
			<a href={href} target="_blank" rel="noreferrer" className={name}>
				<i className={icon} />
			</a>
		</li>
	);
}

export default SocialLink;
