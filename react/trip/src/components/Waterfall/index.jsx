import styles from './waterfall.module.css'
import { useRef, useState, useEffect } from 'react'
import ImageCard from '@/components/ImageCard'

const Waterfall = (props) =>{
      
    const {
        loading,
        images,
        fetchMore,
    } = props
    const [columns, setColumns] = useState([[], []]);
    const [columnHeights, setColumnHeights] = useState([0, 0]);

    useEffect(() => {
        // 初始化列高和图片数组
        const newColumns = [[], []];
        const newHeights = [0, 0];

        images.forEach(img => {
            // 找到当前高度较小的列
            const targetColumn = newHeights[0] <= newHeights[1] ? 0 : 1;
            newColumns[targetColumn].push(img);
            // 累加列高度（假设图片对象有height属性）
            newHeights[targetColumn] += (img.height || 200); // 使用默认高度200防止undefined
        });

        setColumns(newColumns);
        setColumnHeights(newHeights);
    }, [images])
    const loader = useRef(null)
    
    useEffect(()=>{
        //如何判断ref出现了 IntersectionObserver
        //观察者模式 
        const observer = new IntersectionObserver(([entry],obs)=>{
            console.log(entry);
            if(entry.isIntersecting){
                fetchMore()
            }
            // obs.unobserve(entry.target)

        })
        if(loader.current){
            observer.observe(loader.current)
        }
        return ()=> observer.disconnect()
    },[])
    return (
        <div className={styles.wrapper}>
            <div className={styles.column}>
                {columns[0].map(img => (
                    <ImageCard key={img.id} {...img} />
                ))}
            </div>
            <div className={styles.column}>
                {columns[1].map(img => (
                    <ImageCard key={img.id} {...img} />
                ))}
            </div>
            <div ref={loader} className={styles.loader}>加载中</div>
        </div>
    )
}
export default Waterfall