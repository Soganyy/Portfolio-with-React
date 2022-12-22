const obj = {
    themeReverse: 1,
    worksText: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a nulla enim. Pellentesque et mauris volutpat, dignissim libero at, accumsan est. Sed molestie non mauris at cursus. Vivamus pulvinar pretium justo. Nam ut ligula odio. Integer a maximus erat, tincidunt finibus lectus. Integer dictum felis sem, quis hendrerit metus facilisis at. Donec posuere, justo molestie rutrum rhoncus, lacus eros aliquet nisl, a dapibus nibh massa pretium lac", "consectetur adipiscing elit. Cras a nulla enim. Pellentesque et mauris volutpat, dignissim libero at, accumsan est. Sed molestie non mauris at cursus. Vivamus pulvinar pretium justo. Nam ut ligula odio. Integer a maximus erat, tincidunt finibus lectus. Integer dictum felis sem, quis hendrerit metus facilisis at. Donec posuere, justo molestie rutrum rhoncus, lacus eros aliquet nisl, a dapibus nibh massa pretium lac"]
}

export default function reducer(state = obj, action) {
    switch (action.type) {
        case 'changeThemeReverse': 
            return state = {...state, themeReverse: state.themeReverse ? 0 : 1 }
    }
    return state;
}