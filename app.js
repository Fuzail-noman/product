function updateImage(thumbnail) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = thumbnail.src;
  }
  
  document.querySelector('.buy-now').addEventListener('click', function () {
    const quantity = document.getElementById('quantity').value;
    alert(`You have added ${quantity} item(s) to your cart!`);
  });
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      alert('Item added to cart!');
    });
  });
  document.querySelector('.subscribe-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Subscription successful!');
  });
        