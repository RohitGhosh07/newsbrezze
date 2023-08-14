import React from 'react'

const Searchbar = ({value, setValue = () => {}, placeholder = "Enter your category", onClick = () => {}}) => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid black',
        width: '50%',
        boxShadow: '5px 5px gray',
        margin: 'auto'

    }}>
        <input 
            style={{
                padding: '10px 15px',
                outline: 'none',
                background: 'transparent',
                width: '90%',
                border: 'none'
            }}
            value={value}
            onChange={(e) => {setValue(e.target.value)}}
            placeholder={placeholder}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    onClick();
                }
            }}
        >
        </input>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '10%'
        }} onClick={onClick}>
            <i className="fa-solid fa-arrow-right-long" />
        </div>
    </div>
  )
}

export default Searchbar;