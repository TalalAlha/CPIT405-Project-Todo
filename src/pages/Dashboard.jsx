import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { fetchRandomQuote, getTasks, addTask, toggleTask, deleteTask, saveFavoriteQuote } from '../services/api';
import { Trash2, CheckCircle, Circle, Heart, RefreshCw, Plus } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [quote, setQuote] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loadingQuote, setLoadingQuote] = useState(false);

  // Load Data
  useEffect(() => {
    loadQuote();
    refreshTasks();
  }, []);

  const loadQuote = async () => {
    setLoadingQuote(true);
    const q = await fetchRandomQuote();
    setQuote(q);
    setLoadingQuote(false);
  };

  const refreshTasks = () => {
    const userTasks = getTasks(user.id);
    setTasks(userTasks);
  };

  // Task Handlers
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    addTask(user.id, newTask);
    setNewTask('');
    refreshTasks();
  };

  const handleToggle = (id) => {
    toggleTask(id);
    refreshTasks();
  };

  const handleDelete = (id) => {
    deleteTask(id);
    refreshTasks();
  };

  const handleSaveQuote = () => {
    if (quote) {
      const saved = saveFavoriteQuote(user.id, quote);
      if (saved) alert('Quote saved to your profile!');
      else alert('You already saved this quote.');
    }
  };

  return (
    <div className="container dashboard">
      {/* Quote Section (API Integration) */}
      <section className="quote-section">
        <h3>Daily Inspiration</h3>
        <div className="quote-card">
          {loadingQuote ? (
            <p>Loading quote...</p>
          ) : (
            <>
              <p className="quote-text">"{quote?.content}"</p>
              <p className="quote-author">- {quote?.author}</p>
              <div className="quote-actions">
                <button onClick={handleSaveQuote} className="btn-icon" title="Save to Favorites">
                  <Heart size={20} />
                </button>
                <button onClick={loadQuote} className="btn-icon" title="New Quote">
                  <RefreshCw size={20} />
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Tasks Section (CRUD) */}
      <section className="tasks-section">
        <h3>Your Tasks</h3>
        
        <form onSubmit={handleAddTask} className="task-form">
          <input 
            type="text" 
            placeholder="What needs to be done?" 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            <Plus size={20} /> Add
          </button>
        </form>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="no-tasks">No tasks yet. Add one above!</p>
          ) : (
            tasks.map(task => (
              <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                <div className="task-left" onClick={() => handleToggle(task.id)}>
                  {task.completed ? <CheckCircle className="icon-check" /> : <Circle className="icon-circle" />}
                  <span>{task.text}</span>
                </div>
                <button onClick={() => handleDelete(task.id)} className="btn-delete">
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;