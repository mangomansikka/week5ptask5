import { services } from "../data";
import { useState, useEffect } from 'react';
import Title from "./Title";
import Service from "./Service";
import Footer from "./Footer";


function Services() {
	const [servicesData, setServicesData] = useState(services);
	const [filterCategory, setFilterCategory] = useState(null);
  
	useEffect(() => {
	  setServicesData(services);
	}, []);
	
// Handle filter effect
useEffect(() => {
    if (filterCategory) {
      // Filter services based on the selected category
      const filteredServices = services.filter(service => service.category === filterCategory);
      setServicesData(filteredServices);
    } else {
      // If no category selected, show all services
      setServicesData(services);
    }
  }, [filterCategory]);

  const categories = [...new Set(services.map((service) => service.category))];

  const handleFilter = (category) => {
    // Set the filter category, triggering the useEffect to filter services
    setFilterCategory(category);
  };

  const handleResetFilter = () => {
    // Reset the filter and show all services
    setFilterCategory(null);
  };
  
	return (
	  <div>
		<section className="section services" id="services">
		  <Title title="our" span="services" />
  
		  {/* Filter buttons */}
		  <div>
			<button className="Filter" onClick={() => handleFilter('category1')}>Filter Category 1</button>
			<button className="Filter" onClick={() => handleFilter('category2')}>Filter Category 2</button>
			<button className="Filter" onClick={handleResetFilter}>Reset Filter</button>
		  </div>
  
		  <div className="section-center services-center">
			{/* Display the filter category */}
			{filterCategory && <p>Filtered by: {filterCategory}</p>}
  
			{servicesData.map((service) => (
			  <Service key={service.id} {...service} />
			))}
		  </div>
		</section>
		<Footer />
	  </div>
	);
  }
  
  export default Services;
