import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons"

function Button() {

    const Primary_button_alert = () => {
        alert('버튼을 만들어보세요')
    }

    const Negative_button_prompt = () => {
        const result = prompt('어렵나요?')
        console.log(result)
    }

    return (
        <Layout>
            <h1>Button</h1>
            <Primary_Area>
                <Large_button onClick={Primary_button_alert} name={'large primary'}>Large Primary Button
                    <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px" }} />
                </Large_button>
                <Normal_Button name={'medium primary'} size={'medium'}>Medium</Normal_Button>
                <Normal_Button name={'small primary'} size={'small'}>Small</Normal_Button>
            </Primary_Area>

            <Negative_Area>
                <Large_button onClick={Negative_button_prompt} name={'large negative'}>Large Negative Button
                    <FontAwesomeIcon icon={faBell} style={{ marginLeft: "10px" }} />
                </Large_button>
                <Normal_Button name={'medium negative'} size={'medium'}>Medium</Normal_Button>
                <Normal_Button name={'small negative'} size={'small'}>Small</Normal_Button>
            </Negative_Area>
        </Layout>
    )
}

export default Button

const Layout = styled.div`
    padding : 10px;
`

const Primary_Area = styled.div`
    display: flex;
    gap:10px;
`

const Large_button = styled.button`
    width: 200px;
    height: 50px;
    background-color: transparent;
    border: ${props => props.name === 'large primary' ? '3px solid #7FFFD4' : '3px solid #F08080'};
    border-radius: 10px;
    font-weight: 900;
    cursor: pointer;
    &:hover {
    opacity: 0.7;
    }
`

const Normal_Button = styled.button`
    width: ${props => props.size === 'medium' ? '100px' : '80px'}; 
    height: ${props => props.size === 'medium' ? '50px' : '45px'}; 
    border: none;
    background : ${props => props.name === 'medium primary' || props.name === 'small primary' ? '#7FFFD4' : '#F08080'};
    color : ${props => props.name === 'medium primary' || props.name === 'small primary' ? 'black' : '#DC143C'};
    border-radius: 10px;
    cursor: pointer;
    &:hover {
    opacity: 0.6;
    } 
`

const Negative_Area = styled.div`
    display: flex;
    gap:10px;
    margin-top: 10px;
`
