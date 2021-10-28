const getData = JSON.parse(localStorage.getItem('data'));
console.log(getData.email)
console.log(getData.password)

function showPassword() {
    
    var key_attr = $('#key').attr('type');
    
    if(key_attr != 'text') {
        
        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');
        
    } else {
        
        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');
        
    }
    
}

const password = document.getElementById("key")
const email = document.getElementById("email")
const button = document.querySelector('.btn');
// console.log(password.value)

function validate(e){
    e.preventDefault();
    
    if(password.value === getData.password && email.value===getData.email){
        localStorage.setItem("isLogin",true)
        window.location = "./landingpage.html"
    }
    else if(password.value !== getData.password && email.value!==getData.email){
        alert("Periksa kembali username dan password anda")
        console.log("tes");
    }
}


