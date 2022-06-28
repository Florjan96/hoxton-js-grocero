/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/
let state = {
  storeItems: [
    {
      id: 1,
      name: 'beetroot',
      price: 0.45,
      stock: 10,
      inCart: 0,
    },
    {
      id: 2,
      name: 'carrot',
      price: 0.15,
      stock: 2,
      inCart: 5,
    },
    {
      id: 3,
      name: 'apple',
      price: 0.25,
      stock: 1,
      inCart: 0,
    },
  ],
}
