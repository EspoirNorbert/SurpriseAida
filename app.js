window.onload = () =>{
    document.body.style.visibility = "hidden";
    document.write(`<div class='center'>`);
    const div = document.createElement('div');
    const center = div.style;
   center.position = "absolute";
   center.left = "50%";
   center.top = "50%";
   center.transform = "translate(-50%, -50%)";
   center.border = "5px solid #FFFF00";
   center.padding = "100px"
   document.body.style.backgroundColor = "#343a40"
   var button = document.createElement('button');
   button.innerHTML = "Voir la Surprise"
   const btnStyle = button.style;
   btnStyle. fontFamily = "Helvetica, 'Arial', sans-serif "
   btnStyle.display= "  inline-block"
   btnStyle.fontSize= " 1.5em"
   btnStyle.padding= "  1em 2em"
   btnStyle.marginTop= "  100px"
   btnStyle.marginBottom= "  60px"
   btnStyle.appearance= "  none"
   btnStyle.backgroundColor= "#ff0081"
   btnStyle.color= "#fff"
   btnStyle.borderRadius= "4px"
   btnStyle.border= "  none"
   btnStyle.cursor= "  pointer"
   btnStyle.position= "  relative"
   btnStyle.transition= "  transform ease-in 0.1s, box-shadow ease-in 0.25s"
   btnStyle.boxShadow = "0 2px 25px rgba(255, 0, 130, 0.5)"
   btnStyle.outline ="0"
    document.body.appendChild(div);
    div.appendChild(button);
    button.addEventListener('click' , () => {
        document.location.href = "aida.html"
       })
    
}

