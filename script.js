let input = document.getElementById("input");
let div = document.getElementById("bottomdiv");
input.addEventListener("input",()=>{
    //console.log(input.value);
    let current = input.value;
    console.log(current.length);
    div.innerHTML =`<h2 style='margin-left:20px;margin-top:50px;'>Total Characters:<span style="color: purple;">${current.length}</span></h2>
    <h2 style='margin-right:20px;margin-top:50px;'>Remaining:<span style="color: red;">${50-current.length}</span></h2>`;

})
