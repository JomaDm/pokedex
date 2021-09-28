import React from 'react';
import './Home.css';

const Home = () => {
	return (
		<div className='home-container'>
			<img
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png'
				alt='Pokeball'
			/>
			<div>
				<h2>Pokedex Project</h2>
				<p>Este proyecto lo realizo un fan de pokemon para fans de pokemon.</p>
				<h3>¿Que ofrece esta pagina?</h3>
				<p>En esta sencilla pagina puedes buscar a tus pokemon's favoritos de cualquier generacion, ver sus estadisticas  y además podras ver sus habilidades y movimientos</p>
			</div>
		</div>
	);
};

export default Home;
