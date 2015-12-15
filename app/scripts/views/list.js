import Ractive from 'ractive';


/*
fetch('mockdata/devices.json', {
  method: 'get',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
.then(function(response) {
  return response.json()
})
.then(function(r){
console.log(r);

},function(r){
console.log(r);

})
*/

export default Ractive.extend({
  template : '<p>list</p>',
})
