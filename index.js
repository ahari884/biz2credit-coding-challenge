const biz = require('biz2credit-challange');
const data = require('./data');

const RANGE = 100;
const DUBLIN_AREA_COORDINATES = {
    latitude: 53.339428, 
    longitude: -6.257664
}

function returnNearByCustomers(customersData, rangeInKm, callback){
    var nearByCustomers = [];
    try{
        customersData.forEach(function(customer){
            let distance = biz.distanceBetween(DUBLIN_AREA_COORDINATES, customer);
            if(biz.isInRange(distance, rangeInKm)){
                nearByCustomers.push(customer.user_id)
            }
        })
        callback(null, nearByCustomers)
    }catch(err){
        callback(err);
    }
}

returnNearByCustomers(data, RANGE, function(err, nearByCustomers){
    if(err){
        console.error('Please check the data format')
    }else{
        console.log('Near by custemers ids : \n', nearByCustomers);
    }
})

