

function getData(url){
    const data1=fetch(url).then(response=>{
        return response.json();
    }).then((data)=>{
        
        return data
    })

   return data1
}
export default getData;