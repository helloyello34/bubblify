import React from 'react';

const BundleContext = React.createContext({});

export const BundleProvider = BundleContext.Provider;
export const BundleConsumer = BundleContext.Consumer;
