import React, { Component } from 'react';

import icon_facebook from '../images/icon-facebook.png';
import icon_twitter from '../images/icon-google.png';
import icon_rss from '../images/icon-rss.png';
import icon_instagram from '../images/icon-instagram.png';
import icon_google from '../images/icon-google.png';

const ROOT_URL = "www.teste.com.br";
const SHARE_FACEBOOK_URL=`https://www.facebook.com/sharer/sharer.php?u=${ROOT_URL}`;
const SHARE_TWITTER_URL=`https://twitter.com/home?status=${ROOT_URL}`;
const SHARE_RSS_URL=`https://plus.google.com/share?url=${ROOT_URL}`;
const SHARE_INSTAGRAM_URL=`https://plus.google.com/share?url=${ROOT_URL}`;
const SHARE_GOOGLE_URL=`https://plus.google.com/share?url=${ROOT_URL}`;

export default class ShareRegion extends Component{
  render(){
    return (
      <section id="share-region">
        <div className="share-region bg-success container-fluid text-center text-white">
          <div className="padding-50 font-weight-lighter">
            <span className="display-5">Compartilhe com seus amigos!</span>
            <p><small>Traga seus amigos para ver os resultados dos jogos!</small></p>
          </div>
          <main className="flex-center">
            <div className="">
              <a href={SHARE_FACEBOOK_URL} target="_blank"><img src={icon_facebook} href=""/></a>
            </div>
            <div className="">
              <a href={SHARE_TWITTER_URL} target="_blank"><img src={icon_twitter} href=""/></a>
            </div>
            <div className="">
              <a href={SHARE_RSS_URL} target="_blank"> <img src={icon_rss} href=""/></a>
            </div>
            <div className="">
              <a href={SHARE_INSTAGRAM_URL} target="_blank"><img src={icon_instagram} href=""/></a>
            </div>
            <div className="">
              <a href={SHARE_GOOGLE_URL} target="_blank"><img src={icon_google}/></a>
            </div>
          </main>
          <a className="align-bottom text-white" href="https://www.bolaoshow.com.br/users/sign_in"><small>BOLAOCOPA 2018</small></a>
        </div>
      </section>
    );
  }
}