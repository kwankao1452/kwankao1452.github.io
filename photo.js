import {photo} from "./data.js"


const container = document.getElementById("container")

console.log(container)


photo.forEach(photo1=>{
    // console.log(anime1)

    // console.log(anime1.episode_amount)

    
    let img = document.createElement("img")
  
    img.setAttribute("src",(photo1.photo_url))

    let name= document.createElement("div") 
    name.innerHTML= photo1.name

    let from= document.createElement("div") 
    from.innerHTML= photo1.from

    let day= document.createElement("div") 
    day.innerHTML= photo1.day

    let np=document.createElement("div")

    np.setAttribute("class","nampan")

    np.appendChild(img)
    np.appendChild(name)
    np.appendChild(from)
    np.appendChild(day)
    container.appendChild(np)


    

})