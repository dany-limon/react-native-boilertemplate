import React, { PureComponent } from 'react'
import _ from 'lodash'
import { View, Text, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modalbox'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

export default class extends PureComponent {
  /* props actions example
  actions = [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]
  */
  static defaultProps = {
    title: '',
    message: '',
    acept: 'Ok',
    actions: null
  }

  state = {
    isOpen: false,
    callbak: null
  }

  _close = () => this.refs.modal.close()

  _onClose = () => {
    const { callbak } = this.state
    Actions.pop()
    callbak && setTimeout(callbak, 500)
  }

  _handleAction = callback => {
    this.setState({ callbak: callback }, () => {
      this.refs.modal.close()
    })
  }

  _renderActions() {
    const { actions } = this.props
    return (
      <View style={styles.actions}>
        {_.map(actions, (item, index) => (
          <Action key={`Action${index}`} onPress={() => this._handleAction(item.onPress)} label={item.text} actionStyle={item.style} />
        ))}
      </View>
    )
  }

  _renderDefaultAction() {
    const { acept } = this.props
    return (
      <View style={styles.actions}>
        <Action onPress={this._close} label={acept} />
      </View>
    )
  }

  render() {
    const { title, message, actions } = this.props
    return (
      <Modal style={styles.container} isOpen onClosed={this._onClose} ref="modal">
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          {actions ? this._renderActions() : this._renderDefaultAction()}
        </View>
      </Modal>
    )
  }
}

const Action = ({ onPress, label, actionStyle }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[actionStyle === 'cancel' ? styles.cancel : styles.acept]}>{label}</Text>
  </TouchableOpacity>
)
