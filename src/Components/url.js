const ROOT_URL = 'http://100.26.209.14:8000';
const getURL = function (resourcePath){
    if(resourcePath.startsWith("/")){
        return `${ROOT_URL}${resourcePath}`;
    }
    return `${ROOT_URL}/${resourcePath}`;
}
export default getURL;