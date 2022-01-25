import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Line from '../components/menuComponents/Line'
import BtnPlus from '../components/buttons/BtnPlus'

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
            render(<Line title='My title' id='e' />, container)
        })
        expect(document.getElementById('e').innerHTML).toMatch('My title')
    })
    it('displays the link provided', () => {
        act(() => {
            render(<Line title='ABC' href='somelink.html' id='abc' />, container)
        })
        expect(document.getElementById('abc').innerHTML).toMatch('<a href=\"somelink.html">')
    })
    it('if closed, it does not display a child line', () => {
        act(() => {
            render(<Line title='A' id='a'><BtnPlus isOpen={ false } /><Line title='B' href='' id='bcdef' /></Line>, container)
        })
        expect(document.getElementById('a').innerHTML).not.toMatch('id=\'bcdef')
    })
    it('if opened, it does display the child line provided', () => {
        act(() => {
            render(<Line title='A' id='a' ><BtnPlus id='btn' /><Line title='B' href='' id='dce' /></Line>, container)          
        })
        //btn to click
        const button = document.getElementById('btn')
        //click
        act(() => {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })
        expect(document.getElementById('b').innerHTML).toMatch('dce')
    })
    it('when allwaysOpen prop is true, children lines are displayed', () => {
        act(() => {
            render(
                <Line title='A' id='a' allwaysOpen>
                    <Line title='B' id='b'/>
                    <Line title='C' id='c'/> 
                </Line>,
                container
            )
        })
        expect(document.getElementById('b')).toBeDefined()
    })
    it('displays all the childrens lines', () => {
        act(() => {
            render(
                <Line title='A' id='a' allwaysOpen>
                    <Line title='B' id='b'/>
                    <Line title='C' id='c'/> 
                </Line>,
                container
            )
        })
        expect(document.getElementById('b')).toBeDefined()
        expect(document.getElementById('c')).toBeDefined()
    })
})

