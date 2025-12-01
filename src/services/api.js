import axios from 'axios';

// --- EXTERNAL API (Talal's Role) ---
const QUOTE_API_URL = 'https://api.quotable.io/random';

export const fetchRandomQuote = async () => {
  try {
    const response = await axios.get(QUOTE_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching quote:", error);
    // Fallback if API is down
    return { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" };
  }
};

// --- MOCK DATABASE (Fuad's Role) ---
// We use LocalStorage to simulate a MongoDB database

// USERS
export const getUsers = () => JSON.parse(localStorage.getItem('users')) || [];
export const saveUsers = (users) => localStorage.setItem('users', JSON.stringify(users));

// TASKS
export const getTasks = (userId) => {
  const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  return allTasks.filter(task => task.userId === userId);
};

export const addTask = (userId, text) => {
  const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const newTask = { id: Date.now(), userId, text, completed: false };
  allTasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(allTasks));
  return newTask;
};

export const toggleTask = (taskId) => {
  const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const updatedTasks = allTasks.map(t => 
    t.id === taskId ? { ...t, completed: !t.completed } : t
  );
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};

export const deleteTask = (taskId) => {
  const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const filteredTasks = allTasks.filter(t => t.id !== taskId);
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
};

// FAVORITE QUOTES
export const saveFavoriteQuote = (userId, quote) => {
  const users = getUsers();
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex > -1) {
    if (!users[userIndex].favorites) users[userIndex].favorites = [];
    // Prevent duplicates
    const exists = users[userIndex].favorites.some(q => q.content === quote.content);
    if (!exists) {
      users[userIndex].favorites.push(quote);
      saveUsers(users);
      return true; // Saved
    }
  }
  return false; // Already exists
};