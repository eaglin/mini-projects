import { useReducer } from "react"
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants/constats"
export type Language = keyof typeof SUPPORTED_LANGUAGES
export type Auto = typeof AUTO_LANGUAGE
export type FromLanguage = Language | Auto
const initialState:State = {
    fromLanguage: 'es',
    toLanguage: 'en',
    isLoading: false,
    originalText: '',
    translatedText: ''
}


export interface State {
    fromLanguage: FromLanguage
    toLanguage: Language
    originalText: string
    translatedText: string
    isLoading: boolean
}
type actions =
    { type: 'setFromLanguage', payload: FromLanguage } |
    { type: 'setToLanguage', payload: FromLanguage } |
    { type: 'setIsLoading' } |
    { type: 'setOriginalText', payload: string } |
    { type: 'translate', payload: string } |
    { type: 'switch' }
function reducer(state: State, action: actions) {
    const { type } = action
    const newState = { ...state }
    if (type === 'translate') {
        console.log('Cambiamos loading')
        newState.translatedText = ''
        newState.isLoading = false;
    } else if (type === 'setFromLanguage') {

        newState.fromLanguage = action.payload

    
    } else if (type === 'setOriginalText') {

        newState.originalText = action.payload
        newState.isLoading = true;
    } else if (type === 'setToLanguage') {

        newState.fromLanguage = action.payload
    } else if (type === 'switch') {

        newState.fromLanguage = state.toLanguage
        newState.toLanguage = state.fromLanguage as Language
    }

    return newState
}
export default function useStore() {

    const [{ fromLanguage, toLanguage, originalText, translatedText,isLoading}, dispatch] = useReducer(reducer,initialState)
    const switchLanguages = () => {
        dispatch({type:'switch'})
    }
    const setFromLanguage = (payload: FromLanguage) => {
        dispatch({ type: 'setFromLanguage', payload })
    }
    const setIsLoading = () => {
        dispatch({ type: 'setIsLoading' })
    }
    const setToLanguage = (payload: Language) => {
        dispatch({ type: 'setToLanguage', payload })
    }
    const setOriginalTest = (payload:string) => {
        dispatch({ type: 'setOriginalText',payload })
    }
    const setTranslatedText = (payload:string) => {
        dispatch({ type: 'translate',payload })
    }
    return { fromLanguage, toLanguage, originalText, translatedText, isLoading, switchLanguages, setFromLanguage, setOriginalTest, setToLanguage, setTranslatedText,setIsLoading}
    
}