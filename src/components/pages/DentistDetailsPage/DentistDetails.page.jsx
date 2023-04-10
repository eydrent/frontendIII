import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {CardButton, CardWrapper, DentistInfo, DentistName, Wrapper} from "./DentistDetails.styled.js";
import {AppContext} from "../../../store/context.jsx";

export const DentistDetailsPage = () => {
    const {id} = useParams();
    const {state, dispatch} = useContext(AppContext);
    // const {data, favorites} = state;

    let {theme, data, favorites} = sessionStorage;

    const dentist = data.find((item) => item.id === id);
    const isFavorite = favorites.some((item) => item.id === id);

    const handleToggleFavorite = () => {
        const action = isFavorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE';
        dispatch({type: action, payload: dentist});
    };

    return (
        <Wrapper>
            <CardWrapper>
                <DentistName>{dentist.nome}</DentistName>
                <DentistInfo>Sobrenome: {dentist.sobrenome}</DentistInfo>
                <DentistInfo>Matricula: {dentist.matricula}</DentistInfo>
                <DentistInfo>Nome de usuário: {dentist.usuario.username}</DentistInfo>
                <CardButton onClick={handleToggleFavorite}>
                    {isFavorite ? 'Remover de favoritos' : 'Agregar a favoritos'}
                </CardButton>
            </CardWrapper>
        </Wrapper>
    );
};
