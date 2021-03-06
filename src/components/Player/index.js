import React from 'react'
import Slider from 'rc-slider'

import { Container, Current, Volume } from './styles'

import VolumeIcon from '../../assets/images/volume.svg'

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
        alt="Cover"
      />

      <div>
        <span>Times Like These</span>
        <small>Foo Fighters</small>
      </div>
    </Current>

    <Volume>
      <img src={VolumeIcon} alt="volume" />
      <Slider
        railsStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
)

export default Player
