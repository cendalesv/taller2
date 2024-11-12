import "dotenv/config.js"
import "../../config/database.js"
import Property from "../Property.js"

let properties = [
    {
      name: "Luxury Villa",
      type: "Real Estate",
      value: 350000,
      user: "60d5f0a4b3a5d9c5b67c8c87"
    },
    {
      name: "Office Building",
      type: "Commercial",
      value: 1200000,
      user: "60d5f0a4b3a5d9c5b67c8c88"
    },
    {
      name: "Modern Apartment",
      type: "Real Estate",
      value: 450000,
      user: "60d5f0a4b3a5d9c5b67c8c89"
    },
    {
      name: "Warehouse",
      type: "Industrial",
      value: 800000,
      user: "60d5f0a4b3a5d9c5b67c8c90"
    },
    {
      name: "Land Parcel",
      type: "Real Estate",
      value: 250000,
      user: "60d5f0a4b3a5d9c5b67c8c91"
    },
    {
      name: "Commercial Building",
      type: "Commercial",
      value: 900000,
      user: "60d5f0a4b3a5d9c5b67c8c92"
    },
    {
      name: "Luxury Yacht",
      type: "Vehicle",
      value: 2000000,
      user: "60d5f0a4b3a5d9c5b67c8c93"
    },
    {
      name: "SUV",
      type: "Vehicle",
      value: 50000,
      user: "60d5f0a4b3a5d9c5b67c8c94"
    },
    {
      name: "Classic Car",
      type: "Vehicle",
      value: 120000,
      user: "60d5f0a4b3a5d9c5b67c8c95"
    },
    {
      name: "Gold Bar",
      type: "Asset",
      value: 550000,
      user: "60d5f0a4b3a5d9c5b67c8c96"
    },
    {
      name: "Painting",
      type: "Art",
      value: 75000,
      user: "60d5f0a4b3a5d9c5b67c8c97"
    },
    {
      name: "Vintage Watch",
      type: "Luxury Item",
      value: 25000,
      user: "60d5f0a4b3a5d9c5b67c8c98"
    },
    {
      name: "Luxury Watch",
      type: "Luxury Item",
      value: 15000,
      user: "60d5f0a4b3a5d9c5b67c8c99"
    },
    {
      name: "Diamond Necklace",
      type: "Jewelry",
      value: 500000,
      user: "60d5f0a4b3a5d9c5b67c8c9a"
    },
    {
      name: "Luxury Pen",
      type: "Collectible",
      value: 5000,
      user: "60d5f0a4b3a5d9c5b67c8c9b"
    },
    {
      name: "Private Jet",
      type: "Aviation",
      value: 50000000,
      user: "60d5f0a4b3a5d9c5b67c8c9c"
    },
    {
      name: "Helicopter",
      type: "Aviation",
      value: 10000000,
      user: "60d5f0a4b3a5d9c5b67c8c9d"
    },
    {
      name: "Guitar",
      type: "Musical Instrument",
      value: 2000,
      user: "60d5f0a4b3a5d9c5b67c8c9e"
    },
    {
      name: "Grand Piano",
      type: "Musical Instrument",
      value: 30000,
      user: "60d5f0a4b3a5d9c5b67c8c9f"
    },
    {
      name: "Smartphone",
      type: "Electronics",
      value: 1000,
      user: "60d5f0a4b3a5d9c5b67c8ca0"
    },
    {
      name: "Laptop",
      type: "Electronics",
      value: 2000,
      user: "60d5f0a4b3a5d9c5b67c8ca1"
    },
    {
      name: "Television",
      type: "Electronics",
      value: 1500,
      user: "60d5f0a4b3a5d9c5b67c8ca2"
    },
    {
      name: "Bicycle",
      type: "Vehicle",
      value: 500,
      user: "60d5f0a4b3a5d9c5b67c8ca3"
    },
    {
      name: "Smartwatch",
      type: "Electronics",
      value: 300,
      user: "60d5f0a4b3a5d9c5b67c8ca4"
    },
    {
      name: "Camera",
      type: "Electronics",
      value: 1500,
      user: "60d5f0a4b3a5d9c5b67c8ca5"
    },
    {
      name: "Solar Panel",
      type: "Energy",
      value: 5000,
      user: "60d5f0a4b3a5d9c5b67c8ca6"
    },
    {
      name: "Gold Coin",
      type: "Asset",
      value: 5000,
      user: "60d5f0a4b3a5d9c5b67c8ca7"
    },
    {
      name: "Coin Collection",
      type: "Collectible",
      value: 25000,
      user: "60d5f0a4b3a5d9c5b67c8ca8"
    },
    {
      name: "Restaurant",
      type: "Business",
      value: 1000000,
      user: "60d5f0a4b3a5d9c5b67c8ca9"
    },
    {
      name: "Stock Portfolio",
      type: "Investment",
      value: 500000,
      user: "60d5f0a4b3a5d9c5b67c8caa"
    }
  ]
  

Property.insertMany(properties)

  