window.onload = setupRefresh;
    function setupRefresh()
    {
        setInterval("refreshBlock();",5000);
    }
    
    function refreshBlock()
    {
       //document.getElementById('logs').innerHTML = Date();
       parent.logs.location.reload();
    }