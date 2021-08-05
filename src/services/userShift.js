import getConfig from "next/config";

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const get_Shifts= async (filter) => {
  try {
    const url = publicRuntimeConfig.SERVER_URI + "api/attendance/shifts";

    let res = [];

    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filter),
    })
      .then((response) => response.json())
      .then((data) => (res = data));

    return res;
  } catch (e) {
    console.error(e);
  }
};

const get_Shift = async (id) => {
  try {
    const url =
      publicRuntimeConfig.SERVER_URI + `api/attendance/shift/${id}`;

    let res = {};

    await fetch(url)
      .then((response) => response.json())
      .then((data) => (res = data));

    return res;
  } catch (e) {
    console.error(e);
  }
};

const get_Shifit_Users = async (id) => {
  try {
    const url =
      publicRuntimeConfig.SERVER_URI +
      `api/attendance/shift/${id}/users`;

    let res = [];

    await fetch(url)
      .then((response) => response.json())
      .then((data) => (res = data));

    return res;
  } catch (e) {
    console.error(e);
  }
};

const get_Shifit_Groups = async (id) => {
  try {
    const url =
      publicRuntimeConfig.SERVER_URI +
      `api/attendance/shift/${id}/groups`;

    let res = [];

    await fetch(url)
      .then((response) => response.json())
      .then((data) => (res = data));

    return res;
  } catch (e) {
    console.error(e);
  }
};



export default {
  get_Shifts,get_Shift
};
