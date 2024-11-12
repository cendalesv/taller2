import "dotenv/config.js"
import "../../config/database.js"
import Record from "../Record.js"

let records = [
    { date: new Date('2024-01-01'), description: 'January Salary', amount: 2500, isActive: true, user: '60f7120f72b9c9f7c8b9bcb5' },
    { date: new Date('2024-01-10'), description: 'Groceries', amount: 200, isActive: true, user: '60f7120f72b9c9f7c8b9bcb6' },
    { date: new Date('2024-01-12'), description: 'Electricity Bill', amount: 150, isActive: true, user: '60f7120f72b9c9f7c8b9bcb7' },
    { date: new Date('2024-02-01'), description: 'February Salary', amount: 2500, isActive: true, user: '60f7120f72b9c9f7c8b9bcb5' },
    { date: new Date('2024-02-05'), description: 'Internet Bill', amount: 80, isActive: true, user: '60f7120f72b9c9f7c8b9bcb8' },
    { date: new Date('2024-02-10'), description: 'Car Repair', amount: 500, isActive: true, user: '60f7120f72b9c9f7c8b9bcb9' },
    { date: new Date('2024-03-01'), description: 'March Salary', amount: 2600, isActive: true, user: '60f7120f72b9c9f7c8b9bcb5' },
    { date: new Date('2024-03-07'), description: 'Dining Out', amount: 80, isActive: true, user: '60f7120f72b9c9f7c8b9bcb6' },
    { date: new Date('2024-03-10'), description: 'Books Purchase', amount: 120, isActive: true, user: '60f7120f72b9c9f7c8b9bcb7' },
    { date: new Date('2024-04-01'), description: 'April Salary', amount: 2600, isActive: true, user: '60f7120f72b9c9f7c8b9bcb5' },
    { date: new Date('2024-04-03'), description: 'Rent Payment', amount: 900, isActive: true, user: '60f7120f72b9c9f7c8b9bcb8' },
    { date: new Date('2024-04-05'), description: 'Water Bill', amount: 60, isActive: true, user: '60f7120f72b9c9f7c8b9bcb9' },
    { date: new Date('2024-04-15'), description: 'Laptop Repair', amount: 250, isActive: true, user: '60f7120f72b9c9f7c8b9bcba' },
    { date: new Date('2024-05-01'), description: 'May Salary', amount: 2700, isActive: true, user: '60f7120f72b9c9f7c8b9bcb5' },
    { date: new Date('2024-05-10'), description: 'Phone Bill', amount: 70, isActive: true, user: '60f7120f72b9c9f7c8b9bcb6' },
    { date: new Date('2024-05-12'), description: 'Food Delivery', amount: 30, isActive: true, user: '60f7120f72b9c9f7c8b9bcb7' },
    { date: new Date('2024-06-01'), description: 'June Salary', amount: 2700, isActive: true, user: '60f7120f72b9c9f7c8b9bcb5' },
    { date: new Date('2024-06-03'), description: 'Movie Tickets', amount: 50, isActive: true, user: '60f7120f72b9c9f7c8b9bcb8' },
    { date: new Date('2024-06-05'), description: 'Gym Membership', amount: 100, isActive: true, user: '60f7120f72b9c9f7c8b9bcb9' }
];

Record.insertMany(records)