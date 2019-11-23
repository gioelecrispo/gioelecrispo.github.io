import axios from "axios";

/**
 * - Description -
 * APIService contains all the methods that allows the webapp to communicate with the backend services.
 * It provides also some facilities to intercept the errors and to enrich the headers with the user
 * token.
 *
 * - Usage -
 * Using APIService
 *
 * import APIService from '@/helpers/APIService.js';
 * APIService.execute(requestUrl, requestBody)
 *    .then ( response => { this.yourDataSuccess = response } );
 *    .catch ( error => { this.yourDataError = error } )
 */
export default {
    name: "APIService",
    call: callService,
    login: executeLogin,
    execute: executeCall,
    download: executeDownload,
    upload: executeUpload,
};


function _buildRequestBody(data) {
    // Create request Body
    //let userInfo = store.getters["UserState/getUserInfo"];
    let requestBody = {
        requestData: data.body,
    };
    return requestBody;
}


function callService(type, requestUrl, data) {
    let requestBody = data.data;
    if (type === "normal") {
        return executeCall(requestUrl, requestBody);
    } else if (type === "upload") {
        let requestBody = data.data;
        let file = data.file;
        return executeUpload(requestUrl, requestBody, file);
    } else if (type === "download") {
        return executeDownload(requestUrl, requestBody);
    } else if (type === "login") {
        return executeLogin(requestUrl, requestBody);
    }
    throw new Error("API.SERVICE - Request type is not valid.");
}


function execute(options, urlsInfo, data) {
    return axios({
        method: "get",
        headers: options.headers,
        responseType: options.responseType,
        url: urlsInfo.url,
        //data: data,
        timeout: urlsInfo.timeout || 0 // default = 0 (NO timeout)
    })
        .then(function (response) {
            // handle success
            // eslint-disable-next-line no-console
            console.log("API.SERVICE - Response for url <" + urlsInfo.url + "> :", response);
            return response.data;
        })
        .catch(function (error) {
            // handle error
            // eslint-disable-next-line no-console
            console.error("API.SERVICE - Error for url <" + urlsInfo.url + "> :", error);
            throw error;
        });
}

/**
 * Login post
 * @param requestUrl the url of the login
 * @param data username and password
 * @returns {*} the response of the backend
 */
function executeLogin(urlsInfo, data) {
    let options = {
        method: urlsInfo.method,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        responseType: "json",
    };
    return execute(options, urlsInfo, data);
}

/**
 * Generic backend service handler.
 * @param requestUrl the url to be called
 * @param data the payload data, divided into interactionData and additionalElement
 * @returns {*} the response of the backend
 */
function executeCall(urlsInfo, data) {
    //let userInfo = store.getters["UserState/getUserInfo"];
    let requestBody = _buildRequestBody(data);
    // eslint-disable-next-line no-console
    console.debug("API.SERVICE - Request for url <" + urlsInfo.url + "> :", requestBody);
    let options = {
        method: urlsInfo.method,
        headers: {
            //"Authorization": "Bearer " + userInfo.token,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        responseType: "json",
    };
    return execute(options, urlsInfo, requestBody);
}


function executeDownload(urlsInfo, data) {
    //let userInfo = store.getters["UserState/getUserInfo"];
    let requestBody = _buildRequestBody(data);
    let options = {
        method: urlsInfo.method,
        headers: {
            //"Authorization": "Bearer " + userInfo.token,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        responseType: "blob",
    };
    return execute(options, urlsInfo, requestBody);
}


/**
 * Generic upload service handler.
 * @param requestUrl the url to be called
 * @param data the payload data, divided into interactionData and additionalElement
 * @param file the file to be uploaded
 * @returns {*} the response of the backend
 */
function executeUpload(urlsInfo, data, file) {
    //let userInfo = store.getters["UserState/getUserInfo"];
    let requestBody = new FormData();
    requestBody.append("file", file);
    requestBody.append("request", JSON.stringify(_buildRequestBody(data)));
    let options = {
        method: urlsInfo.method,
        headers: {
            //"Authorization": "Bearer " + userInfo.token,
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
        },
        responseType: "json",
    };
    return execute(options, urlsInfo, requestBody);
}



