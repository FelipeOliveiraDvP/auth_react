export const ADD_PRODUCTION_LINE = 'ADD_PRODUCTION_LINE';

export function addProductionLine(productionLine) {
    console.log('Action Prodc Line: '+JSON.stringify(productionLine))
    return {
        type: ADD_PRODUCTION_LINE,
        payload: productionLine
    };
};