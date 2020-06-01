<template>
    <div class="cz-pagination">
        <div class="cz-scrollbar-wrap">
            <div class="cz-scrollbar-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default { 
        name:"cz-pagination", 
        props:{

        },  
        methods:{

        },
        created(){
        },
        computed: {

        },
    };
</script>

<style scoped>
.cz-pagination{
}
</style>