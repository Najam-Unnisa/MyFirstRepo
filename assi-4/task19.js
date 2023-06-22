const form = document.getElementById("form-sb")
console.log(form)
//console.log(form)
const name = document.getElementById("name1");
const mail = document.getElementById("mail");
const pn = document.getElementById("pn");


const arr=[]

const uul = document.getElementById('divIn');

function showOutput(res){
    var op='';
    var dlt = document.createElement("button");
    var edt = document.createElement("button");
    edt.className="edt";
    dlt.className="but"
    dlt.appendChild(document.createTextNode("delete"));
    edt.appendChild(document.createTextNode("edit"));
    //var ss = document.createElement('li');
    for(let i=0; i<res.length ; i++)
    {
        op+=`${res[i]['nv']}  ${res[i]['ev']}  ${res[i]['pv']}`+"<br> <hr>";

        op+=`<li id=${i}>${res[i]['nv']}  ${res[i]['ev']}  ${res[i]['pv']} <button class='buttontodel' type="button">Delete</button>  <button type="button">Edit</button></li>`+"<br> <hr>";
        // document.getElementById(i).appendChild(dlt);
        // document.getElementById(i).appendChild(edt);

    }

    document.body.innerHTML = document.body.innerHTML + op;
    uul.innerHTML=op;
    //document.body.innerHTML = document.body.innerHTML + op;

}


    var co = JSON.stringify(doo);
    var po ={nv,ev,pv}
    //localStorage.setItem(ev,co);
    axios.post('https://crudcrud.com/api/44110acd0dac49efbf13bcd31e60b83a/info',po)
    axios.post('https://crudcrud.com/api/e09ef8a991804471b2eee71c94d261d1/info/',po)
    .then((res)=>{

        console.log(res.data['nv'])


        console.log(err.message);
    })
    axios.get('https://crudcrud.com/api/44110acd0dac49efbf13bcd31e60b83a/info')
    axios.get('https://crudcrud.com/api/e09ef8a991804471b2eee71c94d261d1/info/')
    .then(res)=>{
        console.log("data from get is ",res.data)
        showOutput(res.data)

    localStorage.removeItem(idddd.textContent)
    }

const man = document.getElementById("divIn");
console.log(man)
man.addEventListener("click",delete_entry)

function delete_entry(e)
{
    e.preventDefault();
    var y;
    if(e.target.className == 'buttontodel')
    {
        var xx = e.target.parentElement;
        axios.get('https://crudcrud.com/api/e09ef8a991804471b2eee71c94d261d1/info/')
        .then((res)=>{

            for(let i=0 ; i< res.data.length ;i++)
            {
                console.log("look here "+xx.textContent.split(" ")[3]," also ",res.data[i]['ev'])
                if(res.data[i]['ev']== xx.textContent.split(" ")[3])
                {
                    y=res.data[i]['_id'];
                    console.log("y is ",y)
                    break;
                }
            }
            axios.delete('https://crudcrud.com/api/e09ef8a991804471b2eee71c94d261d1/info/'+y).then((res)=>{
                console.log("deleted ",res);
            })
        })
        .catch((err)=>{
            document.body.innerHTML = document.body.innerHTML + `<h3> something went wrong </h3>`;
        })
        man.removeChild(xx)

    }
}