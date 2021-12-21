import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Line from '../components/menuComponents/Line'

//setup to mount/unmount a test container before each test
let container
beforeEach(() => {
    //setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    //cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

//tests of content 
describe('Line element content', () => {
    it('displays a title', () => {
        act(() => {
            render(<Line title='My title' id='xulpf' />, container)
        })
        expect(document.getElementById('xulpf').innerHTML).toMatch('My title')
    })
    it('displays the link provided', () => {
        act(() => {
            render(<Line title='My title' href='somelink.html' id='abc' />, container)
        })
        expect(document.getElementById('abc').innerHTML).toMatch('<a href=\"somelink.html">')
    })
})

