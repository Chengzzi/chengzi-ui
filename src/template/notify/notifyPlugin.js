import Notify from './notify.vue'

let n_id = 1;
let notifys = {
	"top-right":{},
	"top-left":{},
	"bottom-right":{},
	"bottom-left":{},
};
let onClose = (vm)=>{
	for(let i in notifys[vm.position]){
		let item = notifys[vm.position][i];
		if(item&&(item.n_id > vm.n_id)){
			let {height} = vm.$el.getBoundingClientRect();
			item.updatePosition(height);
		}
	}
	delete notifys[vm.position][vm.n_id];
}

let notifyPlugin = Vue=>{
	return options=>{
		//注册组件
	    let constructor = Vue.extend(Notify); 
	    // Notify 也就vue文件相当于一些配置项

	    //生成组件
	    let notify = new constructor({
	    	// 传入props
	    	propsData:{n_id:n_id,...options}
	    });
	    n_id += 1;
	    //挂载组件
	    notify.$mount();
	    notify.$on("close",onClose);
	    notifys[notify.position][notify._uid] = notify;
	    //添加dom
	    document.body.appendChild(notify.$el);
	}
}
export default notifyPlugin;