

const ApiRequest=async (Url)=>{
    let responce= await fetch(Url);
    let data= await responce.body;
    console.log(responce.ok);
    console.log(responce.status);
    console.log(responce.text());
    console.log(responce.headers.get('Content-Type')+"222222");
    console.log(responce.json.data);
    console.log();
};

export default ApiRequest;