<template>
    <transition name="carouselItem">
        <div v-if="active" class="cz-carousel-item" :class="{reserve}">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
    export default {
        name: "cz-carousel-item", 
        props:{
            name:{},
        },
        data(){
            return{
                activeName:null,
                reserve:false,
            }
        },
        computed: {
            active(){
                return this.name === this.activeName
            }
        },
        methods:{

        }
    };
</script>
<style scoped>
.cz-carousel-item{
    width: 100%;
}
.carouselItem-enter-active,
.carouselItem-leave-active {
    transition: all 1s;
}

.carouselItem-enter{
    transform: translateX(100%);
}
.carouselItem-leave{
    position: absolute;
    top:0;
    left:0;
}
.carouselItem-leave-to {
    transform: translateX(-100%);
    position: absolute;
    top:0;
    left:0;
}
.carouselItem-enter.reserve{
    transform: translateX(-100%);
}
.carouselItem-leave-to.reserve {
    transform: translateX(100%);
    position: absolute;
    top:0;
    left:0;
}      
</style>