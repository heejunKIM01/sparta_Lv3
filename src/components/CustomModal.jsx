import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';

function CustomModal() {

    const [modalOpen1, setModalOpen1] = useState(false)
    const [modalOpen2, setModalOpen2] = useState(false)

    return (
        <Layout>
            <h1>Modal</h1>
            <Button_area>
                <Open_modal_green onClick={() => { setModalOpen1(true) }}>Open Modal</Open_modal_green>

                <Modal isOpen={modalOpen1} style={{
                    content: {
                        width: '30%', height: '30%', display: 'flex',
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '15px'
                    }
                }}>
                    <div>
                        <Desc>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</Desc>
                        <Modal_Button_Area>
                            <Normal_Button onClick={() => { setModalOpen1(false) }} name={'close'}>닫기</Normal_Button>
                            <Normal_Button name={'open'}>확인</Normal_Button>
                        </Modal_Button_Area>
                    </div>
                </Modal>

                <Open_modal_red onClick={() => { setModalOpen2(true) }}>Open Modal</Open_modal_red>

                <Modal isOpen={modalOpen2} onRequestClose={() => setModalOpen2(false)} style={{
                    content: {
                        width: '17%', height: '17%', display: 'flex',
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '15px'
                    }
                }}>
                        <div>닫기 버튼 1개가 있고,<br/>
                            외부 영역을 누르면 모달이 닫혀요.</div>
                        <Modal_Close_Button onClick={() => { setModalOpen2(false) }}>X</Modal_Close_Button>
                    
                </Modal>

            </Button_area>
        </Layout>
    )
}

export default CustomModal

const Layout = styled.div`
    padding: 10px;
`

const Button_area = styled.div`
    
`

const Open_modal_green = styled.button`
    padding: 15px;
    background-color: #7FFFD4;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    width: 200px;
    cursor: pointer;
    &:hover {
    opacity: 0.6;
  }
`

const Open_modal_red = styled.button`
    margin-left: 10px;
    padding: 15px;
    border-radius: 5px;
    color: #FF6347;
    background: transparent;
    border: 2.5px solid #FF6347;
    width: 200px;
    cursor: pointer;
    &:hover {
    opacity: 0.6;
  }
`

const Normal_Button = styled.button`
    width: 100px;
    height: 50px;
    border: none;
    background: ${props => props.name === 'close' ? '#FFA07A' : '#7FFFD4'};
    color : ${props => props.name === 'close' ? '#FF4500' : 'black'};
    border-radius: 10px;
    cursor: pointer;
    &:hover {
    opacity: 0.6;
  } 
`

const Modal_Button_Area = styled.div`
    position: absolute;
    bottom: 12px;
    right: 12px;
    display: flex;
    gap: 5px;
`

const Desc = styled.div`

`
const Modal_Close_Button = styled.button`
    position: absolute;
    border-radius: 100%;
    border-width: thin;
    border: 1px solid rgb(221, 221, 221);
    width: 40px;
    height: 40px;
    cursor: pointer;
    &:hover {
    opacity: 0.6;
    };
    top:12px;
    right: 12px;
`