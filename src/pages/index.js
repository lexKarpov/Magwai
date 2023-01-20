import styles from './index.css';
import CreateCard from "../components/Card";
import Slider from "../components/Slider";
import planet from '.././images/planet.jpg';
import money from '.././images/money.jpg';
import car from '.././images/car.jpg';

const initialCards = [
  {
    title: 'bridge',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019'
  },
  {
    title: 'Water',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019'
  },
  {
    title: 'bridge',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019'
  },
  {
    title: 'bridge',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019'
  },
  {
    title: 'bridge',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019'
  },
  {
    title: 'forest',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019'
  },
  {
    title: '',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019'
  },
  {
    title: 'nature',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019'
  },
  {
    title: 'nature',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019'
  },
  {
    title: 'nature',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019'
  },
]

const sliderList = [
  {
    id: 0,
    src: planet,
    alt: 'планета',
    title: 'Полет Илона Маска и DOGIE COIN',
    description: 'В прошлый четверг все офигели от полета DOGIE COIN на марс.',
    activeSlide: 'dogie coin',
  },
  {
    id: 1,
    src: car,
    alt: 'машина',
    title: 'DOGIE COIN УПАЛ',
    description: 'Все в шоке, я потерял все деньги',
    activeSlide: 'падение',
  },
  {
    id: 2,
    src: money,
    alt: 'деньги',
    title: 'Эпическое возвращения на хаи',
    description: 'Все в шоке, я снова богат',
    activeSlide: 'возвращение',
  }
]

const slider = document.querySelector('.slider')
const gallery = document.querySelector('.cards')


sliderList.forEach((el, i) => Slider(sliderList[i]))

initialCards.forEach(el => {
  gallery.append(CreateCard(el))
})

slider.append(Slider(sliderList[1]))

function activeTumbler(slide) {
  switch (slide.id) {
    case 0:
      console.log('slide1')
      break;
    case 1:
      console.log('slide2')
      break;
    case 2:
      console.log('slide3')
      break;
    default:
      console.log('slide1')
      break;
  }

}

activeTumbler(0)
