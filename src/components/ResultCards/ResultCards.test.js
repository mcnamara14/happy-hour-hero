import React from 'react';
import { shallow } from 'enzyme';
import { ResultCards } from './ResultCards';

describe('Result Cards', () => {
  let wrapper;
  let mockRestaurants;
  let mockHappyHours;

  it('matches the snapshot', () => {
    mockRestaurants = [{
      id: 1, 
      name: "Brothers Bar", 
      address: "1920 Market St", 
      phone: "(303) 297-2767", 
      website: "http://www.brothersbar.com/denver-co/",
      city: "Denver",
      created_at: "2018-07-30T13:59:04.919Z",
      latitude: "39.752816",
      longitude:"-104.993984",
      restaurant_image: "http://www.brothersbar.com/wp-content/uploads/2015/10/GALLERY-Stapleton.jpg",
      state:"CO",
      zip_code: 80202
    }];

    mockHappyHours = [{
      combined_times:"4:00PM-8:00PM",
      created_at:"2018-07-30T13:59:04.931Z",
      day:"Monday",
      drink_specials_id:1,
      end_time:"2000",
      food_specials_id:null,
      id:1,
      restaurant_id:1,
      start_time:"1600",
      updated_at:"2018-07-30T13:59:04.931Z"
    }];

    beforeEach(() => {
      wrapper = shallow(<ResultCards 
        filteredRestaurants={mockRestaurants}
        happyHours={mockHappyHours}
      />, { disableLifecycleMethods: true });
    });

    expect(wrapper).toMatchSnapshot();
  });

  describe('findDay', () => {
    let wrapper; 
    
    beforeEach(() => {
      wrapper = shallow(<ResultCards 
        filteredRestaurants={mockRestaurants} 
        storeDay={jest.fn()}
        happyHours={mockHappyHours}
        day={'Thursday'}
      />, { disableLifecycleMethods: true });

    });

    it('should call storeDay with correct argument', () => {
      const mockDate = new Date('2016');
      global.Date = jest.fn(() => mockDate);
    
      wrapper.instance().findDay();

      expect(wrapper.instance().props.storeDay).toHaveBeenCalledWith('Thursday');
    });
  });

  describe('getBestFoodSpecial', () => {
    let mockFoodSpecials;
    let wrapper;
    
    beforeEach(() => {
      mockFoodSpecials = [
        {name: '$3 Tacos', id: 1, best_deal: true},
        {name: '$2 Burgers', id: 2, best_deal: true},
        {name: '$7 Tapas', id: 3, best_deal: false}
      ];
      
      wrapper = shallow(<ResultCards 
        foodSpecials={mockFoodSpecials}
        filteredRestaurants={mockRestaurants}
        happyHours={mockHappyHours}
      />, 
      { disableLifecycleMethods: true });
    });

    it('should return the name of the best special', () => {
      const mockHappyHour = {food_specials_id: 1};

      const result = wrapper.instance().getBestFoodSpecial(mockHappyHour);
      
      expect(result).toEqual('$3 Tacos');
    });
  });

  describe('getBestDrinkSpecial', () => {
    let mockDrinkSpecials;
    let wrapper;
    
    beforeEach(() => {
      mockDrinkSpecials = [
        {name: '2-for-1  Margaritas', id: 1, best_deal: true},
        {name: '$5 Martinis', id: 2, best_deal: true},
        {name: '$12 Beers', id: 3, best_deal: false}
      ];
      
      wrapper = shallow(<ResultCards 
        drinkSpecials={mockDrinkSpecials}
        filteredRestaurants={mockRestaurants}
        happyHours={mockHappyHours}
      />, 
      { disableLifecycleMethods: true });
    });

    it('should return the name of the best special', () => {
      const mockHappyHour = {drink_specials_id: 1};

      const result = wrapper.instance().getBestDrinkSpecial(mockHappyHour);
      
      expect(result).toEqual('2-for-1  Margaritas');
    });
  });
});