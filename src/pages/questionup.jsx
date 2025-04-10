import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HelpCircle, PlusCircle, ThumbsUp, MessageSquare, Tag, Search } from "lucide-react";

// QuestionForm Component - Allows users to add new questions
const QuestionForm = ({ onAddQuestion }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    content: "",
    tags: "",
    difficulty: "medium"
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion({
      ...newQuestion,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.title && newQuestion.content) {
      // Generate a unique ID for the question
      const questionWithId = {
        ...newQuestion,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        tags: newQuestion.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ""),
        upvotes: 0,
        answers: []
      };
      
      onAddQuestion(questionWithId);
      
      // Reset form
      setNewQuestion({
        title: "",
        content: "",
        tags: "",
        difficulty: "medium"
      });
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
          Add New Question
        </button>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-lg shadow-lg bg-white"
        >
          <h2 className="text-xl font-bold mb-4">Add New Question</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Question Title</label>
                <input
                  type="text"
                  name="title"
                  value={newQuestion.title}
                  onChange={handleInputChange}
                  placeholder="e.g. How to implement binary search in JavaScript?"
                  className="w-full px-3 py-2 border rounded-md bg-white border-gray-300"
                  required
                />
              </div>
              
              <div>
                <label className="block mb-1 font-medium">Question Content</label>
                <textarea
                  name="content"
                  value={newQuestion.content}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder="Describe your question in detail..."
                  className="w-full px-3 py-2 border rounded-md bg-white border-gray-300"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Tags</label>
                  <input
                    type="text"
                    name="tags"
                    value={newQuestion.tags}
                    onChange={handleInputChange}
                    placeholder="e.g. javascript, algorithms, sorting"
                    className="w-full px-3 py-2 border rounded-md bg-white border-gray-300"
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate tags with commas</p>
                </div>
                
                <div>
                  <label className="block mb-1 font-medium">Difficulty</label>
                  <select
                    name="difficulty"
                    value={newQuestion.difficulty}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md bg-white border-gray-300"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
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
                Submit Question
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};

// QuestionCard Component - Displays a single question
const QuestionCard = ({ question }) => {
  // Format date to be readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Get appropriate badge color based on difficulty
  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-lg shadow-lg bg-white mb-4"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{question.title}</h3>
        <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(question.difficulty)}`}>
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{question.content}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {question.tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 text-xs rounded-full flex items-center">
            <Tag size={12} className="mr-1" />
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 hover:text-blue-600">
            <ThumbsUp size={14} />
            <span>{question.upvotes}</span>
          </button>
          <div className="flex items-center gap-1">
            <MessageSquare size={14} />
            <span>{question.answers.length} answers</span>
          </div>
        </div>
        <div>
          Posted on {formatDate(question.createdAt)}
        </div>
      </div>
    </motion.div>
  );
};

// QuestionList Component - Displays all questions
const QuestionList = ({ questions, searchTerm, selectedTag, selectedDifficulty }) => {
  // Filter questions based on search and filters
  const filteredQuestions = questions.filter(question => {
    // Search term filter
    const matchesSearch = !searchTerm || 
      question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Tag filter
    const matchesTag = !selectedTag || 
      question.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase());
    
    // Difficulty filter
    const matchesDifficulty = !selectedDifficulty || 
      question.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesTag && matchesDifficulty;
  });
  
  return (
    <div>
      {filteredQuestions.length > 0 ? (
        filteredQuestions.map(question => (
          <QuestionCard key={question.id} question={question} />
        ))
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center p-8 rounded-lg bg-gray-100 text-gray-500"
        >
          <HelpCircle size={48} className="mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-medium mb-2">No questions found</h3>
          <p>Try adjusting your filters or add a new question!</p>
        </motion.div>
      )}
    </div>
  );
};

// QuestionFilters Component - Provides search and filtering
const QuestionFilters = ({ 
  questions, 
  searchTerm, 
  setSearchTerm, 
  selectedTag, 
  setSelectedTag,
  selectedDifficulty,
  setSelectedDifficulty
}) => {
  // Extract all unique tags from questions
  const allTags = [...new Set(questions.flatMap(q => q.tags))];
  
  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div>
          <label className="block mb-1 text-sm font-medium">Search Questions</label>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by keyword..."
              className="w-full pl-10 pr-3 py-2 border rounded-md"
            />
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        {/* Tag filter */}
        <div>
          <label className="block mb-1 text-sm font-medium">Filter by Tag</label>
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">All Tags</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
        
        {/* Difficulty filter */}
        <div>
          <label className="block mb-1 text-sm font-medium">Filter by Difficulty</label>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// Main QuestionSection Component
export const QuestionSection = () => {
  // State for questions and filters
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  
  // Load saved questions from localStorage on component mount
  useEffect(() => {
    const savedQuestions = localStorage.getItem('questions');
    if (savedQuestions) {
      setQuestions(JSON.parse(savedQuestions));
    }
  }, []);
  
  // Save questions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(questions));
  }, [questions]);
  
  const handleAddQuestion = (newQuestion) => {
    setQuestions([newQuestion, ...questions]);
  };
  
  // Get statistics for the questions
  const getStats = () => {
    return {
      total: questions.length,
      answered: questions.filter(q => q.answers.length > 0).length,
      easy: questions.filter(q => q.difficulty === 'easy').length,
      medium: questions.filter(q => q.difficulty === 'medium').length,
      hard: questions.filter(q => q.difficulty === 'hard').length
    };
  };
  
  const stats = getStats();
  
  return (
    <div className="container mx-auto py-8 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-center text-gray-800"
      >
        Questions & Answers
      </motion.h2>
      
      {/* Statistics cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-4 rounded-lg shadow text-center"
        >
          <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
          <p className="text-sm text-gray-500">Total</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-4 rounded-lg shadow text-center"
        >
          <p className="text-2xl font-bold text-blue-600">{stats.answered}</p>
          <p className="text-sm text-gray-500">Answered</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-4 rounded-lg shadow text-center"
        >
          <p className="text-2xl font-bold text-green-600">{stats.easy}</p>
          <p className="text-sm text-gray-500">Easy</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-4 rounded-lg shadow text-center"
        >
          <p className="text-2xl font-bold text-yellow-600">{stats.medium}</p>
          <p className="text-sm text-gray-500">Medium</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-4 rounded-lg shadow text-center"
        >
          <p className="text-2xl font-bold text-red-600">{stats.hard}</p>
          <p className="text-sm text-gray-500">Hard</p>
        </motion.div>
      </div>
      
      {/* Add question form */}
      <QuestionForm onAddQuestion={handleAddQuestion} />
      
      {/* Filters */}
      <QuestionFilters 
        questions={questions}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
      />
      
      {/* Question list */}
      <QuestionList 
        questions={questions} 
        searchTerm={searchTerm}
        selectedTag={selectedTag}
        selectedDifficulty={selectedDifficulty}
      />
    </div>
  );
};

// Example usage in your app
export const QuestionPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className="sticky top-0 z-10 bg-white text-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <HelpCircle className="text-blue-600" />
            <span className="font-bold">Question Portal</span>
          </div>
        </div>
      </nav>
      
      <QuestionSection />
    </div>
  );
};