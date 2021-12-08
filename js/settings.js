(function(){
    var profile_pic = document.querySelector('nav .profile-image-nav');
    var setting_menu = document.querySelector('.settings-menu');

    setting_menu.removeAttribute('style');
    
    var _this = this;
    var setting_boolean = false;

    profile_pic.addEventListener('click', settingSwitcher);
    
    function settingSwitcher(){
        if(!setting_boolean){
            openMenu();
        }
        else{
            closeMenu();
        }
    }
    
    function openMenu(){
        setting_boolean = true;

        setting_menu.style["opacity"] = "1";
        setting_menu.style["max-height"] = "500px";
        
        // setting_menu.style.display = 'block';
    }

    function closeMenu(){
        setting_boolean = false;

        setting_menu.style["opacity"] = "0";
        setting_menu.style["max-height"] = "0";
        // setting_menu.style.display = 'none';
    }

    console.log('hehe boi');
})();