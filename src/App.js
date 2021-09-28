import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import Pokemon from './pages/Pokemon';
import PokemonInfo from './components/PokemonInfo';
import Moves from './pages/Moves';
import Error404 from './pages/Error404';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/pokemon' component={Pokemon} />
					<Route exact path='/moves/' component={Moves} />
					<Route exact path='/pokemon/:name' component={PokemonInfo} />
					<Route path='*' component={Error404} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
