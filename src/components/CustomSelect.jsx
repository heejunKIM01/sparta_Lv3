import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Select from "react-select"

function CustomSelect() {

    const list = [
        { value: '리액트', label: '리액트' },
        { value: '자바', label: '자바' },
        { value: '스프링', label: '스프링' },
        { value: '리액트 네이티브', label: '리액트 네이티브' },
    ]

    const customStyles = {
        control: (provided) => ({
            ...provided,
            width: '300px', // control 요소와 같은 너비로 설정
        }),
        menu: (provided) => ({
            ...provided,
            width: '300px', // control 요소와 같은 너비로 설정
        }),
    };

    const [select, setSelect] = useState(list[0])

    const selectChange = (event) => {
        setSelect(event)
    }
    console.log(select)

    return (
        <Layout>
            <Box_layout>
                <h1>Select</h1>

                <Select
                    options={list}
                    styles={customStyles}
                    onChange={selectChange}
                    value={select}
                    menuPortalTarget={document.body} 
                />
                
            </Box_layout>
         
        </Layout>
    )
}

export default CustomSelect

const Layout = styled.div`
    padding: 10px;
`

const Box_layout = styled.div`
    border: 2px solid grey;
    padding: 20px;
    padding-bottom: 50px;
    overflow: hidden;
`
