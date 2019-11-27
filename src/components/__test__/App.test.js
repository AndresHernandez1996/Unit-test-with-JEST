import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'

let wrapped

beforeEach(() => {
  wrapped = shallow(<App />)
})

it('It shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('By my own', () => {
  expect(wrapped.find(CommentList).length)
})
