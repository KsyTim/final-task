import axios from "axios";
import { makeAutoObservable } from "mobx";

class Api {
  constructor() {
    makeAutoObservable(this)
  }

  data =[]

  requestData = () => {
    axios.all([
        axios.get(`http://93.95.97.34/api/users/all`)
    ])
        .then(axios.spread((data) => {
          this.data = data.data;
        }))
        .catch(err => err);
  }
}

export default new Api();