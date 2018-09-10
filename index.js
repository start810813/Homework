
var Row_Cnt=0;
var Row_Del=0;
document.getElementById("Add_Btn").onclick=function(){AddRow()};
var tb1=document.getElementById("tb1")
function AddRow(){
    Row_Cnt+=1;
    tb1.innerHTML+='<tr id="item'+Row_Cnt+'">'
    +'<td>'+Row_Cnt+'</td>'
    +'<td><input type="text" disabled></td>'
    +'<td><button class="Edit_Btn" onclick="EditRow('+Row_Cnt+')">修改資料</button></td>'
    +'<td><button class="Del_Btn" onclick="DelRow('+Row_Cnt+')">刪除資料</button></td></tr>';
    //document.getElementsByClassName('Del_Btn').forEach.call.onclick=function(){DelRow()};
}
function DelRow(Row_Num){
    document.getElementById("item"+Row_Num).remove();
}

function EditRow(Row_Num){
    if(document.getElementById("item"+Row_Num).getElementsByTagName("button")[0].innerHTML=="修改資料")
    {
        document.getElementById("item"+Row_Num).getElementsByTagName("input")[0].disabled=false;
        document.getElementById("item"+Row_Num).getElementsByTagName("button")[0].innerHTML='送出資料';
    }
    else
    {
        document.getElementById("item"+Row_Num).getElementsByTagName("input")[0].disabled=true;
        document.getElementById("item"+Row_Num).getElementsByTagName("button")[0].innerHTML='修改資料';
        Btn_Mode="Send";
    }
}

