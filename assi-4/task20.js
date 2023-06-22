
    let nv = name.value;
    let ev= mail.value;
    let pv = pv.value;
    // let dav = document.createElement("div");
    // dav.className="new";
    // dav.appendChild(document.createTextNode(nv));
    // dav.appendChild(document.createTextNode("-"));
    // dav.appendChild(document.createTextNode(ev));
    // dav.appendChild(document.createTextNode("-"));
    // dav.appendChild(document.createTextNode(pv));
    // var dlt = document.createElement("button");
    // var edt = document.createElement("button");
    // edt.className="edt";
    // dlt.className="but"
    // dlt.appendChild(document.createTextNode("delete"));
    // edt.appendChild(document.createTextNode("edit"));
    var doo = {name:nv, email:ev, phone:pv};
    var co = JSON.stringify(doo);
    var po ={nv,ev,pv}
    //localStorage.setItem(ev,co);
    axios.post('https://crudcrud.com/api/e09ef8a991804471b2eee71c94d261d1/info/',po)
    axios.post('https://crudcrud.com/api/b65e9dcb12e0479f9e5e021c6be04706/info',po)
    .then((res)=>{

        console.log(res.data['nv'])


        console.log(err.message);
    })
    axios.get('https://crudcrud.com/api/e09ef8a991804471b2eee71c94d261d1/info/')
    axios.get('https://crudcrud.com/api/b65e9dcb12e0479f9e5e021c6be04706/info')
    .then((res)=>{
        console.log("data from get is ",res.data)
        showOutput(res.data)
    var y;
    if(e.target.className == 'buttontodel')
    {
        console.log("INSIDE DELETE")
        var xx = e.target.parentElement;
        axios.get('https://crudcrud.com/api/e09ef8a991804471b2eee71c94d261d1/info/')
        axios.get('https://crudcrud.com/api/b65e9dcb12e0479f9e5e021c6be04706/info')
        .then((res)=>{

            for(let i=0 ; i< res.data.length ;i++)

                    break;
                })
    }
            axios.delete('https://crudcrud.com/api/e09ef8a991804471b2eee71c94d261d1/info/'+y).then((res)=>{
            axios.delete('https://crudcrud.com/api/b65e9dcb12e0479f9e5e021c6be04706/info/'+y).then((res)=>{
                console.log("deleted ",res);
            })
        })

        man.removeChild(xx)

    })

    
    {
        var s1;
        var s2
        var s3
        console.log("INSIDE UPDATE")
        var xx = e.target.parentElement;
        axios.get('https://crudcrud.com/api/b65e9dcb12e0479f9e5e021c6be04706/info')
        .then((res)=>{

            for(let i=0 ; i< res.data.length ;i++)
            {
                console.log("look here "+xx.textContent.split(" ")[3]," also ",res.data[i]['ev'])
                if(res.data[i]['ev']== xx.textContent.split(" ")[3])
                {
                    y=res.data[i]['_id'];
                    console.log("y is ",y)
                    s1 = res.data[i]['nv'];
                    s2 = res.data[i]['ev'];
                    s3 = res.data[i]['pv'];
                    console.log(s1,s2,s3,"<------------------------")
                    name.value=s1;
        mail.value=s2;
        pn.value=s3;
                    break;
                }
            }
            axios.delete('https://crudcrud.com/api/b65e9dcb12e0479f9e5e021c6be04706/info/'+y).then((res)=>{
                console.log("deleted ",res);
            })
        })
        .catch((err)=>{
            document.body.innerHTML = document.body.innerHTML + `<h3> something went wrong </h3>`;
        })
        man.removeChild(xx)




    }

