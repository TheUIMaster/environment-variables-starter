import {date } from "./date";
import {url} from "./apiUrls";

document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1> built on ${date} ${url}
<div>

  Look s
  

  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;
