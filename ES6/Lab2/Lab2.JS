let Table=this.document.querySelectorAll("table")[0];

const getALLUsers=async function(){

    try{
            let response=await fetch("https://jsonplaceholder.typicode.com/users");
            let data =await response.json();
            let response2=await fetch("https://jsonplaceholder.typicode.com/posts");
            let data2 =await response2.json();

            console.log(data);
            for(i = 0 ; i<data.length;i++){

                let trElm=document.createElement("tr");
                let tdElm=document.createElement("td");
                tdElm.innerText=data[i].username;  
                trElm.append(tdElm);
                tdElm=document.createElement("td");
                tdElm.innerText=data[i].email;
                trElm.append(tdElm);
                tdElm=document.createElement("td");
                tdElm.innerText=data[i].company.name;
                trElm.append(tdElm);
                tdElm=document.createElement("td");
                tdElm.innerText=data[i].address.geo.lat+":"+data[i].address.geo.lng;
                trElm.append(tdElm);
                tdElm=document.createElement("td");
                tdElm.innerText=data[i].address.street;
                trElm.append(tdElm);
                tdElm=document.createElement("td");
                let ulElm=document.createElement("ul")
                for(j=0;j<data2.length;j++){
                    if(data2[j].userId==data[i].id)
                    {
                        let liElm=document.createElement("li")
                        liElm.innerText = data2[j].title
                        ulElm.append(liElm)
                    }
                }
                tdElm.append(ulElm);
                trElm.append(tdElm);
                Table.append(trElm)
                }

    }catch(error)
    {
        console.log(error)
    }
}

getALLUsers();







