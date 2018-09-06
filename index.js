
//document.getElementById("btn1").addEventListener("click", AddRow());
document.getElementById('btn1').onclick= function(){AddRow()};
function AddRow(){
    document.getElementById("tb1").innerHTML+='<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'

}

