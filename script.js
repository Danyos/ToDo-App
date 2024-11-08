const root = document.querySelector('#root');
const btnAdd = document.querySelector('.btnAdd');
let updateValue=null
let lists
let myLists = [{
    id: 1,
    label: "pamidor"
}, {
    id: 2,
    label: "varung"
},{
    id: 3,
    label: "mandarin"
}, {
    id: 4,
    label: "apelsin"
}]

let newUl=document.createElement('ul')
newUl.setAttribute('class',"list-group pb-5");
root.appendChild(newUl)
myLists.forEach(item => {
    add(item)
})

btnAdd.onclick=function (){
    if(updateValue){
        update()
    }else{
        add()
    }

}
function add(obj) {

    const label = document.querySelector('#label');
    if (!obj) {
        obj = {
            id: Date.now(),
            label: label.value,
        }
        myLists.push(obj);
        label.value = ''
    }

    let newText = document.createElement('li');
    newText.setAttribute('class','list-group-item list-group-item-action d-flex align-items-center justify-content-between')

    newText.innerHTML =`<span class="item-text myText-${obj.id}">${obj.label}</span>`;

    newText.style.color = 'red'
    newText.classList.add('lists');

    newText.setAttribute('data-id', obj.id);
        let newDv=document.createElement('div');
            // _______Editar
            let btnEdit=document.createElement('button')
            btnEdit.innerText = 'Editar'
             btnEdit.setAttribute('class',"edit-me btn btn-secondary btn-sm mr-1")
             newDv.appendChild(btnEdit)
            // _______Delete
            let btnDelete=document.createElement('button')
            btnDelete.innerText = 'Delete'
            btnDelete.setAttribute('class',"delete-me btn btn-danger btn-sm");
             newDv.appendChild(btnDelete)
        newText.appendChild(newDv)
    newUl.appendChild(newText);

    btnDelete.onclick = function () {

        let id = +newText.getAttribute('data-id')
        myLists = myLists.filter(list => list.id !== id)

        newText.remove()
    }
    btnEdit.onclick = function () {
        let id = +newText.getAttribute('data-id')
        let data= myLists.find(list => list.id === id)
        updateValue=data
        label.value=data.label
        btnAdd.innerHTML=`Update Value`

    }


}
function update(){
    const label = document.querySelector('#label');
    updateValue.label=label.value


    let myText=document.querySelector('.myText-'+updateValue.id)
    myText.innerHTML=`${label.value}`
    btnAdd.innerHTML=`add`
    updateValue=null
    label.value = ''
}

// function add() {
//     const label = document.querySelector('#label');
//
//     let obj = {
//         id: Date.now(),
//         label: label.value,
//     }
// myLists.push(obj);
//
//     root.innerHTML += `
// <p style="color:red" class="lists" data-id="${obj.id}">${obj.label}</p>
// `
//     lists = document.querySelectorAll('.lists');
//     lists.forEach(list => {
//         list.onclick = function () {
//             let id=+list.getAttribute('data-id')
//             let data=myLists.find(list => list.id===id)
//             console.log(data)
//         }
//     })
//
// }









