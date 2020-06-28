function makeActionCreator(type, ...argNames) {
    return function(...args) {
        const action = { type };
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        });
        return action;
    };
}

export const StoreActionType = {
    Navigate: 'navigate',
    Reset: 'reset'
};

export const navigate = makeActionCreator(StoreActionType.Navigate, 'index');
export const reset = makeActionCreator(StoreActionType.Reset);
