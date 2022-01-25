import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import BtnPlusToMinus from '../components/buttons/BtnPlusToMinus'

let container
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('button execute a function on click and modify his style class', () => {
    it('execute a function on click', () => {
        //function which is executed
        let onClick = jest.fn();
        //BtnPlus rendering
        act(() => {
            render(<BtnPlusToMinus onClick={ onClick } isOpen={false} id={'1'} />, container);
        });
        //
        const button=document.getElementById('1');
        //Trigger a click on BtnPlus
        act(() => {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        })
        //result
        expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('modify the css class of the button clicked', async () => {
        var isOpen = false
        //render the component
        render(<BtnPlusToMinus onClick={ () => { isOpen=!isOpen } } isOpen={ isOpen } id={'1'}/>, container)
        //get the css classes of the button to be clicked
        const button = document.getElementsByClassName('btnPlusToMinus')[0]
        var initialClass = button.className
        //click
        const clickZone = document.getElementById('1')
        clickZone.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        //rerender
        render(<BtnPlusToMinus onClick={ () => { isOpen=!isOpen } } isOpen={ isOpen } id={'1'}/>, container)
        expect(button.className).not.toBe(initialClass)
        })
})