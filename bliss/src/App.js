// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/share" element={<ShareScreen />} />
				<Route path="/questions" element={<ListScreen />} />
				<Route path="/questions/:questionId" element={<DetailScreen />} />
			</Routes>

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
		</div>
	);
}

export default App;
