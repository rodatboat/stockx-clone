import './ItemDetails.css'
import ShoeData from '../db.json'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import NavTrack from './NavTrack'
import SizePanel from './SizePanel'
import ProductSlider from './ProductSlider'
import ProductDetails from './ProductDetails'
import VerifiedAuthHero from './VerifiedAuthHero'

const ItemDetails = () => {
    const [shoe, setShoe] = useState(null)
    const [relatedShoes, setRelatedShoes] = useState([])

    const { urlKey } = useParams()

    const findProduct = (product_name) => {
        if (shoe === null) {
            ShoeData.map((s, i) => {
                if (product_name === s.node.urlKey) {
                    return setShoe(s.node)
                }
            })
        } else {
            if(shoe.urlKey !== product_name){
                ShoeData.map((s, i) => {
                    if (product_name === s.node.urlKey) {
                        return setShoe(s.node)
                    }
                })
            }
        }
    }

    // const checkUrlKey = () => {
    //     urlKey  = useParams().urlKey
    //     return false
    // }

    const fetchRelatedShoes = (data) => {
        for(let j = 0; j < 10; j++){
            const randomNum = Math.floor(Math.random() * ShoeData.length);
            setRelatedShoes(c => [...c, data[randomNum]])
        }
    }

    useEffect(() => {
        findProduct(urlKey)

        setRelatedShoes([])
        fetchRelatedShoes(ShoeData)

    }, [urlKey])

    if (shoe !== null) {
        return (
            <>
                <div className='itemdetails-component'>
                    <div className='itemdetails-content'>
                        <NavTrack shoe={shoe} />
                        {/*  */}
                        <div className='itemdetails-title'>
                            <span className='itemdetails-title-model'>
                                {shoe.model}
                            </span>
                            <span className='itemdetails-title-name'>
                                {shoe.name}
                            </span>
                            <div className='itemdetails-tags'>
                                <span className='itemdetails-tags-authentic'>
                                    Verified Authentic
                                </span>
                                <span className='itemdetails-tags-condition'>
                                    {'Condition: '}{' '}
                                    <span style={{ color: '#006340' }}>
                                        {shoe.condition}
                                    </span>
                                </span>
                            </div>
                        </div>
                        {/*  */}
                        <div className='itemdetails-details'>
                            <div className='itemdetails-details-image'>
                                <img src={shoe.media.smallImageUrl} />
                            </div>
                            <div className='itemdetails-details-buy'>
                                <div className='itemdetails-details-recentsales'>
                                    <div className='recentsales-img'>
                                        <img src='https://stockx-assets.imgix.net/dynamic/SellingFastBadge.gif?auto=format,compress&w=150&h=150&gif-q=50' />
                                    </div>
                                    <div className='recentsales-count'>
                                        <span>1337 Sold in Last 3 Days!</span>
                                    </div>
                                </div>
                                {/*  */}
                                <SizePanel shoe={shoe} />
                                {/*  */}
                                <div className='itemdetails-lastsale'>
                                    <div className='lastsale'>
                                        <span>Last Sale:</span>
                                        <span className='lastsale-price'>
                                            {'$' +
                                                shoe.market.salesInformation
                                                    .lastSale}
                                        </span>
                                        <div className='lastsale-change'>
                                            <span className='lastsale-change-int'>
                                                {'$' +
                                                    shoe.market.salesInformation
                                                        .changeValue}
                                            </span>
                                            <span className='lastsale-change-percent'>
                                                (
                                                {shoe.market.salesInformation
                                                    .changePercentage + '%'}
                                                )
                                            </span>
                                        </div>
                                    </div>
                                    <div className='lastsale-options'>
                                        <button>View Asks</button>
                                        <button>View Bids</button>
                                        <button>View Sales</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <span className='sizepanel-divider'></span>
                        <ProductSlider key={Math.random()} sliderHeader={'Related Products'} relatedShoes={relatedShoes} />
                        {/*  */}
                        <span className='sizepanel-divider'></span>
                        <ProductDetails shoe={shoe} />
                        {/*  */}
                        <span className='sizepanel-divider'></span>
                        <VerifiedAuthHero />
                    </div>
                </div>
            </>
        )
    } else {
        return <></>
    }
}

export default ItemDetails
