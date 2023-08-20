// Styles
import "./styles.css";

const Loader = ({size = 40}) => {
  return (
    <div id="loader-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '100px'
    }}>
        <div id="loader" style={{
            width: size,
            height: size,
        }}/>
    </div>
  )
}

export default Loader;