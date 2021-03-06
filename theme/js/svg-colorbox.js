// from jterrace.github.com/sphinxtr

function endsWith(str,suffix)
{
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

$(document).ready(function() {
    $('object').each(function() {
        var im = $(this);
        var imsrc = im.attr('data');
        if (endsWith(imsrc,'svg')) {
            var imalt = im.html().replace(/^\s+|\s+$/g,'');
            var img = $('<img>');
            //im.appendChild(img);
            im.removeAttr('data');
            $.each(im.prop('attributes'), function() {
                img.attr(this.name, this.value);
            });
            im.replaceWith(img);
            img.attr({'src':imsrc, 'alt':imalt });
        }
    });
    $('article img').each(function() {
        var im = $(this);
        im.wrap($('<div class="center">')).wrap($('<a>').attr({'href':im.attr('src'), 'title':im.attr('alt')}).addClass('imglink'));
    });
    $('a.imglink').colorbox({'width':'95%','height':'95%','photo':true});
});
