import React, { useState, useEffect } from 'react';
import './PlantCareGuide.css';

const plantCareData = {
  name: 'Three Leaf Clover',
  description: 'Symbolizes good luck and fortune in many cultures.',
  water: 'Allow the soil to dry out completely before watering. Bright indirect light environments.',
  light: 'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.',
  note: 'Plants images depicted are solely for illustration purposes only.'
};

function PlantCareGuide() {
  const [careData, setCareData] = useState(plantCareData);

  useEffect(() => {
    // Example: fetch data from an API and update state
    // setCareData(fetchedData);
  }, []);

  return (
    <div className="plant-care-guide">
      <h2>{careData.name}</h2>
      <p>{careData.description}</p>
      <h3>Water</h3>
      <p>{careData.water}</p>
      <h3>Light</h3>
      <p>{careData.light}</p>
      <p>{careData.note}</p>
    </div>
  );
}

export default PlantCareGuide;
