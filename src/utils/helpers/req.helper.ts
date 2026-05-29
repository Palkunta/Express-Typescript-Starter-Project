import { AsyncLocalStorage } from "node:async_hooks";

type AsyncLocalStorageType = {
    correlationID : string;
}

export const asyncLocalStorage = new AsyncLocalStorage<AsyncLocalStorageType>();


export const get_correlationID = () => {
    const async_store = asyncLocalStorage.getStore();
    return async_store?.correlationID || 'unknown-error-while-creating-correlation-id';
}