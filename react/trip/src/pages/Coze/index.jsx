// 通向coze api 调用学习
import {
    useRef,
    useState,

} from 'react'
import styles from './coze.module.css'

export default function Coze() {
    const workflowUrl = 'https://api.coze.cn/v1/workflow/run';
    const workflow_id = '7533134823737884723';

    const patToken = import.meta.env.VITE_PAT_TOKEN
    const uploadUrl = 'https://api.coze.cn/v1/files/upload';
    const uploadImageRef = useRef(null)
    const [imgPreview, setImgPreview] = useState('https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png');
    const [uniform_color, setUniformColor] = useState('红');
    const [uniform_number, setUniformNumber] = useState(10);
    const [position, setPosition] = useState(0);
    const [shooting_hand, setShootingHand] = useState(0);
    const [style, setStyle] = useState('写实');
    const [imgUrl, setImgUrl] = useState('');
    const [status, setStatus] = useState('');
    const updateImageData = () => {

        const input = uploadImageRef.current;
        // console.log(uploadImageRef.current)

        if (!input.files || input.files.length === 0) { return; }
        const file = input.files[0];
        // console.log(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            // base64 格式图片

            setImgPreview(e.target?.result)
            // imgPreview.value = e.target?.result as string; 
        };
    }

    const uploadFile = async () => {
        // 请求体对象
        const formData = new FormData();
        const input = uploadImageRef.current;
        if (!input.files || input.files.length <= 0) return;
        // 二进制文件

        formData.append('file', input.files[0]);

        const res = await fetch(uploadUrl, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${patToken}`, },
            body: formData,
        });

        const ret = await res.json();

        if (ret.code !== 0) { setStatus(ret.msg); return; }
        console.log('res', ret);
        return ret.data.id;
    }

    const generate = async () => {
        // 调试信息：检查环境变量
        console.log('PAT Token:', patToken ? '已配置' : '未配置');
        console.log('Workflow ID:', workflow_id);
        
        if (!patToken) {
            setStatus('错误：未配置PAT Token');
            return;
        }

        setStatus("图片上传中...");
        const file_id = await uploadFile();
        console.log('file_id',file_id);

        if (!file_id) return;

        setStatus("图片上传成功，正在生成...")
        const parameters = {
            // 修改 picture 参数格式，直接使用对象而不是字符串化的 JSON
            picture: { file_id },
            style: style,
            uniform_number: uniform_number, //队服编号 
            uniform_color: uniform_color, // 队服颜色 
            position: position, // 0-守门员，1-前锋，2-后卫 
            shooting_hand: shooting_hand, // 0-左手，1-右手 
        };

        console.log('请求参数:', { workflow_id, parameters });

        try {
            const res = await fetch(workflowUrl, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${patToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ workflow_id, parameters, }),
            });
            
            console.log('响应状态:', res.status, res.statusText);
            
            if (!res.ok) {
                throw new Error(`HTTP错误: ${res.status} ${res.statusText}`);
            }
            
            const ret = await res.json();
            console.log('ret', ret);
            if (ret.code !== 0) { setStatus(ret.msg); return; }
            const data = JSON.parse(ret.data);
            console.log('data', data);
            setStatus('');
            setImgUrl(data.answer);
        } catch (error) {
            console.error('API调用错误:', error);
            setStatus(`错误: ${error.message}`);
        }
    }
    return (



        <div className={styles.container}>
            <div className={styles.input}>
                <div className={styles.fileInput}>
                    <input
                        ref={uploadImageRef}
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        required
                        onChange={updateImageData}
                    />
                </div>
                <img
                    src={imgPreview}
                    alt="preview"
                    className={styles.preview}

                />
                <div className={styles.settings}>
                    <div className={styles.selection}>
                        <label>队服编号</label>
                        <input value={uniform_number} type="number" onChange={(event) => setUniformNumber(event.target.value)} />
                    </div>
                </div>
                <div className={styles.selection}>
                    <label>队服颜色:</label>
                    <select value={uniform_color} onChange={(e) => { setUniformColor(e.target.value) }}>
                        <option value="红">红</option>
                        <option value="蓝">蓝</option>
                        <option value="绿">绿</option>
                    </select>
                </div>
                <div className="settings">
                    <div className="selection">
                        <label>位置：</label>
                        <select value={position} onChange={(e) => { setPosition(e.target.value) }}>
                            <option value="0">守门员</option>
                            <option value="1">前锋</option>
                            <option value="2">后卫</option>
                        </select>
                    </div>
                    <div className={styles.selection}>
                        <label>持杆:</label>
                        <select value={shooting_hand} onChange={(e) => setShootingHand(e.target.value)}>
                            <option value="0">左手</option>
                            <option value="1">右手</option>
                        </select>
                    </div>
                    <div className={styles.selection}>
                        <label>风格:</label>
                        <select value={style} onChange={(e) => setStyle(e.target.value)}>
                            <option value="写实">写实</option>
                            <option value="乐高">乐高</option>
                            <option value="国漫">国漫</option>
                        </select>
                    </div>
                </div>
                <div className={styles.generate}>
                    <button onClick={generate}>生成</button>
                </div>
            </div>
            <div className={styles.output}>
                <div className={styles.generated}>
                    {imgUrl && <img src={imgUrl} alt="" />}
                    {status && <>{status}</>}
                </div>
            </div>

        </div>)
}