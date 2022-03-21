import { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import MainPage from "./Pages/MainPage";
import MainNavbar from "./MainNavbar";
import MyTeam from "./MyTeam";

function App() {
    const [pokeArray, setPokeArray] = useState([]);
    const [display, setDisplay] = useState("");
    const [myTeam, setTeam] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon");
            const pokeData = await response.json();
            setPokeArray(pokeData.results);
            setDisplay(pokeData.results[0].name);
        };
        fetchPokemon();
    }, []);

    const handleOnclick = (name) => {
        setDisplay(name);
    };

    const toggleOnTeam = (name) => {
        if (!myTeam.includes(name) && myTeam.length < 6) {
            setTeam([...myTeam, name]);
        } else {
            let team = myTeam.filter((item) => item !== name);
            setTeam(team);
        }
    };

    return (
        <div>
            <MainNavbar />
            <Container>
                <Row>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <MainPage
                                    display={display}
                                    handleOnclick={handleOnclick}
                                    myTeam={myTeam}
                                    pokeArray={pokeArray}
                                    toggleOnTeam={toggleOnTeam}
                                />
                            }
                        />
                        <Route path="/myteam"
                          element={
                            <MyTeam
                            myTeam={myTeam}
                            toggleOnTeam={toggleOnTeam}
                            />
                          }
                        />
                    </Routes>
                </Row>
            </Container>
        </div>
    );
}

export default App;
