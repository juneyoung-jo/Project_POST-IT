import React, { useState, useEffect } from 'react';
import { createInstance } from 'api/index';
import axios, { AxiosInstance } from 'axios';

const Signup = () => {
  const [url, setUrl] = useState('');
  const getCat = () => {
    return new Promise(async (resolve, reject) => {
      axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then((res) => {
          res.data;
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });
  };
  getCat();
  return <div>Signup</div>;
};

export default Signup;
