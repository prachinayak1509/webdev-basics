function NicknameFunction(){
    if(document.getElementById("yesNick").checked)
    {
        document.getElementById("nick").style.display="inline";
        document.getElementById("nickname").setAttribute("required",true);  
    }
    else{
        document.getElementById("nick").style.display="none";
        document.getElementById("nickname").removeAttribute("required");
    }
}