// Actions
import {
  request,
  alertify,
  api_auth_login_url,
  api_cities_url,
  HTTP_200_OK
} from "./baseActions";


export function authLogin(data, onComplete) {
/*
  data = {
    email: “crownest@unicrow.com”
    password: “123456c”
  }
*/

return request
  .post(api_auth_login_url)
  .type("application/json")
  .accept("application/json")
  .send(data)
  .end(function(error, response) {
    onComplete(response);
  });
}

export function listCity(onComplete) {
  return request
    .get(api_cities_url)
    .type("application/json")
    .accept("application/json")
    .end((error, response) => {
      if (error || response.statusCode !== HTTP_200_OK) {
        alertify.error("An unexpected error has occurred and try again later.");
      } else {
        onComplete(response.body);
      }
    });
}


//export function createContact(data, onComplete) {
  /*
    data = {
      first_name: "Crownest",
      last_name: "Apps",
      email: "crownest@unicrow.com",
      message: "Good job."
    }
  */

  /*return request
    .post(api_contacts_url)
    .type("application/json")
    .accept("application/json")
    .send(data)
    .end(function(error, response) {
      onComplete(response);
    });
}*/
