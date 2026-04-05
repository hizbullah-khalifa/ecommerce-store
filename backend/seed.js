import mongoose from 'mongoose';
import productModel from './models/productModel.js';
import dotenv from 'dotenv';

dotenv.config();

const products = [
    // WOMEN
    {
        name: "The Essential Trench",
        description: "A timeless silhouette crafted from water-resistant cotton gabardine. Features a double-breasted front, belted waist, and storm shield.",
        price: 350,
        image: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop", "https://images.unsplash.com/photo-1591047139313-c4b3753d4e58?q=80&w=1936&auto=format&fit=crop"],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L"],
        bestseller: true,
        date: Date.now(),
        rating: 4.8,
        reviewCount: 24,
        discount: 0
    },
    {
        name: "Pleated Midi Skirt",
        description: "Elegant pleats create fluid movement in this sophisticated midi skirt. The high waist and A-line silhouette offer a flattering fit.",
        price: 110,
        image: ["https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1964&auto=format&fit=crop", "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1964&auto=format&fit=crop"],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["XS", "S", "M"],
        bestseller: false,
        date: Date.now(),
        rating: 4.6,
        reviewCount: 15,
        discount: 0
    },
    {
        name: "Oversized Linen Blazer",
        description: "Effortlessly chic, this oversized blazer is crafted from breathable linen. Its relaxed fit adds a touch of nonchalance to any outfit.",
        price: 180,
        image: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop", "https://images.unsplash.com/photo-1591047139313-c4b3753d4e58?q=80&w=1936&auto=format&fit=crop"],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        bestseller: true,
        date: Date.now(),
        rating: 4.9,
        reviewCount: 40,
        discount: 0
    },
    {
        name: "Silk Slip Dress",
        description: "Pure luxury. This silk slip dress drapes beautifully against the body. Minimalist design with delicate spaghetti straps.",
        price: 220,
        image: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop", "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop"],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["XS", "S", "M"],
        bestseller: true,
        date: Date.now(),
        rating: 4.8,
        reviewCount: 28,
        discount: 0
    },
    {
        name: "Cashmere Crewneck",
        description: "The ultimate luxury staple. 100% cashmere crewneck sweater in a soft oatmeal shade.",
        price: 195,
        image: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop", "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop"],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L"],
        bestseller: false,
        date: Date.now(),
        rating: 4.7,
        reviewCount: 19,
        discount: 0
    },
    {
        name: "High-Waist Wide Leg Trousers",
        description: "Tailored to perfection. These wide-leg trousers elongate the legs and feature a clean, minimal waistband.",
        price: 130,
        image: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop", "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop"],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["XS", "S", "M", "L"],
        bestseller: false,
        date: Date.now(),
        rating: 4.5,
        reviewCount: 10,
        discount: 0
    },

    // MEN
    {
        name: "Merino Wool Turtleneck",
        description: "Spun from the finest merino wool, this turtleneck offers unparalleled softness and warmth.",
        price: 120,
        image: ["https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1887&auto=format&fit=crop", "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1887&auto=format&fit=crop"],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL"],
        bestseller: false,
        date: Date.now(),
        rating: 4.5,
        reviewCount: 18,
        discount: 0
    },
    {
        name: "Structured Cotton Shirt",
        description: "Crisp, clean, and classic. Tailored from high-thread-count cotton for a sharp look.",
        price: 85,
        image: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1888&auto=format&fit=crop", "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1888&auto=format&fit=crop"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: true,
        date: Date.now(),
        rating: 4.7,
        reviewCount: 32,
        discount: 10
    },
    {
        name: "Classic Denim Jacket",
        description: "A wardrobe staple reimagined. Vintage wash and durable construction.",
        price: 95,
        image: ["https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1888&auto=format&fit=crop", "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1888&auto=format&fit=crop"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        bestseller: false,
        date: Date.now(),
        rating: 4.4,
        reviewCount: 22,
        discount: 15
    },
    {
        name: "Tailored Wool Trousers",
        description: "Impeccably tailored trousers made from premium wool blend.",
        price: 140,
        image: ["https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1887&auto=format&fit=crop", "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1887&auto=format&fit=crop"],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["30", "32", "34"],
        bestseller: false,
        date: Date.now(),
        rating: 4.6,
        reviewCount: 14,
        discount: 0
    },
    {
        name: "Heavyweight Cotton Tee",
        description: "A substantial t-shirt that holds its shape. Boxy fit for a modern look.",
        price: 45,
        image: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop", "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: true,
        date: Date.now(),
        rating: 4.8,
        reviewCount: 56,
        discount: 0
    },

    // KIDS
    {
        name: "Organic Cotton Onesie",
        description: "Soft, breathable organic cotton for delicate skin.",
        price: 35,
        image: ["https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1935&auto=format&fit=crop", "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1935&auto=format&fit=crop"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["0-3M", "3-6M", "6-12M"],
        bestseller: true,
        date: Date.now(),
        rating: 4.9,
        reviewCount: 12,
        discount: 0
    },
    {
        name: "Denim Overalls",
        description: "Durable and cute. Adjustable straps to grow with them.",
        price: 55,
        image: ["https://images.unsplash.com/photo-1519238263496-636027da13fb?q=80&w=1990&auto=format&fit=crop", "https://images.unsplash.com/photo-1519238263496-636027da13fb?q=80&w=1990&auto=format&fit=crop"],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["2T", "3T", "4T"],
        bestseller: false,
        date: Date.now(),
        rating: 4.7,
        reviewCount: 8,
        discount: 0
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB");

        await productModel.deleteMany({});
        console.log("Cleared Products");

        await productModel.insertMany(products);
        console.log("Seeded Products");

        mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
};

seedDB();