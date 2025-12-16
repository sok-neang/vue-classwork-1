import { reactive, ref } from "vue";

const ProductList = reactive([
    {
        id: 1,
        title: "HTML & CSS",
        description: "The Fifth and Current Major Version of the HTML",
        price: "$35",
        image: "https://tse3.mm.bing.net/th/id/OIP.zYiJJy1da5AlKlGYMDsdAAAAAA?pid=Api&P=0&h=220"
    },
    {
        id: 2,
        title: "JavaScript",
        description: "A Complete Beginner’s Guide to Learning JavaScript",
        price: "$28",
        image: "https://tse4.mm.bing.net/th/id/OIP.ZH4LlwCzG3XiYwBSf2fchQHaJl?pid=Api&P=0&h=220"
    },
    {
        id: 3,
        title: "Vue JS",
        description: "The core library is focused on the view layer only",
        price: "$40",
        image: "https://tse4.mm.bing.net/th/id/OIP.qK9y-sfYrP0NkJq-jkgZHQAAAA?pid=Api&P=0&h=220"
    },
    {
        id: 4,
        title: "Node JS",
        description: "Ulises Gascón brings over 10 years of software",
        price: "$50",
        image: "https://tse4.mm.bing.net/th/id/OIP.lu_pCdWD3_RYBbgCJLD43wAAAA?pid=Api&P=0&h=220"
    },
    {
        id: 5,
        title: "Laravel",
        description: "The Laravel landscape changed dramatically in 2024",
        price: "$43",
        image: "https://tse1.mm.bing.net/th/id/OIP.AMsvpknWFP181uJAa7JnfAAAAA?pid=Api&P=0&h=220"
    },
    {
        id: 5,
        title: "C++/OOP",
        description: "C++ is a similar kind of programming language",
        price: "$63",
        image: "https://images.tpointtech.com/cpp/images/cpp-books-for-beginners10.png"
    }
]);

const isAuthenticated = ref(false);

export function productList() {
    return { ProductList, isAuthenticated };
}