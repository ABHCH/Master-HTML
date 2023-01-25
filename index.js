const data = [
  {
    id: 1,
    productImg:
      "https://www.reliancedigital.in/medias/iPhone-11-64GB-Black-491901638-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTEzOTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDExL2gzOC85NDIxODk4OTQwNDQ2LmpwZ3w1YzllY2ZiZDg2NTZjNzgyMzM5NmE5NTkxMjk2Y2E1YWNkNTM5NWU4NGQxM2NiZTczNGI4ZGNkNzNmMTc0ODM4",
    productName: "Apple iPhone 11 64gb black",
    productPrice: "43900",
    productCategory: "iphone",
  },
  {
    id: 2,
    productImg:
      "https://www.reliancedigital.in/medias/Apple-iPhone12-Smartphones-491901528-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjgwN3xpbWFnZS9qcGVnfGltYWdlcy9oM2YvaGQ4Lzk2NzU4Njg4MzE3NzQuanBnfDI5ZmE0NzA5MjhmYzQ1MTU2ZGM5MmY2YzgxM2VjY2FhMjlhZDVlMzRjMDhkODg5NThhZjA1Y2Q0ZTBjY2Y2NzE",
    productName: "Apple iPhone 12 64gb black",
    productPrice: "53900",
    productCategory: "iphone",
  },
  {
    id: 3,
    productImg:
      "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjM5M3xpbWFnZS9qcGVnfGltYWdlcy9oYzcvaDE0Lzk0NDMwODM3ODAxMjYuanBnfGUwMGRjNjBhZDVlM2NlMmUyYmFhMTk1MjNmMDM5NTEzMWUzODRhODE0ZjdmOWM2OGEyODBjYjhjMGNlOWExZWY",
    productName: "Apple MGN^HNA MacBook (Apple M1 chip/8GB/256GB)",
    productPrice: "83900",
    productCategory: "macbook",
  },
  {
    id: 4,
    productImg:
      "https://www.reliancedigital.in/medias/Samsung-Galaxy-S22-Ultra-SmartPhone-492849218-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjI1MXxpbWFnZS9qcGVnfGltYWdlcy9oODQvaGZmLzk3Nzk1MjQ0Njg3NjYuanBnfDI5MWMwYTUzMDYzYTE4NGIxMDU2Y2Q1ZTA2OTcxNzE0MTdiZDcyZjg0NjVmZTBiOGYyZjE0OGM0ZjdlNDg0YjM",
    productName: "Samsung s22 Ultra Notepad",
    productPrice: "63999",
    productCategory: "samsung",
  },
  {
    id: 5,
    productImg:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQRquOMQVk3RHK-tzgBalFMwlYdJc-x3wJe92390ZFTJmM9MnNi59BJHc63ykG4F5KW3qY4dV6OdOcu3xnmBUludU6_0gpHxskd4Hx9eoVcI6KnsoKrzyZGwNo",
    productName: "Ipad mini 64gb black",
    productPrice: "43900",
    productCategory: "iphone",
  },
];

// we want to refactor this code because we have to hardcode the buttons and categoryis

const cardContainer = document.querySelector(".cards-details");
const buttons = document.querySelectorAll(".filter-btns");

window.addEventListener("DOMContentLoaded", () => {
  displayItems(data);
});

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productCategory = e.currentTarget.dataset.id;
      const items = data.filter((x) => {
        if (x.productCategory === productCategory) {
          return x;
        }
      });
  
      if(productCategory === "All"){
          displayItems(data);
      }else{
          displayItems(items)
      }
    });
  });


const displayItems = (items) => {
  return (cardContainer.innerHTML =items
    .map((x) => {
      return `<div id="product-id-${x.id}" class="card">
        <img src=${x.productImg} alt="" class="product-img">
        <div class="product-details">
            <div class="product-name">${x.productName}</div>
            <div class="product-price">INR ${x.productPrice}</div>
        </div>
    </div>`;
    })
    .join(""));
};


const inputBtn = document.querySelector('.input-btn');

inputBtn.addEventListener("click", (e) => {
    let item = e.currentTarget.dataset.id;
    console.log(item);
})