const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
            break;
            case 'CREATE':
                return posts;
                break;
    
        default:
            return posts;
            break;
    }
}

export default reducer