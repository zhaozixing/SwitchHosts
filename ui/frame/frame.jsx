/**
 * @author oldj
 * @blog http://oldj.net
 */

'use strict'

import React from 'react'
import Agent from '../Agent'
import { Modal, Button } from 'antd'
import './frame.less'

export default class MyFrame extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    Agent.on('esc', () => {
      this.onCancel()
    })
  }

  onOK () {
    this.props.onOK()
  }

  onCancel () {
    this.props.onCancel()
  }

  renderFootButtons () {
    let html = []
    let {lang} = this.props

    html.push(
      <div
        className="button btn-cancel"
        key="btn-cancel"
        onClick={this.onCancel.bind(this)}
      >
        {this.props.cancel_title || lang.cancel}
      </div>
    )

    html.push(
      <div
        className="button btn-ok btn-default"
        key="btn-ok"
        onClick={this.onOK.bind(this)}
      >
        {this.props.ok_title || lang.ok}
      </div>
    )

    return html
  }

  render () {
    if (!this.props.show) {
      return null
    }
    let {show} = this.props

    return (
      <Modal
        visible={show}
        title="Title"
        onOk={this.onOK.bind(this)}
        onCancel={this.onCancel.bind(this)}
        footer={[
          <Button key="back" size="large" onClick={this.onCancel.bind(this)}>Return</Button>,
          <Button key="submit" type="primary" size="large" loading={false} onClick={this.onOK.bind(this)}>
            Submit
          </Button>
        ]}
      >
        <div className="prompt">
          <div className="head">{this.props.head}</div>
          <div className="body">{this.props.body}</div>
          <div className="foot">{this.renderFootButtons()}</div>
        </div>
      </Modal>
    )
  }
}
