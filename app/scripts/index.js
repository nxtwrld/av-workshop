import Ractive from 'ractive';
// routing dependencies
import wayfarer from 'wayfarer';
import match from 'hash-match';

// fetch shim
import fetch_shim from 'whatwg-fetch';

// template
import layoutHtml from './html/index.html';

// views
import list from './views/list.js';
import index from './views/index.js';

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


// Main view
export default new Ractive({
	// selector - where we want our view to rendered
  el : "#app",
	// template link
  template : layoutHtml,
	// linked components
  components : {
    list : list,
    index : index
  },
	// component data object
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
