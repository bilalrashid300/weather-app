import React from 'react';
import axios from "axios";

export const API = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
