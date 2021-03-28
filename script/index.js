// function main(){

// }

// module.exports = {main}
let resultsDiv = document.querySelector("#resultDiv");
// let modalBody = document.querySelector('.modal-body')

function createChar(data) {
  for (let i = 0; i < data.results.length; i++) {
    let itemDiv = document.createElement("div");
    itemDiv.classList = "floated_img";

    let itemImg = document.createElement("img");
    itemImg.classList = "img-2";
    itemImg.src = `./images/img${i}.jpeg`;

    let itemPara = document.createElement("p");
    itemPara.classList = "description";
    itemPara.innerText = data.results[i].name;

    itemDiv.appendChild(itemImg);
    itemDiv.appendChild(itemPara);

    resultsDiv.appendChild(itemDiv);

    itemDiv.setAttribute("data-bs-toggle", "modal");
    itemDiv.setAttribute("data-bs-target", "#exampleModal");

    let imageSrc = `../images/img${i}.jpeg`;
    let name = data.results[i].name;
    let gender = data.results[i].gender;
    let height = data.results[i].height;

    itemDiv.addEventListener("click", () => {
      displayDetails(imageSrc, name, gender, height);
    });
  }
}

function displayDetails(imageSrc, name, gender, height) {
  let modalBody = document.querySelector(".modal-body");
  modalBody.innerText = "";
  let modalImgDiv = document.createElement("div");
  modalImgDiv.classList = "modalImgDiv";

  let modalimg = document.createElement("img");
  modalimg.classList = "modalimg";
  modalimg.src = imageSrc;
  modalImgDiv.appendChild(modalimg);

  let modalNamePara = document.createElement("p");
  modalNamePara.classList = "modalCharName";
  modalNamePara.innerText = name;

  let modalHeightPara = document.createElement("p");
  modalHeightPara.classList = "modalHeight";
  modalHeightPara.innerText = height;

  let modalGenderPara = document.createElement("p");
  modalGenderPara.classList = "modalGender";
  modalGenderPara.innerText = gender;

  modalBody.appendChild(modalImgDiv);
  modalBody.appendChild(modalNamePara);
  modalBody.appendChild(modalHeightPara);
  modalBody.appendChild(modalGenderPara);
}

fetch("http://swapi.dev/api/people")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    createChar(data);
  });
