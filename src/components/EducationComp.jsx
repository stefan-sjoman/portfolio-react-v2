import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showFooter } from "../redux/footer";

const EducationComp = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(showFooter());
	}, [dispatch])

	return (
		<section className="education-comp tone-in">
			<section className="info-table">
				<div className="table-header">It-Högskolan</div>
				<div className="table-description">Front-End Development</div>
				<div className="table-date">Aug 2020 - Pågående</div>
				
				<div className="table-header">Komvux</div>
				<div className="table-description">Datorteknik 1a, Dator- och nätverksteknik, Gränssnittsdesign, Matematik 2c, Programmering 1 &amp; 2, Webbutveckling 1 &amp; 2, Webbserver-programmering 1</div>
				<div className="table-date">Aug 2019 - Jun 2020</div>

				<div className="table-header">Grönlunds Yrkesutbildningar</div>
				<div className="table-description">Yrkesförarutbildning</div>
				<div className="table-date">Jun 2012 - Dec 2012</div>

				<div className="table-header">Körkort</div>
				<div className="table-description">Behörigheter BE CE</div>
				<div className="table-date"></div>
			</section>
		</section>
	);
}

export default EducationComp;