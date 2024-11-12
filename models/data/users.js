import "dotenv/config.js"
import "../../config/database.js"
import User from "../User.js"

let users = [
    {
        name: "Juan Pérez",
        email: "juan.perez@example.com",
        address: "Calle Falsa 123, Ciudad X",
        phone: 1234567890,
        password: "hashedpassword1",
        isOnline: true
    },
    {
        name: "María González",
        email: "maria.gonzalez@example.com",
        address: "Avenida de la Paz 456, Ciudad Y",
        phone: 9876543210,
        password: "hashedpassword2",
        isOnline: false
    },
    {
        name: "Carlos Sánchez",
        email: "carlos.sanchez@example.com",
        address: "Plaza Central 789, Ciudad Z",
        phone: 5647382910,
        password: "hashedpassword3",
        isOnline: true
    },
    {
        name: "Laura Martínez",
        email: "laura.martinez@example.com",
        address: "Calle Real 101, Ciudad A",
        phone: 6541239870,
        password: "hashedpassword4",
        isOnline: false
    },
    {
        name: "Andrés Rodríguez",
        email: "andres.rodriguez@example.com",
        address: "Camino del Sol 202, Ciudad B",
        phone: 3216549870,
        password: "hashedpassword5",
        isOnline: true
    },
    {
        name: "Ana López",
        email: "ana.lopez@example.com",
        address: "Avenida Libertad 303, Ciudad C",
        phone: 7531594620,
        password: "hashedpassword6",
        isOnline: false
    },
    {
        name: "Pedro Gómez",
        email: "pedro.gomez@example.com",
        address: "Calle del Mar 404, Ciudad D",
        phone: 8765432109,
        password: "hashedpassword7",
        isOnline: true
    },
    {
        name: "Sofía Fernández",
        email: "sofia.fernandez@example.com",
        address: "Calle de la Luna 505, Ciudad E",
        phone: 9081726354,
        password: "hashedpassword8",
        isOnline: false
    },
    {
        name: "Ricardo Díaz",
        email: "ricardo.diaz@example.com",
        address: "Avenida del Parque 606, Ciudad F",
        phone: 1238904765,
        password: "hashedpassword9",
        isOnline: true
    },
    {
        name: "Isabel Pérez",
        email: "isabel.perez@example.com",
        address: "Calle de la Paz 707, Ciudad G",
        phone: 4561239087,
        password: "hashedpassword10",
        isOnline: false
    }
];

User.insertMany(users)
