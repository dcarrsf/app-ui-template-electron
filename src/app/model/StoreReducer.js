import { StoreActionType } from './StoreActions';

export const initialState = {
    views: [
        {
            name: 'LinkedIn',
            path: 'https://www.linkedin.com/in/dcarrsf'
        },
        {
            name: 'Website',
            path: 'https://dancarr.io'
        },
        {
            name: 'GitHub',
            path: 'https://www.github.com/dcarrsf'
        },
        {
            name: 'AWS',
            path: 'https://www.amazon.com/aws/acount'
        }
    ],
    selectedIndex: 1
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case StoreActionType.Navigate:
            return {
                ...state,
                selectedIndex: action.index
            };
        default:
            return initialState;
    }
}
