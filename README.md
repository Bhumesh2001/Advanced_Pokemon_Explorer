# 🌟 Pokemon Explorer - Advanced React App

Pokemon Explorer is a modern, responsive web application built using React, Vite, and Bootstrap. It allows users to browse, search, filter, and compare Pokémon using data from the [PokeAPI](https://pokeapi.co/).

## 🏑️ Live Demo
**[View Application](https://your-deployment-link.netlify.app)**  

## 📊 Features

### Core Functionality
- Fetches and displays the first 150 Pokémon
- Responsive card-based UI
- Real-time search and multi-type filter
- Pagination (10/20/50 per page)
- Sorting by name, ID
- Pokémon detail view with:
  - Stats, Abilities, Moves, Evolution Chain

### Advanced Features
- Favorite system (saved to `localStorage`)
- Pokémon comparison tool (compare stats side by side)
- Random Pokémon button
- React Context API for global state
- Custom hooks and Error Boundaries

## 🚀 Tech Stack
- React (Hooks, Context)
- Vite
- React Router
- React Bootstrap
- Axios
- PokeAPI

## 📆 Folder Structure
```
src/
├── components/        # Reusable UI components
├── contexts/          # React Context providers
├── hooks/             # Custom reusable hooks
├── pages/             # Page-level components (Home, Compare, Favorites)
├── App.jsx            # Routes & layout
└── main.jsx           # Entry point
```

## 🚫 Known Limitations
- Evolution chain only supports linear chains
- Some Pokémon data may be incomplete from API

## ⚙️ Setup Instructions

```bash
# Clone the repo
https://github.com/Bhumesh2001/Advanced_Pokemon_Explorer
cd pokemon-explorer

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎓 Credits
- [PokeAPI](https://pokeapi.co/)
- [React Bootstrap](https://react-bootstrap.github.io/)

---

Made with ❤️ by [Bhumesh Kewat](https://github.com/Bhumesh2001)
