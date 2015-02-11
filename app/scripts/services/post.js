/**
 * Created by macair on 2/1/15.
 */

'use strict';

app.factory('Post', function ($resource) {
    return $resource('https://blinding-torch-4455.firebaseio.com/posts/:id.json');



});
