import Mock from 'mockjs'

Mock.mock(/\/api\/index/, 'get', getIndexData)

function getIndexData () {
	return {
		res: true,
		data: {
			city: '北京',
			swiperList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
      }, {
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
			}],
			iconList: [{
        id: '001',
        url: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店'
      }, {
        id: '002',
        url: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '机票'
      }, {
        id: '003',
        url: '//s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: '火车票'
      }, {
        id: '004',
        url: '//s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '度假'
      }, {
        id: '005',
        url: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店'
      }, {
        id: '006',
        url: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '机票'
      }, {
        id: '007',
        url: '//s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: '火车票'
      }, {
        id: '008',
        url: '//s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '度假'
      }, {
        id: '009',
        url: '//s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: '火车票'
      }, {
        id: '010',
        url: '//s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '度假'
			}],
			recommendList: [{
        id: '0001',
        imgUrl: '//img1.qunarzz.com/sight/p0/1807/f2/f27eacd19c648261a3.img.jpg_256x160_59695948.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首战，浪漫的海洋主题公园'
      }, {
        id: '0002',
        imgUrl: '//img1.qunarzz.com/sight/p0/1807/f2/f27eacd19c648261a3.img.jpg_256x160_59695948.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首战，浪漫的海洋主题公园'
      }, {
        id: '0003',
        imgUrl: '//img1.qunarzz.com/sight/p0/1807/f2/f27eacd19c648261a3.img.jpg_256x160_59695948.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首战，浪漫的海洋主题公园'
			}],
			weekendList: [{
        id: '0001',
        imgUrl: '//img1.qunarzz.com/sight/p0/1504/3a/3aa6bf2054f63b6a.water.jpg_256x160_a7c2bd96.jpg',
        title: '温泉水上乐园',
        desc: '泡泡温泉，吹吹海风，深觉人生美好'
      }, {
        id: '0002',
        imgUrl: '//img1.qunarzz.com/sight/p0/1504/3a/3aa6bf2054f63b6a.water.jpg_256x160_a7c2bd96.jpg',
        title: '温泉水上乐园',
        desc: '泡泡温泉，吹吹海风，深觉人生美好'
      }, {
        id: '0003',
        imgUrl: '//img1.qunarzz.com/sight/p0/1504/3a/3aa6bf2054f63b6a.water.jpg_256x160_a7c2bd96.jpg',
        title: '温泉水上乐园',
        desc: '泡泡温泉，吹吹海风，深觉人生美好'
      }]
		}
	}
}
