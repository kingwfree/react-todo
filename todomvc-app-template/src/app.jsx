// (function (ReactDOM,React) {
// 	// Your starting point. Enjoy the ride!
// 	window.App = class App extends React.Component{
// 		render(){
// 			return (
// 				<div>
// 					<p>todolist</p>
// 				</div>
// 			)
// 		}
// 	}
//
//
// })(ReactDOM,React);

	// Your starting point. Enjoy the ride!
/*
* className
* htmlFor
* autoFocus
* defaultChecked
* defaultValue
*
* shift+f2  自动定位到错误的地方
* alt+j  逐个选中相同项
*ctrl+alt+l 格式化代码
* shift+end 全部选中
*
* */
window.App = class App extends React.Component{
	state={
		list :[]
	}
	handleItemOut= (e)=>{
		const {target,keyCode} = e;
		//console.log(target,keyCode)
		//不输入回车就不操作
		if(keyCode !== 13)return
		const txt = target.value.trim();
		target.value = ''
		//console.log(txt)
		if(!txt.length)return
		const list = this.state.list
		list.push({
			id:Math.random(),
			name:txt
		})
		this.setState({
			list
		})
	}
	handleRemove=(index)=>{
		//console.log(this)
		//console.log(index)
		const list = this.state.list
		list.splice(index,1)
		this.setState({
			list
		})
	}

	render(){
		return (
			<div>
				<section className="todoapp">
					<Head
						keydown={this.handleItemOut}
					/>
					{
						this.state.list.length > 0 && (
							<Main
								removeFn={this.handleRemove}
								data={this.state.list}
							/>
						)
					}
					<Foot />
				</section>
				<Info />
			</div>
		)
	}
}
