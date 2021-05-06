(() => {
  
    async function dataPoke(poke){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        const data = await response.json();
        console.log(data.name);
        console.log(data.id);
        console.log(data.sprites.front_default);

        document.getElementById("name").innerHTML=data.name;
        document.getElementById("id").innerHTML=data.id;
              
        //var imageArea = getElementById("image");
        //create img and append it to the body
        const img = document.createElement("img");
        img.setAttribute("src" ,"");
        img.src = data.sprites.front_default;
        document.body.appendChild(img);

        // get the list with the moves
        var listName = [];
        data.moves.forEach(element => { 
            listName.push(element.move.name);                  
        });
        var x = listName.toString();
        document.getElementById("moves").innerHTML=x;


      };
    
      let input = document.getElementById("pokeId");
      
      input.addEventListener("change",  getInput);
      var text;
      function getInput(e){
            text = e.target.value;
         // console.log(text);
            return text;
      };
      
      let submit = document.getElementById("submit").addEventListener("click", function(){
          dataPoke(text);
          removeImg();
         
      });

      function removeImg(){
        var olddata=document.body.lastChild;
        document.body.removeChild(olddata);
        
        }

      
      
    // dataPoke(42);
})();