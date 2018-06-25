import axios from 'axios';

const _jokes = []
  
  export default {
    getJokes (cb) {
        axios.get("http://api.icndb.com/jokes/random/10")
        .then((response)  =>  {
          this._jokes = response.data.value;
          cb(this._jokes)
        }, (error)  =>  {
            cb(error)
        })
    }
  }