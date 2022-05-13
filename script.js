 var myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");
 myHeaders.append("x-api-key", "03e4cb07-f33b-43f2-bb2a-a341ea8dd115");

 var requestOptions = {
   method: 'GET',
   headers: myHeaders,
   redirect: 'follow'
 };

 let cats = []

 function hii() {
     fetch("https://api.thecatapi.com/v1/images/search?format=json", requestOptions)
   .then(res => res.json().then(data => {
       if (!cats.includes(data[0].url)) {
        const uwu = document.createElement('img')
        const section = document.querySelector('section')
        section.appendChild(uwu)
        uwu.scrollIntoView();
        uwu.id = 'image'
        console.log('fonction appelée')
           cats.push(data[0].url);
           uwu.src = data[0].url;
       }
       else {
           console.log("yo")
           hii()
       }
    }))
   .catch(error => console.log('error', error));
 }
