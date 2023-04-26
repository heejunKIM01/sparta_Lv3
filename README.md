# 항해 Lv3 과제 



## 1. 구현한 기능 

### Modal

- 모달 2개를 구현합니다.
    - `취소`, `확인`이 있고, overlay를 클릭했을 때 모달이 닫히지 않는 형태
    - `닫기` 버튼만 있고, overlay를 클릭했을 때 모달이 닫히는 형태
    - 모달을 `on` 시키는 버튼의 형태는 각각 달라야 합니다. (위에서 만든 버튼을 재사용하는 것도 좋아요.)

### Button

- 총 6개 형태의 버튼을 구현합니다. (예시 페이지에서 확인)
    - `styled-components` 를 이용하여 구현하며, props를 적절하게 잘 활용하여 구현하세요.
    - 버튼 label에 선택적으로 아이콘을 넣을 수 있도록 구현하세요.

### Input

- 총 2개의 input을 구현합니다.
    - 일반형식의 input
    - 숫자를 넣었을 때, 3자리 수마다 `콤마 ,`가 찍히는 input
    - form을 구현하고 각 input에 값을 입력하고 `저장` 버튼을 눌렀을 때 `{name: '아무 텍스트', price: "콤마가 없는 금액"}` 을 `alert`에 표시해보세요.
- Select
- select를 구현합니다.
    - select를 클릭했을 때, option 들이 나오고 해당 option을 클릭하면 select의 값이 변경됩니다.
    - select를 클릭했을 때 부모 요소에 의해서 가려지지 않도록 구현합니다. 부모 요소에 `overflow: hidden`을 적용하면 자식 컴포넌트가 부모 컴포넌트를 넘어갔을 때 가려지게 됩니다. 부모 컴포넌트에 `hidden` 속성이 있다고 하더라도 select는 가려지지 않아야 합니다.



## 2. 사용 라이브러리

1. styled-components
2. react-select
3. react-modal
4. FontAwesomeIcon



## 3. 컴포넌트 별 설명 

### 1) Button.jsx

```
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
```

Large Primary Button 과 Large Negative Button 을 하나의 스타일 컴포넌트를 사용해서 각각 스타일을 적용시켜줬다. 


```
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
```

Large_button 컴포넌트에 name 이라는 props를 내려줘서 large primary 라면 border에 #7FFFD4 색상을, large negative 라면 #F08080 색상을 적용시키게 했다. 

그리고 medium과 small 버튼은 Normal_Button 컴포넌트 하나로 재활용을 했는데,

```
                <Normal_Button name={'medium primary'} size={'medium'}>Medium</Normal_Button>
                <Normal_Button name={'small primary'} size={'small'}>Small</Normal_Button>
```

이와 같이 size에 medium과 small을 할당한 후 

```
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
```

Normal_Button 컴포넌트로 props를 내려보내줘서 사이즈를 비교한 후 해당 값에 따라 width와 height에 적용시키게 했다. 


### 2) Input.jsx

```
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
```

정규식과 toLocalString을 이용해 3자리 수마다 콤마를 붙인 값을 나타내게 했다. 

그 후 저장 버튼을 누르면 save_Button 함수가 작동하는데, 만약 name 혹은 price 값이 빈 값이라면 '이름과 가격 모두 입력해주세요' 라는 alert 창이 뜨게 했고 
두 값 모두 값이 존재한다면 입력한 name 과 price 값이 출력되게 했는데, 이때 price에는 3자리 수마다 콤마가 붙어있다. 이를 없애고 나타내주기 위해 replace와 정규식을 사용했다. 


### 3) CustomModal.jsx
react-modal 이라는 라이브러리를 사용했다.  

```
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
```

Open_modal_green을 누르면 setModalOpen1(true)을 통해 modalOpen1 값이 true가 되고 모달창이 열리게 된다. 

```
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
```

두번째 모달창이다. 이때 화면 바깥을 누르면 modal창을 닫게 하기 위해서 onRequestClose={() => setModalOpen2(false) 와 같은 코드를 사용했다. 


### 4) CustomSelect.jsx
react-select 라이브러리를 사용했다. 

```
const list = [
        { value: '리액트', label: '리액트' },
        { value: '자바', label: '자바' },
        { value: '스프링', label: '스프링' },
        { value: '리액트 네이티브', label: '리액트 네이티브' },
    ]
```

위와 같이 list에 객체를 하나씩 담아 select에 나타낼 데이터를 담아줬다.
label은 select에 보이는 부분을 의미하고, value 는 선택했을 때 실제 값을 의미한다. 

```
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
```

<Select /> 태그 내에 options = {list} 형태로 미리 만들어둔 배열을 담아줌으로서 select가 구현되게 했다. 

```

const Box_layout = styled.div`
    border: 2px solid grey;
    padding: 20px;
    padding-bottom: 50px;
    overflow: hidden;
`   
```

웹페이지 상에서 회색 테두리 박스로 보이는 부분이다. 이 부분에 overflow : hidden 을 적용함으로서 Box_layout의 자식요소들이 가려지게 된다.  
이를 해결하기위해서 menuPortalTarget={document.body} 을 사용했는데, react-select 컴포넌트의 속성 중 하나이다.  
react-select 컴포넌트에서 메뉴가 표시될 때 메뉴가 렌더링될 기본 위치를 변경할 수 있도록 해준다.  
기본적으로 react-select 메뉴는 DOM에서 가장 가까운 상위 요소를 찾아 해당 위치에 렌더링된다.  
그러나 경우에 따라 메뉴가 기본 위치에서 벗어나야 할 필요가 있는데, 이때 menuPortalTarget prop을 사용하여 메뉴를 다른 위치에 렌더링할 수 있다.  
menuPortalTarget prop은 메뉴가 렌더링될 대상 DOM 요소를 지정하는데 사용된다.  
위의 코드에서는 menuPortalTarget={document.body}를 전달하여 메뉴가 상위요소인 Box_layout 위로 렌더링되게 한다. 따라서, 모든 화면에서 이 메뉴를 사용할 수 있다.
