import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import Pokemon from './pages/Pokemon';
import PokemonInfo from './components/PokemonInfo';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/pokemon' component={Pokemon} />
					<Route exact path='/pokemon/:name' component={PokemonInfo} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
