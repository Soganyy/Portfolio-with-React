const obj = {
    themeReverse: 1
}

export default function reducer(state = obj, action) {
    switch (action.type) {
        case 'changeThemeReverse': state.themeReverse = state.themeReverse ? 0 : 1 
    }
    return state;
}