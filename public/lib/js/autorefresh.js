window.onload = setupRefresh;
    function setupRefresh()
    {
        setInterval("refreshBlock();",5000);
        console.log("reload")
    }
    
    function refreshBlock()
    {
       document.getElementById('main').innerHTML = Date();
    }