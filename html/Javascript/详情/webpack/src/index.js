<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>珠峰JS全栈</title>
        
    <link rel="stylesheet" type="text/css" href="../../../../../static/css/main.css">
</head>
<body>
<div class="navbar navbar-line">
    <div class="container">
        <div class="logo">
            
                珠峰JS全栈
            
        </div>
        <input type="checkbox" id="idoc_nav" />
        <div class="menu_tree">
        <ul><li><a href="../../../../../index.html">index</a></li><li><a href="#"><span></span>git&github</a><ul><li><a href="../../../../../index.html">git入门</a></li><li><a href="#"><span></span>详情</a><ul><li><a href="../../../../../index.html">git安装</a></li></ul></li></ul></li><li><a href="#"><span></span>html&css</a><ul></ul></li><li><a href="#"><span></span>Javascript</a><ul><li><a href="../../../../../index.html">入门</a></li><li><a href="#"><span></span>详情</a><ul><li><a href="../../../../../index.html">ES6</a></li><li><a href="../../../../../index.html">webpack</a></li><li><a href="#"><span></span>webpack</a><ul><li><a href="#"><span></span>src</a><ul></ul></li><li><a href="#"><span></span>src</a><ul></ul></li></ul></li></ul></li></ul></li><li><a href="#"><span></span>node.js</a><ul></ul></li><li><a href="#"><span></span>前端工程化</a><ul></ul></li><li><a href="#"><span></span>前端框架</a><ul></ul></li><li><a href="#"><span></span>数据库</a><ul></ul></li><li><a href="#"><span></span>编辑器</a><ul></ul></li></ul>    
        </div>
        
        

        <section class="idoc_nav_btn">
            <label for="idoc_nav"><span></span></label>
        </section>
    </div>
    
</div>




<div class="container">

    <div class="page-toc">
        <ul></ul>
    </div>
    
    <div class="content markdown-body">
        <p>import {name} from &apos;./component.js&apos;;
console.log(name);</p>

        <div class="copyright">Powered by <a href="https://github.com/jaywcjlove/idoc" target="_blank">idoc</a>. Dependence <a href="https://nodejs.org">Node.js</a> run.</div>
    </div>

</div>


</body>
<script src="http://cdn.bootcss.com/jquery/3.0.0/jquery.min.js"></script>
<script>
    $('.page-toc li').eq(0).children('a').addClass('red');
    var arr = [];
    $("h2,h3").each(function () {
        $(this).attr('t',$(this).position().top);
        arr.push($(this).position().top);
    });
    $(window).on('scroll', function () {
        var cur = $(document).scrollTop();
        for(var i = arr.length; i >=0;i--){
            if(arr[i]<=cur){
                break;
            }
        }
        if(i===-1){
            i = 0;
        }
        $('.page-toc li a').removeClass('red');
        $('.page-toc li').eq(i).children('a').addClass('red')
    });
</script>
</html>
