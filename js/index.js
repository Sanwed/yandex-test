const shelf = document.querySelector('.shelf__grid');
shelf.addEventListener('dragstart', (e) => {
  if (e.target.closest('.product')) {
    const target = e.target.closest('.product');
    target.classList.add('dragging');
  }
});

shelf.addEventListener('dragend', (e) => {
  if (e.target.closest('.product')) {
    const target = e.target.closest('.product');
    target.classList.remove('dragging');
  }
});

const cart = document.querySelector('.cart');
cart.addEventListener('dragover', (e) => {
  e.preventDefault();
});
cart.addEventListener('drop', (e) => {
  e.preventDefault();
  const grid = cart.querySelector('.cart__grid');
  
  if (grid.children.length < 3) {
    const product = document.querySelector('.dragging');
    grid.appendChild(product);
    product.classList.remove('dragging');
  }
});

shelf.addEventListener('touchstart', (e) => {
  if (e.target.closest('.product')) {
    const target = e.target.closest('.product');
    target.classList.add('dragging');
  }
});

shelf.addEventListener('touchmove', (e) => {
  if (e.target.closest('.product')) {
    e.preventDefault();
  }
});

shelf.addEventListener('touchend', (e) => {
  if (e.target.closest('.product')) {
    const grid = cart.querySelector('.cart__grid');
    
    if (grid.children.length < 3) {
      const product = document.querySelector('.dragging');
      grid.appendChild(product);
      product.classList.remove('dragging');
      if(grid.children.length === 3) {
        showBtn();
      }
    }
  }
});

const showBtn = () => {
  const btn = document.querySelector('.button');
  btn.classList.add('active');
};
