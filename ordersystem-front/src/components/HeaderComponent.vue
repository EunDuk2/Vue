<template>
    <v-app-bar>
        <v-container>
            <v-row>
                <!-- d-flex justify-start : 왼쪽 기준 정렬 -->
                <v-col class="d-flex justify-start">
                    <div v-if="userRole==='ADMIN'">
                        <v-btn :to="'/member/list'">회원관리</v-btn>
                        <v-btn :to="'/product/manage'">상품관리</v-btn>
                        <v-btn :to="'/order/list'">실시간 주문건수</v-btn>
                    </div>
                </v-col>
                <v-col class="text-center">
                    <v-btn to="'/'">java shop</v-btn>
                </v-col>
                <v-col class="d-flex justify-end">
                    <v-btn v-if="isLogined" :to="'/member/login'">장바구니</v-btn>
                    <v-btn :to="'/product/list'">상품목록</v-btn>
                    <v-btn v-if="isLogined" :to="'/member/mypage'">마이페이지</v-btn>
                    <v-btn v-if="!isLogined" :to="'/member/create'">회원가입</v-btn>
                    <v-btn v-if="!isLogined" :to="'/member/login'">로그인</v-btn>
                    <v-btn v-if="isLogined" @click="doLogout()">로그아웃</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
import { jwtDecode } from 'jwt-decode';

    export default {
        data() {
            return {
                userRole: null,
                isLogined: false
            }
        },
        created() {
            const accessToken = localStorage.getItem("accessToken");
            if(accessToken) {
                const payload = jwtDecode(accessToken);
                this.userRole = payload.role;            
                this.isLogined = true;
            }
        },
        methods: {
            doLogout() {
                window.localStorage.clear(); // key로 삭제하기
                // this.isLogined = false;
                // this.$router.push("/")
                window.location.reload();
                this.userRole = null;
            }
        }
    }
</script>