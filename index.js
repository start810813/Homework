
document.getElementById("Add_Btn").onclick=function(){AddRow()};
var tb1=document.getElementById("tb1");
var Row_Cnt=0;
var Data_arr=[];

//載入localstorage
window.onload = function() {
    var myJsonString =localStorage.getItem("myData");
    _text=JSON.parse(myJsonString);
    _text.map(function(value,index){
        Row_Cnt+=1;
        Data_arr.push({header1:value.header1,header2:value.header2});
        tb1.innerHTML+='<tr>'
        +'<td><input type="text" value="'+value.header1+'" disabled></td>'
        +'<td><input type="text" value="'+value.header2+'"disabled></td>'
        +'<td><button onclick="EditRow(this)" style="display:initial;">修改資料</button></td>'
        +'<td><button onclick="DelRow(this)">刪除資料</button></td></tr>';
        //console.log(Data_arr[Row_Cnt-1]);
    })

  
};

//增加資料列
function AddRow(){
    Row_Cnt+=1;
    tb1.innerHTML+='<tr>'
    +'<td><input type="text" value="'+Row_Cnt+'" disabled></td>'
    +'<td><input type="text" disabled></td>'
    +'<td><button onclick="EditRow(this)" style="display:initial;">修改資料</button></td>'
    +'<td><button onclick="DelRow(this)">刪除資料</button></td></tr>';
 
    saveToStorage(document.getElementsByTagName("tr")[Row_Cnt]);
    
}

//刪除一列
function DelRow(ele){  
    tr_ele=ele.parentNode.parentNode;
    deleteFromStorage(ele);
    tr_ele.remove();
}

//修改鍵
function EditRow(ele){
    tr_ele=ele.parentNode.parentNode;
    context1=tr_ele.getElementsByTagName("input")[0].value
    context2=tr_ele.getElementsByTagName("input")[1].value;
    GoEditMode(ele);
}

function CancelRow(ele){
    tr_ele=ele.parentNode.parentNode;
    tr_ele.getElementsByTagName("input")[0].value=context1;
    tr_ele.getElementsByTagName("input")[1].value=context2;
    GoCompleteMode(ele);
    //document.getElementById("item"+Row_Num).getElementsByTagName("button")[2].remove();
}

function SaveRow(ele){
    tr_ele=ele.parentNode.parentNode;
    //saveToStorage();
    var myJsonString =localStorage.getItem("myData");
    myJsonString=myJsonString.replace('"header1":"'+context1+'","header2":"'+context2+'"','"header1":"'+tr_ele.getElementsByTagName("input")[0].value+'","header2":"'+tr_ele.getElementsByTagName("input")[1].value+'"');
    localStorage.setItem("myData",myJsonString);
    var _text=JSON.parse(myJsonString);
    Data_arr=[];
    _text.map(function(value,index){
        Data_arr.push({header1:value.header1,header2:value.header2});
    });
    GoCompleteMode(ele);
    history.go(0);
}

function GoCompleteMode(ele){
    tr_ele=ele.parentNode.parentNode;
    tr_ele.getElementsByTagName("input")[0].disabled=true;
    tr_ele.getElementsByTagName("input")[1].disabled=true;
    tr_ele.getElementsByTagName("button")[0].style.display="initial";
    tr_ele.getElementsByTagName("button")[1].remove();
    tr_ele.getElementsByTagName("button")[1].remove();
}

function GoEditMode(ele){
    tr_ele=ele.parentNode.parentNode;
    tr_ele.getElementsByTagName("input")[0].disabled=false;
    tr_ele.getElementsByTagName("input")[1].disabled=false;
    tr_ele.getElementsByTagName("button")[0].style.display="none";
    tr_ele.getElementsByTagName("button")[0].parentNode.innerHTML+='<button onclick="SaveRow(this)">儲存</button>';
    tr_ele.getElementsByTagName("button")[0].parentNode.innerHTML+='<button onclick="CancelRow(this)">取消</button>';
}

function saveToStorage(ele) {
    tr_ele=ele;
    Data_arr.push({header1:tr_ele.getElementsByTagName("input")[0].value,header2:tr_ele.getElementsByTagName("input")[1].value});
    var myJsonString =JSON.stringify(Data_arr);
    localStorage.setItem("myData",myJsonString);
}

function deleteFromStorage(ele) {
    Row_Cnt-=1;
    tr_ele=ele.parentNode.parentNode;
    var myJsonString =localStorage.getItem("myData");
    myJsonString=myJsonString.replace('{"header1":"'+tr_ele.getElementsByTagName("input")[0].value+'","header2":"'+tr_ele.getElementsByTagName("input")[1].value+'"},','');
    localStorage.setItem("myData",myJsonString);
    var _text=JSON.parse(myJsonString);
    Data_arr=[];
    _text.map(function(value,index){
        Data_arr.push({header1:value.header1,header2:value.header2});
    });
}