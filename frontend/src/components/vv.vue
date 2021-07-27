<template>
    <div class="King_Div">
        <div v-bind:style="menybar_class_0" class="menybar_class_0" style="text-align:left; margin-left:8%">
            <i id="menubar_id" @click="menuBar()" class="fas fa-bars"></i>
        </div>
        <div class="backmenu_class" v-bind:style="menu_B">
            <i id="back_menu" @click="backmenu()" class="fas fa-backspace"></i>
        </div>
        <div class="span_class_Q" v-bind:style="menu_K">
            <h3> menu</h3>
            <span id="span_Q" @click="o()"><i class="fas fa-coffee"></i></span>
            <span id="span_Q" @click="ToDoList()"><i class="fas fa-list-alt"></i></span>
            <span id="span_Q" @click="instagram()"><i class="fab fa-instagram-square"></i></span>
            <span id="span_Q" @click="youtube()"><i class="fab fa-youtube"></i></span>
        </div>
        <div class="menu_h4_class">
            <p id="P_Id_B">게시판</p>
        </div>
        <div class="button-div">
            <input id="button" type="button" @click="create()" value="작성하기">
        </div>
        <p id="p">No.</p> <p id="p">제목</p> <p id="p">내용</p> <p id="p">작성자</p> <p id="p">관리</p>
        <ul class="ul-tag" v-for="(item,index) in lists" v-bind:key="index">
            <li id="Li_tag_0">
                {{index+1}}
            </li>
            <li id="Li_tag_1">
                <span @click="detail_2(index)" style="cursor:pointer" >{{item.title}}</span>
            </li>
            <li id="Li_tag_1">
                <span id="span-ll">{{item.contents}}</span> 
            </li>
            <li id="Li_tag_1">
                <span id="span-ll">{{item.writer}}</span>
            </li>
            <li id="Li_tag_2">
                <input id="input" type="button" @click="dt(index)" value="delete">
                <input id="input" type="button" @click="edit(index)" value="edit">
            </li>    
        </ul>
    </div>
</template>
<style>
    @import url(https://use.fontawesome.com/releases/v5.15.1/css/all.css);
    @import url(vv.css);
</style>