const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Happy Hour Hero';
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/v1/restaurants', (request, response) => {
  database('restaurants').select()
    .then(restaurant => response.status(200).json(restaurant))
    .catch((error) => response.status(500).json({ error }));
});

app.get('/api/v1/restaurants/:id', (request, response) => {
  database('restaurants')
    .select()
    .where('id', request.params.id)
    .then(restaurant => response.status(200).json(restaurant)[id])
    .catch(error => response.status(500).json({ error }));
});

app.get('/api/v1/restaurants/:minLat/:maxLat/:minLong/:maxLong', (request, response) => {
  const { minLat, maxLat, minLong, maxLong } = request.params;

  database('restaurants').select()
    .whereBetween('latitude', [minLat, maxLat])
    .whereBetween('longitude', [minLong, maxLong])
    .then(restaurant => response.status(200).json(restaurant))
    .catch((error) => response.status(500).json({ error }));
});

app.get('/api/v1/drink_specials', (request, response) => {
  database('drink_specials').select()
    .then(drink_special => response.status(200).json(drink_special))
    .catch(error => response.status(500).json({ error }));
});

app.get('/api/v1/drink_specials/:id', (request, response) => {
  database('drink_specials').select()
    .where('id', request.params.id)
    .then(drink_special => response.status(200).json(drink_special)[id])
    .catch(error => response.status(500).json({ error }));
});

app.get('/api/v1/food_specials', (request, response) => {
  database('food_specials').select()
    .then(food_special => response.status(200).json(food_special))
    .catch(error => response.status(500).json({ error }));
});

app.get('/api/v1/food_specials/:id', (request, response) => {
  database('food_specials').select()
    .where('id', request.params.id)
    .then(food_special => response.status(200).json(food_special)[id])
    .catch(error => response.status(500).json({ error }));
});

app.get('/api/v1/happy_hours', (request, response) => {
  console.log(request.query)
  if (request.query.restaurant_id || request.query.combined_times) {
    database('happy_hours').select()
      .where('restaurant_id', request.query.restaurant_id)
      .andWhere('combined_times', request.query.combined_times)
      .then(happy_hour => response.status(200).json(happy_hour)[restaurant_id, combined_times])
      .catch(error => response.status(500).json({ error }));
  } else {
    database('happy_hours').select()
      .then(happy_hour => response.status(200).json(happy_hour))
      .catch(error => response.status(500).json({ error }));
  }
});

app.get('/api/v1/happy_hours/:id', (request, response) => {
  database('happy_hours').select()
    .where('id', request.params.id)
    .then(happy_hour => response.status(200).json(happy_hour)[id])
    .catch(error => response.status(500).json({ error }));
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;