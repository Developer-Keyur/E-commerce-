import logo from "./logo2.png";
import search_icon from "./search_icon.png";
import profile_icon from "./profile_icon.png";
import cart_icon from "./cart_icon.png"
import menu_icon from "./menu_icon.png"
import dropdown_icon from  "./dropdown_icon.png"
import banner2 from './banner2.png'

import lifestyle1 from "./lifestyle1.png";
import lifestyle2 from "./lifestyle2.png";
import lifestyle3 from "./lifestyle3.png";
import lifestyle4 from "./lifestyle4.png";
import lifestyle5 from "./lifestyle5.png";

import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p4 from "./p4.png";
import p5 from "./p5.png";
import p6 from "./p6.png";
import p7 from "./p7.png";
import p8 from "./p8.png";
import p9 from "./p9.png";

import running1 from "./running1.png";
import running2 from "./running2.png";
import running3 from "./running3.png";
import running4 from "./running4.png";
import running5 from "./running5.png";

import sports1 from "./sports1.png";
import sports2 from "./sports2.png";
import sports3 from "./sports3.png";
import sports4 from "./sports4.png";
import sports5 from "./sports5.png";

import training1 from "./training1.png";
import training2 from "./training2.png";
import training3 from "./training3.png";
import training4 from "./training4.png";
import training5 from "./training5.png";




export const assets = {
  logo,
  search_icon,
  profile_icon,
  cart_icon,
  menu_icon,
  dropdown_icon,
  banner2,
};

