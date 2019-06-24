"use strict";

$(function () {
  /* 重置select */
  // currentOption: 当前选项, showOptions: 模拟的options, originalSelect: 原本的select
  function optimizeSelect(currentOption, showOptions, originalSelect) {
    // console.log(11111);
    currentOption.click(function () {
      showOptions.css("display", "block");
      showOptions.children("li").each(function () {
        var liEle = this;
        // 点击默认显示的option标签，就显示模拟的options
        $(liEle).click(function () {
          // 默认显示的option标签
          // 取模拟的select的li的rel的值赋值给option标签的value
          originalSelect.val($(this).attr("rel"));
          showOptions.css("display", "none");
          // 把从option标签的html值赋值给默认显示的option
          currentOption.val($(liEle).text());
          $('.sel-grade').val($(liEle).text());
        });
      });
    });
  }
  // 工作年限
  optimizeSelect($(".current-years"), $(".years-options"), $(".work-years"));
  // 学历/学位
  optimizeSelect($(".current-degree"), $(".degree-options"), $(".degree"));

  theaMsForm($('.sign-in'));
});