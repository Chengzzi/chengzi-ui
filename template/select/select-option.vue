<template>
    <div class="cz-select-option" :class="{selected,disabled}" @click="select">
    	<span :title="label">{{label}}</span>
    	<cz-icon name="xuanze" v-if="selected"></cz-icon>
    </div>
</template>
<script>
    export default {
        name: "cz-select-option", 
        inject:["eventBus"],
        props:{
            label:{
                type:[String,Number]
            },
            value:{
                type:[String,Number]
            },
            disabled:{
                type:Boolean,
                default:false
            },
        },
        data(){
        	return{
        		selected:false
        	}
        },
        created(){
        	this.eventBus.$on("update:selected",(data)=>{
                let value = this.value || this.label;
                if(Array.isArray(data)){
        			this.selected = (data.includes(value));
        		}else{
        			this.selected = (data === value);
        		}
            })
        },
        methods:{
        	select(){
                if(this.disabled) return
                let value = this.value || this.label;
        		this.eventBus.$emit("select",{value:value,label:this.label});
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

.cz-select-option.disabled{
    cursor: not-allowed;
    color: #c0c4cc;
}

</style>