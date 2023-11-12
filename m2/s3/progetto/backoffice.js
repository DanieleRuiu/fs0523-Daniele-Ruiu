window.onload = () => {
  const name = document.getElementById("name");

  const description = document.getElementById("description");

  const urlProduct = document.getElementById("url");

  const price = document.getElementById("price");

  const brand = document.getElementById("brand");

  const newProductBtn = document.getElementById("newProductBtn");

  const modBtn = document.getElementById("modBtn");

  const deleteBtn = document.getElementById("deleteBtn");


  const params = new URLSearchParams(window.location.search).get("id");



  const url = "https://striveschool-api.herokuapp.com/api/product/";


  if (params) {
    fillForm(url, params);
    modBtn.classList.remove("d-none");
    deleteBtn.classList.remove("d-none");
    newProductBtn.classList.add("d-none");

  } else {
    newProductBtn.classList.remove("d-none");
    modBtn.classList.add("d-none");
    deleteBtn.classList.add("d-none");
  }

  newProductBtn.addEventListener("click", event => {

    postFetch(
      url,
      {
        name: name.value,
        description: description.value,
        imageUrl: urlProduct.value,
        price: parseFloat(price.value),
        brand: brand.value
      },
      event
    );
  });
  modBtn.addEventListener("click", event => {
    areYouSure();
    putFetch(
      url,
      params,
      {
        name: name.value,
        description: description.value,
        imageUrl: urlProduct.value,
        price: parseFloat(price.value),
        brand: brand.value
      },
      event
    );
  });

  deleteBtn.addEventListener("click", event => {
    areYouSure();
    deleteFetch(url, params, event);
  });
};

const areYouSure = function () {
  let result = confirm("Are you sure?");

  if (result) {
    console.log("L'utente ha premuto OK.");
  } else {
    console.log(
      "L'utente ha premuto Annulla o ha chiuso la finestra di dialogo."
    );
  }
};
const fillForm = function (url, params, event) {
  fetch(url + params, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWFmYjI1NGU4ODAwMTgzZjE4NzUiLCJpYXQiOjE2OTk2MDUyNDMsImV4cCI6MTcwMDgxNDg0M30.h1hbdEiCDdtbq3pWxdums0TOKskGalhH_Q3DC2dgorI",
      "Content-Type": "application/json",
      "Accept": "application/json; charset=utf-8"

    }
  })

    .then(resp => {
      const data = resp.json()
      console.log("🚀 ~ file: backoffice.html:206 ~ fillForm ~ data:", data)
      return data

    })
    .then(resp => {
      console.log(resp);

      const { name, description, imageUrl, price, brand } = resp;

      document.getElementById("name").value = name;
      document.getElementById("description").value = description;
      document.getElementById("url").value = imageUrl;
      document.getElementById("price").value = price;
      document.getElementById("brand").value = brand;
    })
    .catch(resp => {

      if (resp.status === 400) {
        throw new Error("Richiesta non valida");
      }
      if (resp.status === 401) {
        throw new Error("Non autorizzato");
      }
      if (resp.status === 403) {
        throw new Error("Vietato");
      }
      if (resp.status === 404) {
        throw new Error("Non trovato");
      }
      console.log(resp);
      throw new Error("Errore generico durante il recupero");


    })
};

const putFetch = function (url, params, newProduct, event) {
  event.preventDefault();
  console.log("PUT fetch");
  fetch(url + params, {
    method: "PUT",
    body: JSON.stringify(newProduct),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWFmYjI1NGU4ODAwMTgzZjE4NzUiLCJpYXQiOjE2OTk2MDUyNDMsImV4cCI6MTcwMDgxNDg0M30.h1hbdEiCDdtbq3pWxdums0TOKskGalhH_Q3DC2dgorI",
      "Content-Type": "application/json"
    }
  })

    .then(createdObj => {
      console.log(createdObj);
      document.getElementById("name").value = "";
      document.getElementById("description").value = "";
      document.getElementById("url").value = "";
      document.getElementById("price").value = "";
      document.getElementById("brand").value = "";
      const allertBlue = document.getElementById("allert-yellow");
      allertBlue.classList.remove("d-none");
      setTimeout(function () {
        allertBlue.classList.add("d-none");
      }, 2000);
    })
    .then(resp => {

      if (resp.status === 400) {
        throw new Error("Bad Request");
      }
      if (resp.status === 401) {
        throw new Error("Unauthorized");
      }
      if (resp.status === 403) {
        throw new Error("Forbidden");
      }
      if (resp.status === 404) {
        throw new Error("Not found");
      }

      throw new Error("Generic Fetching error");

      console.log(resp);

    })
};

const postFetch = function (url, newProduct, event) {
  event.preventDefault();
  console.log("POST fetch");
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWFmYjI1NGU4ODAwMTgzZjE4NzUiLCJpYXQiOjE2OTk2MDUyNDMsImV4cCI6MTcwMDgxNDg0M30.h1hbdEiCDdtbq3pWxdums0TOKskGalhH_Q3DC2dgorI",
      "Content-Type": "application/json"
    }
  })

    .then(resp => {
      console.log(resp);
      console.log(resp);
      console.log("hai appena creato un nuovo prodotto");
      document.getElementById("name").value = "";
      document.getElementById("description").value = "";
      document.getElementById("url").value = "";
      document.getElementById("price").value = "";
      document.getElementById("brand").value = "";

      return resp.json();
    })
    .then(createdObj => {
      console.log(createdObj);
      const allertYellow = document.getElementById("allert-blue");
      allertYellow.classList.remove("d-none");
      setTimeout(function () {
        allertYellow.classList.add("d-none");
      }, 2000);
    })
    .catch(resp => {

      if (resp.status === 400) {
        throw new Error("Bad Request");
      }
      if (resp.status === 401) {
        throw new Error("Unauthorized");
      }
      if (resp.status === 403) {
        throw new Error("Forbidden");
      }
      if (resp.status === 404) {
        throw new Error("Not found");
      }

      throw new Error("Generic Fetching error");
    })
};

const deleteFetch = function (url, _id, event) {
  console.log("PUT fetch");
  fetch(url + _id, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWFmYjI1NGU4ODAwMTgzZjE4NzUiLCJpYXQiOjE2OTk2MDUyNDMsImV4cCI6MTcwMDgxNDg0M30.h1hbdEiCDdtbq3pWxdums0TOKskGalhH_Q3DC2dgorI",
      "Content-Type": "application/json"
    }
  })

    .then(createdObj => {
      console.log(createdObj);
      document.getElementById("name").value = "";
      document.getElementById("description").value = "";
      document.getElementById("url").value = "";
      document.getElementById("price").value = "";
      document.getElementById("brand").value = "";
      const allertRed = document.getElementById("red-allert");
      allertRed.classList.remove("d-none");
      setTimeout(function () {
        allertRed.classList.add("d-none");
      }, 2000);
    })
    .catch(resp => {
      if (!resp.ok) {
        if (resp.status === 400) {
          throw new Error("Bad Request");
        }
        if (resp.status === 401) {
          throw new Error("Unauthorized");
        }
        if (resp.status === 403) {
          throw new Error("Forbidden");
        }
        if (resp.status === 404) {
          throw new Error("Not found");
        }

        throw new Error("Generic Fetching error");
      }
      console.log(resp);

    })
};
