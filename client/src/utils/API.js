import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_BASE_URL}`;

  export default {
    getData: async function () {
       return  await axios.get(baseUrl + '/courses');
    },

    createCourse:  async function () {
      return await axios.post(baseUrl + '/courses', {
        title: "Test", id: 4, author: "test"
      });
    },

    deleteCourse: async function (id) {
      return await axios.delete(baseUrl + `/courses/${id}`);
    },

    updateCourse: async function (id, val) {
      return await axios.patch(baseUrl + `/courses/${id}`, val);
    }
  };



