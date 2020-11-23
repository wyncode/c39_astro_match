const axios = require('axios');

exports.getLatLon = async (zipCode) => {
  try {
    let response = await axios.get(
      `https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-codes&q=${zipCode}&facet=zipcodetype&facet=state`
    );
    return response.data.records[0].fields.coord;
  } catch (error) {
    console.log(error);
  }
};

// export default getLatLon
