const categories = [
    'fantastyka', 
    'fantasy', 
    'science fiction',
    'horror',
    'klasyka',
    'komedia',
    'kryminał', 
    'sensacja', 
    'thriller',
    'literatura młodzieżowa',
    'literatura obyczajowa', 
    'romans',
    'literatura piękna',
    'powieść historyczna',
    'powieść przygodowa',
];

const sort = {
    sortBy: '',
    direction: ''
};


// Book object template
// {
//     id: '',
//     title: '',
//     author: '',
//     category: '',
//     priority: '',
//     addDate: '',
// }

const books = [
    {
        id: '1',
        title: 'Sherlock Holmes',
        author: 'sir Arthur Conan Doyle',
        category: 'kryminał',
        priority: '3',
        addDate: '4.02.2021',
    },
    {
        id: '2',
        title: 'Morderstwo w Orient Ekspresie',
        author: 'Aghata Christie',
        category: 'kryminał',
        priority: '5',
        addDate: '4.02.2021',
    },
    {
        id: '3',
        title: 'Kaczki w kosmosie',
        author: 'Jan Brzechwa',
        category: 'komedia',
        priority: '2',
        addDate: '1.02.2021',
    }
];

export {categories, books, sort};