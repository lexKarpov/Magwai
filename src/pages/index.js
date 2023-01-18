import CreateCard from "../components/Card";
import styles from './index.css'
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

const gallery = document.querySelector('.cards')

initialCards.forEach(el => {
  gallery.append(CreateCard(el))
})
