const task3Element = document.getElementById('task-3');

function taskOne(){
    alert('this is no paramter alert');
}

function taskOnePointOne(userName){
    alert(userName);
}

taskOne();
taskOnePointOne('Lucas NB');

task3Element.addEventListener('click',taskOne);
function addThreeName(name1,name2,name3){
    return name1 + name2 + name3
}

const result = addThreeName('Ingrid','Lucas','Winston');
alert(result);
