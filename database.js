const books =[
    {
        
    ISBN: "12345Book",
    title: "Getting Started with MERN",
     pubdate: "2021-07-07",
     language: "en",
     numpage: "250",
     author: [1, 2],
     publications: [1],
     category: ["tech", "programming", "education","thriller"],
    },
    // {
    // ISBN: "1234567Book",
    // title: "Getting Started with data Analysis",
    //  pubdate: "2021-07-07",
    //  language: "en",
    //  numpage: "350",
    //  author: [2],
    //  publications: [1],
    //  category: ["tech", "programming", "education"],
    // }
    
];

const authors = [
    {
        id: 1,
        name: "Pavan",
        books: ["12345Book","1234566789Secret"],
    },
    {
        id: 2,
        name: "Elon Musk",
        books: ["12345Book"]
    },
];

const publications = [
    {
        id: 1,
        name: "writex",
        books: ["12345Book"],

    },
];


module.exports = {books,authors,publications};