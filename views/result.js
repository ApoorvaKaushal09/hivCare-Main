let res=document.getElementById("result");
if(res){
    res.addEventListener('click',result());
}
function result(){
    var count=0;
    if(document.getElementById('yes1').checked)
    count++;
    if(document.getElementById('yes2').checked)
    count++;
    if(document.getElementById('yes3').checked)
    count++;
    if(document.getElementById('yes4').checked)
    count++;
    if(document.getElementById('yes5').checked)
    count++;
    if(document.getElementById('yes6').checked)
    count++;
    if(document.getElementById('yes7').checked)
    count++;
    if(document.getElementById('yes8').checked)
    count++;
    if(document.getElementById('yes9').checked)
    count++;
    if(document.getElementById('yes10').checked)
    count++;

    if(count>=1 &&count <5)
    document.write("You are Having a low risk.You should consider having a HIV test.");
    else if(count> 5)
    document.write("You are on a high risk! You must have a HIV test as soon as possible");
    else if(count==0)
    document.write("You are completely safe!");
}