const inputTxt = document.querySelector('.enter-txt input') ;
const addBtn = document.querySelector('.add-btn') ;
const addNewDiv = document.querySelector('.add-new-div') ;
const container = document.querySelector('.container') ;



addBtn.onclick = function(){
     render() ;
}

function deleteDiv(item){
     console.log("abhi") ;
     const parentDiv = item.parentNode ;
     container.removeChild(parentDiv) ;

}



function createComponent(todo){
     const inputContent = inputTxt.value ;
     if(inputContent === ""){
        return ; 
     }else{
         inputTxt.value = "" ;
     }
    
     const check = document.createElement('input');
     check.setAttribute('type' , 'checkbox');

     const divCreated = document.createElement('div') ;
     divCreated.setAttribute('class' , 'new-div-created') ;

     const span = document.createElement('span') ;
     span.innerHTML = inputContent ;
     span.setAttribute('class'  , 'span-created') ;


     divCreated.appendChild(check) ;
    //  const textNode = document.createTextNode(inputContent);
     divCreated.appendChild(span) ;

    const del = document.createElement('button') ;
    del.innerHTML = "delete" ;
    del.setAttribute('class' , 'del-btn') ;
    del.addEventListener('click' , () => deleteDiv(del)) ;
    divCreated.appendChild(del) ;
     console.log(inputContent) ;
     return divCreated ;
}



function render(){
    
    
    const divEl = createComponent() ;
    container.appendChild(divEl) ;
   

}