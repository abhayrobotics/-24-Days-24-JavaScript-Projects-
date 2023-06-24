

const options = {
  method: 'GET',
  url: 'https://twelve-data1.p.rapidapi.com/stocks',
  params: {
    exchange: 'NASDAQ',
    format: 'json'
  },
  headers: {
    'X-RapidAPI-Key': '167450fecamsh5cb0275c68f1681p1be1c5jsn8d46840f566c',
    'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
  }
};

try {
	const response =  axios.request(options);
  console.log("true")
	console.log(response);
	console.log(response.data);
} catch (error) {
	console.error(error);
}