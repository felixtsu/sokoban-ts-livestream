// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "SubBoxInLevel4":
            case "SubBoxInLevel1":return tiles.createTilemap(hex`0a000a0000000000000100000000000000000302030000000000000003020300000000000000030203000000000303030302030000000102020202020300000000030303020203000000000000030303030000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . . 2 . 2 . . . 
. . . . 2 . 2 . . . 
. . . . 2 . 2 . . . 
. 2 2 2 2 . 2 . . . 
. . . . . . 2 . . . 
. 2 2 2 . . 2 . . . 
. . . 2 2 2 2 . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile5,sprites.dungeon.floorDark2,myTiles.tile6], TileScale.Sixteen);
            case "level4":
            case "级别3":return tiles.createTilemap(hex`0c000a00000000000000000000000000000000000000000005050500000000000000000005020500000505050505050505030500000503060401030303030500000503030505050505030500000503030500000005030500000503030500000005020500000505050500000005050500000000000000000000000000`, img`
. . . . . . . . . . . . 
. . . . . . . . 2 2 2 . 
. . . . . . . . 2 . 2 . 
. 2 2 2 2 2 2 2 2 . 2 . 
. 2 . . 2 2 . . . . 2 . 
. 2 . . 2 2 2 2 2 . 2 . 
. 2 . . 2 . . . 2 . 2 . 
. 2 . . 2 . . . 2 . 2 . 
. 2 2 2 2 . . . 2 2 2 . 
. . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile1,sprites.dungeon.floorDark2,sprites.dungeon.stairLadder,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
            case "level0":
            case "级别2":return tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000002020202020000000000020304010200000000000202020202000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . 2 2 2 2 2 . . . 
. . 2 . . . 2 . . . 
. . 2 2 2 2 2 . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "level1":
            case "级别1":return tiles.createTilemap(hex`0a000a0000000002020200000000000000020102000000000002020204020202000000020104030401020000000202020402020200000000000201020000000000000002020200000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . 2 2 2 . . . . 
. . . 2 . 2 . . . . 
. 2 2 2 . 2 2 2 . . 
. 2 . . . . . 2 . . 
. 2 2 2 . 2 2 2 . . 
. . . 2 . 2 . . . . 
. . . 2 2 2 . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a000a0000030303030303030000000301010201010300000003010105010103000000030205040502030000000301010501010300000003010102010103000000030303030303030000000000000000000000000000000000000000000000000000000000000000`, img`
. 2 2 2 2 2 2 2 . . 
. 2 . . . . . 2 . . 
. 2 . . . . . 2 . . 
. 2 . . . . . 2 . . 
. 2 . . . . . 2 . . 
. 2 . . . . . 2 . . 
. 2 2 2 2 2 2 2 . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorDark2,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`0a000a0000000000000000000000000303030000000000000003010303030303000000030101020202030000000302050505040300000003020202020303000000030303030303000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. 2 2 2 . . . . . . 
. 2 . 2 2 2 2 2 . . 
. 2 . . . . . 2 . . 
. 2 . . . . . 2 . . 
. 2 . . . . 2 2 . . 
. 2 2 2 2 2 2 . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.floorDark2,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile4":
            case "tile6":return tile6;
            case "startTile":
            case "tile7":return tile7;
            case "targetTile":
            case "tile1":return tile1;
            case "inPlaceBox":
            case "tile2":return tile2;
            case "subBoxTile":
            case "tile3":return tile3;
            case "inPlaceSubBox":
            case "tile4":return tile4;
            case "edgeTile":
            case "tile5":return tile5;
            case "basicBoxNormal":
            case "tile8":return tile8;
            case "basicBoxInPlace":
            case "tile9":return tile9;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
