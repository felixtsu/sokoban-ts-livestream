// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "SubBoxInLevel4":
            case "SubBoxInLevel1":return tiles.createTilemap(hex`0a000a0000000000000100000000000202020203020202000002020202030202020000020202020302020200000202020203020202000103030303030202020000020202030302020200000202020202020202000002020202020202020000000000000000000000`, img`
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
`, [myTiles.transparency16,myTiles.tile5,myTiles.tile10,myTiles.tile12], TileScale.Sixteen);
            case "SubBoxInLevel5":
            case "SubBoxInLevel2":return tiles.createTilemap(hex`0a000a0000000000000100000000000202020203020200000002020202030202000000020202020302020000000202020203020200000103030303030202000000020203030302020000000202020202020200000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . . 2 . 2 . . . 
. . . . 2 . 2 . . . 
. . . . 2 . 2 . . . 
. 2 2 2 2 . 2 . . . 
. . . . . . 2 . . . 
. 2 2 . . . 2 . . . 
. . 2 2 2 2 2 . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile5,myTiles.tile10,myTiles.tile12], TileScale.Sixteen);
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
            case "level2":return tiles.createTilemap(hex`0a000a0000020202020202020000000205050105050200000002050504050502000000020104030401020000000205050405050200000002050501050502000000020202020202020000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile11], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`0a000a0000000000000000000000000202020000000000000002010202020202000000020101050505020000000205040404030200000002050505050202000000020202020202000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile11], TileScale.Sixteen);
            case "level4":
            case "级别3":return tiles.createTilemap(hex`0c000a00000000000000000000000000000000000000000003030300000000000000000003020300000303030303030303060300000306040501060606060300000306060303030303060300000306060300000003060300000306060300000003020300000303030300000003030300000000000000000000000000`, img`
. . . . . . . . . . . . 
. . . . . . . . 2 2 2 . 
. . . . . . . . 2 . 2 . 
. 2 2 2 2 2 2 2 2 . 2 . 
. 2 . . . . . . . . 2 . 
. 2 . . 2 2 2 2 2 . 2 . 
. 2 . . 2 . . . 2 . 2 . 
. 2 . . 2 . . . 2 . 2 . 
. 2 2 2 2 . . . 2 2 2 . 
. . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile11], TileScale.Sixteen);
            case "level5":
            case "level5":return tiles.createTilemap(hex`0c000a00000000000000000000000000000000000000000003030300000000000000000003060300000303030303030303060300000302040501060606060300000306060303030303060300000306060300000003060300000306060300000003020300000303030300000003030300000000000000000000000000`, img`
. . . . . . . . . . . . 
. . . . . . . . 2 2 2 . 
. . . . . . . . 2 . 2 . 
. 2 2 2 2 2 2 2 2 . 2 . 
. 2 . . . . . . . . 2 . 
. 2 . . 2 2 2 2 2 . 2 . 
. 2 . . 2 . . . 2 . 2 . 
. 2 . . 2 . . . 2 . 2 . 
. 2 2 2 2 . . . 2 2 2 . 
. . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile11], TileScale.Sixteen);
            case "level6":
            case "level6":return tiles.createTilemap(hex`0c000a00000000000000000000000000000000000000000003030300000000000000000003020300000303030303030303060300000302040505010606060300000306060303030303060300000306060300000003060300000306060300000003020300000303030300000003030300000000000000000000000000`, img`
. . . . . . . . . . . . 
. . . . . . . . 2 2 2 . 
. . . . . . . . 2 . 2 . 
. 2 2 2 2 2 2 2 2 . 2 . 
. 2 . . . . . . . . 2 . 
. 2 . . 2 2 2 2 2 . 2 . 
. 2 . . 2 . . . 2 . 2 . 
. 2 . . 2 . . . 2 . 2 . 
. 2 2 2 2 . . . 2 2 2 . 
. . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile11], TileScale.Sixteen);
            case "SubBoxInLevel7":
            case "SubBoxInLevel3":return tiles.createTilemap(hex`0a000a0000000000000100000000000202020203020200000002020202030202000000020202020302020000000202020203020200000103030304030202000000020203030302020000000202020202020200000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . . 2 . 2 . . . 
. . . . 2 . 2 . . . 
. . . . 2 . 2 . . . 
. 2 2 2 2 . 2 . . . 
. . . . . . 2 . . . 
. 2 2 . . . 2 . . . 
. . 2 2 2 2 2 . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile5,myTiles.tile10,myTiles.tile12,myTiles.tile3], TileScale.Sixteen);
            case "level7":
            case "level7":return tiles.createTilemap(hex`0c000a00000000000000000000000000000000000000000003030300000000000000000003020300000303030303030303060300070602040505010606060300000306060303030303060300000306060300000003060300000306060300000003020300000303030300000003030300000000000000000000000000`, img`
. . . . . . . . . . . . 
. . . . . . . . 2 2 2 . 
. . . . . . . . 2 . 2 . 
. 2 2 2 2 2 2 2 2 . 2 . 
. . . . . . . . . . 2 . 
. 2 . . 2 2 2 2 2 . 2 . 
. 2 . . 2 . . . 2 . 2 . 
. 2 . . 2 . . . 2 . 2 . 
. 2 2 2 2 . . . 2 2 2 . 
. . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile11,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "startTile":
            case "tile7":return tile7;
            case "subBoxTile":
            case "tile3":return tile3;
            case "edgeTile":
            case "tile5":return tile5;
            case "basicBoxNormal":
            case "tile8":return tile8;
            case "basicBoxInPlace":
            case "tile9":return tile9;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile0":
            case "tile12":return tile12;
            case "commonTile":
            case "tile11":return tile11;
            case "myTile":
            case "tile10":return tile10;
            case "targetTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
