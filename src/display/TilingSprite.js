var PixiTilingSprite = require('../../lib/pixi/src/extras/TilingSprite'),
    utils = require('../core/utils'),
    mixin = require('./mixin');

function TilingSprite(texture, width, height){
    if(typeof texture === "string"){
        texture = utils.assetCache.getTexture(texture);
    }
    PixiTilingSprite.call(this, texture, width, height);
}

TilingSprite.prototype = Object.create(PixiTilingSprite.prototype);
TilingSprite.prototype.constructor = TilingSprite;
utils.mixin(TilingSprite, mixin);

//TODO: en webgl no funciona correctamente, actua cortando los sprites.

module.exports = TilingSprite;