var header1=['免扣元素','背景图库','成品模板','原创插画','艺术字库','办公文档','视频音频']
var header1num=[128,256,512,1024,2048,4096,8192]
var header2=[['免扣元素',' '],['版式','分类',' '],['平面设计','电商设计','商务办公',' '],['场景',' '],['分类','风格',' '],['PPT模板','Word',' '],["视频",'音效','配乐',' ']]
var header2Color=['red','#FB4A02','#FFA500','green','blue','blueviolet','purple']
var header3=[[['漂浮素材','效果元素','装饰图案','卡通手绘','促销标签','不规则图形','边框纹理','PPT元素','产品实物','表情包','其他','商用图库'],[' ']],
[['全部背景','精品套图','竖图','横图','方图','摄影图'],['扁平/简约','商务/科技','文艺/清新','卡通/手绘','质感/纹理','摄影/风景','电商/狂欢','复古/中国风','另类/其他','党政/党建'],[' ']],
[['海报','展板','画册','优惠券/邀请函','X展架/易拉宝'],['淘宝海报','淘宝首页','淘宝详情页','主图/直通车','淘宝手机端模板'],['名片','证书','简历','字体'],[' ']],
[['情感表达','节日节气','教育文化','风光建筑','生活方式','商务办公','社会民生','科技概念','其他'],[' ']],
[['节日素材','电商促销','数字字母','活动展会','招聘','青春校园','房地产','婚庆旅游','节气','问候语','企业文化','社会民生','健康养生','美食餐饮','游戏动漫','文案集'],['3D立体','金色','毛笔','卡通','水墨','创意','黑色'],[' ']],
[['汇报总结','商业计划书','PPT图表','发布会','演讲培训','毕业答辩','求职简历','节日庆典','年会颁奖','政府党建','其他'],['简历','手抄报','人力资源','财务管理','合同范文','营销管理','工程管理','计划策划','总结报告','党团工作','校园相关','其他'],[' ']],
[['ae模板','会声会影','背景视频','实拍视频'],['自然环境','日常生活','影视音效','游戏音效'],['情绪场景','影视配乐','乐器曲风','游戏配乐'],[' ']]]
var headerCut3=['公告','上传','比赛','登录','注册']

//页面跳转链接
var urlInf=['cut.html',//免扣元素
'',//背景图库
'finishedProductTem.html',//成品模板
'light-04.html',//原创插画
'typeface.html',//艺术字库
'',//办公文档
'video.html']//视频音频

function createEle(type,classtype,father){
	var e=document.createElement(type)
	if(classtype != null)e.setAttribute('class',classtype)
	if(father != null)father.appendChild(e)
	return e
}
 
var div=createEle("div",'headerDiv',null)
document.body.insertBefore(div,document.body.firstChild);//在得到的第一个元素之前插入。
  
var infdiv=createEle("div",'infHeaderDiv',div) 
   
var cut1=createEle("div","header-cut1",infdiv)
var cut2=createEle("ul","header-cut2",infdiv)
var cut3=createEle("ul","header-cut3",infdiv)
var divLeft=[];
for(var i=0;i<header1.length;i++)
{
	var cut2_li=createEle("li","header-cut2-li",cut2)
	var cut2_li_a=createEle("a","header-cut2-li-a",cut2_li)
	cut2_li_a.setAttribute("href",urlInf[i])
	var cut2_li_div=createEle("li","header-cut2-li-div",cut2_li)
	cut2_li_a.innerHTML=header1[i]
	
	var cut2_li_div_cut1=createEle("div",null,cut2_li_div)
	var cut2_li_div_cut1_p1=createEle("p","header-cut2-li-div_p1",cut2_li_div_cut1)
	var cut2_li_div_cut1_p2=createEle("p","header-cut2-li-div_p2",cut2_li_div_cut1)
	cut2_li_div_cut1_p1.innerHTML="共"+header1num[i]+"张"
	cut2_li_div_cut1_p2.innerHTML='开通元素VIP'
	cut2_li_div_cut1_p2.style.color=header2Color[i]
//	cut2_li_div_cut1_p2.setAttribute("sytle","color:"+header2Color[i]+';')
	
	var cut2_li_div_cut2=createEle("div",null,cut2_li_div)
	for(var j=0;j<header2[i].length;j++)
	{
		var cut2_li_div_cut2_div=createEle("div",null,cut2_li_div_cut2)
		var cut2_li_div_cut2_p=createEle("p",'header-cut2-li-div_classiP',cut2_li_div_cut2_div)
		cut2_li_div_cut2_p.innerHTML=header2[i][j]+'<br/>';
		cut2_li_div_cut2_p.style.color=header2Color[i]
		
		for(var k=0;k<header3[i][j].length;k++)
		{
			var cut2_li_div_cut2_p_all=createEle("span",'header-cut2-li-div_classiP_all',cut2_li_div_cut2_p)
			cut2_li_div_cut2_p_all.innerHTML=header3[i][j][k];
		}
	}
	
}
