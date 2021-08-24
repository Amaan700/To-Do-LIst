function update(){
    if(localStorage.getItem('itemsJson')==null){
        let itemsjsonarray=[];
        localStorage.setItem('itemsJson',JSON.stringify(itemsjsonarray));
    }
    else{
        let itemsjsonstr=localStorage.getItem('itemsJson');
        itemsjsonarray=JSON.parse(itemsjsonstr);
    }
    let table=document.getElementById("table");
    let str=`<Tr>
    <th>S.no</th>
    <th>Title</th>
    <th>Description</th>
    <th>Action</th>
</Tr>`;
    itemsjsonarray.forEach((element,index) => {
        str+=`
     <Tr>
        <th>${index+1}</th>
        <th>${element[0]}</th>
        <th>${element[1]}</th>
        <th><button class="button" onclick="deleted(${index})">Delete</button></th>
    </Tr>`
    });
    table.innerHTML=str;
}
function getupdate(){
    let tit=document.getElementById("in1").value;
    let des=document.getElementById("in2").value;
    if(localStorage.getItem('itemsJson')==null){
        let itemsjsonarray=[];
        itemsjsonarray.push([tit,des]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsjsonarray));
    }
    else{
        let itemsjsonstr=localStorage.getItem('itemsJson');
        itemsjsonarray=JSON.parse(itemsjsonstr);
        itemsjsonarray.push([tit,des]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsjsonarray));
    }
    update();
}
let add=document.getElementById("button");
add.addEventListener("click",getupdate);
update();
function deleted(item_index){
    console.log("Delete",item_index);
    itemsjsonstr=localStorage.getItem('itemsJson');
    itemsjsonarray=JSON.parse(itemsjsonstr);
    itemsjsonarray.splice(item_index,1);
    localStorage.setItem('itemsJson',JSON.stringify(itemsjsonarray));
    update();
}
function clearstorage(){
    if(confirm("Do you Really Want to clear?")){

        console.log("deleting items");
        localStorage.clear();
        update();
    }
}