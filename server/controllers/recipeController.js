require('../models/database');
const Category = require('../models/Category')


//get homepage

exports.homepage = async(req, res) => {

    try {
        const limitNumber = 5;
        const categories = await Category.find( {} ).limit(limitNumber);


        res.render('index', { title: 'Cooking Blog - Home', categories });

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