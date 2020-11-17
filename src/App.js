import React, {useState} from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import {BsSearch} from "react-icons/bs"
import {GiCookingPot} from "react-icons/gi"
import Axios from "axios";

const App = () => {
    // STATE
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);


    // Functions
    const searchTermHandler =  (e) => {
        
        setSearchTerm(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setSearchTerm("");
        Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(res => setData(res.data.meals))
        .catch( err=> console.log(err))
        }

    // const APP_ID = "3cada169";
    // const APP_KEY = "6073cb438216d30e20bebd768b47e160";
        

    return (
        <div className="App">
            <div className="title">
            <GiCookingPot/>
                <h1>Search for a recipe </h1>
            </div>
            <form onSubmit={submitHandler} className="app-form">
                <div className="form-search">
                <input
                    onChange={ searchTermHandler}
                    className="form-input"
                    type="text" 
                    placeholder="ex.chicken..."
                    value={searchTerm}
                />
                
                <BsSearch/>
                </div>
            </form>
            <div className="recipes">
                {data ? data.map(recipe => <Recipe key={recipe.idMeal} recipe={recipe}/>) : "No results found, please try again"}
            </div>
        </div>
    );
};

export default App;
