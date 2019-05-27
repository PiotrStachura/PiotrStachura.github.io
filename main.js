document.getElementById("menu-calc").addEventListener("click", ()=>{
    document.getElementById("calc").style.display="block";
    $("login_div").style.display="none";
})
$("loginselect").addEventListener("click",()=>{
    $("calc").style.display="none";
    $("login_div").style.display="block";
})