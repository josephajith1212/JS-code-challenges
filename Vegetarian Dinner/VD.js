const vegetarianMenu = ([
    {
      name: "Chicken parmesan",
      isVegetarian: false,
    },
    {
      name: "Penne a la vodka",
      isVegetarian: true,
    },
    {
      name: "Mushroom risotto",
      isVegetarian: true,
    },
    {
      name: "Veal saltambuca",
      isVegetarian: false,
    },
    {
      name: "Filet mignon",
      isVegetarian: false,
    },
  ]);

function getMenu(type = 'all'){
    if (type === 'all') return vegetarianMenu.map( m => m.name);
    type = (type==='v')? true : false;
    return vegetarianMenu.filter( m => m.isVegetarian===type).map( m => m.name);
}

console.log(getMenu('n'))