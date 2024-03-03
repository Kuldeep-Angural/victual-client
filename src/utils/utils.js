export const addDelay = (delay) => {
    return new Promise(res => setTimeout(res, delay ? delay : 0));
}
