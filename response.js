module.exports = (message)=>{
	message=message.toLowerCase()
		switch(message)
		{
			case ' hii':
			case ' hello':
				return `hello how may i help u?`;
			case' thanks':
			case' thankyou':
				return` glad to help`;
			case' wow':
			case' bravo':
				return`thankyou`;
			case ' how are you':
				return `doing good,what about u?`;
			case ' fine':
				return` glad to hear`
			case ' ok':
			case ' k':
				return` k`;
			default:
			if(message.includes("bye"))
				return`sayonara`
			if(message.includes("your name"))
				return(`my name is Rahul\n naam to suna hoga`);
			if(message.includes("born")||message.includes("age"))
				return `i was born on(06/mar/2020)`;
			if(message.includes("todays date"))
			{
				var d=Date();
				return` date:${d}`
			}
			if(message.includes("do a flip"))
			{
				return('flip');
			}
			if(message.includes("home"))
			{
				return("home");
			}
			if(message.includes("what can")&&message.includes("do"))
			{
				return(`I can talk to u \ndo a flip\nor u can ask me anything`)
			}
			if(message.includes("who are"))
			{
				$(document).ready(()=>
									{
										$("#imge").animate({"height":"300px","width":"300px"});
										setTimeout(()=>{
											 $("#imge").animate({"height":"30px" ,"width":"30px"}); 
										},3000)
									});
				return(`I am your virtual assistant ^-^`);
			}
			return' ';
		}
}