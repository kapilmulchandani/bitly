const ROOT_URL = 'http://54.237.225.236:8000';
const getURL = function (resourcePath){
    if(resourcePath.startsWith("/")){
        return `${ROOT_URL}${resourcePath}`;
    }
    return `${ROOT_URL}/${resourcePath}`;
}
export default getURL;