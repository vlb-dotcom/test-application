let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    if(sidebar.classList.contains('close')) {
        closeBtn.classList.add('hidden')
    }
    menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
    }
}

// Log out btn function
let btn_logout = document.querySelector('#log_out')

btn_logout.addEventListener('click', () => {
    alert('log out')
})

// selection btn_dashboard
let btn_dashboard = document.querySelector('.btn_dashboard')
let btn_newConn = document.querySelector('.btn_newconn')
// let btn_integration = document.querySelector('.btn_integration')
let btn_model = document.querySelector('.btn_model')
let btn_management = document.querySelector('.btn_management')
let btn_settings = document.querySelector('.btn_settings')

// dashboards
let dashboard_div = document.querySelector('.dashboard-section')
let newConnection_div = document.querySelector('.new-collection-section')
// let integration_div = document.querySelector('.integrations-section')
let modelClass_div = document.querySelector('.model-class-section')
let management_div = document.querySelector('.management-section')
let setting_div = document.querySelector('.setting-section')

btn_dashboard.addEventListener("click", () => { // Sidebar open when you click on the search iocn
    btn_dashboard.classList.add('bg-selected')
    // alert('dashboard')
    dashboard_div.classList.add('visible')
    dashboard_div.classList.remove('hidden')

    newConnection_div.classList.add('hidden')
    newConnection_div.classList.remove('visible')
    
    // integration_div.classList.add('hidden')
    // integration_div.classList.remove('visible')

    modelClass_div.classList.add('hidden')
    modelClass_div.classList.remove('visible')

    management_div.classList.add('hidden')
    management_div.classList.remove('visible')

    setting_div.classList.add('hidden')
    setting_div.classList.remove('visible')

});

btn_newConn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
    // btn_dashboard.classList.add('bg-selected')
    // alert('dashboard')
    dashboard_div.classList.add('hidden')
    dashboard_div.classList.remove('visible')

    newConnection_div.classList.add('visible')
    newConnection_div.classList.remove('hidden')
    
    // integration_div.classList.add('hidden')
    // integration_div.classList.remove('visible')

    modelClass_div.classList.add('hidden')
    modelClass_div.classList.remove('visible')

    management_div.classList.add('hidden')
    management_div.classList.remove('visible')

    setting_div.classList.add('hidden')
    setting_div.classList.remove('visible')

});


btn_model.addEventListener("click", () => { // Sidebar open when you click on the search iocn
    // btn_dashboard.classList.add('bg-selected')
    // alert('dashboard')
    dashboard_div.classList.add('hidden')
    dashboard_div.classList.remove('visible')

    newConnection_div.classList.add('hidden')
    newConnection_div.classList.remove('visible')
    
    // integration_div.classList.add('hidden')
    // integration_div.classList.remove('visible')

    modelClass_div.classList.add('visible')
    modelClass_div.classList.remove('hidden')

    management_div.classList.add('hidden')
    management_div.classList.remove('visible')

    setting_div.classList.add('hidden')
    setting_div.classList.remove('visible')

});

btn_management.addEventListener("click", () => { // Sidebar open when you click on the search iocn
    // btn_dashboard.classList.add('bg-selected')
    // alert('dashboard')
    dashboard_div.classList.add('hidden')
    dashboard_div.classList.remove('visible')

    newConnection_div.classList.add('hidden')
    newConnection_div.classList.remove('visible')
    
    // integration_div.classList.add('hidden')
    // integration_div.classList.remove('visible')

    modelClass_div.classList.add('hidden')
    modelClass_div.classList.remove('visible')

    management_div.classList.add('visible')
    management_div.classList.remove('hidden')

    setting_div.classList.add('hidden')
    setting_div.classList.remove('visible')

});

btn_settings.addEventListener("click", () => { // Sidebar open when you click on the search iocn
    // btn_dashboard.classList.add('bg-selected')
    // alert('dashboard')
    dashboard_div.classList.add('hidden')
    dashboard_div.classList.remove('visible')

    newConnection_div.classList.add('hidden')
    newConnection_div.classList.remove('visible')
    
    // integration_div.classList.add('hidden')
    // integration_div.classList.remove('visible')

    modelClass_div.classList.add('hidden')
    modelClass_div.classList.remove('visible')

    management_div.classList.add('hidden')
    management_div.classList.remove('visible')

    setting_div.classList.add('visible')
    setting_div.classList.remove('hidden')

});

// FOR TESTING
btn_model.click()