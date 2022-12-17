const obj = {
    themeReverse: 0
}

export default function reducer(state = obj, action) {
    switch (action.type) {
        case 'changeThemeReverse': state.themeReverse = state.themeReverse ? 0 : 1
    }
    return state;
}