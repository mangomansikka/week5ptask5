import React, { useState } from 'react';

const AddTourForm = ({ onAddTour }) => {
  const [newTour, setNewTour] = useState({
    title: '',
    image: '',
    info: '',
    cost: '',
    date: '',
    location: '',
    duration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTour((prevTour) => ({ ...prevTour, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form fields before adding the tour
    if (newTour.title && newTour.image && newTour.info && newTour.cost && newTour.date && newTour.location && newTour.duration) {
      // Generate a unique ID (you might want to use a library for this in a real application)
      const newTourWithId = { ...newTour, id: new Date().getTime().toString() };
      
      // Call the onAddTour prop to add the new tour to the existing list
      onAddTour(newTourWithId);

      // Clear the form after adding the tour
      setNewTour({
        title: '',
        image: '',
        info: '',
        cost: '',
        date: '',
        location: '',
        duration: '',
      }
      ,alert('Tour added successfully'))
    } else {
      // Handle form validation errors
      alert('Please fill in all fields');
    }
  };

  return (
    <form className="submit-info" onSubmit={handleSubmit}>
        <div className="form-group">
      <label>
        Title:
        <input type="text" name="title" value={newTour.title} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={newTour.image} onChange={handleChange} />
      </label>
      <label>
        Info:
        <textarea name="info" value={newTour.info} onChange={handleChange} />
      </label>
      <label>
        Cost:
        <input type="text" name="cost" value={newTour.cost} onChange={handleChange} />
      </label>
      <label>
        Date:
        <input type="text" name="date" value={newTour.date} onChange={handleChange} />
      </label>
      <label>
        Location:
        <input type="text" name="location" value={newTour.location} onChange={handleChange} />
      </label>
      <label>
        Duration:
        <input type="text" name="duration" value={newTour.duration} onChange={handleChange} />
      </label>
        </div>
      <button className = "submit-btn" type="submit">Add Tour</button>
    </form>
  );
};

export default AddTourForm;