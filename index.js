
var Row_Cnt=0;
var Row_Del=0;
var context1="";
var context2="";
document.getElementById("Add_Btn").onclick=function(){AddRow()};
var tb1=document.getElementById("tb1")

//增加資料列
function AddRow(){
    tb1_html=tb1.innerHTML;
    Row_Cnt+=1;
    tb1.innerHTML+='<tr id="item'+Row_Cnt+'">'
    +'<td><input type="text" value="'+Row_Cnt+'" disabled></td>'
    +'<td><input type="text" disabled></td>'
    +'<td><button onclick="EditRow('+Row_Cnt+')" style="display:initial;">修改資料</button></td>'
    +'<td><button onclick="DelRow('+Row_Cnt+')">刪除資料</button></td></tr>';
    //document.getElementsByClassName('Del_Btn').forEach.call.onclick=function(){DelRow()};
}

//刪除一列
function DelRow(Row_Num){
    document.getElementById("item"+Row_Num).remove();
}

//修改鍵
function EditRow(Row_Num){
    if(document.getElementById("item"+Row_Num).getElementsByTagName("button")[0].style.display=="initial")
    {
        context1=document.getElementById("item"+Row_Num).getElementsByTagName("input")[0].value;
        context2=document.getElementById("item"+Row_Num).getElementsByTagName("input")[1].value;
        document.getElementById("item"+Row_Num).getElementsByTagName("input")[0].disabled=false;
        document.getElementById("item"+Row_Num).getElementsByTagName("input")[1].disabled=false;
        document.getElementById("item"+Row_Num).getElementsByTagName("button")[0].style.display="none";
        document.getElementById("item"+Row_Num).getElementsByTagName("button")[0].parentNode.innerHTML+='<button onclick="SaveRow('+Row_Num+')">儲存</button>';
        document.getElementById("item"+Row_Num).getElementsByTagName("button")[0].parentNode.innerHTML+='<button onclick="CancelRow('+Row_Num+')">取消</button>';
    }
    else
    {
        document.getElementById("item"+Row_Num).getElementsByTagName("input")[0].disabled=true;
        document.getElementById("item"+Row_Num).getElementsByTagName("input")[1].disabled=true;
        document.getElementById("item"+Row_Num).getElementsByTagName("button")[0].style.display="initial";
        document.getElementById("item"+Row_Num).getElementsByTagName("button")[1].remove();
        document.getElementById("item"+Row_Num).getElementsByTagName("button")[1].remove();
        //document.getElementById("item"+Row_Num).getElementsByTagName("button")[2].remove();
    }
}

function CancelRow(Row_Num){
    document.getElementById("item"+Row_Num).getElementsByTagName("input")[0].value=context1;
    document.getElementById("item"+Row_Num).getElementsByTagName("input")[1].value=context2;
    document.getElementById("item"+Row_Num).getElementsByTagName("input")[0].disabled=true;
    document.getElementById("item"+Row_Num).getElementsByTagName("input")[1].disabled=true;
    document.getElementById("item"+Row_Num).getElementsByTagName("button")[0].style.display="initial";
    document.getElementById("item"+Row_Num).getElementsByTagName("button")[1].remove();
    document.getElementById("item"+Row_Num).getElementsByTagName("button")[1].remove();
    //document.getElementById("item"+Row_Num).getElementsByTagName("button")[2].remove();
}

function SaveRow(Row_Num){
    document.getElementById("item"+Row_Num).getElementsByTagName("input")[0].disabled=true;
    document.getElementById("item"+Row_Num).getElementsByTagName("input")[1].disabled=true;
    document.getElementById("item"+Row_Num).getElementsByTagName("button")[0].style.display="initial";
    document.getElementById("item"+Row_Num).getElementsByTagName("button")[1].remove();
    document.getElementById("item"+Row_Num).getElementsByTagName("button")[1].remove();
}
