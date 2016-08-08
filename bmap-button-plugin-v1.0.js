(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setIdentity track validateCode".split(" "), 0);

var BMAP = {
    options: {
        branchKey:'key_live_blf8cbCOBIE1a7eFuCgqFfhdvDpODoZa',
        buttonClassName: 'bmap-export-button',
        lang: (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2) == 'ru' ? 'ru' : 'en',
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
        .bmap-export-button-link,\
        .bmap-export-button-link:visited,\
        .bmap-export-button-link:active,\
        .bmap-export-button-link:focus {\
            color: #fff !important;\
            margin: 20px auto;\
            position: relative;\
            cursor: pointer;\
            text-align: center;\
            vertical-align: middle;\
            display: inline-block;\
            text-decoration: none !important;\
            line-height: 40px;\
            background: url(https://buymeapie.com/images/logo.png) no-repeat 10px 50% #0095ff;\
            background-size: 32px;\
            padding: 0 20px 0 60px;\
            box-shadow: none;\
            border-radius: 3px;\
        }\
        .bmap-export-button-link:hover {\
            color: #fff !important;\
            text-decoration: none;\
            background-color: #40b0ff;\
        }\
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
        #bmap-export-button-overlay-dialog.dialog-shown { display: table; }\
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
        }\
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
            background-position: center center;\
            background-repeat: no-repeat;\
            border-radius: 10px;\
            cursor: pointer;\
            height: 40px;\
            width: 40px;\
            color: #555;\
            font-size: 20px;\
            line-height: 40px;\
            text-align: center;\
        }\
        .bmap-export-button-dialog #bmap-export-button-close:hover {\
            background-color: #eee;\
        }\
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
        this.extend(this.options, options, true);
        branch.init(this.options.branchKey);
        var self = this;
        this.onDomReady(self, function() {
            var node = document.createElement("style");
            var textnode = document.createTextNode(self.css);
            node.appendChild(textnode);
            document.getElementsByTagName('HEAD')[0].appendChild(node);

            if (!self.mobile) {
                var overlayDialog = document.createElement("div");
                overlayDialog.setAttribute('id','bmap-export-button-overlay-dialog');
                overlayDialog.innerHTML='<div class="bmap-export-button-dialog-wrapper"><div class="bmap-export-button-dialog"><div id="bmap-export-button-close">✕</div><iframe src="" id="bmap-export-button-iframe" class="bmap-export-button-iframe"></iframe></div></div>';
                document.getElementsByTagName('BODY')[0].appendChild(overlayDialog);
                overlayDialog.addEventListener('click',function(){overlayDialog.classList.remove('dialog-shown')});
                document.getElementById('bmap-export-button-close').addEventListener('click',function(event){
                    event.preventDefault();
                    overlayDialog.classList.remove('dialog-shown');
                });
            }
            self.drawButtons();
        });
    },
    drawButtons: function(){
        var buttonsCollection = document.getElementsByClassName(this.options.buttonClassName);
        for (var i = buttonsCollection.length - 1; i >= 0; i--) {
            this.makeButton(buttonsCollection[i]);
        }
    },
    makeButton: function(buttonContainer){
        var buttonTitle = buttonContainer.getAttribute('button-title')||this.defaultTitle[this.options.lang];
        var recipe_id = buttonContainer.getAttribute('recipe-id');
        buttonContainer.innerHTML = '<a href="javascript:void(0);" class="bmap-export-button-link" target="_blank">'+buttonTitle+'</a>';
        this.makeRecipeList(buttonContainer, recipe_id)
    },
    makeRecipeList: function(button, recipe_id){
        var recipe;
        if (recipe_id) {
            recipe = document.getElementById(recipe_id);
        } else {
            recipe = document.querySelector('[itemtype="http://schema.org/Recipe"]');
        }
        if (!recipe) return;
        var items = [];
        var title, amount, item;
        var name = recipe.querySelector('[itemprop=name]').innerText;
        var itemCollection = recipe.querySelectorAll('[itemprop=ingredients]');
        for (var i = itemCollection.length - 1; i >= 0; i--) {
            item = itemCollection[i].innerText.split('\n');
            title = item[0];
            amount = item[1]||'';
            items.push({"name":title,"amount":amount,"group":0});
        }

        var export_data = {};
        export_data['lists'] = [{"name":name,"active":true,"items":items}];
        export_data['$desktop_deepview'] = 'import_ingredients_' + this.options.lang;
        export_data['$custom_sms_text'] =  this.sms_text[this.options.lang] + ' {{ link }}';

        var a = button.childNodes[0];
        if (!this.mobile) {
            var overlayDialog = document.getElementById('bmap-export-button-overlay-dialog');
            a.addEventListener('click',function(event){
                event.preventDefault();
                var link = a.getAttribute('href');
                document.getElementById('bmap-export-button-iframe').setAttribute('src',link);
                overlayDialog.classList.add('dialog-shown');
            });
        }

        branch.link({
            campaign: 'Partners',
            channel: 'bmap-js-plugin',
            tags: ['import', document.location.host],
            feature: 'import',
            stage: '',
            data: export_data
        }, function(err, link) {
            a.setAttribute('href',link);
        })
    }
};

window.bmapAsyncInit && setTimeout(bmapAsyncInit, 0);