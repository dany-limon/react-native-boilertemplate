import React from 'react'
import { Router, Stack, Lightbox, Scene } from 'react-native-router-flux'
import _ from 'lodash'
import * as pages from '../../pages/'

const stateHandler = (prevState, newState, action) => {
  if (_.get(action, 'type') === 'Navigation/PUSH') {
    //const page = _.get(action, 'routeName')
  }
}

export default () => (
  <Router onStateChange={stateHandler}>
    <Lightbox key="lightbox">
      <Stack key="root">
        <Scene key="Splash" initial component={pages.Splash} hideNavBar />
      </Stack>
      <Scene key="Modal" component={pages.Modal} />
    </Lightbox>
  </Router>
)
