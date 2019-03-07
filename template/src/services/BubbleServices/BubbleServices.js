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
    return fetch(`http://localhost:3500/api/orders/${telephone}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            cart: {
                bubbles: cartItems.bubbles,
                price: cartItems.total,
            },
            telephone: telephone,
        })
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        return data;
    });
}

const getOrders = (telephone) => {
    return fetch(`http://localhost:3500/api/orders/${telephone}`).then(resp => {
        return resp.ok ? resp.json(): null
    }).then(data => {
        return data ? data: [];
    });
}


export default {
    getAllBubbles,
    getBubbleById,
    getAllBundles,
    getBundleById,
    postOrder,
    getOrders
};
