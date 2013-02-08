
Action = function()
{
    var self      = this,
        property  = "message",
        id        = "message",
        url       = "/descriptors/data.json",
        http      = new Http(),
        container = document.getElementById(id);

    this.begin = function()
    {
        http.getJSON(url, function(obj)
        {
            container.appendChild(document.createTextNode(eval("obj." + property)));
        });
    }
};