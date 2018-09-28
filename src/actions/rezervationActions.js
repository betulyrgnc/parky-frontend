// Actions
import {
  request,
  alertify,
  api_rezervations_url,
  api_parks_url,
  getAuthInformations,
  HTTP_200_OK,
  HTTP_201_CREATED,
  HTTP_400_BAD_REQUEST,
  clearErrorForm,
  setErrorForm,
  resetForm
} from "./baseActions";

export function listRezervation(onComplete) {
  var auth_informations = getAuthInformations();

  return request
    .get(api_rezervations_url)
    .set("Authorization", "TOKEN " + auth_informations.auth_token)
    .type("application/json")
    .accept("application/json")
    .end((error, response) => {
      onComplete(response);
    });
}
export function createRezervation(data) {
  var auth_informations = getAuthInformations();

  var req = request
    .post(api_rezervations_url)
    .set("Authorization", "TOKEN " + auth_informations.auth_token)

  for(var field in data){
    console.log(field, data[field])
    req.field(field, data[field])
  }

  return req
    .end(function(error, response) {
      if (response) {
        if (response.statusCode === HTTP_201_CREATED) {
          resetForm(data, "id_create_rezervation_form");
          alertify.success("Rezervation created.");
          //window.location = "/activities/" + response.body.id + "/";
        } else if (response.statusCode === HTTP_400_BAD_REQUEST) {
          clearErrorForm(data);
          alertify.error("Please correct the errors and try again.");
          setErrorForm(response);
        } else {
          resetForm(data, "id_create_rezervation_form");
          alertify.error("An unexpected error has occurred and try again later.");
        }
      } else {
        resetForm(data, "id_create_rezervation_form");
        alertify.error("An unexpected error has occurred and try again later.");
      }
    });
}

export function deleteRezervation(rezervation_id, onComplete) {

  var auth_informations = getAuthInformations();

  return request
    .del(api_rezervations_url + rezervation_id + '/')
    .set("Authorization", "TOKEN " + auth_informations.auth_token)
    .type("application/json")
    .accept("application/json")
    .end((error, response) => {
      onComplete(response);
    });
}

export function retrieveRezervation(rezervation_id, onComplete) {
  var auth_informations = getAuthInformations();
  return request
    .get(api_rezervations_url + rezervation_id + '/')
    .set("Authorization", "TOKEN " + auth_informations.auth_token)
    .type("application/json")
    .accept("application/json")
    .end((error, response) => {
      onComplete(response);
    });
}

export function listPark(onComplete) {
  return request
    .get(api_parks_url)
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

//export function updateRezervation(data, onComplete) {
  /*
    data = {
      email: "hello@unicrow.com",
      first_name: "Hello",
      last_name: "Apps"
    }
  */
/*  var auth_informations = getAuthInformations();
  return request
    .put(api_rezervations_url + auth_informations.user_id + '/')
    .set("Authorization", "TOKEN " + auth_informations.auth_token)
    .type("application/json")
    .accept("application/json")
    .send(data)
    .end(function(error, response) {
      onComplete(response);
    });
}*/
//export function changeRezervation(data, onComplete) {
  /*
    data = {
      old_password: 12356c,
      new_password: c123456,
      confirm_new_password: c123456
    }
  */
  /*var auth_informations = getAuthInformations();
  return request
    .post(api_users_url + auth_informations.user_id + '/password/change/')
    .set("Authorization", "TOKEN " + auth_informations.auth_token)
    .type("application/json")
    .accept("application/json")
    .send(data)
    .end(function(error, response) {
      onComplete(response);
    });
}*/
