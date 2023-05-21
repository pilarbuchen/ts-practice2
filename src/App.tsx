import React, {useState, useEffect} from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/Reminder';
import reminderService from './services/reminder'

function App() {
  const [reminders, setReminder] = useState<Reminder[]>([])

  useEffect(() => {
    loadReminders();
  }, [])

  const loadReminders = async () => {
   const reminders = await reminderService.getReminders();
   setReminder(reminders)
  }

  return (
    <div className="App">
  <ReminderList items={reminders}/> 
    </div>
  );
}

export default App;
