const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log(entry) // entry is 'IntersectionObserverEntry'
    })
  }, {
    root: document.getElementById('my-viewport')
  });

Array.from(document.querySelectorAll('div')).forEach(box => {
    console.log(box);
    io.observe(box);
});