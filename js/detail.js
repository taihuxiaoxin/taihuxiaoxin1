"use strict";var mgs,obj=getUrlVal();$.ajax({url:"../server/goods_detail.php",type:"post",data:{goods_id:obj.goods_id},dataType:"json",success:function(o){o='\n                <div class="main">\n                    <div class="img">\n                        <img src="'.concat((mgs=o).goods_small_logo,'">\n                    </div>\n                    <div class="text">\n                        <h3>').concat(o.goods_name,'</h3>\n                        <h2>谢谢您的访问</h2>\n                        <div class="footer">\n                            <span>￥').concat(o.goods_price,'</span>\n                            <button class="cart">加入购物车</button>\n                        </div>\n                    </div>\n                </div>\n                <footer>\n                    <h1>这是商品介绍</h1>\n                    <div class="sec">').concat(o.goods_introduce,"</div>\n                </footer>\n                ");$(".box").html(o)}}),$(".box").click(function(o){var n,t;"cart"===o.target.className&&(void 0===myGetCookie().userName?(window.alert("您未登录，正在为您跳转登录界面"),window.location.href="./login.html?url=".concat(window.location.href)):null===(n=window.localStorage.getItem("cart"))?(mgs.num=1,mgs.buy=!0,o=[mgs],window.localStorage.setItem("cart",JSON.stringify(o))):(n=JSON.parse(n),t=!0,n.forEach(function(o){o.goods_id===mgs.goods_id&&(o.num++,t=!1)}),t&&(mgs.num=1,mgs.buy=!0,n.push(mgs)),window.localStorage.setItem("cart",JSON.stringify(n)),window.location.href="./cart.html"))});