import Ractive from 'ractive';
// simulated event emitter
import events from '../libs/events.js';

// a very simple view
export default Ractive.extend({
  template : '<p>index</p><div class="bar" style="width: {{width}}%"></div>',
  data : {
    width: 0
  }
})
