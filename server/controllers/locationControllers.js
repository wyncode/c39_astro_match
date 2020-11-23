const axios = require('axios');

// const getLocationAPI = async () => {
//   return axios.get(
//     'https://www.universal-tutorial.com/api/countries/',
//     {headers: {
//       Authorization: 'Bearer '+ process.env.REACT_APP_AUTH_TOKEN,
//       // "api-token": process.env.REACT_API_TOKEN,
//       // "user-email": 'itchoib@gmail.com'
//       // "Accept": "application/json"
//     }})

// }

const headers = {
  headers: {
    Authorization: 'Bearer ' + process.env.REACT_APP_AUTH_TOKEN
  }
};

exports.getCountry = async (req, res) => {
  try {
    const data = await axios.get(
      'https://www.universal-tutorial.com/api/countries/',
      headers
    );
    // console.log(data.data)
    res.json(data.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getState = async (req, res) => {
  try {
    const data = await axios.get(
      `https://www.universal-tutorial.com/api/states/${req.params.id}`,
      headers
    );
    // console.log(data.data)
    res.json(data.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getCity = async (req, res) => {
  try {
    const data = await axios.get(
      `https://www.universal-tutorial.com/api/cities/${req.params.id}`,
      headers
    );
    // console.log(data.data)
    res.json(data.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// app.get('/api/location', async (req, res) => {
//   try {
//     const data = await getLocationAPI()
//     // console.log(data.data)
//     res.json(data.data)
//   } catch (error) {
//     res.status(500).send({error: error.message})
//   }
// })
