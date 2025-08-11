// 중괄호가 쳐져 있으면, export된 항목 중 하나만 선택하여 import
// 중괄호가 없으면 default(대표요소)를 import 
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios';

const app = createApp(App); // 렌더링

// axios의 모든 요청을 인터셉팅하여 모든 요청마다 엑세스 토큰을 자동으로 포함
axios.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('accessToken');
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    error => {
        // 에러가 발생시, 사용자의 본래요청의 화면으로 되돌아가야함
        return Promise.reject(error);
    }
)

app.use(vuetify)
app.use(router)
app.mount('#app')
