
var Row_Cnt=0;
var Row_Del=0;
var context1="";
var context2="";
var header1_arr=[];
var header2_arr=[];
var Data_arr=[];
document.getElementById("Add_Btn").onclick=function(){AddRow()};
var tb1=document.getElementById("tb1");
tb1_html=tb1.innerHTML;
//載入localstorage
window.onload = function() {
    Row_Cnt=+localStorage.getItem("Row_Cnt");
    var text =localStorage.getItem("myData");
    _text=JSON.parse(text);
    _text.map(function(value,index){
        Data_arr.push({header1:value.header1,header2:value.header2});
        tb1.innerHTML+='<tr id="item'+value.header1+'">'
        +'<td><input type="text" value="'+value.header1+'" disabled></td>'
        +'<td><input type="text" value="'+value.header2+'"disabled></td>'
        +'<td><button onclick="EditRow('+value.header1+')" style="display:initial;">修改資料</button></td>'
        +'<td><button onclick="DelRow('+value.header1+')">刪除資料</button></td></tr>';
    })

  
};

//增加資料列
function AddRow(){
    Row_Cnt+=1;
    tb1.innerHTML+='<tr id="item'+Row_Cnt+'">'
    +'<td><input type="text" value="'+Row_Cnt+'" disabled></td>'
    +'<td><input type="text" disabled></td>'
    +'<td><button onclick="EditRow('+Row_Cnt+')" style="display:initial;">修改資料</button></td>'
    +'<td><button onclick="DelRow('+Row_Cnt+')">刪除資料</button></td></tr>';
    saveToStorage(Row_Cnt);
    localStorage.setItem("Row_Cnt",Row_Cnt);
}

//刪除一列
function DelRow(Row_Num){  
    deleteFromStorage(Row_Num);
    document.getElementById("item"+Row_Num).remove();
}

//修改鍵
function EditRow(Row_Num){
    context1=document.getElementById("item"+Row_Num).getElementsByTagName("input")[0].value;
    context2=document.getElementById("item"+Row_Num).getElementsByTagName("input")[1].value;
    GoEditMode(Row_Num);
}

function CancelRow(Row_Num){
    document.getElementById("item"+Row_Num).getElementsByTagName("input")[0].value=context1;
    document.getElementById("item"+Row_Num).getElementsByTagName("input")[1].value=context2;
    GoCompleteMode(Row_Num);
    //document.getElementById("item"+Row_Num).getElementsByTagName("button")[2].remove();
}

function SaveRow(Row_Num){
    var text =localStorage.getItem("myData");
    text=text.replace('"header1":"'+context1+'","header2":"'+context2+'"','"header1":"'+document.getElementById("item"+Row_Num).getElementsByTagName("input")[0].value+'","header2":"'+document.getElementById("item"+Row_Num).getElementsByTagName("input")[1].value+'"');
    localStorage.setItem("myData",text);
   //saveToStorage(Row_Num);
    GoCompleteMode(Row_Num);
}

function GoCompleteMode(Row_Num){
    document.getElementById("item"+Row_Num).getElementsByTagName("input")[0].disabled=true;
    document.getElementById("item"+Row_Num).getElementsByTagName("input")[1].disabled=true;
    document.getElementById("item"+Row_Num).getElementsByTagName("button")[0].style.display="initial";
    document.getElementById("item"+Row_Num).getElementsByTagName("button")[1].remove();
    document.getElementById("item"+Row_Num).getElementsByTagName("button")[1].remove();
}

function GoEditMode(Row_Num){
    document.getElementById("item"+Row_Num).getElementsByTagName("input")[0].disabled=false;
    document.getElementById("item"+Row_Num).getElementsByTagName("input")[1].disabled=false;
    document.getElementById("item"+Row_Num).getElementsByTagName("button")[0].style.display="none";
    document.getElementById("item"+Row_Num).getElementsByTagName("button")[0].parentNode.innerHTML+='<button onclick="SaveRow('+Row_Num+')">儲存</button>';
    document.getElementById("item"+Row_Num).getElementsByTagName("button")[0].parentNode.innerHTML+='<button onclick="CancelRow('+Row_Num+')">取消</button>';
}

function saveToStorage(Row_Num) {
    Data_arr.push({header1:document.getElementById("item"+Row_Num).getElementsByTagName("input")[0].value,header2:document.getElementById("item"+Row_Num).getElementsByTagName("input")[1].value});
    var myJsonString =JSON.stringify(Data_arr);
    localStorage.setItem("myData",myJsonString);
    

}

function deleteFromStorage(Row_Num) {
    var text =localStorage.getItem("myData");
    text=text.replace('{"header1":"'+document.getElementById("item"+Row_Num).getElementsByTagName("input")[0].value+'","header2":"'+document.getElementById("item"+Row_Num).getElementsByTagName("input")[1].value+'"},','');
    localStorage.setItem("myData",text);
}