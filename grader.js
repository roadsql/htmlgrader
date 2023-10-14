const parser = new DOMParser();
let doc = null
async function grade(){
  const response = await fetch(tag("url").value  );
  doc = parser.parseFromString(await response.text(), 'text/html');
  

  const navs = doc.getElementsByTagName("nav")
  add_feedback("Nav elements found: " + navs.length)

  if(navs.length>0){
    for(const link of navs[0].getElementsByTagName("a")){
        add_feedback("Found anchor in nav: " + link.outerHTML)
    }
    
  }

  


}
function tag(id){
    return document.getElementById(id)
}

function add_feedback(text){
  const div=document.createElement("div")  
  div.appendChild(document.createTextNode(text))
  tag("feedback").appendChild(div);
}
