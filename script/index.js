let open = document.getElementById("open");
let close = document.getElementById("close");
let menu = document.querySelector(".menu");
let vi = document.querySelector(".vi"); 
let foot = document.getElementById("foot")
let footer = document.querySelector("footer");
function opening (){
    menu.style.position="absolute";
    menu.style.top="0";
    menu.style.left="0%";
    vi.style.filter = "brightness(0.5) ";
    foot.style.backgroundColor="rgb(154, 151, 151)";
    footer.style.filter = "brightness(0.5) ";
}
function closing (){
    menu.style.position="absolute";
    menu.style.top="0";
    menu.style.left="-80%";
    foot.style.backgroundColor="white";
    vi.style.filter = "brightness(100%) ";
    footer.style.filter = "brightness(100%) ";
}
const forms = document.querySelector('form');
const nonConfirm = document.querySelector("#nonConfirm");
const ins = document.querySelector('.ins');
nonConfirm.addEventListener('click',annulConnexion)
forms.addEventListener('submit',connexion)
ins.addEventListener('click',inscription)
function inscription(e){
    e.preventDefault();
    let inscript = document.getElementById("inscript");
    // connexion.style.position="absolute";
    // connexion.style.top="0";
    // connexion.style.right="0";
    inscript.style.height="100%"
}
function annulConnexion(e){
    e.preventDefault();
    let connexion = document.getElementById("connection");
    connexion.style.width="0%"
}
function connexion(e){
    e.preventDefault();
    let connexion = document.getElementById("connection");
    // connexion.style.position="absolute";
    // connexion.style.top="0";
    // connexion.style.right="0";
    connexion.style.width="47.5%"
}
let email = document.getElementById("email");
let telephone = document.getElementById("telephone");
let tel = document.getElementById("tel");
email.addEventListener('click',emailF);
telephone.addEventListener('click',telephoneF);
function emailF() {
    tel.type="email";
    tel.placeholder="E-mail";
    email.style.borderColor="black";
    telephone.style.borderColor="white";

}
function telephoneF() {
    tel.placeholder="Telephone";
    tel.type="tel";
    email.style.borderColor="white";
    telephone.style.borderColor="black";

}
const confirm = document.getElementById("confirm");
const fontBlanc = document.querySelector(".fontBlanc");
const avatarConnexion = document.querySelector("#avatarConnexion");
const acceuil = document.querySelector("#acceuil")
confirm.addEventListener('click',confirmation);
function confirmation(e){
    e.preventDefault();
   avatarConnexion.style.transform="scale(1.5)";
   fontBlanc.style.backgroundColor="rgb(0, 255, 200)";
//    acceuil.set;
}
let imagem = document.querySelector(".ava");
function ajoutImage(e){
    const [picture] = e.files
    if (picture){
       imagem.style.backgroundImage=`url("${URL.createObjectURL(picture)}")`;
        // document.querySelector(".avatarLogin").innerHTML+=` `;
        
        // alert(picture);
    }
}
// let inscript = document.querySelector("#submit");
// inscript.addEventListener("submit",inscriptions)
function confirmation (e){
    e.preventDefault;
    let nom = document.getElementById("nom").value;
    let mp = document.getElementById("password").value;
    let conf = prompt(`${nom} confirmez votre mon de passe `,"mot de passe");
    

}
