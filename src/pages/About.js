import React from 'react';
import './About.css';

const About = () => {
	return (
		<div>
			<h2 className='title'>About page</h2>
			<h4 className='subtitle'>
				Informaci&oacute;n de creaci&oacute;n
			</h4>
			<div className='text-content'>
				<p>
					Esta pagina fue creada por Jos&eacute; Manuel
					Dom&iacute;nguez. Con la finalidad de aplicar los
					conocimientos aprendidos de ReactJs.{' '}
				</p>
				<p>
					Se utilizaron las siguientes herramientas para su
					desarrollo y publicacion:
				</p>
				<ol>
					<li>ReactJs</li>
					<ul>
						<li>Hooks</li>
						<li>Manejo de estados</li>
					</ul>
					<li>React Router</li>
					<li>CSS3</li>
					<li>Axios</li>
					<li>Netlify</li>
				</ol>
				<p></p>
			</div>
		</div>
	);
};

export default About;
