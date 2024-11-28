// import logo from './logo.svg';
import './App.css';
import './components/styles/homepage.css';
import Navbar from './components/navbar/navbar'
import Master from './components/master/master';
import Homepage from './components/homepage/homepage';

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
			<Navbar />
			{/* <Master /> */}
			<Homepage />
		</div>
	);
}

export default App;
