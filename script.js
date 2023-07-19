let url = ' https://jsonplaceholder.typicode.com/users/1/todos';
let content = document.getElementById('arrayContent');

function loadToDo(){
    let response = fetch(url);

    response.then((response) =>{
        dataPromise = response.json();
        dataPromise.then((res) =>{
                console.log(res);

            content.innerText = '';

        res.forEach((element) => {
            let textElement = document.createElement('div');
            textElement.innerText = element.src;
            content.appendChild(textElement);

        });

        })
    });


}
loadToDo();