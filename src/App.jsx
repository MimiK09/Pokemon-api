import "./App.css";
import Header from "./assets/components/Header";
import axios from "axios";
// import { useState } from 'react'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faEnvelope, faKey, faListAlt } from '@fortawesome/free-solid-svg-icons';
// library.add(faEnvelope, faKey, faListAlt);
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./assets/Pages/home";
import Pokemons from "./assets/Pages/pokemons";
import Pokemon from "./assets/Pages/pokemon";
import Types from "./assets/Pages/types";
import Type from "./assets/Pages/type";

function App() {
	return (
		<Router>
      <Header />
			<Routes>
				<Route path="/home" element={<Home />}></Route>
        <Route path="/pokemons" element={<Pokemons />}></Route>
        <Route path="/pokemon/:name" element={<Pokemon />}></Route>
        <Route path="/types" element={<Types />}></Route>
        <Route path="/type/:id" element={<Type />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
