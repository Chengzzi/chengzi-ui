<template>
    <i :class="classes" v-if="!name.includes('color')" v-show="name"></i>
    <svg :class="classes" v-else v-show="name">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    export default {
        name: "cz-icon", 
        props:{
            name:{},
            size:{
                type: String,
                validator(val){
                    return ["small","large","logo"].includes(val);
                }
            }
        },
        computed: {
            classes(){
                return{
                    icon:true,
                    colorfont:this.name.includes("color"),
                    iconfont:!this.name.includes("color"),
                    [`i-${this.name}`]:!this.name.includes("color"),
                    [`${this.size}`]: true
                }
            }
        },
    };
</script>

<style scoped>
    .colorfont{
        width: 1em;
        height: 1em;
    }
    .colorfont.logo{
        width: 2em;
        height: 2em;
    }
    .colorfont.large{
        width: 1.5em;
        height: 1.5em;
    }
    .colorfont.small{
        width: 0.8em;
        height: 0.8em;
    }

    @keyframes sbin {
       0%{transform:rotate(0deg)}
       100%{transform:rotate(360deg)}
    }
    .iconfont.i-loading{
        animation: sbin 1s linear infinite;
    }
    .iconfont{
        display: inline-block;
        font-size: 1em;
    }
    .iconfont.logo{
        font-size: 2em;
    }
    .iconfont.large{
        font-size: 1.5em;
    }
    .iconfont.small{
        font-size: 0.8em;
    }
</style>