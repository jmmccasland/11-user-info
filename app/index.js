import 'whatwg-fetch';
import data from './data';


// const userPhotoEl = document.querySelector('.hero__user-photo');
// userPhotoEl.src = results.picture.thumbnail;

debugger;
const userNameEl = document.querySelector('.user-info__name');
userNameEl.innerText = data.results.email;
