<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0" justify="center" align="center">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0 mb-5 mt-5">
                <v-row class="pa-0" align="center" >
                    <v-col cols="12" md="12" lg="12" sm="12" class="pa-1">
                        <p class=" mt-1 mb-0" style="font-size:110%">A very big thank you to all our partners for their continued partnership.</p>
                        <p class=" mt-0 mb-0" style="font-size:110%">If you’re interested in being showcased throughout , contact <a style="color:#1565C0;text-decoration: none;" :href="`mailto:${communityData.communityEmail}`">{{communityData.communityEmail}}</a> to discuss sponsorship opportunities.</p>
                    </v-col>
                </v-row>
                <v-row class="pa-0 mt-3" align="center" >
                    <v-col cols="6" md="2" lg="2" sm="4" class="pa-1" v-for="(item,i) in parntersData" :key="i" >
                        <div class="ma-1 px-2" style="background-color:white;border:1px solid #e0e0e0;border-radius:5px;">
                            <a :href="item.Website" target="_blank">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-img
                                            :src="getImgUrl(item.Image)"
                                            :lazy-src="getImgUrl(item.Image)"
                                            width="100%"
                                            contain
                                            style="border-radius:5px"
                                            height="80px"
                                            v-on="on"
                                        >
                                            <template v-slot:placeholder>
                                                <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center"
                                                    >
                                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img>
                                    </template>
                                    <span class="">{{item.Name}}</span>
                                </v-tooltip>
                            </a>
                        </div>
                       
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import communityData from '@/assets/data/communityData.json'
import { configData } from "@/config/config";
export default {
    props:{
        parntersData:{}
    },
    components:{
    },
    data() {
        return {
            communityData: communityData,
            cd: configData
        }
    },
    methods:{
        getImgUrl(pic) {
            return require('@/assets/img/partners/'+pic)
        },
    }
    
}
</script>