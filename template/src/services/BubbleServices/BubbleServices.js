import React from 'react'

// Get all avaliable bubbles on the server
const getAllBubbles = () => {
    return fetch('http://localhost:3500/api/bubbles').then(resp => {
        if (resp.ok) { return resp.json(); }
    }).then(data => {
        if(!data) { return []; }
        return data;
    });
}

// Get specific bubble with id
const getBubbleById = id => {
    return fetch(`http://localhost:3500/api/bubbles/${id}`).then(resp => {
        if (resp.ok) { return resp.json(); }
    }).then(data => {
        if(!data) { return []; }
        return data;
    });
}

// Get all avaliable bundles on server
const getAllBundles = () => {
    return fetch('http://localhost:3500/api/bundles').then(resp => {
        if (resp.ok) { return resp.json(); }
    }).then(data => {
        if(!data) { return []; }
        return data;
    });
}


// Get specific bundles with id
const getBundleWithId = id => {
    return fetch(`http://localhost:3500/api/bundles/${id}`).then(resp => {
        if (resp.ok) { return resp.json(); }
    }).then(data => {
        if(!data) { return []; }
        return data;
    });
}

export default {
    getAllBubbles,
    getBubbleById,
    getAllBundles,
    getBundleWithId
};
