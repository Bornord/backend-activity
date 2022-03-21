### backend-activity

## remarques

# R1 : 
npm install _ 
=> commande à faire à chaque fois, c'est pas un import général. 
=> À CHAQUE FOIS et cela inclut :
    - Démarrage serveur_frontend
    - Import package express
    - Import package MongoDB

# R2 : construction d'un json avec plusieurs éléments
Bon exemple :
    // création de l'objet statique
    const products = [
        {
            name: "p1",
            description: 'd1',
            price: 10,
            inStock: true,
        },{
            name: 'p2',
            description: 'd2',
            price: 20,
            inStock: false,
        }
    ];
    // retour du json pour le serveur qui a fait la requête. 
    res.status(300).json(products);
