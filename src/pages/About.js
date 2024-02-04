import React from 'react';

const About = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>Welcome to Our About Page</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed sit amet libero in turpis tincidunt ullamcorper.
          </p>
        </div>
        <div className="col-md-6">
          {/* Add an image or other content */}
        </div>
      </div>
    </section>
  );
};

export default About;
