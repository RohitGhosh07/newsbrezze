// Components
import { NewsCard } from "../components";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const HeadlinesComponent = ({error, data, title = ""}) => {
  return (
    <div style={{
      marginTop: '20px'
    }}>
        <h2>Top {capitalizeFirstLetter(title)} Headlines</h2>

        <div style={{
          marginTop: '15px',
        }}>
          <p>Stay informed with NewsBreeze's "Top Headlines" feature. This essential section provides immediate access to the most significant news stories from around the world. Whether it's global events, political developments, or cultural shifts, you'll always be up to date with the latest happenings.</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', 
            gap: '20px',
            marginTop: '20px'
          }}>

          {
            data?.articles?.map((news, index) => <NewsCard data={news} key={index} />)
          }

          </div>

        </div>

        {error && <p style={{
            color: "red"
        }}>{error}</p>}
    </div>
  )
}

export default HeadlinesComponent