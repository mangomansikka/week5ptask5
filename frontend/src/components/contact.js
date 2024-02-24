import img from "../images/about.jpeg";
import Title from "./Title";
import Footer from "./Footer";

const Contact = () => {
	return (
		<div>
			<section className="section" id="about">
				<Title title="contact" span="us" />
				<div className="section-center about-center">
					<div className="about-img">
						<img src={img} className="about-photo" alt="awesome beach" />
					</div>
					<article className="about-info">
						<h3>make a change</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
							sapiente odio unde dolor?
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
							sapiente odio unde dolor?
						</p>
						<a href="#" className="btn">
							read more
						</a>
					</article>
				</div>
			</section>
            <Footer />
		</div>
	);
};
export default Contact;
