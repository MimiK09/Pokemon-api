import "./App.css";
import Header from "./assets/components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./assets/Pages/home";
import Pokemons from "./assets/Pages/pokemons";
import Pokemon from "./assets/Pages/pokemon";
import Types from "./assets/Pages/types";
import Type from "./assets/Pages/type";
import Footer from "./assets/components/Footer"

function App() {
	return (
		<Router>
      <Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
        <Route path="/pokemons" element={<Pokemons />}></Route>
        <Route path="/pokemon/:name" element={<Pokemon />}></Route>
        <Route path="/types" element={<Types />}></Route>
        <Route path="/type/:id" element={<Type />}></Route>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
