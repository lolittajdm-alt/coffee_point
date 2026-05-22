import beansPackArabica from "../assets/Gemini_Generated_Image_3vm40n3vm40n3vm4.png";
import beansPackEspresso from "../assets/Gemini_Generated_Image_7v0k0t7v0k0t7v0k.png";
import beansPackCrema from "../assets/Gemini_Generated_Image_n6886un6886un688.png";
import beansPackDark from "../assets/Gemini_Generated_Image_bd7kqfbd7kqfbd7k.png";

export const categories = [
  {
    id: "beans",
    title: "Зерно",
    kicker: "Для кавомашин та млина",
    description:
      "Цілі зерна з виразним ароматом для тих, хто любить контролювати помел і отримувати максимально свіжий смак у чашці.",
    visual: { label: "Fresh\nBeans", shape: "pack", image: beansPackArabica },
    products: [
      {
        name: "Arabica Gold",
        taste: "Карамель, горіх, м'яка кислинка",
        weight: "1 кг",
        price: "від 640 грн",
        shape: "pack",
        image: beansPackArabica,
      },
      {
        name: "Espresso Bar",
        taste: "Щільне тіло, шоколад і пряний післясмак",
        weight: "1 кг",
        price: "від 590 грн",
        shape: "pack",
        image: beansPackEspresso,
      },
      {
        name: "Crema Office",
        taste: "Збалансована суміш для щоденного еспресо",
        weight: "500 г",
        price: "від 360 грн",
        shape: "pack",
        image: beansPackCrema,
      },
      {
        name: "Dark Roast",
        taste: "Глибоке обсмаження з нотами какао",
        weight: "1 кг",
        price: "від 610 грн",
        shape: "pack",
        image: beansPackDark,
      },
    ],
  },
  {
    id: "ground",
    title: "Молотий",
    kicker: "Готовий помел",
    description:
      "Зручний формат для турки, фільтра або гейзерної кавоварки. Просто відкрийте пачку та приготуйте улюблений напій.",
    visual: { label: "Ground\nCoffee", shape: "pack" },
    products: [
      {
        name: "Classic Ground",
        taste: "Солодка основа, горіх і легка гірчинка",
        weight: "250 г",
        price: "від 180 грн",
        shape: "pack",
      },
      {
        name: "Filter Morning",
        taste: "Чиста чашка з нотами сухофруктів",
        weight: "250 г",
        price: "від 210 грн",
        shape: "pack",
      },
      {
        name: "Turkish Fine",
        taste: "Дрібний помел, насичений аромат",
        weight: "200 г",
        price: "від 165 грн",
        shape: "pack",
      },
      {
        name: "Moka Blend",
        taste: "Для гейзерної кавоварки з шоколадним профілем",
        weight: "250 г",
        price: "від 195 грн",
        shape: "pack",
      },
    ],
  },
  {
    id: "instant",
    title: "Растворимый",
    kicker: "Швидка чашка",
    description:
      "Розчинні кавові напої для моментів, коли потрібен стабільний смак без обладнання та довгого приготування.",
    visual: { label: "Instant\nCup", shape: "cup" },
    products: [
      {
        name: "Instant Classic",
        taste: "М'який кавовий смак без зайвої гіркоти",
        weight: "150 г",
        price: "від 220 грн",
        shape: "cup",
      },
      {
        name: "Choco Coffee",
        taste: "Какао, вершковість і кавовий баланс",
        weight: "200 г",
        price: "від 245 грн",
        shape: "cup",
      },
      {
        name: "Latte Mix",
        taste: "Молочна текстура та делікатна солодкість",
        weight: "180 г",
        price: "від 235 грн",
        shape: "cup",
      },
      {
        name: "Strong Instant",
        taste: "Більш інтенсивний смак для ранкового старту",
        weight: "150 г",
        price: "від 230 грн",
        shape: "cup",
      },
    ],
  },
  {
    id: "sticks",
    title: "Стики",
    kicker: "Порційний формат",
    description:
      "Окремі порції для дороги, офісних кухонь, готелів і переговорних кімнат. Легко рахувати залишки та брати з собою.",
    visual: { label: "Coffee\nStick", shape: "stick" },
    products: [
      {
        name: "3 in 1 Classic",
        taste: "Кава, вершки та цукор в одній порції",
        weight: "20 шт",
        price: "від 150 грн",
        shape: "stick",
      },
      {
        name: "Latte Stick",
        taste: "М'який молочний напій для швидкої паузи",
        weight: "20 шт",
        price: "від 170 грн",
        shape: "stick",
      },
      {
        name: "Cappuccino Stick",
        taste: "Пінка, кава і легкий ванільний акцент",
        weight: "20 шт",
        price: "від 175 грн",
        shape: "stick",
      },
      {
        name: "No Sugar Stick",
        taste: "Збалансований смак без доданого цукру",
        weight: "20 шт",
        price: "від 165 грн",
        shape: "stick",
      },
    ],
  },
];
