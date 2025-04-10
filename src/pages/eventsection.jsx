import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, PlusCircle } from "lucide-react";

const EventCard = ({ event }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="overflow-hidden rounded-lg shadow-lg bg-white text-gray-800"
    >
      <img 
        src={event.imageUrl || "/api/placeholder/400/200"} 
        alt={event.name} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{event.name}</h3>
          <span className={`px-2 py-1 text-xs rounded-full ${event.registrationOpen 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'}`}
          >
            {event.registrationOpen ? 'Registration Open' : 'Registration Closed'}
          </span>
        </div>
        
        {(event.date || event.time) && (
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            {event.date && (
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{event.date}</span>
              </div>
            )}
            {event.time && (
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{event.time}</span>
              </div>
            )}
          </div>
        )}
        
        <p className="mt-2 text-gray-600">
          {event.description}
        </p>
        
        <div className="mt-4">
          <button className={`w-full py-2 rounded-md ${event.registrationOpen 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-gray-300 cursor-not-allowed text-gray-700'}`}
            disabled={!event.registrationOpen}
          >
            {event.registrationOpen ? 'Register Now' : 'Registration Closed'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};


const EventForm = ({ onAddEvent }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: "",
    description: "",
    imageUrl: "",
    registrationOpen: true,
    date: "",
    time: ""
  });
  
  const [imagePreview, setImagePreview] = useState(null);
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: type === "checkbox" ? checked : value
    });
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // For demonstration purposes we're using a local URL
      // In a real app, you would upload this to a server
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setNewEvent({
        ...newEvent,
        imageUrl
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEvent.name && newEvent.description) {
      // Generate a unique ID for the event
      const eventWithId = {
        ...newEvent,
        id: Date.now(),
        // If no image was uploaded, use a placeholder
        imageUrl: newEvent.imageUrl || "/api/placeholder/400/320"
      };
      
      onAddEvent(eventWithId);
      
      // Reset form
      setNewEvent({
        name: "",
        description: "",
        imageUrl: "",
        registrationOpen: true,
        date: "",
        time: ""
      });
      setImagePreview(null);
      setIsFormOpen(false);
    }
  };
  
  return (
    <div className="mb-8 text-gray-800">
      {!isFormOpen ? (
        <button 
          onClick={() => setIsFormOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          <PlusCircle size={18} />
          Add New Event
        </button>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-lg shadow-lg bg-white"
        >
          <h2 className="text-xl font-bold mb-4">Add New Event</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Event Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newEvent.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md bg-white border-gray-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-1 font-medium">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={newEvent.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md bg-white border-gray-300"
                  />
                </div>
                
                <div>
                  <label className="block mb-1 font-medium">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={newEvent.time}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md bg-white border-gray-300"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="registrationOpen"
                    checked={newEvent.registrationOpen}
                    onChange={handleInputChange}
                    className="mr-2 h-4 w-4"
                  />
                  <label className="font-medium">Registration Open</label>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Description</label>
                  <textarea
                    name="description"
                    value={newEvent.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 py-2 border rounded-md bg-white border-gray-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-1 font-medium">Event Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="w-full px-3 py-2 border rounded-md bg-white border-gray-300"
                  />
                  
                  {imagePreview && (
                    <div className="mt-2">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="h-32 w-auto object-cover rounded-md" 
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-6">
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="px-4 py-2 border rounded-md hover:bg-red-50 text-red-600 border-red-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              >
                Add Event
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};


const EventList = ({ events }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export const EventSection = () => {
    // In a real application, you would probably store this in a database
    // For this example, we'll use localStorage to persist events
    const [events, setEvents] = useState([]);
    
    // Load saved events from localStorage on component mount
    useEffect(() => {
      const savedEvents = localStorage.getItem('events');
      if (savedEvents) {
        setEvents(JSON.parse(savedEvents));
      }
    }, []);
    
    // Save events to localStorage whenever they change
    useEffect(() => {
      localStorage.setItem('events', JSON.stringify(events));
    }, [events]);
    
    const handleAddEvent = (newEvent) => {
      setEvents([...events, newEvent]);
    };
    
    return (
      <div className="py-18">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-center text-gray-800"
        >
          Upcoming Events
        </motion.h2>
        
        <EventForm onAddEvent={handleAddEvent} />
        
        {events.length > 0 ? (
          <EventList events={events} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center p-8 rounded-lg bg-gray-100 text-gray-500"
          >
            <Users size={48} className="mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-medium mb-2">No events scheduled yet</h3>
            <p>Add a new event to get started!</p>
          </motion.div>
        )}
      </div>
    );
  };
  