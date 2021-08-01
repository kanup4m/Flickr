import React, { useState, useEffect } from 'react'
import Image from "../components/Image"
import { useParams } from "react-router-dom"
import { searchImages } from "../flickr"
import Loading from '../components/Loading'
import { motion } from 'framer-motion';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { useHistory } from "react-router-dom"
import Error from '../components/404'
import Modal from '../components/Modal'
import IconButton from '@material-ui/core/IconButton';
import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';



function SearchPage() {
    const history = useHistory()
    const { searchTerm } = useParams()
    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [selectedImg, setSelectedImg] = useState(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        fetchImages()
    }, [searchTerm])

    const goToHomePage = () => history.push('/')


    const fetchImages = () => {
        setPage(page => page + 1)
        if (localStorage) {
            var cart;
            if (!localStorage['cart']) cart = [];
            else cart = JSON.parse(localStorage['cart']);
            if (!(cart instanceof Array)) cart = [];
            cart.push(searchTerm);

            localStorage.setItem('cart', JSON.stringify(cart));
        }
        searchImages(searchTerm, page)
            .then(res => res.json())
            .then(data => {
                const api = data.photos.photo
                // if (api.length === 0) setLoading(false)
                setImages([...images, ...api])
                setLoading(false)



            })
            .catch(error => alert(error))
    }
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <div className="header__wrapper">
                        <h1 className="title ">
                            <ArrowBackOutlinedIcon className="header__rightAvatar" onClick={goToHomePage}>GO back </ArrowBackOutlinedIcon>
                            {searchTerm}
                        </h1>
                    </div>
                    <InfiniteScroll
                        dataLength={images.length} //This is important field to render the next data
                        next={fetchImages}
                        hasMore={true}
                        style={{
                            overflow: 'visible',
                        }}
                    >
                        <div className="images__container">
                            {images.length < 1 && loading === false ? <Error /> : (
                                <div>
                                    {loading === true ? <Loading /> : images.map((image, index) => (
                                        <motion.div className="image" layout whileHover={{ scale: 1.03 }} key={index} onClick={() => setSelectedImg(`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`)}>
                                            <Image data={image} layout />
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </InfiniteScroll>
                    <IconButton aria-label="delete" className="scrollBtn">
                        <NavigationOutlinedIcon style={{ fontSize: 60 }} className="scrollBtn" onClick={scrollToTop} />
                    </IconButton>
                    {selectedImg && (
                        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
                    )}
                </div>
            </div>
        </>
    )
}

export default SearchPage

