function Title({ title, span }) {
	return (
		<div className="section-title">
			<h2>
				{title} <span>{span}</span>
			</h2>
		</div>
	);
}

export default Title;
