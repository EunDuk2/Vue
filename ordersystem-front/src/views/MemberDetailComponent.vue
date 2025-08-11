<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-center text-h5">
                        회원상세조회
                    </v-card-title>
                    <v-card-text>
                        <v-table>
                            <tbody>
                                <tr><td>ID : </td><td>{{ member.id }}</td></tr>
                                <tr><td>이름 : </td><td>{{ member.name }}</td></tr>
                                <tr><td>이메일 : </td><td>{{ member.email }}</td></tr>
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
import { getErrorMessage, getResultData } from '@/utils/commonDataHandler';

    export default {
        data() {
            return {
                member: {},
            }
        },
       async created() {
            const memberId = this.$route.params.memberId;
            
            try {
                const accessToken = localStorage.getItem("accessToken");
                const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/detail/${memberId}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                this.member = getResultData(response);
            } catch(error) {
                console.log(getErrorMessage(error));
                alert(getErrorMessage(error));
            }
        },
        methods: {

        }
    }
</script>