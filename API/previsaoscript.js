function cidadeprevisao() {
    const nomecidade = document.getElementById('nomecidade').value.toLowerCase();
    const boxtemp = document.getElementById('boxtemp');
  
    // Fetch the API key from a secure environment or server-side script
    const apiKey = "8a60b2de14f7a17c7a11706b2cfcd87c";
  
    console.log("pipi");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(nomecidade)}&appid=${apiKey}&units=metric&lang=pt_br`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  
        const dadostemp = `<h2>${data.name}</h2>
          <img src="${weatherIcon}" alt="${data.weather[0].description}">
          <p><strong>Data:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
          <p><strong>Hora:</strong> ${new Date().toLocaleTimeString('pt-BR')}</p>
          <div id="${data.temp}">
            <p><strong>Temperatura atual:</strong> ${data.main.temp} °C</p>
            <p><strong>Máxima:</strong> ${data.main.temp_max} °C</p>
            <p><strong>Mínima:</strong> ${data.main.temp_min} °C</p>
          </div>
          <p><strong>Úmidade:</strong> ${data.main.humidity}%</p>
          <p><strong>Descrição do tempo:</strong> ${data.weather[0].description}</p>
          <p><strong>Velocidade do Vento:</strong> ${data.wind.speed} m/s</p>`;
  
        boxtemp.innerHTML = dadostemp; // Update the DOM element with the formatted data
      })
      .catch(error => {
        console.error("Erro:", error.message);
        // Handle errors here, such as displaying an error message to the user
      });
  }