const webpack=require("webpack")
const path=require('path')
webpack({
	entry:"./index.js",
	output:{
		path:path.resolve("./"),
		filename:"pro.js"
	},
	mode:"development"
},(error,stats)=>{
	if(error)
		console.log(error)
	else
	{
		console.log(stats.toString());
	}
})