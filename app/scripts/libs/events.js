import EventEmitter from 'EventEmitter2';


class Events extends EventEmitter {
  constructor() {
    super()

    setInterval(() => {
      this.emit("eventX", {
        value: Math.floor(Math.random() * 100) + 1
      })
    },1000);

    setInterval(() => {
      this.emit("eventY", {
        value: Math.floor(Math.random() * 100) + 1
      })
    },1000);

  }
}


export default new Events;
