let tab = function () {
    let ourTabs = document.querySelectorAll('.our_services_tab__item'),
        tabContent = document.querySelectorAll('.our_services_tab_content'),
    tabName;
    ourTabs.forEach(item=> {
        item.addEventListener('click', selectTab)
    });
    function selectTab(){
        ourTabs.forEach(item=>{
            item.classList.remove('is_active')
        });
        this.classList.add('is_active')
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName)
    }
    function selectTabContent(tabName){
        tabContent.forEach(item=>{
            item.classList.contains(tabName)? item.classList.add('is_active'): item.classList.remove('is_active')
        })
    }
};

tab();
