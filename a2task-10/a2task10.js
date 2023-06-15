const name = document.querySelector('#name');
const mail = document.querySelector('#email');

const btn = document.querySelector('.btn');
btn.addEventListener('click',onsubmit)

function onsubmit(e){
    e.preventDefault();
   
    let data_obj ={name_stored:name.value, email_stored:mail.value};
    let data_obj_sy = JSON.stringify(data_obj);
    localStorage.setItem("data",data_obj_sy); 
    let vpp = JSON.parse(data_obj_sy)
    console.log(vpp)
}


