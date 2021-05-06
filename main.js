(() => {
  
    async function dataPoke(poke){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
        const responseSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${poke}`);           
        const data = await response.json();
        const dataSpecies = await responseSpecies.json();
        
        console.log(data.name);
        console.log(data.id);
        console.log(data.sprites.front_default);

        document.getElementById("name").innerHTML=data.name;
        document.getElementById("id").innerHTML=data.id;
              
        let imageArea = document.getElementById("image"); 
        //create img and append it to the body
        const img = document.createElement("img");
        img.src = data.sprites.front_default;
        imageArea.appendChild(img);

        // get the list with the moves
       let ulArea = document.getElementById("movesList");
        data.moves.forEach(element => { 
            const listElement = document.createElement("li");
            listElement.innerHTML = element.move.name;
            ulArea.appendChild(listElement);             
        });

      };
    
      let input = document.getElementById("pokeId");
      
      input.addEventListener("change",  getInput);
      let text;
      function getInput(e){
            text = e.target.value;
         // console.log(text);
            return text;
      };
      
      let submit = document.getElementById("submit").addEventListener("click", function(){
          dataPoke(text);
          removeData();
         
      });

      function removeData(){
        var oldImg=document.querySelector("#image").lastChild;
        document.querySelector("#image").removeChild(oldImg);
        document.querySelector("#movesList").innerHTML="";
        }

})();