import beansPackArabica from "../assets/Gemini_Generated_Image_3vm40n3vm40n3vm4.png";
import beansPackEspresso from "../assets/Gemini_Generated_Image_7v0k0t7v0k0t7v0k.png";
import beansPackCrema from "../assets/Gemini_Generated_Image_n6886un6886un688.png";

export const categories = [
  {
    id: "coffee",
    title: "COFFEE",
    featured: {
      name: "MILTON'S CHOCO COFFEE",
      tag: "Chocolate",
      description:
        "Rich chocolate notes layered over smooth espresso. A balanced cup with creamy body and a warm cocoa finish — perfect for your daily break.",
      price: "$1.2",
      rating: 5,
      variants: ["White", "Milk", "Dark"],
    },
    products: [
      {
        name: "Hand Roasted Hot Chocolate With Milk",
        tag: "Chocolate",
        taste: "Creamy cocoa with roasted coffee depth",
        price: "$1.2",
        image: beansPackArabica,
        buttonStyle: "solid",
      },
      {
        name: "Milton's Caramel Latte",
        tag: "Chocolate",
        taste: "Sweet caramel and velvety milk foam",
        price: "$1.2",
        image: beansPackEspresso,
        buttonStyle: "outline",
      },
      {
        name: "Classic Espresso Blend",
        tag: "Chocolate",
        taste: "Bold roast with nutty undertones",
        price: "$1.2",
        image: beansPackCrema,
        buttonStyle: "solid",
      },
      {
        name: "Iced Mocha Supreme",
        tag: "Chocolate",
        taste: "Chilled chocolate coffee refreshment",
        price: "$1.2",
        image: beansPackArabica,
        buttonStyle: "outline",
      },
    ],
  },
  {
    id: "ice-tea",
    title: "ICE TEA",
    featured: {
      name: "MILTON'S PEACH ICE TEA",
      tag: "Peach",
      description:
        "Light and refreshing peach iced tea with a hint of citrus. Brewed cold for a crisp finish on warm afternoons.",
      price: "$1.0",
      rating: 5,
      variants: ["Light", "Classic", "Bold"],
    },
    products: [
      {
        name: "Peach Blossom Ice Tea",
        tag: "Peach",
        taste: "Soft peach and floral notes",
        price: "$1.0",
        buttonStyle: "solid",
      },
      {
        name: "Lemon Mint Cooler",
        tag: "Citrus",
        taste: "Zesty lemon with fresh mint",
        price: "$1.0",
        buttonStyle: "outline",
      },
      {
        name: "Berry Fusion Ice Tea",
        tag: "Berry",
        taste: "Mixed berries and black tea",
        price: "$1.0",
        buttonStyle: "solid",
      },
      {
        name: "Green Jasmine Chill",
        tag: "Green",
        taste: "Delicate jasmine green tea",
        price: "$1.0",
        buttonStyle: "outline",
      },
    ],
  },
  {
    id: "beverage",
    title: "BEVERAGE",
    featured: {
      name: "MILTON'S CREAM SODA",
      tag: "Vanilla",
      description:
        "A nostalgic cream soda with smooth vanilla bubbles. Sweet, fizzy, and endlessly refreshing.",
      price: "$0.9",
      rating: 4,
      variants: ["Regular", "Zero", "Classic"],
    },
    products: [
      {
        name: "Vanilla Cream Soda",
        tag: "Vanilla",
        taste: "Classic vanilla fizz",
        price: "$0.9",
        buttonStyle: "solid",
      },
      {
        name: "Ginger Sparkling",
        tag: "Ginger",
        taste: "Spicy ginger with light bubbles",
        price: "$0.9",
        buttonStyle: "outline",
      },
      {
        name: "Tropical Punch",
        tag: "Fruit",
        taste: "Pineapple and mango blend",
        price: "$0.9",
        buttonStyle: "solid",
      },
      {
        name: "Cola Classic",
        tag: "Cola",
        taste: "Timeless cola sweetness",
        price: "$0.9",
        buttonStyle: "outline",
      },
    ],
  },
  {
    id: "juices",
    title: "JUICES",
    featured: {
      name: "MILTON'S ORANGE FRESH",
      tag: "Citrus",
      description:
        "Freshly squeezed orange juice with bright citrus flavor. No added sugar — just pure sunshine in a glass.",
      price: "$1.1",
      rating: 5,
      variants: ["Pulp", "Smooth", "Light"],
    },
    products: [
      {
        name: "Fresh Orange Juice",
        tag: "Citrus",
        taste: "Bright and naturally sweet",
        price: "$1.1",
        buttonStyle: "solid",
      },
      {
        name: "Apple Orchard Press",
        tag: "Apple",
        taste: "Crisp apple with honey notes",
        price: "$1.1",
        buttonStyle: "outline",
      },
      {
        name: "Tropical Mango Blend",
        tag: "Mango",
        taste: "Rich mango and passion fruit",
        price: "$1.1",
        buttonStyle: "solid",
      },
      {
        name: "Berry Antioxidant Mix",
        tag: "Berry",
        taste: "Blueberry, raspberry, cranberry",
        price: "$1.1",
        buttonStyle: "outline",
      },
    ],
  },
];

export const processFeatures = [
  {
    title: "Hand Roasted",
    tone: "dark",
    icon: "beans",
  },
  {
    title: "Direct Trade",
    tone: "tan",
    icon: "cup",
  },
  {
    title: "Organic Taste",
    tone: "dark",
    icon: "leaf",
  },
];
