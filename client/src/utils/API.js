import axios from 'axios';

const baseUrl = 'http://localhost:8000';

  export default {
    getData: function () {
       return axios.get(baseUrl + '/courses');
    }
  }



