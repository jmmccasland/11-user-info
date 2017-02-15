import 'whatwg-fetch';
import data from './data';

// user photo
const userPhotoEl = document.querySelector('.hero__user-photo');
userPhotoEl.src = data.results[0].picture.large;

// user name
const userNameEl = document.querySelector('.user-info__name');
userNameEl.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;

// user email
const userEmailEl = document.querySelector('.user-info__email');
userEmailEl.innerText = data.results[0].email;

// user cell phone number
const userPhoneEl = document.querySelector('.user-info__phone');
userPhoneEl.innerText = data.results[0].cell;

// user location
const userLocationEl = document.querySelector('.user-info__location');
userLocationEl.innerText = `${data.results[0].location.city}, ${data.results[0].location.state}`;
