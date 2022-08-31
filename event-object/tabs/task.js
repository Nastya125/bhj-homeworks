const arrTabs = Array.from(document.querySelectorAll(".tab"));
const arrTabsContent = Array.from(document.querySelectorAll(".tab__content"));



    

    function switchTabs(active){
        let activeTab = arrTabs.findIndex(tab => tab.className === "tab tab_active");
        console.log("клик");
        arrTabs[activeTab].className = "tab";
        arrTabsContent[activeTab].className = "tab__content";

        activeTab = active;
        arrTabs[activeTab].className = "tab tab_active";
        arrTabsContent[activeTab].className = "tab__content tab__content_active";
        
    }

for (let tab in arrTabs){
    arrTabs[tab].addEventListener("click", () => switchTabs(tab));

}