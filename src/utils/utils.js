export const addDelay = (delay) => {
    return new Promise(res => setTimeout(res, delay ? delay : 0));
}
export const convertBtoaToNormalObject = (incryptedData) => {
    console.log(incryptedData);
    const decodedString = atob(incryptedData);
    const decodedContent=decodedString.split(":");
    console.log(decodedContent);
    return decodedContent
    
} 