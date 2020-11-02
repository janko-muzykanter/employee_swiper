import React from 'react'
import ReactDOM from 'react-dom'

import {App} from 'App.js'

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(<App />, root) 