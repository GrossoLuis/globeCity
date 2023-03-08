// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
      [
      {
        id: 0, 
        title : "Globo Spiderman",
        price : 950,
        image: "http://localhost:3000/img/spiderman.png",
        description: 
          "Globo de personaje de marvel Spiderman, medidas 30x40cm"


      },
      {
        id: 1, 
        title : "Globo Sonic",
        price : 1250,
        image: "http://localhost:3000/img/sonic.jpg",
        description: 
          "Globo de personaje de Sonic, medidas 90x70cm"

      },
      {
        id: 2, 
        title : "Pack de globos Rojos",
        price : 1500,
        image: "http://localhost:3000/img/globosrojos.webp",
        description: 
          "Pack de globos rojos x6u, todos de color rojo carmesi"
      },
      {
        id: 3, 
        title : "Globo Letra A ",
        price : 650,
        image: "http://localhost:3000/img/globoA.jpg",
        description: 
          "Globo de la letra A, color plateado 30x40cm"
      },
      {
        id: 4, 
        title : "Globo Corazon",
        price : 1050,
        image: "http://localhost:3000/img/globoCorazon.jpg",
        description: 
          "Globo de corazon Rosa, medidas 130x200cm"
      },
      {
        id: 5, 
        title : "Globo Hulk",
        price : 1950,
        image: "http://localhost:3000/img/hulk.jpg",
        description: 
          "Globo de personaje de marvel Hulk, medidas 230x140cm"
      },

      ]
  )
}
