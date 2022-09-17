import React, { createContext, useContext, useReducer } from 'react';
import en from '../languages/en.json';
import ar from '../languages/ar.json';
import { BsArrowsMove } from 'react-icons/bs';
const LanguageContext = createContext();

const initallState = {
  lang: en,
  currentLang: 'eng',
  navbarStatus: false,
  loading: false,
};
const reducers = (state, action) => {
  if (action.type == 'CHANGE_LANG') {
    if (action.payload == 'ar') {
      document.body.dir = 'rtl';
      document.body.style.fontFamily = 'Noto Kufi Arabic, sans-serif';
      return { ...state, lang: ar, currentLang: 'arb' };
    } else {
      document.body.dir = 'ltr';
      document.body.style.fontFamily = 'Raleway, sans-serif';
      return { ...state, lang: en, currentLang: 'eng' };
    }
  } else if (action.type == 'CLOSE_NAVBAR') {
    return { ...state, navbarStatus: action.payload };
  } else if (action.type == 'LOADING_STATUTS') {
    return { ...state, loading: action.payload };
  }
  // actions
  return state;
};
const LangugeContextApi = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initallState);
  const changeLangFunc = (lang) => {
    dispatch({ type: 'CHANGE_LANG', payload: lang });
  };
  // Close Navbar Respnsive
  const toggleNavbarFunc = (val) => {
    dispatch({ type: 'CLOSE_NAVBAR', payload: val });
  };
  // Loding Status
  const loadingStatusFunc = (status) => {
    dispatch({ type: 'LOADING_STATUTS', payload: status });
  };

  return (
    <LanguageContext.Provider
      value={{ ...state, changeLangFunc, toggleNavbarFunc, loadingStatusFunc }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(LanguageContext);
};

export default LangugeContextApi;
