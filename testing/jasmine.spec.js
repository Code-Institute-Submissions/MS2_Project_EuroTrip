describe('Testing that we have the correct inital data types - ', () => {
  
  it('Countries', ()=>{
      Object.keys(countries).forEach((key) => {
        expect(countries[key].center.lat).toEqual(jasmine.any(Number));
        expect(countries[key].center.lng).toEqual(jasmine.any(Number));
        expect(countries[key].zoom).toEqual(jasmine.any(Number));
      });
  });
  
  it('Locationz', ()=>{
      locationz.forEach((location) => {
        expect(location.lat).toEqual(jasmine.any(Number));
        expect(location.lng).toEqual(jasmine.any(Number));
        expect(location.cost).toEqual(jasmine.any(Number));
        expect(location.name).toEqual(jasmine.any(String));
      });
  });

})

describe('Testing that functions work as intended- ', ()=>{
  
  it('filterLocationByCost', () => {
      let initalArray = [{cost: 0}, {cost: 10}, {cost: 20}, {cost: 30}];
      let results = filterArrayByCost(initalArray, 25);
      expect(results.length).toEqual(3);
      results.forEach((result) => {
        expect(result.cost).toBeLessThanOrEqual(25);
      })
  });
  
})