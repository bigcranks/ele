//处理网络请求的模块
import API from '../../api'
import axios from 'axios'
import handleImg from '../../utils/handleImgPath.js'

//请求当前的具体位置信息
export function getAddressInfo(lat, lon){
return new Promise((resolve, reject)=>{
	axios.get(API.ADRESS_API, {
		params: {
			latitude: lat,
			longitude: lon
		}
	})
	.then(response=>{
		resolve(response.data.name);
	})
	.catch(error=>{
		console.log(error)
	})
})
}

//请求商家分类数据
export function getSellerCategory(lat, lon, templates){
return new Promise((resolve, reject)=>{
	axios.get(API.CATEGORY_API, {
		params: {
			latitude: lat,
			longitude: lon,
			templates: templates
		}
	})
	.then(response=>{
		//过滤需要的字段
		let newData = response.data[0].entries.map(item=>{
			return {
				name: item.name,
				id: item.id,
				imgPath: handleImg(item.image_hash, 90)//处理图片路径
			}
		})
		let newData2 = [];
		//切割数组，10个为一个小数组
		while(newData.length > 0){
			let arr = newData.splice(0, 10);
			newData2.push(arr);
		}
		//将分组完成的数组进行返回
		resolve(newData2);
	})
	.catch(error=>{
		console.log(error)
	})
})
}

//请求推荐商家数据
export function getTopSeller(lat, lon, offset, limit){
return new Promise((resolve, reject)=>{
	axios.get(API.TOP_SELLER_API, {
		params: {
			latitude: lat,
			longitude: lon,
			offset: offset,
			limit: limit, 
			extras: ['activities', 'tags'],
			extra_filters: "home",
			terminal: 'h5'
		}
	})
	.then(response=>{
		let newData = response.data.items.map(item=>{
			var a = Number(item.restaurant.distance);//距离
			if(a>1000){
				a = (a/1000).toFixed(2) + 'km'
			}else{
				a = a + 'm'
			}
			return {
				name: item.restaurant.name,
				imgPath: handleImg(item.restaurant.image_path, 130),
				distance: a,
				recent_order_num: item.restaurant.recent_order_num, //数量
				rating: item.restaurant.rating, //评分
				piecewise_agent_fee: item.restaurant.piecewise_agent_fee,  //配送
				order_lead_time: item.restaurant.order_lead_time, //时间
				supports: item.restaurant.supports,
				is_premium:item.restaurant.is_premium,
				activities: item.restaurant.activities.map(act=>{
					return {
						name: act.name,
						color: act.icon_color,
						letter: act.icon_name
					}
				}),
				isShow: false
			}
		})
		resolve(newData);
	})
	.catch(error=>{
		console.log(error)
	})
})
}

//根据关键字搜索地址
export function getAddress(keyword, lat, lon){
return new Promise((resolve, reject)=>{
	axios.get(API.ADDRESS_API, {
		params: {
			keyword: keyword,
			 latitude: lat,
			 longitude: lon
		}
	})
	.then(response=>{
		let newData = response.data.map(item=>{
			return {
				name: item.name,
				address: item.address,
				longitude: item.longitude,
				latitude: item.latitude
			}
		})
		resolve(newData);
	})
	.catch(error=>{
		console.log(error);
	})
})	
}

