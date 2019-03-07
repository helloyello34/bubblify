import React from 'react'

const getAllBubbles = () => {
    return fetch('http://localhost:3500/api/bubbles').then(resp => {
        if (resp.ok) { return resp.json(); }
    }).then(data => {
        if (!data) { return []; }
        return data;
    });
}

const getBubbleById = id => {
    return fetch(`http://localhost:3500/api/bubbles/${id}`).then(resp => {
        if (resp.ok) { return resp.json(); }
    }).then(data => {
        if (!data) { return []; }
        return data;
    });
}

const getAllBundles = () => {
    return fetch('http://localhost:3500/api/bundles').then(resp => {
        if (resp.ok) { return resp.json(); }
    }).then(data => {
        if (!data) { return []; }
        return data;
    });
}

const getBundleById = id => {
    return fetch(`http://localhost:3500/api/bundles/${id}`).then(resp => {
        if (resp.ok) { return resp.json(); }
    }).then(data => {
        if (!data) { return []; }
        return data;
    });
}


const postOrder = (cartItems, telephone) => {
    fetch(`http://localhost:3500/api/orders`, {
        method: 'post',
        body: JSON.stringify({
            cart: cartItems,
            telephone: telephone
        })
    }).then(function (response) {
        console.log(response.json());
        return response.json();
    }).then(function (data) {
        return data;
    });
}


export default {
    getAllBubbles,
    getBubbleById,
    getAllBundles,
    getBundleById,
    postOrder
};
