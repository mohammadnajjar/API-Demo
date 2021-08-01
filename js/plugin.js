$(function () {

getApiRes();
getApiAllCharecter();
getApiOneCharecter();

// fetch('https://breakingbadapi.com/api/', {
//             mode: 'no-cors',
//             headers: {
//                  "Content-Type": "application/json"
//             }
//           }) 
//         .then(res => res.json())
//         .then(res => {
//           console.log(res);
//         });
//   fetch("https://breakingbadapi.com/api/")
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
});

async function getApiRes() {
  const response = await fetch ("https://breakingbadapi.com/api");
  const data = await response.json();
  console.log(data);
}

async function getApiAllCharecter() {
  const response = await fetch ("https://breakingbadapi.com/api/characters");
  const data = await response.json();
  console.log(data);
  fillCharsData(data);
}

function fillCharsData(data) {
  var $html = `<div class="row my-5">
        <div class=" p-3">
          `;
  $.each(data, function(keyi, chari) {
    // console.log(chari.status);
       $html +=`<div class="d-inline-block col-md-5">
                  <div class="card border-primary char-div p-2 my-1">
                    <div class="card-header bg-info text-light">
                      <h3 class="mr-auto d-inline-block"><i>`+(keyi+1) +`</i> `+chari.name+`.</h3>
                    </div>
                    <div class="card-body text-center">
                      <h6 class="char-birthdate my-1 ">`+chari.birthday+`</h6>
                      <h5 class="char-name text-info">`+chari.status+`</h5>
                    </div>
                  </div>
                </div> `;
  });
  
  $html +="</div> </div>";
  $('.all-char-div').replaceWith($html);
}

async function getApiOneCharecter() {
  const response = await fetch ("https://breakingbadapi.com/api/characters/1");
  const data = await response.json();
  console.log(data[0]);
  fillCharData(data[0]);
}

function fillCharData(data){
  $('.char-div .char-name').text(data.name);
  $('.char-div .char-name').attr("src",data.img);
  $('.char-div .char-birthdate').text(data.birthday);
}