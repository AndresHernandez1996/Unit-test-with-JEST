import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'
import { wrap } from 'module'

let wrapped

beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

afterEach(() => {
  wrapped.unmount()
})

it('Has a text area and a button', () => {
  wrapped = mount(<CommentBox />)

  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    })
    wrapped.update()
  })
  it('Has textarea that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  })

  it('When form is submitted, text area gets emptied', () => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    })
    wrapped.update()
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
