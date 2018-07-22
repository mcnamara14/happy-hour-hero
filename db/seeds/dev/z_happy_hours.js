exports.seed = function (knex, Promise) {
  let restaurant_id;
  let food_specials_id;
  let drink_specials_id;

  return knex('happy_hours').del()
    .then(() => {
      return Promise.all([
        knex('restaurants').select()
          .then(restaurant => (restaurant_id = restaurant))
      ]);
    })
    .then(() => {
      return Promise.all([
        knex('drink_specials').select()
          .then(drink_specials => (drink_specials_id = drink_specials))
      ]);
    })
    .then(() => {
      return Promise.all([
        knex('food_specials').select()
          .then(food_specials => (food_specials_id = food_specials))
      ]);
    })
    .then(() => {
      return Promise.all([
        knex('happy_hours').insert([
          {
            day: 'Monday',
            start_time: 1600,
            end_time: 2000,
            drink_specials_id: drink_specials_id[0].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Monday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[3].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Monday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[4].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Tuesday',
            start_time: 1600,
            end_time: 2000,
            drink_specials_id: drink_specials_id[0].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Tuesday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[5].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Tuesday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[2].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Tuesday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[6].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Wednesday',
            start_time: 1600,
            end_time: 2000,
            drink_specials_id: drink_specials_id[0].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Wednesday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[7].id,
            food_specials_id: food_specials_id[0].id,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Wednesday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[8].id,
            food_specials_id: food_specials_id[0].id,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Wednesday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[9].id,
            food_specials_id: food_specials_id[0].id,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Thursday',
            start_time: 1600,
            end_time: 2000,
            drink_specials_id: drink_specials_id[0].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Thursday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[10].id,
            food_specials_id: food_specials_id[1].id,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Thursday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[2].id,
            food_specials_id: food_specials_id[1].id,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Thursday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[9].id,
            food_specials_id: food_specials_id[1].id,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Thursday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[11].id,
            food_specials_id: food_specials_id[1].id,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Friday',
            start_time: 1600,
            end_time: 2000,
            drink_specials_id: drink_specials_id[0].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Friday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[12].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Friday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[13].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Friday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[14].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Saturday',
            start_time: 1100,
            end_time: 0200,
            drink_specials_id: drink_specials_id[1].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[0].id,
          },
          {
            day: 'Sunday',
            start_time: 1100,
            end_time: 0200,
            drink_specials_id: drink_specials_id[2].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[0].id,
          },
          // Filler data for other restaurants
          {
            day: 'Monday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[12].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[1].id,
          },
          {
            day: 'Tuesday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[8].id,
            food_specials_id: food_specials_id[1].id,
            restaurant_id: restaurant_id[1].id,
          },
          {
            day: 'Wednesday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[6].id,
            food_specials_id: food_specials_id[0].id,
            restaurant_id: restaurant_id[1].id,
          },
          {
            day: 'Thursday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[1].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[1].id,
          },
          {
            day: 'Friday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[8].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[1].id,
          },
          {
            day: 'Saturday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[4].id,
            food_specials_id: food_specials_id[1].id,
            restaurant_id: restaurant_id[1].id,
          },
          {
            day: 'Sunday',
            start_time: 2000,
            end_time: 0200,
            drink_specials_id: drink_specials_id[9].id,
            food_specials_id: food_specials_id[1].id,
            restaurant_id: restaurant_id[1].id,
          },
          {
            day: 'Monday',
            start_time: 1600,
            end_time: 0100,
            drink_specials_id: drink_specials_id[2].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[2].id,
          },
          {
            day: 'Tuesday',
            start_time: 1600,
            end_time: 0100,
            drink_specials_id: drink_specials_id[5].id,
            food_specials_id: food_specials_id[0].id,
            restaurant_id: restaurant_id[2].id,
          },
          {
            day: 'Wednesday',
            start_time: 1600,
            end_time: 0100,
            drink_specials_id: drink_specials_id[12].id,
            food_specials_id: food_specials_id[0].id,
            restaurant_id: restaurant_id[2].id,
          },
          {
            day: 'Thursday',
            start_time: 1600,
            end_time: 0100,
            drink_specials_id: drink_specials_id[9].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[2].id,
          },
          {
            day: 'Friday',
            start_time: 1600,
            end_time: 0100,
            drink_specials_id: drink_specials_id[1].id,
            food_specials_id: food_specials_id[1].id,
            restaurant_id: restaurant_id[2].id,
          },
          {
            day: 'Saturday',
            start_time: 1600,
            end_time: 0100,
            drink_specials_id: drink_specials_id[7].id,
            food_specials_id: null,
            restaurant_id: restaurant_id[2].id,
          },
          {
            day: 'Sunday',
            start_time: 1600,
            end_time: 0100,
            drink_specials_id: drink_specials_id[4].id,
            food_specials_id: food_specials_id[1].id,
            restaurant_id: restaurant_id[2].id,
          },
        ])
      ]);
    })
    .then(() => console.log('Seeding complete!'))
    .catch(error => console.log(`Error seeding data: ${error}`));
}