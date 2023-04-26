import React, { useState } from 'react'
import styled from 'styled-components'

function Input() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    const name_Change = (event) => {
        setName(event.target.value)
    }

    const price_Change = (event) => {
        const inputPrice = event.target.value;
        if (inputPrice === '') {
            setPrice(0);
        } else {
            const newPrice = parseInt(inputPrice.replace(/[^0-9]/g, '')).toLocaleString('en-US');
            setPrice(newPrice);
        }
    }

    const save_Button = () => {
        if (name === '' || price === 0) {
            alert('이름과 가격 모두 입력해주세요.')
        } else {
            alert(`{ name : ${name}, price : ${price.replace(/,/g, '')}}`)
        }
    }

    return (
        <Layout>
            <h1>Input</h1>
            <Input_Area>
                <Input_Label>이름</Input_Label>
                <Input_data value={name} onChange={name_Change}></Input_data>
                <Input_Label>가격</Input_Label>
                <Input_data value={price} onChange={price_Change}></Input_data>
                <Save_Button onClick={save_Button}>저장</Save_Button>
            </Input_Area>
        </Layout>
    )
}

export default Input


const Layout = styled.div`
    padding: 10px;
`

const Input_Area = styled.div`
    display: flex;
    gap:12px;
    align-items: center;
`

const Input_Label = styled.label`
    font-size: 18px;
`

const Input_data = styled.input`
    border-radius: 5px;
    width: 200px;
    height: 30px;
    border-width: thin;
`

const Save_Button = styled.button`
    background: #7FFFD4;
    padding: 10px;
    border: none;
    width: 100px;
    border-radius: 5px;
    font-weight: 600;
    margin-left: 20px;
    cursor: pointer;
    &:hover {
    opacity: 0.6;
  }
`

