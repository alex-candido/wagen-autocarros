
navigator.geolocation.getCurrentPosition(function(posicao) {
    var url = "http://nominatim.openstreetmap.org/reverse?lat="+posicao.coords.latitude+"&lon="+posicao.coords.longitude+"&format=json&json_callback=preencherDados";

    var script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
});

function preencherDados(dados) {
  const city = document.querySelector('.city a')
  city.innerText = dados.address.city;
  city.style.color = '#D90008'
}
