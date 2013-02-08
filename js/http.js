
Http = function()
{
    var xhr = function()
    {
        if (typeof XMLHttpRequest !== "undefined" && (window.location.protocol !== "file:" || !window.ActiveXObject))
        {
            return new XMLHttpRequest();
        }
        else
        {
            try
            {
                return new ActiveXObject ('Msxml2.XMLHTTP.6.0' );
            }
            catch (e)
            {
                //
            }

            try
            {
                return new ActiveXObject ('Msxml2.XMLHTTP.3.0' );
            }
            catch (e)
            {
                //
            }

            try
            {
                return new ActiveXObject ('Msxml2.XMLHTTP' );
            }
            catch (e)
            {
                //
            }
        }

        return false ;
    };

    this.getJSON = function(url, callback)
    {
        var request = xhr();

        request.onreadystatechange = function()
        {
            if (request.readyState == 4 && request.status == 200)
            {
                callback(eval('(' + request.responseText + ')'));
            }
        };

        request.open("GET", url);

        request.send(null);
    };
};