//优惠专区
export function getDiscount(lat,lon){
return new Promise((resolve,reject)=>{
	axios.get(API.DISCOUNT_API, {
		params: {
			latitude: lat,
		 	longitude: lon,
		 	templates:["main_template","favourable_template","svip_template"]
		 }
	})
	.then(response=>{
		if(response.data[1]){
			resolve(response.data[1].entries[0])
		}else{
			resolve(null)
		}
	})
	.catch(error=>{
		console.log(error)
	})
})
}
//获取热门搜索
export function getSearchHot(lat,lon){
return new Promise((resolve,reject)=>{
	axios.get(API.HOTSEARCH_API, {
		params: {
			latitude: lat,
		 	longitude: lon
		}
	})
	.then(response=>{
		let newData = response.data.map(item=>{
			return {
				name: item.word
			}
		})
		resolve(newData);
	})
	.catch(error=>{
		console.log(error)
	})
})
}
//商家商品搜索
export function getShoping(val,lat,lon){
return new Promise((resolve,reject)=>{
	axios.get(API.SHOPING_API, {
		params: {
			kw:val,
			latitude: lat,
		 	longitude: lon,
		 	city_id:11
		}
	})
	.then(response=>{
		let newData = response.data.restaurants.map(item=>{
			return {
				imgPath: handleImg(item.image_path, 50),
				name:item.name,
				rating:item.rating,
				tags:item.tags
			}
		})
		resolve({
			newData:newData,
			words:response.data.words
		});
	})
	.catch(error=>{
		console.log(error)
	})
})
}
//分类
export function getClassify(lat,lon){
return new Promise((resolve,reject)=>{
	axios.get(API.CLASSIFY_API, {
		params: {
			latitude: lat,
		 	longitude: lon
		}
	})
	.then(response=>{
		var NewData = response.data.map(item=>{
			return {
				name:item.name,
				count:item.count
			}
		})
		resolve(NewData)
	})
	.catch(error=>{
		console.log(error)
	})
})
}
//配送方式
export function getDistribution(lat,lon){
return new Promise((resolve,reject)=>{
	axios.get(API.DISTRIBUTION_API, {
		params: {
			latitude: lat,
		 	longitude: lon,
		 	kw:''
		}
	})
	.then(response=>{
		var NewData = response.data.map(item=>{
			return {
				text:item.text,
				icon_hash:handleImg(item.icon_hash, 25)
			}
		})
		resolve(NewData)
	})
	.catch(error=>{
		console.log(error)
	})
})
}

//人均消费
export function getConsumption(lat,lon){
return new Promise((resolve,reject)=>{
	axios.get(API.CONSUMPTION_API, {
		params: {
			latitude: lat,
		 	longitude: lon,
		 	keyword:''
		}
	})
	.then(response=>{
		var NewData = response.data.map(item=>{
			return {
				description:item.description
			}
		})
		resolve(NewData)
	})
	.catch(error=>{
		console.log(error)
	})
})
}

//优惠活动
export function getActDiscount(lat,lon){
return new Promise((resolve,reject)=>{
	axios.get(API.ACTDISCOUNT_API, {
		params: {
			latitude: lat,
		 	longitude: lon,
		 	kw:''
		}
	})
	.then(response=>{
		resolve(response.data)
	})
	.catch(error=>{
		console.log(error)
	})
})
}

export function getBusiness(lat,lon){
return new Promise((resolve,reject)=>{
	axios.get(API.BUSINESS_API, {
		params: {
			latitude: lat,
		 	longitude: lon,
		 	kw:''
		}
	})
	.then(response=>{
		var NewData = response.data.map(item=>{
			return {
				icon_color:item.icon_color,
				icon_name:item.icon_name,
				name:item.name
			}
		})
		resolve(NewData)
	})
	.catch(error=>{
		console.log(error)
	})
})
}

//搜索商家数据
export function getSearchList(offset, limit,lat, lon,val){
return new Promise((resolve, reject)=>{
	axios.get(API.SEARCHLIST_API, {
		params: {
			offset:offset,
			limit:limit,
			keyword:val,
			latitude:lat,
			longitude:lon,
			search_item_type:3,
			is_rewrite:1,
			extras:["activities","coupon"],
			terminal:'h5'
		}
	})
	.then(response=>{
			var a = null;
			if(response.data.inside[0]){
				a = response.data.inside[0];
			}else if(response.data.inside[1]){
				a = response.data.inside[1];
			}else if(response.data.inside[2]){
				a = response.data.inside[2];
			}else if(response.data.inside[3]){
				a = response.data.inside[3];
			}else{
				resolve();
				return;
			}
			if(a.restaurant_with_foods){
				let newData =  a.restaurant_with_foods.map(item=>{
				var a = Number(item.restaurant.distance);//距离
				if(a>1000){
					a = (a/1000).toFixed(2) + 'km'
				}else{
					a = a + 'm'
				}
				return {
					name: item.restaurant.name,
					imgPath: handleImg(item.restaurant.image_path, 130),
					distance: a,
					recent_order_num: item.restaurant.recent_order_num, //数量
					rating: item.restaurant.rating, //评分
					piecewise_agent_fee: item.restaurant.piecewise_agent_fee,  //配送
					order_lead_time: item.restaurant.order_lead_time, //时间
					supports: item.restaurant.supports,
					is_premium:item.restaurant.is_premium,
					activities: item.restaurant.activities.map(act=>{
						return {
							name: act.name,
							color: act.icon_color,
							letter: act.icon_name
						}
					}),
					isShow: false
				}
			})
			var ListData = a.filter;
			resolve({newData,ListData});
			}
	})
	.catch(error=>{
		console.log(error)
	})
})
}