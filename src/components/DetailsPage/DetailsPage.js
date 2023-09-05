import React, { useEffect, useState } from 'react';

function DetailsPage({ match }) {
  const [detailsData, setDetailsData] = useState(null);

  useEffect(() => {
    // Fetch details data from your server based on the route parameter (e.g., match.params.id)
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/details/${match.params.id}`);
        const data = await response.json();
        setDetailsData(data);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchData();
  }, [match.params.id]);

  if (!detailsData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{detailsData.title}</h2>
      <p>{detailsData.description}</p>
     
    </div>
  );
}

export default DetailsPage;
