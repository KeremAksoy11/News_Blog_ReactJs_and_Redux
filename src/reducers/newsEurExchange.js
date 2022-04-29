// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = [], action){
    switch(action.type)
    {
        case 'FETCH_EUR_EXCHANGE':
            return[...state,  action.payload];
            default:
                return state;
    }
}