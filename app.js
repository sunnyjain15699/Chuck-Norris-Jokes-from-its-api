document.querySelector(".get-jokes").addEventListener("click",getJokes);

function getJokes(e){
  
  const number = document.querySelector("input[type = 'number']").value;
  
  const xhr = new XMLHttpRequest()

  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      // const arrayOfResponse = JSON.parse(response);
      //  console.log((arrayOfResponse));
     const originalArray = response.value;
     console.log(response);
     console.log(originalArray)
      let arrays = ``;
      originalArray.forEach(function(array){

        arrays += 

             `
              <ul>
              <li>${array.joke}</li>
              </ul>

            `
      });

      document.querySelector(".jokes").innerHTML = arrays ;

    }
  }

  xhr.send();

  e.preventDefault();
}