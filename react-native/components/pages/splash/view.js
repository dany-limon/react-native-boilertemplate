import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'
import i18n from '../../../assets/i18n'
import { Actions } from 'react-native-router-flux'

export default class extends PureComponent {
  _onPress = () => Actions.Modal({ title: 'title', message: 'message' })

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text onPress={this._onPress}>{i18n.t('save')}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
