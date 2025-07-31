import styles from './card.module.css'
import {
    useEffect,
    useRef,
}from 'react'
const ImageCard =(props)=>{
    const {url,height} = props
    const imgRef = useRef(null)
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry],obs)=>{
            if(entry.isIntersecting){
                const img = entry.target;
                const oImg = document.createElement('img')
                oImg.src = img.dataset.src //体验更好，避免用户等待
                oImg.onload = ()=>{
                    img.src = img.dataset.src 
                }
                // img.src = img.dataset.src || '',
                obs.unobserve(img);//回收
            }
        })
        if(imgRef.current) observer.observe(imgRef.current)
    },[])
    return (
        <div style={{height}} className={styles.card}>
            <img data-src={url} className={styles.img} ref={imgRef}/>
        </div>
    )
}
export default ImageCard