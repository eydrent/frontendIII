import React, {createContext, useReducer, useEffect} from "react";
import {getDentists} from "../services/api";

const AppContext = createContext();

const initialState = {
    theme: "light",
    data: [],
    favorites: [
        {
            id: "1",
            nome: '1hola',
            sobrenome: '1hola',
            matricula: '1hola',
            usuario: {
                "username": '1hola',
            }
        }
    ],
    isAuthenticated: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_THEME":
            return {...state, theme: action.payload};
        case "SET_DATA":
            return {...state, data: action.payload};
        case "ADD_FAVORITE":
            return {...state, favorites: [...state.favorites, action.payload]};
        case "REMOVE_FAVORITE":
            return {
                ...state,
                favorites: state.favorites.filter(
                    (favorite) => favorite.id !== action.payload
                ),
            };
        case "IS_AUTHENTICATED":
            return {...state, isAuthenticated: action.payload};
        default:
            return state;
    }
};

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDentists();
            dispatch({type: "SET_DATA", payload: data});
        };

        fetchData();
    }, []);

    useEffect(() => {
        const favorites = JSON.parse(
            localStorage.getItem("favorites") || "[]"
        );
        dispatch({type: "SET_FAVORITES", payload: favorites});
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
    }, [state.favorites]);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(state.theme));
    }, [state.theme]);

    useEffect(() => {
        const theme = JSON.parse(localStorage.getItem("theme"));
        if (theme) {
            dispatch({type: "SET_THEME", payload: theme});
        }
    }, []);

    useEffect(() => {
        const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
        if (isAuthenticated !== null) {
            dispatch({type: "IS_AUTHENTICATED", payload: isAuthenticated});
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("isAuthenticated", JSON.stringify(state.isAuthenticated));
    }, [state.isAuthenticated]);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};

export {AppContext, AppProvider};
