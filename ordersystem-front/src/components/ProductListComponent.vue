<template>
    <v-container>
        <v-row>
            <v-col>
                <v-btn @click="createdOrder()">
                    주문하기
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-center text-h5">
                        상품목록
                    </v-card-title>
                    <v-card-text>
                        <v-table>
                            <thead>
                                <tr>
                                    <th>사진</th>
                                    <th>제품명</th><th>가격</th><th>재고수량</th>
                                    <th>주문수량</th><th>주문선택</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in productList" :key="product.id">
                                    <td>
                                        <v-img :src="product.imagePath"></v-img>    
                                    </td>
                                    <td>{{ product.name }}</td>
                                    <td>{{ product.price }}</td>
                                    <td>{{ product.stockQuantity }}</td>
                                    <td>
                                        <!-- input박스는 화면에서 숫자처럼 보여도, 실제 입력값은 문자열이다. -->
                                        <v-text-field
                                            v-model.number="product.productCount"
                                            type="number"
                                            style="width:65px"

                                        />
                                    </td>
                                    <td>
                                        <!-- 객체에 체크된 것들이 key:value (id:true) 방식으로 저장된다. -->
                                        <input type="checkbox" v-model="product.selected">
                                    </td>
                                    
                                </tr>
                            </tbody>
                        </v-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                productList: [],
            }
        },
        async created() {
            const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/product/list`);
            this.productList = response.data.result.content.map(p => ({...p, productCount: 0, seleted: false}));
        } ,
        methods: {
            async createdOrder() {
                const orderList = this.productList
                    .filter(p => p.selected == true && p.productCount > 0)
                    .map(p => ({productId:p.id, productCount:p.productCount}));

                // let orderList = [];

                // this.productList.forEach(product => {
                //     if(product.selected === true) {
                //         const productId = product.id;
                //         const productCount = product.productCount;
                //         const order = {productId, productCount};
                //         orderList.push(order);
                //     }
                // });
                const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/ordering/create`, orderList);
                console.log(response);
                alert("주문이 완료되었습니다");
                window.location.reload();
            },
        }  
    }
</script>