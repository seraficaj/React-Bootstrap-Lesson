import AllPokemon from "../AllPokemon";
import DisplayPokemon from "../DisplayPokemon";

function MainPage(props) {
    return (
        <>
            <AllPokemon
                myTeam={props.myTeam}
                handleOnclick={props.handleOnclick}
                pokeArray={props.pokeArray}
            />
            <DisplayPokemon
                myTeam={props.myTeam}
                pokemon={props.display}
                toggleOnTeam={props.toggleOnTeam}
            />
        </>
    );
}

export default MainPage;
