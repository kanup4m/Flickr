import React, { useEffect, useState } from 'react'
import Hero from "../components/Hero"
import Image from "../components/Image"
import Loading from '../components/Loading'
import InfiniteScroll from 'react-infinite-scroll-component';
import { motion } from 'framer-motion';
import { getRecentImages } from "../flickr"
import Modal from '../components/Modal'
function HomePage() {
    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [selectedImg, setSelectedImg] = useState(null);


    useEffect(() => {
        fetchImages()
    }, [])

    const fetchImages = () => {
        setPage(page => page + 1)
        getRecentImages(page)
            .then(res => res.json())
            .then(data => {
                const upo = data.photos.photo
                setLoading(false)
                setImages([...images, ...upo])

            })
            .catch(error => alert(error))
    }



    return (
        <>
            <Hero />
            <div className="wrapper">
                <div className="container">
                    <div className="images__container">
                        <InfiniteScroll
                            dataLength={images.length} //This is important field to render the next data
                            next={fetchImages}
                            loader={<Loading />}
                            hasMore={true}
                            style={{
                                overflow: 'visible',
                            }} >
                            {loading ? <Loading /> : (images.map((image, index) => (
                                <motion.div className="image" whileHover={{ scale: 1.03 }} key={index} onClick={() => setSelectedImg(`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`)}>
                                    <Image data={image} layout />
                                </motion.div>

                            )))}
                        </InfiniteScroll>
                    </div>
                </div>
            </div>
            {selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </>
    )
}

export default HomePage
