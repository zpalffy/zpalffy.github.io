/*****************************************************************************************
 * flickr-photoset-jquery
 * Developed by Eric Olson, https://github.com/zpalffy
 * Useage is explained here: https://github.com/zpalffy/flickr-photoset-jquery
 * License: The MIT License
******************************************************************************************/

(function ($) {
    merge = function(template, model) {
        for (attr in model) {
            template = template.replace(new RegExp("{{" + attr + "}}", 'g'), model[attr]);
        }

        return $(template);
    },

    $.fn.flickrPhotoset = function(apiKey, id, options) {
        var opts = $.extend({
            before: '<h3><a href="{{url}}">{{title}}</a></h3>',
            template: '<a href="{{link}}" title="{{title}}"><img src="{{img}}_q.jpg" alt="{{title}}"/></a>'
        }, options);
        
        return this.each(function() {
            // api key can be found/created here: https://www.flickr.com/services/api/keys/
            if (id && apiKey) {
                var ele = $(this);

                if (opts.loading) {
                    var l =  $(opts.loading);
                    ele.data("loading", l);
                    ele.before(l);
                }

                $.ajax('https://api.flickr.com/services/rest/?jsoncallback=?', {
                    data: {
                        method: 'flickr.photosets.getPhotos',
                        api_key: apiKey,
                        photoset_id: id,
                        format: 'json'
                    },

                    success: function(set) {
                        if(!set.photoset) return;
                        var photos = $.extend(set.photoset, {
                            url: 'https://www.flickr.com/photos/' + set.photoset.owner + '/sets/' + set.photoset.id
                        });

                        if (ele.data('loading')) {
                            ele.data('loading').remove();
                        }

                        if (opts.before) {
                            ele.before(merge(opts.before, photos));
                        }

                        if (opts.template) {
                            $(photos.photo).each(function() {
                                ele.append(merge(opts.template, {
                                    // see https://www.flickr.com/services/api/misc.urls.html for info on url formats.
                                    photosetId: photos.id,
                                    link: 'https://www.flickr.com/photos/' + photos.owner + '/' + this.id,
                                    img: 'https://farm' + this.farm + '.staticflickr.com/' + this.server + '/' + this.id + '_' + this.secret,
                                    title: this.title
                                }));
                            });
                        }

                        ele.trigger('photoset', photos);
                    },

                    dataType: 'jsonp'
                });
            }   
        });
    }
} (jQuery));