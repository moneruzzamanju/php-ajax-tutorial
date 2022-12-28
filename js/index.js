function sendData(){
    let xhr = new XMLHttpRequest();
xhr.open("GET","data.php?name=moneruzzaman&age=40",true);
xhr.onreadystatechange = function(){
    if(this.readyState===4 && this.status===200){
        console.log(this.responseText);

    }
}
    xhr.send();
}



document.getElementById('send').addEventListener('click',function(){
    sendData();
})

