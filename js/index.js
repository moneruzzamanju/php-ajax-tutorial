function sendData(){
    let xhr = new XMLHttpRequest();
    xhr.open("POST","data.php",true);
    
    xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    );

    xhr.onreadystatechange = function(){
        if(this.readyState===4 && this.status===200){
            document.getElementById('result').innerHTML = this.responseText;


            let response = JSON.parse(this.responseText);
            console.log(response.result);


        }
}
    xhr.send("name=moneruzzaman&age=40");
}



document.getElementById('send').addEventListener('click',function(){
    sendData();
})

