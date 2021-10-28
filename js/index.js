var haslogin = localStorage.getItem('isLogin');

const cekLogin = () =>{
  if (haslogin == "true") {
    return document.getElementById('right-content').innerHTML += 
            `<div class="dropdown float-end">
             <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
            </a>
            <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1" style="">
              <li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
              <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          `
  }
  else{
    return document.getElementById('right-content').innerHTML += 
    `<a href="./daftar.html">
        <button class="btn btn-outline-dark" type="submit">Daftar</button>
      </a>
      <a href="./login.html">
        <button class="btn btn-dark hover" type="submit">Login</button>
      </a>`
  }
}
cekLogin();