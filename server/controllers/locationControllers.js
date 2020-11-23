const axios = require('axios');

const headers = {
  headers: {
    Authorization: 'Bearer ' + process.env.LOCATION_AUTH_TOKEN
  }
};

exports.getCountry = async (req, res) => {
  try {
    const data = await axios.get(
      'https://www.universal-tutorial.com/api/countries/',
      headers
    );
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
    res.json(data.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
