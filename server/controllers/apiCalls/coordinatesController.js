const axios = require('axios');

exports.getLatLonFZ = async (zipCode) => {
  try {
    let response = await axios.get(
      `https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-codes&q=${zipCode}&facet=zipcodetype&facet=state`
    );
    return response.data.records[0].fields.coord;
  } catch (error) {
    console.log(error);
  }
};

exports.getLatLonFC = async (city, state) => {
  try {
    let response = await axios.get(
      `https://public.opendatasoft.com/api/records/1.0/search/?dataset=cities-and-towns-of-the-united-states&q=${city}`
    );
    let foundCity = response.data.records.filter(
      (x) => x.fields.state[0] === state[0]
    );
    console.log(foundCity);
    console.log(foundCity[0].fields.geo_point_2d);
    return foundCity[0].fields.geo_point_2d;
  } catch (error) {
    console.log(error);
  }
};
