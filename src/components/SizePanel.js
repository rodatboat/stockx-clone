import './SizePanel.css'

const SizePanel = ({shoe}) => {
    return (
        <>
        <div className="itemdetails-details-sizepanel">
                <button className="sizes-button">
                  <span>Size:</span>
                  <span className="current-size">{"All"}</span>
                </button>
                <div className="bid-buy-buttons">
                  <button className="bid-button">Place Bid</button>
                  <button className="buy-button">{"Buy for $" + shoe.market.bidAskData.lowestAsk}</button>
                </div>
                <span className="sizepanel-divider"></span>
                <span className="sell-now">
                  {"Sell for $" + shoe.market.bidAskData.highestBid + " or Ask for More ->"}
                </span>
              </div>
        </>
    )
}

export default SizePanel;