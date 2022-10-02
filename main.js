let up=document.querySelector(".up")
let text=document.querySelector(".text")
let rotate=document.querySelector(".fa-arrows-rotate")
let left=document.querySelector(".fa-rotate-left")
let quran=document.querySelector(".fa-book-quran")
let count=document.querySelector(".count span")
let sounds=document.querySelector(".sounds")
let music=document.querySelector(".fa-music")
let muite=document.querySelector(".fa-volume-xmark")
let audio=document.querySelector("#trc")
let succes=document.querySelector("#succes")

up.onclick=function(){
    if(text.textContent<9){
        text.innerHTML=`${Number(text.textContent)+1}`
    }else{
        text.innerHTML=Number(text.textContent)+1
    }
    
    if(audio.className!="stop"){
        audio.play()
    }
    

        // console.log(number)
        // console.log(text.textContent)
        // let s=count.textContent
    if(count.textContent===text.textContent){
        succes.play()
        
    }
}
rotate.onclick=function(){
    text.innerHTML=0
}
left.onclick=function(){
    text.innerHTML=Number(text.textContent)-1
    if(text.textContent==="0"){
        left.classList.add("off")
    }
}
quran.onclick=function(){
    let num=prompt("ادخل القيمه المستهدفه للتسبيح :")
    if(num===""||num===null){
        count.innerHTML=33
    }else{
        count.innerHTML=num
    }
    
    
    text.innerHTML=0
    
    return num
}

// <audio src="sound/flashlight-clicking-on-105809.mp3">
let start="stop"
sounds.onclick=function(){
    if(start==="stop"){
        audio.classList.add("stop")
        muite.style.display="block"
        music.style.display="none"
        start="start"
    }else if(start==="start"){
        audio.classList.remove("stop")
        muite.style.display="none"
        music.style.display="block"
        start="stop"
    }
}
// ----Color----------


let div=document.querySelector(".fa-palette")
let arr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

// let a=''


// console.log(`#${a}`)
// c=`#${a}`

// div.style.color=`${c}`
div.onclick=function(){
    let a=""
    for(i=0;i<6;i++){
        a+=arr[Math.floor(Math.random()*arr.length)]
    }
    document.body.style.backgroundColor=`#${a}`
    
//     const headTag = document.getElementsByTagName('head')[0];
//     const styleTag = document.createElement("style");
//     styleTag.innerHTML = `
// :root {
//     --main-color: #${a};
// }
// `;
// headTag.appendChild(styleTag);

}