export default function Slider(data) {
  const template = document.querySelector('.slider-template').content.cloneNode(true)
  let element = template.querySelector('.slider__item')
  let title = template.querySelector('.slider__title')
  let description = template.querySelector('.slider__description')
  let image = template.querySelector('.slider__image')
  let sliderTumblerList = Array.from(template.querySelector('.slider__tumbler'))
  sliderTumblerList.forEach(element => {
    if (element.textContent === data.activeSlide) {
      element.addEventListener('click', (e) => addListener(e, true))
    } else (
      element.addEventListener('click', (e) => ddListener(e, false))
    )
  });

  function addListener(e) {
    console.log(e.target)
  }

  let button = template.getElementById(`${data.id}`)
  console.log(button)
  button.addEventListener('click', addListener)
  image.src = data.src
  image.alt = data.alt
  title.textContent = data.title
  description.textContent = data.description


  return element
}



