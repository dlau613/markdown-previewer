import { combineReducers } from 'redux';
import { INPUT_UPDATE} from '../actions';
import inputReducer, * as fromInput from './input';

const rootReducer = combineReducers({
    input: inputReducer
});

export const getInput = (state) => 
    fromInput.getInput(state.input)



export default rootReducer;