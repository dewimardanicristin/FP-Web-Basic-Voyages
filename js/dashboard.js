// import validate from './../login/login.js'
// let right_content = document.getElementById("right-content");

// var haslogin = localStorage.getItem('isLogin');

// const cekLogin = () =>{
//   if (haslogin == "true") {
//     return document.getElementById('right-content').innerHTML += 
//             `
//             <a href="./history" style="color:black; margin-right:20px;">History</a>
//             <div class="dropdown float-end">
//             <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
//               <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
//             </a>
//             <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1" style="">
//               <li><a class="dropdown-item" href="#">New project...</a></li>
//               <li><a class="dropdown-item" href="#">Settings</a></li>
//               <li><a class="dropdown-item" href="#">Profile</a></li>
//               <li><hr class="dropdown-divider"></li>
//               <li><a class="dropdown-item" href="#">Sign out</a></li>
//             </ul>
//           </div>`
//   }
//   else{
//     return document.getElementById('right-content').innerHTML += 
//     `<a href="./../daftar/daftar.html">
//         <button class="btn btn-outline-dark" type="submit">Daftar</button>
//       </a>
//       <a href="./../login/login.html">
//         <button class="btn btn-dark hover" type="submit">Login</button>
//       </a>`
//   }
// }
// cekLogin();

const list_wisata = document.getElementById('list_wisata');

async function loadNames() {
  const response = await fetch('https://617173acc20f3a001705fd0d.mockapi.io/content');
  const listData = await response.json();
  printItems(listData);
}

loadNames();

function printItems(data){
  var temp="";
  // console.log(data.length)
  for(var i=0;i<6;i++){
      temp += `<div class="col-md-4 col-lg-4 col-sm-12 mb-4">
      <div class="p-0 border bg-light"> 
      <div class="image p-0" style="height:250px;">
      <img src="${data[i].url_image} class="img-fluid" style="width : 100%; height:250px; object-fit : cover;">
      </div>
      <div class="product-detail-container">
          <div class="d-flex justify-content-between align-items-center">
              <h6 class="mb-0">${data[i].type_tour}</h6> <span class="text-danger font-weight-bold">${data[i].price}</span>
          </div>
          <div class="d-flex justify-content-between align-items-center mt-2">
            <div class="jenis_wisata"><i class="fa fa-map-marker" aria-hidden="true"></i><span> ${data[i].location_tour}</span></div>
            <div class="ratings"> 
            <i class="fa fa-star" style="color:#FDCC0D;"></i> <span>4</span> 
            </div>
          </div>
          <div class="d-grid gap-2 mt-3"> 
            <button class="btn btn-block" style="background:#F1633F; color : white">
              <a href="detail-wisata.html?bayar=${data[i].id}" style="color:white">Details</a>
            </button>
          </div>
      </div>
      </div>
    </div>`

  }
  list_wisata.innerHTML = temp;
}

async function loadFoto() {
  const response = await fetch('https://617173acc20f3a001705fd0d.mockapi.io/content');
  const listData = await response.json();
  printKoleksiFoto(listData);
}

loadFoto();

const koleksi_foto = document.getElementById('koleksi_foto')
function printKoleksiFoto(data){
  var temp="";
  // console.log(data.length)
  for(var i=0;i<8;i++){
    temp+=`
    <div class="col-md-3 col-sm-12 mb-sm-3">
      <img src="${data[i].url_image} class="img-fluid" style="width : 100%; height:250px; object-fit : cover;">
    </div>
    `
  }
  koleksi_foto.innerHTML = temp;
}
      
