<template>
  <div>
    <button @click="match">开始匹配</button>
    <p>已匹配次数: {{ matchCount }}</p>
  </div>
</template>

<script>
export default {
    name: "MatchChallenge",
    data(){
        return {
            matchCount: 0
        }
    },
    // get 获取 改变后的值
    async created(){
        const {data} = await this.$http.get('/api/match');
        this.matchCount = data.matchCount;
    },
    methods:{
    async match(){
        // update
        const response = await this.$http.post('/api/match', {userId: 1});

        if(response.data.success){
            this.matchCount ++
        }
    }
}
}
</script>

<style>

</style>