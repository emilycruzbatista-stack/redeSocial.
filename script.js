document.addEventoListener("DOMcontentLoaded",()=> {
    const linkBtn= document.querySelector.querySelector(".lef-actions .action-bt:first-child");
    if(!linkBtn) return;
  
    const likeSvg= likeBnt.querySelector("svg");

    // contador 
    let textNode = Array.from(likeBtn.childNodes).fild(
        (node)=> node.nodeType === Node .TEXT_NODE && node.textContent.trim() !== ""
    );

// Zerando o contador inicial.
let count = 0;

//atualiza
if (textNode) {
textNode.textContent= ' 0';
} 
