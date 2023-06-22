const deleteData = document.querySelector('#list .new .but' )

const btn = document.getElementById("btt");
btn.addEventListener("click",addData)

const arr=[]


function showOutput(res){
    var op='';
    for(let i=0; i<res.length ; i++)
    {
        op+=`${res[i]['nv']}  ${res[i]['ev']}  ${res[i]['pv']}`+"<br> <hr>";
    }

    document.body.innerHTML = document.body.innerHTML + op;

const btn = document.getElementById("btt");
btn.addEventListener("click",addData)
}

const arr=[]

function addData(e)
{

    let ev= mail.value;
    let pv = pn.value

    let dav = document.createElement("div");
    dav.className="new";
    dav.appendChild(document.createTextNode(nv));
    dav.appendChild(document.createTextNode("-"));
    dav.appendChild(document.createTextNode(ev));
    dav.appendChild(document.createTextNode("-"));
    dav.appendChild(document.createTextNode(pv));


    var dlt = document.createElement("button");
    var edt = document.createElement("button");
    edt.className="edt";
    dlt.className="but"
    dlt.appendChild(document.createTextNode("delete"));
    edt.appendChild(document.createTextNode("edit"));
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
    localStorage.setItem(ev,co);
    dav.appendChild(edt);
    dav.appendChild(dlt);
    ul.appendChild(dav);
    var po ={nv,ev,pv}
    //localStorage.setItem(ev,co);
    axios.post('https://crudcrud.com/api/44110acd0dac49efbf13bcd31e60b83a/info',po)
    .then((res)=>{

        console.log(res.data['nv'])
    })
    .catch((err)=>{

        console.log(err.message);
    })
    axios.get('https://crudcrud.com/api/44110acd0dac49efbf13bcd31e60b83a/info')
    .then((res)=>{
        console.log("data from get is ",res.data)
        showOutput(res.data)
    }).catch((err)=>{
        document.body.innerHTML=document.body.innerHTML + `<h4>something went wrong</h3>`;

    })
    // dav.appendChild(edt);
    // dav.appendChild(dlt);
    // ul.appendChild(dav);

}
ul.addEventListener("click",funtodel)
