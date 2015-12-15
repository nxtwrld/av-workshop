import Ractive from 'ractive';
import wayfarer from 'wayfarer';
import match from 'hash-match';
import layoutHtml from './html/index.html';
import fetch_shim from 'whatwg-fetch';
import list from './views/list.js';
import index from './views/index.js';
import events from './libs/events.js';

// register router
const router = wayfarer(window.location.hash);


// listen to hash changes
window.addEventListener('hashchange', () => {
	router(match(window.location.hash));
});


// register dynamic component name
Ractive.prototype.data = {
	getComponent: function(name){
		if (!!this.partials[name]) return name;
		this.partials[name] = '<' + name + '/>';
		return name;
	}
};

export default new Ractive({
  el : "#app",
  template : layoutHtml,
  components : {
    list : list,
    index : index
  },
  data : {
    viewName : 'index'
  },
  onrender : function() {

    router.on("/", ()=>{
      this.set("viewName", "index")
    });

    router.on("/list", ()=>{
      this.set("viewName", "list")
    });

  }
});
