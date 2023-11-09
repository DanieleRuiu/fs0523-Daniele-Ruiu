const apiKey = "HFAjnM3hj1Cf73BjXbitPAwBJ2uJLU21fIGgUpaZLDGzvq4Hn30m02L0";


document.getElementById("loadImagesButton").addEventListener("click", () => {
    const query = document.getElementById("searchField").value || "nature";
    const url = `https://api.pexels.com/v1/search?query=${query}`;
  
    fetch(url, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        
        handleImageData(data);
      })
      .catch((error) => console.error("Error loading images:", error));
  });

  
  document.getElementById("loadSecondaryImagesButton").addEventListener("click", () => {
    const secondaryQuery = document.getElementById("secondarySearchField").value || "city";
    const url = `https://api.pexels.com/v1/search?query=${secondaryQuery}`;
  
    fetch(url, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        
        handleSecondaryImageData(data);
      })
      .catch((error) => console.error("Error loading secondary images:", error));
  });

  
  document.getElementById("hideButton").addEventListener("click", () => {
    const card = document.getElementById("imageCard");
    card.style.display = "none";
  });

  
  function handleImageData(data) {
    
  
   
    const imageId = data.photos[0].id; 
    document.getElementById("imageTime").innerText = imageId;
  }

  



