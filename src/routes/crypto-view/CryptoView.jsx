import { useEffect, useReducer, useState } from "react"
import "./CryptoView.scss"
import { useParams } from "react-router-dom"
import { apiInstance } from "../../api"

const CryptoView = () => {

  const [data,setData] = useState()
  const { id } = useParams()
  const [singleData, setSingleData] = useState({})



  useEffect(() => {
    apiInstance(`/coins/${id}`)
      .then(response => {
        setData(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    data &&
    <>
      <div className="product__view-container">
        <div key={data.id} className="crypto__view-content">
          <img src={data.image.small} width={200} height={200} />
          <h3>{data.name}</h3>
          {/* <p className="rank-description">{state.description.en}</p> */}
          <h4 className="rant-title">Rank: 1</h4>
          <div className="rank-info">
            <strong>Current Price</strong>
            {/* <span>₹ {state.market_data.current_price.u}</span> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default CryptoView