console.log('hello from js file')
const deleteBtn = document.getElementById('delete-btn');
 const textField = document.getElementById('input-field');
 const info = document.getElementById('info');

 deleteBtn.addEventListener('click',function(){
    info.style.display = 'none';
 })

 textField.addEventListener('keyup', function(event){
    const text = event.target.value;
    if(text === 'delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled',true);
    }
 })