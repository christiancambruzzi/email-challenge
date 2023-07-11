function logar(){
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;

  if(login == "admin" && senha == "admin"){
    alert("Sucesso!")
  }else{
    alert("Acesso negado!")
  }
}