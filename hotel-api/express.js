// Server code
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Define your API route for details
app.get('/api/details/:id', (req, res) => {
 
  const detailsId = req.params.id;
  


  res.json(detailsID);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
