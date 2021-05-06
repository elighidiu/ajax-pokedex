(() => {
  
    async function dataPoke(poke){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        const data = await response.json();
        console.log(data.name);
        console.log(data.id);
        console.log(data.sprites.front_default);

        document.getElementById("name").innerHTML=data.name;
        document.getElementById("id").innerHTML=data.id;
       
       
        data.moves.forEach(element => {
           
            var listName = [];
            listName.push(element.move.name);
            console.log(element.move.name);
                  
        });

        
        //var imageArea = getElementById("image");
        const img = document.createElement("img");
        img.setAttribute("src" ,"");
        img.src = data.sprites.front_default;
        document.body.appendChild(img);

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