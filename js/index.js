function number(x){
    // let a=this.innerHTML
    // x=parseInt(x)
    document.getElementById("demo").innerHTML+=x
}
function submit(){
    let k=document.getElementById("demo").innerHTML
    // alert(typeof(k))
    // k=Number(k)
    j=eval(k)
    document.getElementById("demo").innerHTML=j   
}
function clear(){
    let a=document.getElementById("demo").innerHTML
    alert(a)
}
function back(){
    let a=document.getElementById("demo").innerHTML
    a=a.substring(0,a.length-1);
    document.getElementById("demo").innerHTML=a

}
