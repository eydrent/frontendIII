import React, {useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from "../../../store/context.jsx";
import {CardButton, CardButtonLink, CardWrapper, DentistInfo, DentistName} from "./Card.styled.js";

const CardOrganism = ({dentist}) => {
    const {nome, sobrenome, matricula, usuario} = dentist;
    const {state, dispatch} = useContext(AppContext);

    const isFavorite = state.favorites.some((favorite) => favorite.matricula === matricula);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch({type: 'REMOVE_FAVORITE', payload: matricula});
        } else {
            dispatch({type: 'ADD_FAVORITE', payload: dentist});
        }
    };

    return (
        <CardWrapper>
            <DentistName>{nome}</DentistName>
            <DentistInfo>Sobrenome: {sobrenome}</DentistInfo>
            <DentistInfo>Matricula: {matricula}</DentistInfo>
            <DentistInfo>Username: {usuario.username}</DentistInfo>
            <CardButton onClick={handleToggleFavorite}>
                {isFavorite ? 'Remover de favoritos' : 'Agregar a favoritos'}
            </CardButton>
            <CardButtonLink
                href={`/dentist/${matricula}`}
                rel="noopener noreferrer"
                target="_self"
            >
                <CardButton>
                    Ver detalles
                </CardButton>
            </CardButtonLink>
        </CardWrapper>
    );
};

export default CardOrganism;
