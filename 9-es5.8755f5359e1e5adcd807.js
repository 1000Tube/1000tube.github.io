function _classCallCheck(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,o){for(var e=0;e<o.length;e++){var t=o[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,o,e){return o&&_defineProperties(n.prototype,o),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Mk6F:function(n,o,e){"use strict";e.r(o),e.d(o,"HomeModule",(function(){return y}));var t,i=e("ofXK"),a=e("PCNd"),c=e("tyNb"),s=e("mrSG"),r=e("fXoL"),g=e("Isgk"),l=((t=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Mb({type:t,selectors:[["app-categoria"]],inputs:{Titulo:"Titulo",Icon:"Icon",isVerMais:"isVerMais"},decls:4,vars:4,consts:[[1,"categoria"],["alt","",3,"src"]],template:function(n,o){1&n&&(r.Xb(0,"div",0),r.Tb(1,"img",1),r.Xb(2,"span"),r.wc(3),r.Wb(),r.Wb()),2&n&&(r.Kb("ver-mais",o.isVerMais),r.Ib(1),r.mc("src",o.Icon,r.sc),r.Ib(2),r.xc(o.Titulo))},styles:[".categoria[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;justify-content:center;width:170px;height:170px;border:1px solid #d9dce3;border-radius:15px;margin-right:30px;font-family:Pop-Medium;font-size:15px;color:#475677;padding:10px;transition-duration:.4s;cursor:pointer}.categoria[_ngcontent-%COMP%]:hover{background-color:#d9dce3}span[_ngcontent-%COMP%]{margin-top:16px}.ver-mais[_ngcontent-%COMP%]{background-color:#ffbe58;border:1px solid #ffbe58;color:#fff;margin-right:0}.ver-mais[_ngcontent-%COMP%]:hover{background-color:#fcb038}"]}),t),p=e("B/4Z"),d=e("jWgd");function m(n,o){if(1&n&&r.Tb(0,"app-categoria",31),2&n){var e=o.$implicit;r.mc("Icon",e.Icon)("Titulo",e.Titulo)("isVerMais",e.isVerMais)}}function b(n,o){if(1&n&&(r.Xb(0,"div",29),r.vc(1,m,1,3,"app-categoria",30),r.Wb()),2&n){var e=r.hc();r.Ib(1),r.mc("ngForOf",e.Categorias)}}function f(n,o){if(1&n&&r.Tb(0,"app-curso-card",33),2&n){var e=r.hc().$implicit;r.mc("data",e)("Titulo",e.Titulo)("Image",e.Preview)("Categoria",e.Categoria)("Tempo",e.Tempo)("Views",e.Views)("Rate",e.Rate)}}function u(n,o){if(1&n&&(r.Xb(0,"div"),r.vc(1,f,1,7,"app-curso-card",32),r.Wb()),2&n){var e=o.index;r.Ib(1),r.mc("ngIf",e<3)}}function C(n,o){if(1&n&&(r.Xb(0,"div",34),r.Tb(1,"img",35),r.Xb(2,"span"),r.wc(3),r.Wb(),r.Wb()),2&n){var e=o.$implicit;r.Ib(3),r.xc(e.Texto)}}function h(n,o){if(1&n&&(r.Xb(0,"div",36),r.Xb(1,"span",37),r.wc(2),r.Wb(),r.Xb(3,"span",38),r.wc(4),r.Wb(),r.Wb()),2&n){var e=o.$implicit;r.Ib(1),r.uc("color",e.Cor),r.Ib(1),r.xc(e.Numero),r.Ib(2),r.xc(e.Descricao)}}function _(n,o){1&n&&(r.Xb(0,"div",39),r.Xb(1,"div",11),r.Xb(2,"span",5),r.Xb(3,"b"),r.wc(4,"Instrutores"),r.Wb(),r.wc(5," com melhor avalia\xe7\xe3o"),r.Wb(),r.Xb(6,"button",27),r.wc(7,"Pesquisar Cursos"),r.Wb(),r.Wb(),r.Tb(8,"div",13),r.Wb())}function P(n,o){if(1&n&&r.Tb(0,"app-feedback-card",40),2&n){var e=o.$implicit;r.mc("Descricao",e.Descricao)("User",e.User)}}var M,O,x,v=[{path:"",component:(M=function(){function n(o){_classCallCheck(this,n),this.cursoService=o,this.Categorias=[{Icon:"assets/icons/icon_negocios.svg",Titulo:"Neg\xf3cios",isVerMais:!1},{Icon:"assets/icons/icon_design.svg",Titulo:"Design",isVerMais:!1},{Icon:"assets/icons/icon_dev.svg",Titulo:"Desenvolvimento",isVerMais:!1},{Icon:"assets/icons/icon_linguagens.svg",Titulo:"Linguagens",isVerMais:!1},{Icon:"assets/icons/icon_jogos.svg",Titulo:"Jogos",isVerMais:!1},{Icon:"assets/icons/icon_ver_mais.svg",Titulo:"Ver mais",isVerMais:!0}],this.Escolhas=[{Texto:"Variados Cursos"},{Texto:"Instrutores Experientes"},{Texto:"Acesso Ilimitado"},{Texto:"Pre\xe7os Confortaveis"}],this.Conquistas=[{Numero:"2400+",Descricao:"Curso online",Cor:"#2680EB"},{Numero:"99,854+",Descricao:"Alunos Inscritos",Cor:"#00B592"},{Numero:"650+",Descricao:"Instrutores Experientes",Cor:"#FFBE58"},{Numero:"1820+",Descricao:"Recomenda\xe7\xf5es",Cor:"#E0474E"}],this.FeedBacks=[{Descricao:"Ele sobreviveu n\xe3o apenas cinco s\xe9culos, mas tamb\xe9m ao salto para a composi\xe7\xe3o eletr\xf4nica, permanecendo essencialmente inalterado. Foi popularizado na d\xe9cada de 1960 com a corrida.",User:{Nome:"Alfredo Vidinhas",Cargo:"CEO, NERD Group",Image:"assets/images/alfredo.jpg"}},{Descricao:"Ele sobreviveu n\xe3o apenas cinco s\xe9culos, mas tamb\xe9m ao salto para a composi\xe7\xe3o eletr\xf4nica, permanecendo essencialmente inalterado. Foi popularizado na d\xe9cada de 1960 com a corrida.",User:{Nome:"Atila e Sousa",Cargo:"CEO, NCR Group",Image:"assets/images/alfredo.jpg"}}]}return _createClass(n,[{key:"ngOnInit",value:function(){return Object(s.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var o=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.cursoService.cursos();case 2:n.sent.subscribe((function(n){o.Recomendados=n}));case 3:case"end":return n.stop()}}),n,this)})))}}]),n}(),M.\u0275fac=function(n){return new(n||M)(r.Sb(g.a))},M.\u0275cmp=r.Mb({type:M,selectors:[["app-home"]],decls:58,vars:6,consts:[[1,"home"],[1,"header"],["src","assets/images/home_background.jpg","alt","",1,"image"],[1,"gradient"],[1,"texto"],[1,"titulo"],[1,"sub-titulo"],[1,"descricao"],["routerLink","/cursos",1,"btn-home-header"],["class","categorias",4,"ngIf"],[1,"painel","recomendacoes"],[1,"painel-header"],["routerLink","/cursos",1,"btn-secundario"],[1,"painel-content"],[4,"ngFor","ngForOf"],[1,"escolha"],["src","assets/images/escolha_background.jpg","alt","",1,"imagem"],[1,"informacao"],[1,"h1"],[1,"h2"],[1,"linha"],[1,"h3"],["class","ponto",4,"ngFor","ngForOf"],[1,"conquistas"],["class","informacao-item",4,"ngFor","ngForOf"],["class","painel",4,"ngIf"],[1,"painel","feedbacks"],[1,"btn-secundario"],[3,"Descricao","User",4,"ngFor","ngForOf"],[1,"categorias"],[3,"Icon","Titulo","isVerMais",4,"ngFor","ngForOf"],[3,"Icon","Titulo","isVerMais"],[3,"data","Titulo","Image","Categoria","Tempo","Views","Rate",4,"ngIf"],[3,"data","Titulo","Image","Categoria","Tempo","Views","Rate"],[1,"ponto"],["src","assets/icons/icon_check.svg","alt",""],[1,"informacao-item"],[1,"numero"],[1,"numero-descricao"],[1,"painel"],[3,"Descricao","User"]],template:function(n,o){1&n&&(r.Xb(0,"div",0),r.Xb(1,"div",1),r.Tb(2,"img",2),r.Tb(3,"div",3),r.Xb(4,"div",4),r.Xb(5,"span",5),r.wc(6,"Aprenda Algo Novo"),r.Wb(),r.Xb(7,"span",6),r.wc(8,"Todo dia, lugar e hora"),r.Wb(),r.Xb(9,"p",7),r.wc(10,"Aqui voc\xea ir\xe1 encontrar os melhores cursos disponibilizados pelo nossos Instrutores."),r.Wb(),r.Xb(11,"button",8),r.wc(12,"Explorar"),r.Wb(),r.Wb(),r.Wb(),r.vc(13,b,2,1,"div",9),r.Xb(14,"div",10),r.Xb(15,"div",11),r.Xb(16,"span",5),r.wc(17,"Recomenda\xe7\xf5es de "),r.Xb(18,"b"),r.wc(19,"Cursos"),r.Wb(),r.Wb(),r.Xb(20,"button",12),r.wc(21,"Pesquisar Cursos"),r.Wb(),r.Wb(),r.Xb(22,"div",13),r.vc(23,u,2,1,"div",14),r.Wb(),r.Wb(),r.Xb(24,"div",15),r.Tb(25,"img",16),r.Xb(26,"div",17),r.Xb(27,"span",18),r.wc(28,"Por que voc\xea deveria"),r.Wb(),r.Xb(29,"div",19),r.Xb(30,"span"),r.wc(31,"Escolher-nos"),r.Wb(),r.Tb(32,"div",20),r.Wb(),r.Xb(33,"span",21),r.wc(34,"Existem diversas raz\xf5es para sermos a sua primeira escolha para"),r.Tb(35,"br"),r.wc(36,"os seus estudos:"),r.Wb(),r.vc(37,C,4,1,"div",22),r.Wb(),r.Wb(),r.Xb(38,"div",23),r.Xb(39,"span",5),r.wc(40,"Nossas Conquistas"),r.Wb(),r.Xb(41,"span",7),r.wc(42,"Acompanhe as nossas principais conquistas ao longo do tempo "),r.Tb(43,"br"),r.wc(44," E fa\xe7a parte da nossa plataforma"),r.Wb(),r.Xb(45,"div",17),r.vc(46,h,5,4,"div",24),r.Wb(),r.Wb(),r.vc(47,_,9,0,"div",25),r.Xb(48,"div",26),r.Xb(49,"div",11),r.Xb(50,"span",5),r.Xb(51,"b"),r.wc(52,"Feedback"),r.Wb(),r.wc(53," de Alunos"),r.Wb(),r.Xb(54,"button",27),r.wc(55,"Ver mais"),r.Wb(),r.Wb(),r.Xb(56,"div",13),r.vc(57,P,1,2,"app-feedback-card",28),r.Wb(),r.Wb(),r.Wb()),2&n&&(r.Ib(13),r.mc("ngIf",!1),r.Ib(10),r.mc("ngForOf",o.Recomendados),r.Ib(14),r.mc("ngForOf",o.Escolhas),r.Ib(9),r.mc("ngForOf",o.Conquistas),r.Ib(1),r.mc("ngIf",!1),r.Ib(10),r.mc("ngForOf",o.FeedBacks))},directives:[c.d,i.j,i.i,l,p.a,d.a],styles:[".home[_ngcontent-%COMP%]{flex-direction:column}.header[_ngcontent-%COMP%], .home[_ngcontent-%COMP%]{display:flex;align-items:center}.header[_ngcontent-%COMP%]{position:relative;width:100%;height:657px;overflow:hidden;background-color:#a7ced5}.header[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{z-index:9;-o-object-fit:cover;object-fit:cover}.header[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%}.header[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{z-index:10;background:#001550;background:linear-gradient(90deg,#001550 -10%,rgba(0,21,80,.65) 44%,rgba(0,21,80,.45))}.header[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;z-index:11;margin-left:12%}.header[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{font-family:Pop-Bold;font-size:42px;color:#fff}.header[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%]   .sub-titulo[_ngcontent-%COMP%]{font-family:Pop-Regular;font-size:30px;color:#ffbe58}.header[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%]{font-family:Rubik-Regular;font-size:14px;color:#e4e9ff;margin-top:30px;margin-bottom:40px}.categorias[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-bottom:120px;max-width:1200px}.categorias[_ngcontent-%COMP%], .recomendacoes[_ngcontent-%COMP%]{margin-top:120px}.painel[_ngcontent-%COMP%]{width:100%;max-width:1200px}.painel[_ngcontent-%COMP%]   .painel-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.painel[_ngcontent-%COMP%]   .painel-header[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{font-family:Pop-Regular;font-size:28px;color:#475677}.painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:76px}.escolha[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;max-width:1200px;margin-top:120px}.escolha[_ngcontent-%COMP%]   .imagem[_ngcontent-%COMP%]{width:600px;height:522px}.escolha[_ngcontent-%COMP%]   .informacao[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-left:60px}.escolha[_ngcontent-%COMP%]   .informacao[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-family:Pop-SemiBold;font-size:24px;color:#475677}.escolha[_ngcontent-%COMP%]   .informacao[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%]{display:flex;align-items:center;font-family:Pop-Light;font-size:50px;color:#475677}.escolha[_ngcontent-%COMP%]   .informacao[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%]   .linha[_ngcontent-%COMP%]{width:50px;height:1px;border:1px solid #475677;margin-top:5%;margin-left:5px}.escolha[_ngcontent-%COMP%]   .informacao[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%]{font-family:Rubik-Regular;font-size:13px;color:#7d8597;margin-top:20px;margin-bottom:38px;line-height:26px}.escolha[_ngcontent-%COMP%]   .informacao[_ngcontent-%COMP%]   .ponto[_ngcontent-%COMP%]{display:flex;padding:12px 0;font-family:Pop-SemiBold;font-size:15px;color:#475677}.escolha[_ngcontent-%COMP%]   .informacao[_ngcontent-%COMP%]   .ponto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:30px}.conquistas[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:102px;padding-bottom:102px;background-color:#eff7ff;width:100%;margin-top:120px;margin-bottom:120px}.conquistas[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{font-family:Pop-Bold;font-size:28px;color:#475677;margin-bottom:13px}.conquistas[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%]{font-family:Rubik-Regular;font-size:15px;color:#7d8597;text-align:center;line-height:26px}.conquistas[_ngcontent-%COMP%]   .informacao[_ngcontent-%COMP%]{display:flex;margin-top:62px}.conquistas[_ngcontent-%COMP%]   .informacao[_ngcontent-%COMP%]   .informacao-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-right:120px}.conquistas[_ngcontent-%COMP%]   .informacao[_ngcontent-%COMP%]   .informacao-item[_ngcontent-%COMP%]   .numero[_ngcontent-%COMP%]{font-family:Pop-Regular;font-size:38px}.conquistas[_ngcontent-%COMP%]   .informacao[_ngcontent-%COMP%]   .informacao-item[_ngcontent-%COMP%]   .numero-descricao[_ngcontent-%COMP%]{font-family:Rubik-Regular;font-size:15px;color:#7d8597}.conquistas[_ngcontent-%COMP%]   .informacao[_ngcontent-%COMP%]   .informacao-item[_ngcontent-%COMP%]:last-child{margin-right:0}"]}),M)}],w=((x=function n(){_classCallCheck(this,n)}).\u0275mod=r.Qb({type:x}),x.\u0275inj=r.Pb({factory:function(n){return new(n||x)},imports:[[c.f.forChild(v)],c.f]}),x),y=((O=function n(){_classCallCheck(this,n)}).\u0275mod=r.Qb({type:O}),O.\u0275inj=r.Pb({factory:function(n){return new(n||O)},imports:[[i.b,w,a.a]]}),O)}}]);