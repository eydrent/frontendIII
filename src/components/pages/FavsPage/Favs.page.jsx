import CardOrganism from "../../organisms/CardOrganism/Card.organism.jsx";
import {DentistsCardsWrapper} from "../../Sections/DentistsSection/Dentists.styled.js";
import React, {useContext} from "react";
import {AppContext} from "../../../store/context.jsx";

export const FavsPage = () => {

    const {state} = useContext(AppContext);
    const {favorites} = state;

    return (
        <div>
            <DentistsCardsWrapper>
                {favorites ?
                    favorites.map((dentist) => (
                        <CardOrganism key={dentist.matricula} dentist={dentist}/>
                    ))
                    :
                    <p>No hay favoritos</p>
                }
            </DentistsCardsWrapper>
        </div>
    )
}