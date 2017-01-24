(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setIdentity track validateCode".split(" "), 0);

var BMAP = {
    options: {
        customButton: false,
        branchKey:'key_live_blf8cbCOBIE1a7eFuCgqFfhdvDpODoZa',
        branchTags: ['js-plugin'],
        buttonClassName: 'bmap-export-button',
        webAppUrl: 'https://app.buymeapie.com',
        lang: (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2) == 'ru' ? 'ru' : 'en'
    },
    defaultTitle: {
        ru: 'Добавить продукты в список',
        en: 'Add ingredients to shopping list'
    },
    sms_text: {
        ru: 'Добавьте ингредиенты в "Купи батон!"',
        en: 'Add ingredients to "Buy Me a Pie!"'
    },
    css: '\
        @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&subset=cyrillic");\
        .bmap-export-button-link,\
        .bmap-export-button-link:visited,\
        .bmap-export-button-link:active,\
        .bmap-export-button-link:focus {\
            color: #fff;\
            margin: 20px auto;\
            position: relative;\
            cursor: pointer;\
            text-align: center;\
            vertical-align: middle;\
            white-space: nowrap;\
            text-decoration: none;\
            line-height: 40px;\
            background: url(https://buymeapie.com/images/logo.png) no-repeat 10px 50% #0095ff;\
            background-size: 32px;\
            padding: 0 20px 0 60px;\
            box-shadow: none;\
            border-radius: 3px;\
        }\
        .bmap-export-button-link:hover {\
            color: #fff;\
            text-decoration: none;\
            background-color: #40b0ff;\
        }\
        .bmap-export-button-link { display: none; }\
        .bmap-export-button-link.bmap-export-button-link-shown { display: inline-block; }\
        #bmap-export-button-overlay-dialog {\
            background-color: rgba(255, 255, 255, 0.75);\
            display: none;\
            height: 100%;\
            left: 0;\
            position: fixed;\
            top: 0;\
            width: 100%;\
            z-index: 10000;\
        }\
        #bmap-export-button-overlay-dialog.bmap-export-button-dialog-shown { display: table; }\
        .bmap-export-button-dialog {\
            display: inline-block;\
            height: 468px;\
            width: 840px;\
            background-color: rgb(255, 255, 255);\
            border-radius: 5px;\
            box-sizing: border-box;\
            display: inline-block;\
            overflow: auto;\
            padding: 20px;\
            position: relative;\
            text-align: left;\
            z-index: 100000;\
            box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);\
            color: #777;\
        }\
        .bmap-export-button-dialog.small {\
            font-family: "Open Sans",Helvetica,serif;\
            width: 440px;\
            font-weight: 300;\
            color: #000;\
            line-height: 1.4em;\
            font-size:16px;\
        }\
        .bmap-export-button-dialog .bmap-export-button-content-done { text-align: center; }\
        .bmap-export-button-dialog .bmap-export-button-content-done div:nth-child(2) { font-weight: 600; }\
        .bmap-export-button-dialog .bmap-export-button-content-done div:nth-child(4) { font-size: 20px; }\
        .bmap-export-button-dialog .bmap-export-button-content-done div:nth-child(5) { font-size: 16px; color: #888; margin: 20px 0px 40px; }\
        .bmap-export-button-dialog .bmap-export-button-content-done img { margin: 30px 0 20px 0 }\
        .bmap-export-button-dialog .bmap-export-button-content-done a { display: inline-block; padding: 10px 30px; background: #0299cc; border-radius: 4px; color: #fff; text-decoration: none; font-weight: 400; }\
        .bmap-export-button-dialog-wrapper  {\
            display: table-cell;\
            text-align: center !important;\
            vertical-align: middle !important;\
        }\
        .bmap-export-button-dialog .bmap-export-button-iframe {\
            border: medium none;\
            box-sizing: border-box;\
            height: 100%;\
            left: 0;\
            margin: 0;\
            padding: 0 20px;\
            position: absolute;\
            top: 0;\
            width: 100%;\
            max-width: inherit !important;\
        }\
        .bmap-export-button-dialog #bmap-export-button-close {\
            cursor: pointer;\
            position: absolute;\
            right: 10px;\
            top: 10px;\
            z-index: 1000;\
            border-radius: 4px;\
            cursor: pointer;\
            height: 40px;\
            width: 40px;\
            color: #555;\
            font-size: 30px;\
            font-weight: 300;\
            line-height: 40px;\
            text-align: center;\
        }\
        .bmap-export-button-dialog #bmap-export-button-close:hover { background-color: #eee; }\
    ',
    mobile: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4)),
    extend: function(target, source, overwrite) {
      for (var key in source) {
        if (overwrite || typeof target[key] === 'undefined') {
          target[key] = source[key];
        }
      }
      return target;
    },
    domReady: function() {
        return 'readyState' in document ? /loaded|complete/.test(document.readyState) : !!document.body;
    },
    onDomReady: function(self, func, count) {
        if (self.domReady()) {
            func.apply();
        } else {
            count = count || 0;
            if (count < 1000) setTimeout(function() {
                self.onDomReady(self, func, count + 1)
            }, 10);
        }
    },
    init: function(options){
        var self = this;
        self.extend(self.options, options, true);
        branch.init(self.options.branchKey);
        self.onDomReady(self, function() {
            var node = document.createElement("style");
            var textnode = document.createTextNode(self.css);
            node.appendChild(textnode);
            document.getElementsByTagName('HEAD')[0].appendChild(node);

            if (!self.mobile) {
                self.postMessage({'action':'checkAuth'});
            } else {
                self.drawButtons();
            }
        });
    },
    drawWindow: function(){
        var overlayDialog = document.createElement("div");
        overlayDialog.setAttribute('id','bmap-export-button-overlay-dialog');
        overlayDialog.innerHTML = BMAP.desktopLogged
            ? '<div class="bmap-export-button-dialog-wrapper"><div class="bmap-export-button-dialog small"><div id="bmap-export-button-close">&times;</div><div class="bmap-export-button-content-done">'
            + (BMAP.options.lang == 'ru' ? '<div>Список покупок</div><div>"КУПИ БАТОН!"</div><img src="'+BMAP.options.webAppUrl+'/images/logo_150.png"><div>Импорт ингредиентов</div><div>Мы добавили ингредиенты в ваш аккаунт<br>на buymeapie.com</div><a href="'+BMAP.options.webAppUrl+'" target="_blank">Перейти к списку покупок</a>'
                : '<div>Shopping list</div><div>"BUY ME A PIE!"</div><img src="'+BMAP.options.webAppUrl+'/images/logo_150.png"><div>Ingredients import</div><div>We added the ingredients to your account<br>at buymeapie.com</div><a href="'+BMAP.options.webAppUrl+'" target="_blank">Go to the shopping list</a>'
            ) + '</div></div></div>'
            : '<div class="bmap-export-button-dialog-wrapper"><div class="bmap-export-button-dialog"><div id="bmap-export-button-close">&times;</div><iframe src="" id="bmap-export-button-iframe" class="bmap-export-button-iframe"></iframe></div></div>';
        document.getElementsByTagName('BODY')[0].appendChild(overlayDialog);
        overlayDialog.addEventListener('click',function(){overlayDialog.classList.remove('bmap-export-button-dialog-shown')});
        document.getElementById('bmap-export-button-close').addEventListener('click',function(event){
            event.preventDefault();
            overlayDialog.classList.remove('bmap-export-button-dialog-shown');
        });
    },
    drawButtons: function(){
        var buttonsCollection = document.getElementsByClassName(BMAP.options.buttonClassName);
        for (var i = buttonsCollection.length - 1; i >= 0; i--) {
            BMAP.makeButton(buttonsCollection[i]);
        }
    },
    makeButton: function(buttonContainer){
        var buttonTitle = buttonContainer.getAttribute('data-button-title')||this.defaultTitle[this.options.lang];
        var recipe_id = buttonContainer.getAttribute('data-recipe-id');
        if (!BMAP.options.customButton) buttonContainer.innerHTML = '<a href="javascript:void(0);" class="bmap-export-button-link" target="_blank">'+buttonTitle+'</a>';
        this.makeButtonLink(buttonContainer, recipe_id)
    },
    makeButtonLink: function(button, recipe_id){
        var recipe;
        if (recipe_id) {
            recipe = document.getElementById(recipe_id);
        } else {
            recipe = document.querySelector('[itemtype="http://schema.org/Recipe"]');
        }
        if (!recipe) return;
        var items = [];
        var name, amount, item;
        var recipe_name = recipe.querySelector('[itemprop=name]').innerText;
        var schema_ingredient_itemprop = recipe.querySelector('[itemprop=recipeIngredient]') ? 'recipeIngredient' : 'ingredients';
        var itemCollection = recipe.querySelectorAll('[itemprop='+schema_ingredient_itemprop+']');
        var units = {
            ru: '(?:ст|ч\.?\s?л)|гр|кг|мл|т|уп|шт|л|(?:кило)?грамм(?:а|ов)?|литр(?:а|ов)?|штук(?:и|а)?|бан(?:ка|ок|ки)|упаков(?:ка|ок|ки)|стакана?',
            en: 'ml|c|pt|qt|gal|doz|pkg|lb|oz|tsp|tbsp|tbs|t|g|mg|kg|sm|med|lg|sq|(?:milli)?liters?|(?:kilo)?grams?|cups?|pints?|quarts?|gallons?|dozens?|packages?|ounces?|pounds?|teaspoons?|tablespoons?'
        }
        var ingredientRegExp = {
            ru: new RegExp("(.+?)\\s*([\\d¼½][-\\d/\\s,\\.¼½]*(?:" + units.ru + "|))?[\\s\\.,;]*$","i"),
            en: new RegExp("([-\\d/\\s,\\.¼½]*(?:" + units.en + "|))[\\s\\.,;]*(.+)", "i")
        }

        for (var i = itemCollection.length - 1; i >= 0; i--) {
            name = itemCollection[i].querySelector('[itemprop=name],.item_name');
            amount = itemCollection[i].querySelector('[itemprop=amount],.item_count');
            if ( name && amount ) {
                item = { name: name.innerText, amount: amount.innerText || '', group: 0 }
            } else {
                var itemMatch = itemCollection[i].innerText.match(ingredientRegExp.ru);
                if (itemMatch[2]) {
                    item = { name: itemMatch[1].trim(), amount: (itemMatch[2]).trim(), group: 0 };
                } else {
                    itemMatch = itemCollection[i].innerText.match(ingredientRegExp.en);
                    item = { name: itemMatch[2].trim(), amount: (itemMatch[1]||'').trim(), group: 0 }
                }
            }
            items.push(item);
        }

        var export_data = {};
        export_data['lists'] = [{type:"recipe",sourceUrl:document.location.href,"name":recipe_name,"active":true,"items":items}];
        export_data['$desktop_deepview'] = 'import_ingredients_' + BMAP.options.lang;
        export_data['$custom_sms_text'] =  BMAP.sms_text[BMAP.options.lang] + ' {{ link }}';

        if (BMAP.desktopLogged) {
            BMAP.setupDesktopButton(button, export_data['lists']);
        } else {
            branch.link({
                campaign: 'Partners',
                channel: 'bmap-js-plugin',
                tags: ['import', document.location.host].concat(BMAP.options.branchTags),
                feature: 'import',
                stage: '',
                data: export_data
            }, function(err, link) {
                BMAP.setupButtonLink(button, link);
            })
        }
    },
    setupButtonLink: function(button, link) {
        var overlayDialog = document.getElementById('bmap-export-button-overlay-dialog');
        var a = BMAP.options.customButton ? button : button.childNodes[0];
        a.addEventListener('click',function(event){
            event.preventDefault();
            if (BMAP.mobile) {
                document.location.href = link;
            } else {
                var iframe = document.getElementById('bmap-export-button-iframe');
                if (iframe.getAttribute('src') != link) {
                    document.getElementById('bmap-export-button-iframe').setAttribute('src',link);
                }
                overlayDialog.classList.add('bmap-export-button-dialog-shown');
            }
        });
        a.classList.add('bmap-export-button-link-shown');
    },
    setupDesktopButton: function(button, recipe){
        var a = BMAP.options.customButton ? button : button.childNodes[0];
        a.addEventListener('click',function(event){
            event.preventDefault();
            if (a.getAttribute('done')){
                BMAP.showExportDone();
            } else {
                BMAP.postMessage({'action':'export', 'recipe': recipe[0]});
                a.setAttribute('done', true);
            }
        });
    },
    postMessage: function(data){
        BMAP.iframe = BMAP.exportIframe(function(){
            BMAP.iframe.contentWindow.postMessage(JSON.stringify(data), BMAP.options.webAppUrl);
        });
    },
    callbackMessage: function(event){
        var data = JSON.parse(event.data);
        if (data.action == 'checkAuth') {
            BMAP.desktopLogged = data.logged;
            BMAP.drawWindow();
            BMAP.drawButtons();
        }
        if (data.done) {
            BMAP.showExportDone();
        }
    },
    showExportDone: function(){
        var overlayDialog = document.getElementById('bmap-export-button-overlay-dialog');
        overlayDialog.classList.add('bmap-export-button-dialog-shown');
    },
    exportIframe: function(callback){
        var iframe = document.getElementById('bmap-export-button-iframe-message');
        if (!iframe) {
            var node = document.createElement("iframe");
            node.setAttribute('id','bmap-export-button-iframe-message');
            document.getElementsByTagName('HEAD')[0].appendChild(node);
            iframe = document.getElementById('bmap-export-button-iframe-message');
            iframe.onload = function(){
                if (window.addEventListener) {
                  window.addEventListener("message", BMAP.callbackMessage);
                } else {//IE8
                  window.attachEvent("onmessage", BMAP.callbackMessage);
                }
                callback();
            }
           iframe.setAttribute('src',BMAP.options.webAppUrl+'/recipe_import.html');
        } else {
            callback();
        }
        return iframe;
    }
};

window.bmapAsyncInit && setTimeout(bmapAsyncInit, 0);
