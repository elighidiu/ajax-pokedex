(() => {
  
    async function dataPoke(poke){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
        const responseSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${poke}`); 
                 
        const data = await response.json();
        const dataSpecies = await responseSpecies.json();
        
        if(dataSpecies.evolves_from_species!==null) {
            let previousPoke = dataSpecies.evolves_from_species;  //get the name of the previous species
            const responsePrevious = await fetch(`https://pokeapi.co/api/v2/pokemon/${previousPoke.name}`);  //using the name of the previous species get more data (like the id and image - this info is in our first used api)

            const dataPrevious = await responsePrevious.json();
            document.getElementById("prevName").innerHTML=`Evolved from ${dataPrevious.name}`;
            document.getElementById("prevId").innerHTML=dataPrevious.id;

            let prevImageArea = document.getElementById("prevImage"); 
            const prevImg = document.createElement("img"); //create img
            prevImg.src = dataPrevious.sprites.front_default;
            prevImageArea.appendChild(prevImg); //append the image to the div 

        } else {
            console.log("No previous evolution");
        }

        document.getElementById("name").innerHTML=data.name;
        document.getElementById("id").innerHTML=data.id;
              
        let imageArea = document.getElementById("image"); 
        const img = document.createElement("img"); //create img
        img.src = data.sprites.front_default;
        imageArea.appendChild(img); //append the image to the div 

        // get a list with first 5 moves
        let ulArea = document.getElementById("movesList");
        for (let i=0; i<5; i++){
            const listElement = document.createElement("li");
            listElement.innerHTML = data.moves[i].move.name;
            ulArea.appendChild(listElement);  
        }

          /*    Instead of displaying all moves, I will only display 5
                data.moves.forEach(element => { 
                const listElement = document.createElement("li");
                listElement.innerHTML = element.move.name;
                ulArea.appendChild(listElement);             
          }); */

      };
    
      let input = document.getElementById("pokeId");
      
      input.addEventListener("change",  getInput);
      let text;
      function getInput(e){
            text = e.target.value;
            if(isNaN("text")){ //if the input is not a number, then change the string to lower case
                text = text.toLowerCase();
            }
         // console.log(text);
            return text;
      };
      
      let submit = document.getElementById("submit").addEventListener("click", function(){
          dataPoke(text);
          removeData();
         
      });

      function removeData(){
        var oldImg = document.querySelector("#image").lastChild;
        document.querySelector("#image").removeChild(oldImg);
        var oldPrevImg = document.querySelector("#prevImage").lastChild;
        document.querySelector("#prevImage").removeChild(oldPrevImg);
        document.querySelector("#movesList").innerHTML="";
        document.querySelector("#prevName").innerHTML="";
        document.querySelector("#prevId").innerHTML="";
        }

})();