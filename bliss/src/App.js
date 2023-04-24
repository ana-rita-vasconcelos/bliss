// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";

import Connect from "./components/connect";

import Home from "./pages/home/home";
import DetailScreen from "./pages/details/detail-screen";
import ListScreen from "./pages/list/list-screen";
import ShareScreen from "./pages/share/share-screen";

function App() {
  return (
		<div className="App">
			<Connect>
				<div className="App">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/share" element={<ShareScreen />} />
						<Route path="/questions" element={<ListScreen />} />
						<Route path="/questions/:questionId" element={<DetailScreen />} />
					</Routes>
				</div>
			</Connect>

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
