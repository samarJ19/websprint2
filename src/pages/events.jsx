import React, { useState, useEffect } from 'react';
// import '../pages/'
import '../pages/events.css';
const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching events data
    setTimeout(() => {
      setEvents([
        {
          id: 1,
          title: "MOI Blockchain Dev X Bootcamp",
          date: "Feb 17, 2024",
          time: "09:00 pm",
          venue: "M-Block Auditorium",
          description: "From the basics to building applications on the MOI blockchain.",
          image: "/api/placeholder/400/200",
          registration: "Closed",
          callabs: ["MOI", "IET DAVV"]
        },
        {
          id: 2,
          title: "Intro to Machine Learning",
          date: "Jan 26, 2024",
          time: "06:00 pm",
          venue: "Online",
          description: "ML concepts to make decisions, operationalizing technology and taking your first step out in this dynamic microecosystem in collaboration with GDSC IET.",
          image: "/api/placeholder/400/200",
          registration: "Closed",
          callabs: ["Amazng Matrix", "GDSC IET"]
        },
        {
          id: 3,
          title: "Solution Challenge",
          date: "Dec 15, 2023",
          time: "07:30 pm",
          venue: "",
          description: "The Google Developer Student Clubs Solution Challenge is to solve for one of the United Nations' 17 Sustainable Development Goals using Google technology.",
          image: "/api/placeholder/400/200",
          registration: "Open",
          callabs: []
        },
        {
          id: 4,
          title: "UI/UX Unleash",
          date: "Mar 20, 2024",
          time: "03:00 pm",
          venue: "",
          description: "Dive into the world of UI/UX and Figma. Join us for an intensive UI/UX workshop helps to learn from the industry experts and learn the latest techniques and tools to craft intuitive user experiences.",
          image: "/api/placeholder/400/200",
          registration: "Open",
          callabs: []
        },
        {
          id: 5,
          title: "Google Cloud Felicitation Ceremony",
          date: "Mar 01, 2024",
          time: "12:30 PM",
          venue: "E-tem Campus",
          description: "Finally, the wait is over! Join GDSC IET DAVV for an exciting event!",
          image: "/api/placeholder/400/200",
          registration: "Open",
          callabs: ["Sanket Parche", "GDSC IET"]
        },
        {
          id: 6,
          title: "Intro to Flutter",
          date: "Feb 05, 2024",
          time: "",
          venue: "Google Meet",
          description: "Explore Flutter fundamentals, indulge, and learn from the best and solve your all the queries.",
          image: "/api/placeholder/400/200",
          registration: "Open",
          callabs: []
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Helper function to render status badge
  const renderStatusBadge = (status) => {
    return (
      <div className={"registration-badge "+{status}}>
        Registration: {status}
      </div>
    );
  };

  return (
    <div className="events-page">
      <div className="events-header">
        <h1>Events</h1>
      </div>
      
      {loading ? (
        <div className="events-loading">
          <div className="spinner"></div>
          <p>Loading events...</p>
        </div>
      ) : (
        <div className="events-grid">
          {events.map(event => (
            <div 
              key={event.id}
              className="event-card"
            >
              <div className="event-image-container">
                <img src={event.image} alt={event.title} />
                {renderStatusBadge(event.registration)}
              </div>
              <div className="event-details">
                <h2>{event.title}</h2>
                <div className="event-meta">
                  {event.date && (
                    <div className="event-date">
                      <span className="material-icons">calendar_today</span>
                      <span>{event.date}</span>
                    </div>
                  )}
                  {event.time && (
                    <div className="event-time">
                      <span className="material-icons">access_time</span>
                      <span>{event.time}</span>
                    </div>
                  )}
                </div>
                {event.venue && (
                  <div className="event-venue">
                    <span className="material-icons">location_on</span>
                    <span>{event.venue}</span>
                  </div>
                )}
                <p className="event-description">{event.description}</p>
                {event.callabs && event.callabs.length > 0 && (
                  <div className="event-callabs">
                    <span>Collaborators: </span>
                    {event.callabs.join(', ')}
                  </div>
                )}
                <button className="event-register-btn">
                  {event.registration === "Open" ? "Register Now" : "View Details"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;