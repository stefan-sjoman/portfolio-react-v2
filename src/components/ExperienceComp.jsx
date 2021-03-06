import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showFooter } from "../redux/footer";

const ExperienceComp = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(showFooter());
	}, [dispatch])

	return (
		<section className="experience-comp tone-in">
			<section className="info-table">
				<div className="table-header">Svevia AB</div>
				<div className="table-description">Yrkesarbetare Trafikanordningar, Tunneltvätt och Drift</div>
				<div className="table-date">Apr 2015 - Pågående</div>
				<div className="table-header">Mankan Entreprenad</div>
				<div className="table-description">Kranbilschaufför. Arbetade för underentreprenör med allt inom vägarbete hos Svevia och Bäckström AB.</div>
				<div className="table-date">Jun 2013 – Apr 2015</div>
				<div className="table-header">TÅV AB</div>
				<div className="table-description">Kranbilschaufför. Arbetade med att tömma återvinningsbehållare med kranbil.</div>
				<div className="table-date">Jan 2013 – Jun 2013</div>
				<div className="table-header">Kompetenser</div>
				<div className="table-description"> HTML, CSS, JavaScript, Vue, Java, Figma, Adobe XD, Agilt arbete, Musikproduktion, Cubase, Photoshop</div>
				<div className="table-date"></div>
			</section>
		</section>
	);
}

export default ExperienceComp;