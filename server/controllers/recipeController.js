require('../models/database');
const Category = require('../models/Category')
const Recipe = require('../models/Recipe')


//get homepage

exports.homepage = async(req, res) => {

    try {
        const limitNumber = 5;
        const categories = await Category.find( {} ).limit(limitNumber);
        const latest = await Recipe.find( {}).sort( {_id: -1}).limit(limitNumber);
        const thai = await Recipe.find(  {'category': 'Thai'}).limit(limitNumber);
        const american = await Recipe.find(  {'category': 'American'}).limit(limitNumber);
        const chinese = await Recipe.find(  {'category': 'Chinese'}).limit(limitNumber);

        const food = { latest, thai, american, chinese };

        res.render('index', { title: 'Cooking Blog - Home', categories, food });

    } catch (error) {
        res.status(500).send({message: error.message || 'Error Occured'}) ;   
    }
}


//get categories


exports.exploreCategories = async(req, res) => {

    try {
        const limitNumber = 20;
        const categories = await Category.find( {} ).limit(limitNumber);


        res.render('categories', { title: 'Cooking Blog - Categories', categories });

    } catch (error) {
        res.status(500).send({message: error.message || 'Error Occured'}) ;   
    }
}








// async function insertDummyCategoryData(){
//     try {
//         await Category.insertMany( [
//             {
//                 'name': 'Thai',
//                 'image': 'thai-food.jpg'
//             },
//             {
//                 'name': 'American',
//                 'image': 'american-food.jpg'
//             },
//             {
//                 'name': 'Chinese',
//                 'image': 'chinese-food.jpg'
//             },
//             {
//                 'name': 'Mexican',
//                 'image': 'mexican-food.jpg'
//             },
//             {
//                 'name': 'Indian',
//                 'image': 'indian-food.jpg'
//             },
//             {
//                 'name': 'Spanish',
//                 'image': 'spanish-food.jpg'
//             },
//             {
//                 'name': 'Thai',
//                 'image': 'thai-food.jpg'
//             },
//         ]);
//     } catch (error) {
//         console.log('err', + error)
//     }
// }

// insertDummyCategoryData()

// async function insertDummyRecipeData(){
//     try {
//         await Recipe.insertMany( 
//             [
//                 {
//                     "name": "Breads",
//                     "description": `In a wok or large skillet add 1 Tablespoon olive oil over medium high heat. Add bell pepper, peas, carrots, mushrooms, broccoli, baby corn, and water chestnuts. Sauté 2-3 minutes until veggies are almost tender.

                    
//                     Source: https://therecipecritic.com/vegetable-stir-fry/ `,
//                     "email": 'hello@gmail.com',
//                     "ingredients": [
//                         "1 clove of garlic",
//                         "1 fresh red chilli",
//                         "3 spring onions",
//                         "1 small red onion",
//                         "1 handful of mangetout",
//                         "a few shiitake mushroom"
//                     ],
//                         "category": "American",
//                         "image": "breads.jpg"
//                 },
//                 {
//                     "name": "Stir-fried vegetables",
//                     "description": `In a wok or large skillet add 1 Tablespoon olive oil over medium high heat. Add bell pepper, peas, carrots, mushrooms, broccoli, baby corn, and water chestnuts. Sauté 2-3 minutes until veggies are almost tender.

                    
//                     Source: https://therecipecritic.com/vegetable-stir-fry/ `,
//                     "email": 'hello@gmail.com',
//                     "ingredients": [
//                         "1 clove of garlic",
//                         "1 fresh red chilli",
//                         "3 spring onions",
//                         "1 small red onion",
//                         "1 handful of mangetout",
//                         "a few shiitake mushroom"
//                     ],
//                         "category": "Chinese",
//                         "image": "stir-fried-vegetables.jpg"
//                 },
//                 {
//                     "name": "Spring rolls",
//                     "description": `In a wok or large skillet add 1 Tablespoon olive oil over medium high heat. Add bell pepper, peas, carrots, mushrooms, broccoli, baby corn, and water chestnuts. Sauté 2-3 minutes until veggies are almost tender.

                    
//                     Source: https://therecipecritic.com/vegetable-stir-fry/ `,
//                     "email": 'hello@gmail.com',
//                     "ingredients": [
//                         "1 clove of garlic",
//                         "1 fresh red chilli",
//                         "3 spring onions",
//                         "1 small red onion",
//                         "1 handful of mangetout",
//                         "a few shiitake mushroom"
//                     ],
//                         "category": "Chinese",
//                         "image": "spring_rolls.jpg"
//                 },
//                 {
//                     "name": "Chicken Piccata",
//                     "description": `In a wok or large skillet add 1 Tablespoon olive oil over medium high heat. Add bell pepper, peas, carrots, mushrooms, broccoli, baby corn, and water chestnuts. Sauté 2-3 minutes until veggies are almost tender.

                    
//                     Source: https://therecipecritic.com/vegetable-stir-fry/ `,
//                     "email": 'hello@gmail.com',
//                     "ingredients": [
//                         "1 clove of garlic",
//                         "1 fresh red chilli",
//                         "3 spring onions",
//                         "1 small red onion",
//                         "1 handful of mangetout",
//                         "a few shiitake mushroom"
//                     ],
//                         "category": "Italian",
//                         "image": "chicken_Piccata.jpg"
//                 },
//                 {
//                     "name": "Noodle_soup",
//                     "description": `In a wok or large skillet add 1 Tablespoon olive oil over medium high heat. Add bell pepper, peas, carrots, mushrooms, broccoli, baby corn, and water chestnuts. Sauté 2-3 minutes until veggies are almost tender.

                    
//                     Source: https://therecipecritic.com/vegetable-stir-fry/ `,
//                     "email": 'hello@gmail.com',
//                     "ingredients": [
//                         "1 clove of garlic",
//                         "1 fresh red chilli",
//                         "3 spring onions",
//                         "1 small red onion",
//                         "1 handful of mangetout",
//                         "a few shiitake mushroom"
//                     ],
//                         "category": "Thai",
//                         "image": "noodle_soup.jpg"
//                 },


//                     ],
//         )
                    
//                 } catch (error) {
//         console.log('err', + error)
//     }
// }

// insertDummyRecipeData()