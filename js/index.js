function sendData(){
    let xhr = new XMLHttpRequest();
xhr.open("GET","data.php?name=moneruzzaman&age=40",true);
xhr.onreadystatechange = function(){
    if(this.readyState===4 && this.status===200){
    document.getElementById('result').innerHTML = this.responseText;


        let response = JSON.parse(this.responseText);
        console.log(response.result);


    }
}
    xhr.send();
}



document.getElementById('send').addEventListener('click',function(){
    sendData();
})

