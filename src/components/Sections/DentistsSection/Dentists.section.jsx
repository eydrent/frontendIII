import CardOrganism from "../../organisms/CardOrganism/Card.organism.jsx";
import React, {useContext} from "react";
import {AppContext} from "../../../store/context.jsx";
import {DentistsCardsWrapper, DentistsWrapper} from "./Dentists.styled.js";

export const DentistsSection = () => {
    const {state} = useContext(AppContext);
    const {data} = state;

    console.log(data)

    return (
        <DentistsWrapper>
            <h1>Dentists</h1>
            <DentistsCardsWrapper>
                {data.map((dentist) => (
                    <CardOrganism key={dentist.matricula} dentist={dentist}/>
                ))}
            </DentistsCardsWrapper>
        </DentistsWrapper>
    )
}