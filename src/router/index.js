import Vue from 'vue'
import Router from 'vue-router'

import Movie from '@/components/movie/Movie'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import MovieDetail from '@/components/movie/MovieDetail'
import MusicAlbums from '@/components/music/MusicAlbums'
import PhotoDetail from '@/components/photo/PhotoDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: Movie
    },{
      path: '/music',
      name: 'Music',
      component: Music,
      beforeEnter(to, from, next){
        from.name === null? next('/') : next()
      }
    },{
      path: '/book',
      name: 'Book',
      component: Book,
      beforeEnter(to, from, next){
        from.name === null? next('/') : next()
      }
    }, {
      path: '/photo',
      name: 'Photo',
      component: Photo,
      beforeEnter(to, from, next){
        from.name === null ? next('/') : next()
      }
    },{
      path: '/moviedetail/:movieId',
      name: 'MovieDetail',
      component: MovieDetail
      },{
      path: '/musicAlbums/:musicId',
      component: MusicAlbums
    }
    ,{
      path: '/photoDetail/:index',
      component: PhotoDetail
    }
      ]
})
