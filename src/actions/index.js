export const addFeature = feature => {
    // console.log(feature)
    return{
        type: 'ADD_FEATURE',
        payload: feature
    }
}