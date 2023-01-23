export default function Slider(data, changeSlide) {
  const template = document.querySelector('.slider-template').content.cloneNode(true)
  let element = template.querySelector('.slider__item')
  let title = template.querySelector('.slider__title')
  let description = template.querySelector('.slider__description')
  let image = template.querySelector('.slider__image')


  element.style.background = data.src
  image.src = data.src
  image.alt = data.alt
  title.textContent = data.title
  description.textContent = data.description


  return element
}



