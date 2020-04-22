<template>
    <div class="cz-select-option" :class="{selected}" @click="select">
    	<span :title="label">{{label}}</span>
    	<cz-icon name="xuanze" v-if="selected"></cz-icon>
    </div>
</template>
<script>
    export default {
        name: "cz-select-option", 
        inject:["eventBus"],
        props:{
            label:{},
            value:{
                type:[String,Number]
            },
            name:{},
        },
        data(){
        	return{
        		selected:false
        	}
        },
        created(){
        	this.eventBus.$on("update:selected",(data)=>{
        		if(Array.isArray(data)){
        			this.selected = (data.includes(this.value));
        		}else{
        			this.selected = (data === this.value);
        		}
            })
        },
        methods:{
        	select(){
        		this.eventBus.$emit("select",this.value);
        	}
        }
    };
</script>

<style scoped>
.cz-select-option{
	position: relative;
	padding: 4px 8px;
	padding-right: 22px;
	color: #333;
}
.cz-select-option>span{
	display: inline-block;
	width: 100%;
	overflow: hidden;
}
.cz-select-option>.icon{
	position: absolute;
	top: calc(50% - 2px);
    right: 5px;
    transform: translateY(-50%);

}
.cz-select-option:hover{
	border-radius: 4px;
	background: #fdf6ec;
	cursor: pointer;
}
.selected,.selected:hover{
	color: #e6a23c;
	font-weight: bold;
}

</style>