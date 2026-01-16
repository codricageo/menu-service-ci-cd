const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || '1.0.0';

const menuItems = [
  { id: 1, name: 'Margherita Pizza', price: 12.5, category: 'Pizza' },
  { id: 2, name: 'BBQ Chicken Pizza', price: 14.0, category: 'Pizza' },
  { id: 3, name: 'Spaghetti Carbonara', price: 13.0, category: 'Pasta' },
  { id: 4, name: 'Caesar Salad', price: 9.5, category: 'Salad' },
  { id: 5, name: 'Tiramisu', price: 7.0, category: 'Dessert' }
];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/menu', (req, res) => {
  res.json({ items: menuItems });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/version', (req, res) => {
  res.json({ version: APP_VERSION });
});

app.listen(port, () => {
  console.log(`Food menu service listening on port ${port}`);
});
