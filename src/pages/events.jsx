import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/theme-context';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useTheme();

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
          image: "https://imgs.search.brave.com/MtEkFl9EnFfkWv7AFlbLuSJLewVlBRUiLHPE0Zb166E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ibG9j/a2NoYWludHJhaW5p/bmdhbGxpYW5jZS5j/b20vY2RuL3Nob3Av/cHJvZHVjdHMvT0Qt/ZXRoXzJ4XzAwNjQ1/ODZlLTY1ZGEtNGY0/Yi05MzYzLThmMzJh/NmJmNzU2Ml8zMjB4/LnBuZz92PTE2ODI0/OTk0OTk",
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
          image: "https://imgs.search.brave.com/aFbpcnOj1BlACSf86dxO6MA8xCD584j6jdgg8o48NHU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91Y3Nj/ZXh0ZW5zaW9uLWxp/dmUtMjhjZDk1Y2Y3/Nzg4NGQxNWJiMDYt/MDFjMTdjMS5kaXZp/by1tZWRpYS5uZXQv/aW1hZ2VzL1RFQ0hf/QUlTVl9YNDAwX2lT/dG9jay0xMTMxODkw/MzgwXy5mb3JtYXQt/anBlZy53aWR0aC0x/OTIwLmpwZw",
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
          image: "https://imgs.search.brave.com/Iz9K8NFVlEnnoqfTDK56_n4znG69f7K0v7RSiCy3Y2c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuZGV2LnRvL2R5/bmFtaWMvaW1hZ2Uv/d2lkdGg9ODAwLGhl/aWdodD0sZml0PXNj/YWxlLWRvd24sZ3Jh/dml0eT1hdXRvLGZv/cm1hdD1hdXRvL2h0/dHBzOi8vZGV2LXRv/LXVwbG9hZHMuczMu/YW1hem9uYXdzLmNv/bS91cGxvYWRzL2Fy/dGljbGVzL3p3azRk/YmI5bGZkbGJkYXRx/em1tLnBuZw",
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
          image: "https://imgs.search.brave.com/Wfs3_DNdzQLaVd4LPW8mGFkAQQbClWwDF5NWnu6oHjs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kMWhk/dGMwdGJxZWdoeC5j/bG91ZGZyb250Lm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMy8xODExMjcz/NC9VWC1pcy1ub3Qt/VUkuanBn",
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
          image: "https://imgs.search.brave.com/icQUjW0-zil5TlUV-wquN6a2KWy-tvTJdvnYbUJGTig/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL29F/YldRSjF3ZWs4OWFY/aDl0UHdNWEtJZXV5/Sy1tVldxek52ekU3/eVdWWnVlaHM2TEly/aVU1YWVYQlh4RlEw/ZkNsNTA5ZjkxNW9J/SWlIQT1zNjAwLXc2/MDA.jpeg",
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
          image: "https://res.cloudinary.com/startup-grind/image/upload/v1/gcs/platform-data-dsc/events/%28For%20Bevy%29%20solutionchallenge-2022-EventThumbnail_oSBXFzI_OSGKhiA.png",
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
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
        status.toLowerCase() === 'open' ? 'bg-green-500' : 'bg-red-500'
      }`}>
        Registration: {status}
      </div>
    );
  };

  return (
    <div className={`mx-auto container flex flex-col max-w-6xl px-6 py-18 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}`}>
      <div className="text-center mb-12">
        <h1 className={`text-4xl font-bold inline-block relative ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <span className="relative z-10">Events</span>
          <span className={`absolute left-1/2 transform -translate-x-1/2 top-11 w-16 h-1 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'} rounded-full`}></span>
        </h1>
        <p className={`mt-6 max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Discover upcoming tech events, workshops, and learning opportunities.
        </p>
      </div>
      
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <div className={`w-12 h-12 rounded-full border-4 ${
            isDarkMode ? 'border-gray-700 border-t-blue-500' : 'border-blue-100 border-t-blue-600'
          } animate-spin mb-5`}></div>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Loading events...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <div 
              key={event.id}
              className={`flex flex-col rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl ${
                isDarkMode ? 'bg-gray-800 shadow-gray-900/50' : 'bg-white'
              }`}
            >
              <div className="relative h-52 overflow-hidden group">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                {renderStatusBadge(event.registration)}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className={`text-xl font-semibold mb-3 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {event.title}
                </h2>
                <div className="flex flex-wrap gap-4 mb-3">
                  {event.date && (
                    <div className={`flex items-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className={`material-icons text-lg mr-1.5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        calendar_today
                      </span>
                      <span>{event.date}</span>
                    </div>
                  )}
                  {event.time && (
                    <div className={`flex items-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className={`material-icons text-lg mr-1.5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        access_time
                      </span>
                      <span>{event.time}</span>
                    </div>
                  )}
                </div>
                {event.venue && (
                  <div className={`flex items-center text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className={`material-icons text-lg mr-1.5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      location_on
                    </span>
                    <span>{event.venue}</span>
                  </div>
                )}
                <p className={`line-clamp-3 text-base mt-2 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {event.description}
                </p>
                {event.callabs && event.callabs.length > 0 && (
                  <div className={`text-sm mt-auto mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      Collaborators:
                    </span>{' '}
                    {event.callabs.join(', ')}
                  </div>
                )}
                <button className={`mt-auto self-start px-6 py-2.5 rounded-full font-semibold text-white transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}>
                  {event.registration === "Open" ? "Register Now" : "View Details"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-16 text-center">
        <button className={`px-8 py-3 rounded-full font-semibold transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}>
          View All Events
        </button>
      </div>
    </div>
  );
};

export default Events;