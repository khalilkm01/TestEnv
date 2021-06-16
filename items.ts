const foods =  [
        {
            id: "0",
            Name: "White Rice",
            Description: "",
            Available: true,
            Price: {
                Regular: 1200,
                Large: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"),
            Category: 'Main Courses'
        },
        {
            id: "1",
            Name: "Fried Rice",
            Description: "",
            Available: true,
            Price: {
                Regular: 1200,
                Large: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"),
            Category: 'Main Courses'
        },
        {
            id: "3",
            Name: "Jollof Rice",
            Description: "",
            Available: true,
            Price: {
                Regular: 1200,
                Large: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"),
            Category: 'Main Courses'
        },
        {
            id: "4",
            Name: "White Couscous",
            Description: "",
            Available: true,
            Price: {
                Regular: 1200,
                Large: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"), 
            Category: 'Main Courses'
        },
        {
            id: "5",
            Name: "Jollof Couscous",
            Description: "",
            Available: true,
            Price: {
                Regular: 1200,
                Large: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"),
            Category: 'Main Courses'
        },
        {
            id: "6",
            Name: "White Spaghetti",
            Description: "",
            Available: true,
            Price: {
                Regular: 1200,
                Large: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"),  
            Category: 'Main Courses'
        },
        {
            id: "7",
            Name: "Jollof Spaghetti",
            Description: "",
            Available: true,
            Price: {
                Regular: 1200,
                Large: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"),
            Category: 'Main Courses'
        },
        {
            id: "8",
            Name: "Tuna Pasta",
            Description: "",
            Available: true,
            Price: {
                Regular: 2500
            },
            Img: require("./Images/FoodImages/x.jpg"),  
            Category: 'Main Courses'
        },
        {
            id: "9",
            Name: "Lasagna / Cottage Pie",
            Description: "",
            Available: true,
            Price: {
                Regular: 2500
            },
            Img: require("./Images/FoodImages/x.jpg"),
            Category: 'Main Courses'
        },
        {
            id: "10",
            Name: "Butter Chicken",
            Description: "",
            Available: true,
            Price: {
                Regular: 3500
            },
            Img: require("./Images/FoodImages/x.jpg"),  
            Category: 'Main Courses'
        },
        {
            id: "11",
            Name: "Thai Curry",
            Description: "",
            Available: true,
            Price: {
                Regular: 3500
            },
            Img: require("./Images/FoodImages/x.jpg"),
            Category: 'Main Courses'
        },
        {
            id: "12",
            Name: "Nigeria Dishes",
            Description: "",
            Available: true,
            Price: {
                Regular: 2000
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Main Courses'
        },
        {
            id: "13",
            Name: "Chicken Shawarma",
            Description: "",
            Available: true,
            Price: {
                Regular: 800
            },
            Img: require("./Images/FoodImages/x.jpg"),
            Category: 'Shawarmas + Burgers'
        },
        {
            id: "14",
            Name: "Beef Shawarma",
            Description: "",
            Available: true,
            Price: {
                Regular: 800
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Shawarmas + Burgers'
        },
        {
            id: "15",
            Name: "Sausage Shawarma",
            Description: "",
            Available: true,
            Price: {
                Regular: 600
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Shawarmas + Burgers'
        },
        {
            id: "16",
            Name: "Tofu Shawarma",
            Description: "",
            Available: true,
            Price: {
                Regular: 600
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Shawarmas + Burgers'
        },
        {
            id: "17",
            Name: "Beef Burger",
            Description: "",
            Available: true,
            Price: {
                Regular: 800
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Shawarmas + Burgers'
        },
        {
            id: "18",
            Name: "Chicken Burger",
            Description: "",
            Available: true,
            Price: {
                Regular: 800
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Shawarmas + Burgers'
        },
        {
            id: "19",
            Name: "Chicken Fillet Burger",
            Description: "",
            Available: true,
            Price: {
                Regular: 1000
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Shawarmas + Burgers'
        },
        {
            id: "20",
            Name: "Tuna Sandwich",
            Description: "Creamy & Crunchy",
            Available: true,
            Price: {
                Regular: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Shawarmas + Burgers'
        },
        {
            id: "21",
            Name: "Chicken Sandwich",
            Description: "Super Tasty & Shredded Chicken",
            Available: true,
            Price: {
                Regular: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Shawarmas + Burgers'
        },
        {
            id: "22",
            Name: "Calzone",
            Description: "Pizza Turnover - cheesy filling",
            Available: true,
            Price: {
                Regular: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Shawarmas + Burgers'
        },
        {
            id: "23",
            Name: "Margherita Pizza",
            Description: "Classical Tomato Sauce & Mozzerella Cheese Pizza",
            Available: true,
            Price: {
                Regular: 2000,
                Large: 3000
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Pizza'
        },
        {
            id: "24",
            Name: "Veggie-Mex Pizza",
            Description: "Topped with Olives, Mushrooms, Chilli Peppers, Tomato Sauce & Cheese",
            Available: true,
            Price: {
                Small: 2000,
                Regular: 2500,
                Large: 3500
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Pizza'
        },
        {
            id: "25",
            Name: "Chicken Pizza",
            Description: "Topped with Chicken, Peppers, Sweet Corn, Tomato Sauce and Cheese",
            Available: true,
            Price: {
                Small: 2000,
                Regular: 3000,
                Large: 3500
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Pizza'
        },
        {
            id: "26",
            Name: "Beef Pizza",
            Description: "Topped with Chicken, Peppers, Sweet Corn, Tomato Sauce and Cheese",
            Available: true,
            Price: {
                Small: 2000,
                Regular: 2500,
                Large: 3500
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Pizza'
        },
        {
            id: "27",
            Name: "Chicken Delight",
            Description: "More Chicken and Tomato Sauce & More Delightful Cheese",
            Available: true,
            Price: {
                Small: 2000,
                Regular: 3500,
                Large: 4000
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Pizza'
        },
        {
            id: "28",
            Name: "Beef Delight",
            Description: "More Beef and Tomato Sauce & More Delightful Cheese",
            Available: true,
            Price: {
                Small: 2000,
                Regular: 3500,
                Large: 4000
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Pizza'
        },
        {
            id: "29",
            Name: "Tuna Pizza",
            Description: "Tuna is the hero here paired with Olives, Green Pepper, Tomato Sauce & Cheese",
            Available: true,
            Price: {
                Regular: 3500,
                Large: 4000
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Pizza'
        },
        {
            id: "30",
            Name: "Pepperoni Pizza",
            Description: "Pepperoni and bits of Chilli with Tomato Sauce & Cheese",
            Available: true,
            Price: {
                Regular: 3500,
                Large: 4000
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Pizza'
        },
        {
            id: "31",
            Name: "Tsire Pizza",
            Description: "Making the meats the hero as well as the Tomato sauce & Cheese",
            Available: true,
            Price:{ 
                Large: 4000
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Pizza'
        },
        {
            id: "32",
            Name: "Balangu Pizza",
            Description: "Making the meats the hero as well as the Tomato sauce & Cheese",
            Available: true,
            Price: { 
                Large: 4000
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Pizza'
        },
        {
            id: "33",
            Name: "Bandashe",
            Description: "Pit oven baked Gurasa prepared and mixed with kulikuli and assorted vegetables",
            Available: true,
            Price: { 
                Regular: 1000
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Gurasa'
        },
        {
            id: "34",
            Name: "Garlic Gurasa",
            Description: "Twice baked Gurasa (in a Tanderu first then oven) prepared with garlic infused herby olive oil",
            Available: true,
            Price: { 
                Regular: 700
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Gurasa'
        },
        {
            id: "35",
            Name: "Cheesy Garlic Gurasa",
            Description: "Thrice baked Gurasa infused with olive oil, herbs and a generous amount of mozzarella cheese",
            Available: true,
            Price: { 
                Regular: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Gurasa'
        },
        {
            id: "36",
            Name: "Crunchy Fried Gurasa",
            Description: "Twice baked Gurasa, lots of love but wait for it... And then, Fried to crunchy heaven!",
            Available: true,
            Price: { 
                Regular: 1000
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Gurasa'
        },
        {
            id: "37",
            Name: "Chicken + Groutons Croutons",
            Description: "Shredded chargrilled chicken with our toasty Gurasa croutons. Heavenly",
            Available: true,
            Price: { 
                Regular: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Gurasa'
        },
        {
            id: "38",
            Name: "Tsire",
            Description: "Classic Local Street Flavours",
            Available: true,
            Price: { 
                Regular: 1000
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Beef'
        },
        {
            id: "39",
            Name: "Suya",
            Description: "Classic Local Street Flavours",
            Available: true,
            Price: { 
                Regular: 1000
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Beef'
        },
        {
            id: "40",
            Name: "Brochette",
            Description: "with Classic French Flavours",
            Available: true,
            Price: { 
                Regular: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Beef'
        },
        {
            id: "41",
            Name: "Kebabs",
            Description: "Mediterranean Flavours",
            Available: true,
            Price: { 
                Regular: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Beef'
        },
        {
            id: "42",
            Name: "Chargrilled Chicken",
            Description: "Specially marinated chicken and chargrilled to zingy perfection with unique smoky flavours",
            Available: true,
            Price: {
                Small: 700,
                Regular: 1300,
                Large: 2500
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Chicken'
        },
        {
            id: "43",
            Name: "Chicken Wings",
            Description: "",
            Available: true,
            Price: {
                Regular: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Chicken'
        },
        {
            id: "44",
            Name: "Chicken Escalope",
            Description: "Cheese Stuffed chicken breast, crumbed and lightly sautéed in butter served with fries & salad",
            Available: true,
            Price: {
                Regular: 2000
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Chicken'
        },
        {
            id: "45",
            Name: "Chips/Fries",
            Description: "",
            Available: true,
            Price: {
                Regular: 500
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Sides'
        },
        {
            id: "46",
            Name: "Chicken Caesar Salad",
            Description: "",
            Available: true,
            Price: {
                Regular: 1500
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Sides'
        },
        {
            id: "47",
            Name: "Chicken and Chips",
            Description: "",
            Available: true,
            Price: {
                Regular: 1200
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Sides'
        },
        {
            id: "48",
            Name: "Chicken Kebabs",
            Description: "Served as a pair",
            Available: true,
            Price: {
                Regular: 1000
            },
            Img: require("./Images/FoodImages/x.jpg"),   
            Category: 'Sides'
        },
        
    ];

export default foods;