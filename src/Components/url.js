const ROOT_URL = 'http://100.25.166.41:8000';
const getURL = function (resourcePath){
    if(resourcePath.startsWith("/")){
        return `${ROOT_URL}${resourcePath}`;
    }
    return `${ROOT_URL}/${resourcePath}`;
}
export default getURL;