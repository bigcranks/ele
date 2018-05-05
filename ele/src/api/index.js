

//提供请求接口的模块

//图片服务器地址
const IMG_HOST = 'http://fuss10.elemecdn.com';


/*
定位当前的位置
参数：
	latitude：经度
	longitude：纬度
 */
const ADRESS_API = '/restapi/bgs/poi/reverse_geo_coding';

/*
 分类
参数：
	latitude：经度
	longitude：纬度
	templates[]=main_template
	&templates[]=favourable_template
	&templates[]=svip_template
 * */
const CATEGORY_API = '/restapi/shopping/openapi/entries';

/*
 推荐商家
 参数：
	latitude
	longitude
	offset
	limit
	extras[]=activities
	extras[]=tags
	extra_filters=home
	rank_id=
	terminal=h5
 * */
const TOP_SELLER_API = '/restapi/shopping/v3/restaurants';

/*
 根据关键字搜索地址
 参数：
 ?keyword=
 latitude=22.625871&
 longitude=113.83794
 * */
const ADDRESS_API = '/restapi/bgs/poi/search_poi_nearby';

/*
 优惠专区
 参数:
	latitude
	longitude
	templates[]=main_template
	templates[]=favourable_template
	templates[]=svip_template
 */
const DISCOUNT_API = '/restapi/shopping/openapi/entries'

/*
热门搜索
参数：
	latitude
	longitude
 */
const HOTSEARCH_API = '/restapi/shopping/v3/hot_search_words'

/*
 搜索商家
参数：
	kw
	latitude
	longitude
	city_id=11
 */


const SHOPING_API = '/restapi/shopping/v1/typeahead'

/*
 分类
 参数：
 	latitude
 	longitude
 */
const CLASSIFY_API = '/restapi/shopping/v2/restaurant/category'

/*
 配送方式
参数：
	latitude
	longitude
	kw
 */
const DISTRIBUTION_API = '/restapi/shopping/v1/restaurants/delivery_modes'

/*
 人均消费
 参数：
	latitude
	longitude
	keyword=
 */
const CONSUMPTION_API = '/restapi/shopping/v1/restaurants/filter/attributes/average'

/*
 优惠活动
 参数:
	latitude
	longitude
	kw=
 */

const ACTDISCOUNT_API = '/restapi/shopping/v1/restaurants/activity_types'

/*
商家属性
参数:
	latitude
	longitude
	kw=
*/

const BUSINESS_API = '/restapi/shopping/v1/restaurants/activity_attributes'

/*
搜索商家
参数:
	offset
	limit=15
	keyword=
	latitude
	longitude
	search_item_type=3
	is_rewrite=1
	extras[]=activities
	extras[]=coupon
	terminal=h5
*/
const SEARCHLIST_API = '/restapi/shopping/v2/restaurants/search'

export default {
	IMG_HOST,
	ADRESS_API,
	CATEGORY_API,
	TOP_SELLER_API,
	ADDRESS_API,
	DISCOUNT_API,
	HOTSEARCH_API,
	SHOPING_API,
	CLASSIFY_API,
	DISTRIBUTION_API,
	CONSUMPTION_API,
	ACTDISCOUNT_API,
	BUSINESS_API,
	SEARCHLIST_API
}


