export function lucky() {
  console.log(`feeling lucky pressed`);
 let value = Math.floor(Math.random() * 100);
let r = (Math.random() *10 ).toString(36).substring(9);
console.log("randomized", r);
  console.log(`this is value ${value}`)

      const link1 = "https://api.artic.edu/api/v1/artworks/search?limit=1q="
      const link2= link1+r
    const requestOptions1 = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "randoing the db throuth the api" })
    };

 
    fetch(link2, requestOptions1)
      .then((response) => response.json())
      .then((data) => console.log(data));


  }

