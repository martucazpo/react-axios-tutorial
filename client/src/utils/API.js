import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_BASE_URL}`;

  export default {
    getData: function () {
       return axios.get(baseUrl + '/courses');
    }
  }



