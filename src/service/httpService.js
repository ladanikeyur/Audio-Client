export const API_URL = "http://localhost:8000"

export const APIheader = (method,data) =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(data);
    var requestOptions = {
      method: method,
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    return  requestOptions
}