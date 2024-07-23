function Accepted(){
    let store=document.getElementById("input").value;
    let arr=["What is HTML?","What is css?","What is JavaScript","What is the use of Bootstrap","What do you mean by React"];
    for(i=0;i<arr.length;i++){
    if(store===arr[i]){
        alert("Accepted");
    }   
    }
    if(store==" "|| store!=arr|| store==null){
        alert("Declined");
    }

    
}
function Declined(){
    let store=document.getElementById("input").value;
    let arr=["What is HTML?","What is css?","What is JavaScript","What is the use of Bootstrap","What do you mean by React"];
    for(i=0;i<arr.length;i++){
        if(store===arr[i]){
            alert("Accepted");
        }
    }
    if(store==" "|| store!=arr[i] || store==null){
      alert("Declined");
    }
}