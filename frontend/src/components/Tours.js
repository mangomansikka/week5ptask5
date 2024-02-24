import React, { useState, useEffect } from 'react';
import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";
import Footer from "./Footer";
import AddTourForm from './AddTour';

function Tours() {
  const [toursData, setToursData] = useState(tours);

  // Fetch data when the component mounts
  useEffect(() => {
    setToursData(tours);
  }, []);

  const handleAddTour = (newTour) => {
    setToursData((prevToursData) => [...prevToursData, newTour]);
  };

  const handleDeleteTour = (tourId) => {
    setToursData((prevToursData) => prevToursData.filter((tour) => tour.id !== tourId));
  };

  const handleToggleTour = (tourId) => {
    setToursData((prevToursData) =>
      prevToursData.map((tour) =>
        tour.id === tourId ? { ...tour, visible: !tour.visible } : tour
      )
    );
  };

  const handleToggleAllTours = () => {
    setToursData((prevToursData) =>
      prevToursData.map((tour) => ({ ...tour, visible: true }))
    );
  };

  // Use useEffect to log the current state of toursData whenever it changes
  useEffect(() => {
    console.log('Tours data updated:', toursData);
  }, [toursData]);

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="add-tour">
        <AddTourForm onAddTour={handleAddTour} />
        </div>
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            tour.visible && (
              <div key={tour.id}>
                <Tour {...tour} onDeleteTour={handleDeleteTour} />
                <button className= "Delete" onClick={() => handleDeleteTour(tour.id)}>Delete Tour</button>
                <button className="Hide" onClick={() => handleToggleTour(tour.id)}>
                  {tour.visible ? 'Hide Tour' : 'Show Tour'}
                </button>
              </div>
            )
          ))}
          <button className="ShowAll" onClick={handleToggleAllTours}>
            Show All Tours
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Tours;