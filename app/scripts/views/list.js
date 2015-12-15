import Ractive from 'ractive';


/*
fetch('mockdata/devices.json', {
  method: 'get',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
.then(function(r){
  console.log("Success, look what we got:", r;
},function(r){
  console.log("Failed to fetch it. Here is your error data:", r);

})
*/

export default Ractive.extend({
  template : '<p>list</p>',
})