export const products = [

  {
    _id: "shoe001",
    name: "Nike Air Max 270",
    description: "Premium lifestyle sneakers with all-day comfort.",
    price: 4999,
    image: [lifestyle1],
    category: "Men",
    subCategory: "Lifestyle",
    sizes: ["7", "8", "9", "10"],
    bestseller: true,
  },

  {
    _id: "shoe002",
    name: "Nike Air Force 1",
    description: "Classic everyday sneakers.",
    price: 5499,
    image: [lifestyle2],
    category: "Men",
    subCategory: "Lifestyle",
    sizes: ["7", "8", "9", "10"],
    bestseller: true,
  },

  {
    _id: "shoe003",
    name: "Adidas Superstar",
    description: "Iconic street-style shoes.",
    price: 4599,
    image: [lifestyle3],
    category: "Men",
    subCategory: "Lifestyle",
    sizes: ["7", "8", "9"],
    bestseller: false,
  },

  {
    _id: "shoe004",
    name: "Puma Smash",
    description: "Comfortable casual sneakers.",
    price: 3899,
    image: [lifestyle4],
    category: "Men",
    subCategory: "Lifestyle",
    sizes: ["6", "7", "8", "9"],
    bestseller: false,
  },

  {
    _id: "shoe005",
    name: "New Balance 574",
    description: "Premium retro lifestyle shoes.",
    price: 6299,
    image: [lifestyle5],
    category: "Men",
    subCategory: "Lifestyle",
    sizes: ["7", "8", "9", "10"],
    bestseller: true,
  },

  {
    _id: "shoe006",
    name: "Oxford Leather Shoes",
    description: "Elegant formal leather shoes.",
    price: 3499,
    image: [p1],
    category: "Men",
    subCategory: "Formal",
    sizes: ["7", "8", "9", "10"],
    bestseller: false,
  },

  {
    _id: "shoe007",
    name: "Classic Derby Shoes",
    description: "Perfect for office wear.",
    price: 3699,
    image: [p2],
    category: "Men",
    subCategory: "Formal",
    sizes: ["7", "8", "9"],
    bestseller: false,
  },

  {
    _id: "shoe008",
    name: "Premium Loafers",
    description: "Stylish slip-on formal shoes.",
    price: 3299,
    image: [p3],
    category: "Men",
    subCategory: "Formal",
    sizes: ["6", "7", "8", "9"],
    bestseller: true,
  },

  {
    _id: "shoe009",
    name: "Leather Office Shoes",
    description: "Premium office collection.",
    price: 4199,
    image: [p4],
    category: "Men",
    subCategory: "Formal",
    sizes: ["7", "8", "9", "10"],
    bestseller: false,
  },

  {
    _id: "shoe010",
    name: "Formal Business Shoes",
    description: "Modern formal leather shoes.",
    price: 4499,
    image: [p5],
    category: "Men",
    subCategory: "Formal",
    sizes: ["7", "8", "9", "10"],
    bestseller: true,
  },

  {
    _id: "shoe011",
    name: "Classic Monk Strap",
    description: "Elegant monk strap formal shoes.",
    price: 4699,
    image: [p6],
    category: "Men",
    subCategory: "Formal",
    sizes: ["7", "8", "9", "10"],
    bestseller: false,
  },

  {
    _id: "shoe012",
    name: "Executive Leather Shoes",
    description: "Premium leather shoes for office wear.",
    price: 4899,
    image: [p7],
    category: "Men",
    subCategory: "Formal",
    sizes: ["7", "8", "9", "10"],
    bestseller: true,
  },

  {
    _id: "shoe013",
    name: "Luxury Formal Shoes",
    description: "Comfortable premium formal collection.",
    price: 5299,
    image: [p8],
    category: "Men",
    subCategory: "Formal",
    sizes: ["7", "8", "9"],
    bestseller: false,
  },

  {
    _id: "shoe014",
    name: "Black Leather Shoes",
    description: "Professional formal leather shoes.",
    price: 4499,
    image: [p9],
    category: "Men",
    subCategory: "Formal",
    sizes: ["7", "8", "9", "10"],
    bestseller: true,
  },

  {
    _id: "shoe015",
    name: "Nike Revolution 7",
    description: "Lightweight running shoes.",
    price: 3999,
    image: [running1],
    category: "Men",
    subCategory: "Running",
    sizes: ["7", "8", "9", "10"],
    bestseller: true,
  },

  {
    _id: "shoe016",
    name: "Adidas Duramo",
    description: "Breathable running shoes.",
    price: 4299,
    image: [running2],
    category: "Men",
    subCategory: "Running",
    sizes: ["7", "8", "9"],
    bestseller: false,
  },

  {
    _id: "shoe017",
    name: "Puma Velocity",
    description: "Comfortable running sneakers.",
    price: 3899,
    image: [running3],
    category: "Men",
    subCategory: "Running",
    sizes: ["7", "8", "9", "10"],
    bestseller: true,
  },

  {
    _id: "shoe018",
    name: "ASICS Gel",
    description: "Premium running performance shoes.",
    price: 5699,
    image: [running4],
    category: "Men",
    subCategory: "Running",
    sizes: ["7", "8", "9", "10"],
    bestseller: false,
  },

  {
    _id: "shoe019",
    name: "Reebok Runner",
    description: "Daily running comfort shoes.",
    price: 3599,
    image: [running5],
    category: "Men",
    subCategory: "Running",
    sizes: ["6", "7", "8", "9"],
    bestseller: false,
  },

  {
    _id: "shoe020",
    name: "Nike Zoom Fly",
    description: "High-performance running shoes.",
    price: 6999,
    image: [sports1],
    category: "Men",
    subCategory: "Sports",
    sizes: ["7", "8", "9", "10"],
    bestseller: true,
  },

    {
    _id: "shoe021",
    name: "Adidas Ultraboost",
    description: "Premium sports shoes with responsive cushioning.",
    price: 7999,
    image: [sports2],
    category: "Men",
    subCategory: "Sports",
    sizes: ["7", "8", "9", "10"],
    bestseller: true,
  },

  {
    _id: "shoe022",
    name: "Puma Future Rider",
    description: "Comfortable sports sneakers for daily wear.",
    price: 4599,
    image: [sports3],
    category: "Men",
    subCategory: "Sports",
    sizes: ["7", "8", "9"],
    bestseller: false,
  },

  {
    _id: "shoe023",
    name: "Reebok Nano X",
    description: "High-performance training and sports shoes.",
    price: 5499,
    image: [sports4],
    category: "Men",
    subCategory: "Sports",
    sizes: ["7", "8", "9", "10"],
    bestseller: true,
  },

  {
    _id: "shoe024",
    name: "ASICS Court",
    description: "Lightweight sports shoes for active lifestyle.",
    price: 4999,
    image: [sports5],
    category: "Men",
    subCategory: "Sports",
    sizes: ["7", "8", "9"],
    bestseller: false,
  },

  {
    _id: "shoe025",
    name: "Nike Metcon",
    description: "Professional training shoes.",
    price: 6999,
    image: [training1],
    category: "Men",
    subCategory: "Training",
    sizes: ["7", "8", "9", "10"],
    bestseller: true,
  },

  {
    _id: "shoe026",
    name: "Adidas Dropset",
    description: "Gym and training performance shoes.",
    price: 6499,
    image: [training2],
    category: "Men",
    subCategory: "Training",
    sizes: ["7", "8", "9", "10"],
    bestseller: false,
  },

  {
    _id: "shoe027",
    name: "Puma Fuse",
    description: "Stable training shoes for workouts.",
    price: 5299,
    image: [training3],
    category: "Men",
    subCategory: "Training",
    sizes: ["7", "8", "9"],
    bestseller: true,
  },

  {
    _id: "shoe028",
    name: "Under Armour TriBase",
    description: "Premium cross-training shoes.",
    price: 5899,
    image: [training4],
    category: "Men",
    subCategory: "Training",
    sizes: ["7", "8", "9", "10"],
    bestseller: false,
  },

  {
    _id: "shoe029",
    name: "Reebok Flexagon",
    description: "Comfortable training shoes for everyday fitness.",
    price: 4799,
    image: [training5],
    category: "Men",
    subCategory: "Training",
    sizes: ["7", "8", "9", "10"],
    bestseller: true,
  }

];




