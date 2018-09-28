// Local Modules
import {
  request,
  alertify,
  api_cars_url,
  getAuthInformations,
  HTTP_200_OK,
  HTTP_201_CREATED,
  HTTP_400_BAD_REQUEST,
  clearErrorForm,
  setErrorForm,
  resetForm
} from "./baseActions";


export function listCar(onComplete) {

  var auth_informations = getAuthInformations();

  return request
    .get(api_cars_url)
    .set("Authorization", "TOKEN " + auth_informations.auth_token)
    .type("application/json")
    .accept("application/json")
    .end((error, response) => {
      onComplete(response.body);
    });
}


export function createCar(data) {
  var auth_informations = getAuthInformations();

  var req = request
    .post(api_cars_url)
    .set("Authorization", "TOKEN " + auth_informations.auth_token)

  for(var field in data){
    console.log(field, data[field])
    req.field(field, data[field])
  }

  return req
    .end(function(error, response) {
      if (response) {
        if (response.statusCode === HTTP_201_CREATED) {
          resetForm(data, "id_car_info_form");
          alertify.success("Car created.");
          //window.location = "/createCar/" + response.body.id + "/";
          console.log("dss");
        } else if (response.statusCode === HTTP_400_BAD_REQUEST) {
          clearErrorForm(data);
          alertify.error("Please correct the errors and try again.");
          setErrorForm(response);
          console.log("nolur");
        } else {
          resetForm(data, "id_car_info_form");
          alertify.error("An unexpected error has occurred and try again later.");
        }
      } else {
        resetForm(data, "id_car_info_form");
        alertify.error("An unexpected error has occurred and try again later.");
      }
    });
}

export function retrieveCar(car_id, onComplete) {
  return request
    .get(api_cars_url + car_id + '/')
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

export function updateCar(data, onComplete) {

  var auth_informations = getAuthInformations();

  return request
    .put(api_cars_url + auth_informations.user_id + '/')
    .set("Authorization", "TOKEN " + auth_informations.auth_token)
    .type("application/json")
    .accept("application/json")
    .send(data)
    .end(function(error, response) {
      onComplete(response);
    });
}
