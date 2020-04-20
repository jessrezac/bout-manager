export default function teamPersonReducer(state = {
    team: {}
}, action) {
    switch (action.type) {
        case "SET_TEAM":
            return Object.assign({}, state, {team: action.team})

        case "REMOVE_TEAM":
            return Object.assign({}, state, { team: {}})

        default:
            return state;
    }
}