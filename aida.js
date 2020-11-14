const image = ["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg","image-5.jpg","image-6.jpg","image-7.jpg","image-8.jpg","image-9.jpg","image-10.jpg","image-11.jpg","image-12.jpg","image-13.jpg",]
let i = 0 ;
const  animation = () =>{
        const wrapper = document.querySelector(".wrapper");
        wrapper.style.backgroundImage = `linear-gradient(to right , rgb(49, 24, 24) , #0008) ,  url('./img/${image[i]}')`;
    
        if(i < image.length)
        {
            i++
        } 
         else 
         {
             i = 0 ;

         }
}
//animation();
const count = document.querySelector('#count');
let cpt = 10 ;
const wrapper = document.body.firstElementChild.lastElementChild;
const id =  window.setInterval(() => {
    let dcpt = cpt-- ; 
   
    count.innerHTML = `${dcpt}` ;

    if(dcpt == 0){
        clearInterval(id);
        count.innerHTML = "" ;
        wrapper.removeChild(document.querySelector('.wrapper-message'))
        wrapper.removeChild(document.querySelector('.wrapper-count'))
        wrapper.style.textShadow = "none";
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const p  = document.createElement('p');
        p.setAttribute('id','fixed');
        p.innerHTML = "Happy Birthday Aida 🎉🎉🎉🎉";
        div.classList.add('wrapper-new-message')
        div.innerHTML = `
        <h2>Whish list</h2>
          <p>Happy birthday to you my partner</p>
          <p>feliz cumpleaños mi compañera</p>
          <p>Happy birthday to you my partner</p>
          <p>お誕生日おめでとうのパートナー</p>
          <p>Joyeux Anniversaire ma partenaire</p>
        `
        div2.classList.add('wrapper-new-list')
        div2.innerHTML = `
        <h2>Your qualities </h2>
          <ul>
             <li>Wonderful Awesome Women</li>
             <li>Always with smile</li>
             <li>Very very Kind</li>
             <li>Very Smart</li>
             <li>A Angel</li>
        </ul>
          `
          div3.classList.add('wrapper-x')
          div3.innerHTML = `
        <h2>Words</h2>
          <p>
          Today is a special day for you I create this little website  because 
          you deserve it 
          Good bless you a lot in your life and give you many health ,success in your studies and
          everything you are doing and yours future projects . </br></p>`
        wrapper.appendChild(div);
        wrapper.appendChild(div2)
        wrapper.appendChild(div3)
        document.body.appendChild(p);
       /****
        * Ecrire le message
        */
    }
   
},1000)
window.setInterval(animation,5000);
