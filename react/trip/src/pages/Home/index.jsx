import useTitle from '@/hooks/useTitle'
import {
  Button,
}from 'react-vant'
import{
  showToast,
}from '@/components/Toast/toastController'

const Home = () => {
  useTitle('Trip-首页')
  return (
    <div>
      <h1>Home</h1>
      {/* 通过事件机制来通信 */}
      <Button 
        type="primary"
        onClick={()=>showToast(10,20,30)}
      >
        showToast
      </Button>
    </div>
  )
}
export default Home