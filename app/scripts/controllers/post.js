/**
 * Created by macair on 2/1/15.
 */

'use strict';

app.controller('PostsCtrl', function ($scope,Post) {
    $scope.posts = Post.get();
    $scope.post = {url: 'http:///', title: ''};


    $scope.submitPost = function () {

        Post.save($scope.post, function (ref) {
            $scope.posts[ref.name] = $scope.post;
            console.log(ref.name);
            $scope.post = {url: 'http://', title: ''};
        });

        
        $scope.posts.push($scope.post);
        $scope.post = {url: 'http://', title: ''};
    };

    $scope.deletePost = function(postId) {
        //$scope.posts.splice(index,1);
        Post.delete({id: postId}, function () {
            delete $scope.posts[postId];
        });
    };



});