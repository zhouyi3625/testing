$(function() {

    // 锚点事件
    $(".pageScroller").on("mouseenter", ".pageAnchor", function(event) {
        var $this = $(this),
            $pageAnchor_tips = $("#pageAnchor_tips");
        // // 判断是否已有元素，没有则新建
        // if ($pageAnchor_tips.length === 0) {
        //     $pageAnchor_tips = $("<span id='pageAnchor_tips'/>").appendTo(document.body);
        // }
        // // 显示提示文字
        // $pageAnchor_tips.text($this.text()).css({ left: event.clientX + 10, top: event.clientY - 5 }).show();

        $("span", this).css("display", "block");
    }).on("mouseleave", ".pageAnchor", function(event) {
        // 隐藏提示文字
        // $("#pageAnchor_tips").hide();
        $("span", this).hide();
    }).on("click", ".pageAnchor", function(event) {
        // 取消所有锚点的currentAnchor，目标锚点添加currentAnchor
        $(".pageAnchor", event.delegateTarget).removeClass("currentAnchor");
        $(this).addClass("currentAnchor");
    });

    // 技能事件
    $("#J_skillList").on("mouseenter", "li[rel]", function(event) {
        var $this = $(this), 
            rel = $this.attr("rel");
        $('#J_skillList' + rel).show();
    }).on("mouseleave", "li[rel]", function(event) {
        var $this = $(this), 
            rel = $this.attr("rel");
        $('#J_skillList' + rel).hide();
    });

    //技能动画效果加载
    (function () {
        var $J_skillList = $("#J_skillList"),
            width = $J_skillList.width(),
            marginRightOffset = width - 10;
        $("#J_skillList").css({width:10});
        $("#J_skillList").animate({width:width}, 1000);
    })();

});
