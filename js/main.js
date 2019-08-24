'use strict';

{
    // .menuのliのaを取得しmenuItemsを定義する
    const menuItems = document.querySelectorAll('.menu li a');
    //.contentを取得しcontentsを定義する
    const contents = document.querySelectorAll('.content');

    // menuItemsにclickイベントを設定
    menuItems.forEach(clickedItem => {
        clickedItem.addEventListener('click',e => {
            e.preventDefault();//要素の規定の動作をキャンセルするメソッド

            // menuItems(.menu li a)についているactive classを外し
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
            // clickされた要素に対してactive classをつける
            clickedItem.classList.add('active');

            // contentに対してもclassを外す記述を行う
            contents.forEach(content => {
                content.classList.remove('active');
            });
            // htmlに記載したidをget~で呼び出しclickしたらclassをつける記述を行う
            document.getElementById(clickedItem.dataset.id).classList.add('active');
        });
    });
}
